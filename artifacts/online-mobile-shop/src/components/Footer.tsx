import { Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone size={16} className="text-white" />
              </div>
              <span className="font-bold text-white">MobiMart</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted destination for premium smartphones. Genuine products, best prices, fast delivery.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Project Report</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Project Info</h4>
            <ul className="space-y-1 text-sm">
              <li>Submitted by: Vaishnavi Mandave</li>
              <li>Guide: Miss. Phadatare S. S.</li>
              <li>Year: 2025–2026</li>
              <li>Dept: Computer Science</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>Yashavantrao Chavan Institute of Science, Satara — Department of Computer Science</p>
          <p className="mt-1">Diploma Project: Online Mobile Shopping &copy; 2025–2026</p>
        </div>
      </div>
    </footer>
  );
}
