import { useState } from "react";
import { Link } from "wouter";
import { products, categories, brands, Product } from "../data/products";
import { ShoppingCart, Search, Star, Tag, Zap, Shield, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-gray-50 h-52">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -{discount}%
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-sm bg-black/60 px-3 py-1 rounded-full">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <div className="text-xs text-blue-600 font-medium mb-1">{product.brand}</div>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight hover:text-blue-600 transition-colors line-clamp-2 mb-2">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
        >
          <ShoppingCart size={15} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = products
    .filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const matchBrand = selectedBrand === "All" || p.brand === selectedBrand;
      return matchSearch && matchCat && matchBrand;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-4">
            <Zap size={14} className="text-yellow-300" />
            Best Deals on Smartphones
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Your Dream Phone,<br />Delivered to Your Door
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Browse top brands like Samsung, Apple, OnePlus and more. Genuine products, fast delivery, easy returns.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for phones, brands..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 text-blue-100"><Truck size={16} /> Free Delivery above ₹499</div>
            <div className="flex items-center gap-2 text-blue-100"><Shield size={16} /> 1 Year Warranty</div>
            <div className="flex items-center gap-2 text-blue-100"><Tag size={16} /> EMI Available</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 ml-auto">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {brands.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {filtered.length} {filtered.length === 1 ? "phone" : "phones"} found
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search size={48} className="mx-auto mb-3 opacity-40" />
            <p className="text-lg font-medium">No phones found</p>
            <p className="text-sm mt-1">Try different search terms or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
