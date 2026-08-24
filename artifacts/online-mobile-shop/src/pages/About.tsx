import { BookOpen, Target, Cpu, Wrench, Award, Globe } from "lucide-react";

const reportSections = [
  {
    id: 1,
    icon: <BookOpen size={22} className="text-blue-600" />,
    title: "Introduction",
    content: `This project, "Online Mobile Shopping," is a web-based e-commerce application developed to facilitate the buying and selling of smartphones over the internet. The project demonstrates the use of modern web technologies — HTML, CSS, and JavaScript (React) — to build a fully functional, user-friendly shopping platform.

The system allows users to browse a wide range of mobile phones, filter by category and brand, view detailed product specifications, add items to a cart, and complete a simulated purchase with a checkout flow.`,
  },
  {
    id: 2,
    icon: <Target size={22} className="text-blue-600" />,
    title: "Objectives",
    content: "",
    list: [
      "To understand the basic concept of e-commerce and online retail systems.",
      "To design and implement a dynamic, responsive mobile shopping website.",
      "To apply front-end development skills using HTML, CSS, and JavaScript (React).",
      "To demonstrate product listing, filtering, cart management, and checkout flows.",
      "To analyze performance, usability, and user experience of the application.",
      "To gain hands-on experience in real-world web application development.",
    ],
  },
  {
    id: 3,
    icon: <Wrench size={22} className="text-blue-600" />,
    title: "Methodology",
    content: "",
    steps: [
      { step: "1. Requirement Analysis", desc: "Identified the need for an online platform to browse and purchase mobile phones. Studied similar e-commerce platforms to understand features and user expectations." },
      { step: "2. Design", desc: "Designed the UI/UX layout with a focus on simplicity and responsiveness. Created wireframes for Home, Product Detail, Cart, Checkout, and About pages." },
      { step: "3. Implementation", desc: "Built the front-end using React (JSX), Tailwind CSS for styling, and Wouter for client-side routing. Used component-based architecture for reusability." },
      { step: "4. Testing", desc: "Tested all major functionalities: product search, filter, cart add/remove, quantity update, and checkout flow. Verified responsiveness across device sizes." },
      { step: "5. Result Analysis", desc: "Evaluated the output against the objectives. The app successfully simulates an online mobile shopping experience with smooth user interactions." },
    ],
  },
  {
    id: 4,
    icon: <Cpu size={22} className="text-blue-600" />,
    title: "Technologies Used",
    content: "",
    tech: [
      { name: "React (JSX)", purpose: "Component-based UI framework" },
      { name: "TypeScript", purpose: "Type-safe JavaScript superset" },
      { name: "Tailwind CSS", purpose: "Utility-first CSS framework" },
      { name: "Wouter", purpose: "Lightweight client-side routing" },
      { name: "Vite", purpose: "Fast development build tool" },
      { name: "Lucide React", purpose: "Icon library" },
    ],
  },
  {
    id: 5,
    icon: <Award size={22} className="text-blue-600" />,
    title: "Advantages",
    content: "",
    list: [
      "Easy to use — intuitive UI requires no prior training.",
      "Cost-effective — eliminates overhead of physical retail store.",
      "24/7 availability — users can shop anytime, anywhere.",
      "Wide product range — easily scalable to add more products.",
      "Efficient filtering — find desired phones quickly by brand/category.",
      "Responsive design — works seamlessly on mobile, tablet, and desktop.",
    ],
  },
  {
    id: 6,
    icon: <Globe size={22} className="text-blue-600" />,
    title: "Disadvantages",
    content: "",
    list: [
      "Requires stable internet connection to function.",
      "No physical inspection of the product before purchase.",
      "Depends on third-party payment gateways for transactions.",
      "Security risks such as phishing and data breaches if not secured.",
      "Delivery time — unlike offline stores, users must wait for shipping.",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">Diploma Project Report</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Mobile Shopping</h1>
            <p className="text-blue-200 text-sm mt-2">A Project Report submitted to Karmaveer Bhaurao Patil University, Satara</p>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-sm text-center">
            <div>
              <p className="text-blue-200">Submitted By</p>
              <p className="font-semibold mt-1">Miss. Mandave Vaishnavi Chandrakant</p>
            </div>
            <div>
              <p className="text-blue-200">Guided By</p>
              <p className="font-semibold mt-1">Miss. Phadatare S. S.</p>
            </div>
            <div>
              <p className="text-blue-200">Academic Year</p>
              <p className="font-semibold mt-1">2025 – 2026</p>
            </div>
          </div>

          <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-sm text-center">
            <p className="font-semibold text-white">Rayat Shikshan Sanstha's</p>
            <p className="text-blue-200">Yashavantrao Chavan Institute of Science, Satara</p>
            <p className="text-blue-300 text-xs mt-1">Department of Computer Science</p>
            <p className="text-blue-300 italic text-xs mt-1">"Education through self-help is our motto — Karmaveer"</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {reportSections.map((section) => (
          <div key={section.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                <span className="text-blue-600 mr-2">{section.id}.</span>
                {section.title}
              </h2>
            </div>

            {section.content && (
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            )}

            {section.list && (
              <ul className="space-y-2 mt-1">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.steps && (
              <div className="space-y-3 mt-1">
                {section.steps.map((s, i) => (
                  <div key={i} className="border-l-2 border-blue-200 pl-4 py-1">
                    <p className="text-sm font-semibold text-gray-800">{s.step}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {section.tech && (
              <div className="grid sm:grid-cols-2 gap-3 mt-1">
                {section.tech.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Globe size={22} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900"><span className="text-blue-600 mr-2">7.</span>Applications</h2>
          </div>
          <ul className="space-y-2">
            {["Used in retail and commercial e-commerce industries.", "Educational purpose — demonstrates front-end web development.", "Used in automation of product browsing and ordering workflows.", "Can be extended with backend for real-world deployment.", "Prototype for startup mobile retail business."].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3"><span className="text-blue-600 mr-2">8.</span>Result</h2>
          <p className="text-sm text-gray-600 leading-relaxed">The project successfully implements a fully functional online mobile shopping website. Users can browse 8+ smartphone products across various brands and categories, use search and filter features, view detailed product specifications, manage a shopping cart with quantity controls, and proceed through a multi-step checkout with delivery and payment forms. The application is responsive and works across all device sizes. The UI/UX is clean and intuitive, closely resembling real-world shopping platforms like Flipkart or Amazon.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3"><span className="text-blue-600 mr-2">9.</span>Conclusion</h2>
          <p className="text-sm text-gray-600 leading-relaxed">This diploma project successfully demonstrates the development of a modern e-commerce application focused on mobile phone retail. Through this project, practical skills in React, TypeScript, Tailwind CSS, and component-based web development were gained. The project covers the complete software development lifecycle — from requirement analysis to design, implementation, and testing. It provides a strong foundation for building full-stack web applications in the future and illustrates how online shopping platforms can be built efficiently using modern JavaScript frameworks.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3"><span className="text-blue-600 mr-2">10.</span>Future Scope</h2>
          <ul className="space-y-2">
            {[
              "Integration with a real backend (Node.js/Express or Django) and PostgreSQL database.",
              "User authentication with login, registration, and profile management.",
              "Live payment gateway integration (Razorpay/Stripe).",
              "Admin panel for managing products, orders, and customers.",
              "Mobile application using React Native for Android and iOS.",
              "AI-powered product recommendations based on browsing history.",
              "Real-time order tracking and notifications.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3"><span className="text-blue-600 mr-2">11.</span>References</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-semibold text-gray-700">Books:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>React: Up & Running — Stoyan Stefanov, O'Reilly Media</li>
              <li>HTML & CSS: Design and Build Websites — Jon Duckett</li>
              <li>JavaScript: The Good Parts — Douglas Crockford</li>
            </ul>
            <p className="font-semibold text-gray-700 mt-3">Websites:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>https://react.dev — Official React Documentation</li>
              <li>https://tailwindcss.com — Tailwind CSS Documentation</li>
              <li>https://developer.mozilla.org — MDN Web Docs</li>
              <li>https://www.w3schools.com — W3Schools HTML/CSS/JS Reference</li>
            </ul>
            <p className="font-semibold text-gray-700 mt-3">Research Papers:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>E-Commerce Technology and Business Transformation — IEEE 2022</li>
              <li>User Experience Design Principles for Mobile Commerce — Springer 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
