import { useState } from "react";
import { Link } from "wouter";
import { useCart } from "../context/CartContext";
import { CheckCircle, ArrowLeft, CreditCard, Smartphone, Building } from "lucide-react";

type Step = "details" | "payment" | "confirmation";

export default function Checkout() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const [step, setStep] = useState<Step>("details");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "",
  });

  const shipping = totalAmount > 49999 ? 0 : 99;
  const total = totalAmount + shipping;

  const handleOrder = () => {
    setStep("confirmation");
    clearCart();
  };

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 max-w-md w-full text-center">
          <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h2>
          <p className="text-gray-500 mb-2">Thank you for your purchase. Your order has been successfully placed.</p>
          <p className="text-sm text-gray-400 mb-6">Order ID: #OMS{Math.floor(Math.random() * 100000)}</p>
          <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-xl mb-6">
            Expected Delivery: <strong>3-5 business days</strong>
          </p>
          <Link href="/" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No items in cart</p>
          <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/cart" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm mb-6 transition-colors">
          <ArrowLeft size={16} />
          Back to Cart
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

        <div className="flex gap-2 mb-8">
          {(["details", "payment"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === s || (s === "details" && step === "payment") ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                {i + 1}
              </div>
              <span className={`text-sm capitalize font-medium ${step === s ? "text-blue-600" : "text-gray-400"}`}>{s}</span>
              {i === 0 && <div className="w-8 h-px bg-gray-200" />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {step === "details" && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-gray-900 mb-4">Delivery Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", key: "name", placeholder: "Vaishnavi Mandave" },
                    { label: "Email", key: "email", placeholder: "vaishnavi@example.com" },
                    { label: "Phone", key: "phone", placeholder: "+91 9876543210" },
                    { label: "City", key: "city", placeholder: "Satara" },
                    { label: "State", key: "state", placeholder: "Maharashtra" },
                    { label: "PIN Code", key: "pincode", placeholder: "415001" },
                  ].map(({ label, key, placeholder }) => (
                    <div key={key}>
                      <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
                      <input
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700 block mb-1">Full Address</label>
                    <textarea
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="Flat/House No, Street, Area"
                      rows={2}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setStep("payment")}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === "payment" && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-gray-900 mb-4">Payment Method</h2>
                <div className="space-y-3 mb-6">
                  {[
                    { id: "card", label: "Credit / Debit Card", icon: <CreditCard size={18} /> },
                    { id: "upi", label: "UPI Payment", icon: <Smartphone size={18} /> },
                    { id: "netbanking", label: "Net Banking", icon: <Building size={18} /> },
                  ].map(({ id, label, icon }) => (
                    <label key={id} className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === id ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value={id}
                        checked={paymentMethod === id}
                        onChange={() => setPaymentMethod(id)}
                        className="accent-blue-600"
                      />
                      <span className="text-blue-500">{icon}</span>
                      <span className="font-medium text-sm text-gray-800">{label}</span>
                    </label>
                  ))}
                </div>
                {paymentMethod === "card" && (
                  <div className="space-y-3 mb-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Card Number</label>
                      <input placeholder="1234 5678 9012 3456" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Expiry Date</label>
                        <input placeholder="MM/YY" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">CVV</label>
                        <input placeholder="123" type="password" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                      </div>
                    </div>
                  </div>
                )}
                {paymentMethod === "upi" && (
                  <div className="mb-6">
                    <label className="text-sm font-medium text-gray-700 block mb-1">UPI ID</label>
                    <input placeholder="yourname@upi" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  </div>
                )}
                <button
                  onClick={handleOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Pay ₹{total.toLocaleString()} & Place Order
                </button>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h2 className="font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      <p className="text-xs font-bold text-gray-800">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-100 pt-2">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
