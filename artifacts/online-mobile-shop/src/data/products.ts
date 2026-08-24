export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 89999,
    originalPrice: 99999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 2340,
    category: "Flagship",
    specs: {
      display: "6.8\" Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000 mAh",
      os: "Android 14",
    },
    description: "The ultimate flagship smartphone with S Pen, incredible zoom camera and AI features.",
    inStock: true,
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro",
    brand: "Apple",
    price: 119900,
    originalPrice: 134900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 5120,
    category: "Flagship",
    specs: {
      display: "6.1\" Super Retina XDR, ProMotion 120Hz",
      processor: "Apple A17 Pro",
      ram: "8 GB",
      storage: "128 GB",
      camera: "48MP + 12MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 17",
    },
    description: "Powered by the A17 Pro chip with titanium design and USB 3 for the first time.",
    inStock: true,
  },
  {
    id: 3,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 64999,
    originalPrice: 69999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 890,
    category: "Flagship",
    specs: {
      display: "6.82\" LTPO AMOLED, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      camera: "50MP + 64MP + 48MP",
      battery: "5400 mAh",
      os: "Android 14 (OxygenOS 14)",
    },
    description: "Hasselblad-tuned camera system with the fastest charging at 100W.",
    inStock: true,
  },
  {
    id: 4,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 52999,
    originalPrice: 59999,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 660,
    category: "Flagship",
    specs: {
      display: "6.36\" AMOLED, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      camera: "50MP + 50MP + 50MP Leica",
      battery: "4610 mAh",
      os: "Android 14 (MIUI 14)",
    },
    description: "Leica optics on a compact flagship form factor — premium in every sense.",
    inStock: true,
  },
  {
    id: 5,
    name: "Realme GT 5 Pro",
    brand: "Realme",
    price: 41999,
    originalPrice: 45999,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 430,
    category: "Mid-Range",
    specs: {
      display: "6.78\" AMOLED, 144Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      camera: "50MP + 50MP + 8MP",
      battery: "5400 mAh",
      os: "Android 14 (Realme UI 5.0)",
    },
    description: "Flagship Snapdragon chip at a mid-range price — best value flagship of 2024.",
    inStock: true,
  },
  {
    id: 6,
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    price: 31999,
    originalPrice: 35999,
    image: "https://images.unsplash.com/photo-1604399852419-5e4a8f51c74e?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 310,
    category: "Mid-Range",
    specs: {
      display: "6.7\" pOLED, 144Hz",
      processor: "Snapdragon 7 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      camera: "50MP + 10MP + 13MP",
      battery: "4500 mAh",
      os: "Android 14",
    },
    description: "Near-stock Android experience with stylish design and fast 125W charging.",
    inStock: false,
  },
  {
    id: 7,
    name: "Google Pixel 8a",
    brand: "Google",
    price: 47999,
    originalPrice: 52999,
    image: "https://images.unsplash.com/photo-1570101945621-945409a6370f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 780,
    category: "Mid-Range",
    specs: {
      display: "6.1\" OLED, 120Hz",
      processor: "Google Tensor G3",
      ram: "8 GB",
      storage: "128 GB",
      camera: "64MP + 13MP",
      battery: "4492 mAh",
      os: "Android 14",
    },
    description: "Google's AI magic in an affordable package with 7 years of OS updates.",
    inStock: true,
  },
  {
    id: 8,
    name: "Vivo V30 Pro",
    brand: "Vivo",
    price: 26999,
    originalPrice: 29999,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 220,
    category: "Budget",
    specs: {
      display: "6.78\" AMOLED, 120Hz",
      processor: "Dimensity 8200",
      ram: "12 GB",
      storage: "256 GB",
      camera: "50MP + 50MP + 12MP ZEISS",
      battery: "5000 mAh",
      os: "Android 14 (Funtouch OS 14)",
    },
    description: "ZEISS-tuned portrait camera with vibrant AMOLED display at an unbeatable price.",
    inStock: true,
  },
];

export const categories = ["All", "Flagship", "Mid-Range", "Budget"];
export const brands = ["All", "Samsung", "Apple", "OnePlus", "Xiaomi", "Realme", "Motorola", "Google", "Vivo"];
