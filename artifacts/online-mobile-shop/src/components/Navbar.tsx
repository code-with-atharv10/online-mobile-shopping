import { Link, useLocation } from "wouter";
import { ShoppingCart, Smartphone, BookOpen } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [location] = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <Smartphone size={20} className="text-white" />
          </div>
          <div>
            <span className="font-bold text-gray-900 text-base leading-none block">MobiMart</span>
            <span className="text-xs text-gray-400">Online Mobile Shopping</span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/" className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${location === "/" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}>
            Products
          </Link>
          <Link href="/about" className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${location === "/about" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}>
            <BookOpen size={14} />
            Project Report
          </Link>
          <Link href="/cart" className="relative ml-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
            <ShoppingCart size={16} />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
