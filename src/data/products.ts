import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'home',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'sports',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'electronics',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'electronics',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'clothing',
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    rating: 4.3,
    reviews: 67,
    inStock: true
  },
  {
    id: '4',
    name: 'Premium Denim Jeans',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'clothing',
    description: 'Classic fit premium denim jeans with modern styling and comfort.',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Modern Table Lamp',
    price: 45.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'home',
    description: 'Elegant modern table lamp perfect for any room decor.',
    rating: 4.4,
    reviews: 43,
    inStock: true
  },
  {
    id: '6',
    name: 'Yoga Mat Pro',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sports',
    description: 'Professional-grade yoga mat with superior grip and cushioning.',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Wireless Phone Charger',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    rating: 4.2,
    reviews: 91,
    inStock: true
  },
  {
    id: '8',
    name: 'Ceramic Plant Pot Set',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'home',
    description: 'Beautiful set of 3 ceramic plant pots in different sizes.',
    rating: 4.5,
    reviews: 76,
    inStock: true
  }
];