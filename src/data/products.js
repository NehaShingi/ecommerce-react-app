const products = [
{
    id: 1,
    name: "Gaming Keyboard",
    price: 2499,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    description: "Mechanical gaming keyboard with RGB lighting and responsive switches."
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 3499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Lightweight running shoes providing excellent comfort and support."
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "High-quality wireless headphones with noise cancellation and long battery life."
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Track your fitness, notifications, and daily activities with this stylish smartwatch."
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Durable and spacious backpack designed for laptops and everyday essentials."
  },
  
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    description: "Portable Bluetooth speaker with powerful sound and deep bass."
  },
  
  {
    id: 7,
    name: "Sunglasses",
    price: 999,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    description: "Trendy UV-protected sunglasses perfect for outdoor activities."
  },
 {
  id: 8,
  name: "Desk Lamp",
  price: 1299,
  image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
  description: "Modern LED desk lamp with adjustable brightness for work and study."
},
{
  id: 9,
  name: "Water Bottle",
  price: 699,
  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
  description: "Reusable stainless steel water bottle with leak-proof design."
}
];

export function getProducts(){
    return products;
}