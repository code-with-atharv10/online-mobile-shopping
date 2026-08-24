import { useParams, Link } from "wouter";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Star, ArrowLeft, CheckCircle, XCircle, Package, RotateCcw } from "lucide-react";
import { useState } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={16} className={s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Product not found</p>
          <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm mb-6 transition-colors">
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gray-50 flex items-center justify-center p-8 min-h-80">
              <img src={product.image} alt={product.name} className="max-h-80 object-contain rounded-xl" />
            </div>
            <div className="p-8">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">{product.category}</div>
              <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>

              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-500">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                {discount > 0 && (
                  <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-0.5 rounded-lg">{discount}% off</span>
                )}
              </div>
              <p className="text-gray-500 text-xs mb-6">Inclusive of all taxes</p>

              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                    <CheckCircle size={16} /> In Stock
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium">
                    <XCircle size={16} /> Out of Stock
                  </div>
                )}
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <ShoppingCart size={18} />
                  {added ? "Added!" : "Add to Cart"}
                </button>
                <Link href="/cart" className="flex-1 flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors text-center">
                  Buy Now
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                  <Package size={16} className="text-blue-500" />
                  Free Delivery
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                  <RotateCcw size={16} className="text-blue-500" />
                  7-Day Returns
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-6 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Specifications</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2.5 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-500 capitalize">{key}</span>
                <span className="text-sm font-medium text-gray-800 text-right max-w-xs">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Related Products</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`}>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow flex gap-3">
                    <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-xl flex-shrink-0" />
                    <div>
                      <p className="text-xs text-blue-600 font-medium">{p.brand}</p>
                      <p className="text-sm font-semibold text-gray-800 line-clamp-2">{p.name}</p>
                      <p className="text-sm font-bold text-gray-900 mt-1">₹{p.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
