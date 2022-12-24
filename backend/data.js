import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "abbey",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },

    {
      name: "jhon",
      email: "john@example.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product1.webp",
      price: 120,
      countInStock: 20,
      brand: "Nike",
      rating: 2.5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Addidas Fit Shirt",
      category: "Shirts",
      image: "/images/product7.webp",
      price: 110,
      countInStock: 12,
      brand: "Addidas",
      rating: 3.6,
      numReviews: 7,
      description: "High quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/product8.webp",
      price: 150,
      countInStock: 7,
      brand: "Lacoste",
      rating: 4.9,
      numReviews: 19,
      description: "High quality product",
    },
    {
      name: "Nike Sweat pant",
      category: "Pant",
      image: "/images/product4.jpg",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.7,
      numReviews: 20,
      description: "High quality pant",
    },
    {
      name: "Addidas Gym Shoe",
      category: "Shoe",
      image: "/images/product8.webp",
      price: 120,
      countInStock: 15,
      brand: "Addidas",
      rating: 4.6,
      numReviews: 5,
      description: "High quality product",
    },
    {
      name: "Nike Running Shoe",
      category: "Shoe",
      image: "/images/product7.webp",
      price: 180,
      countInStock: 12,
      brand: "Nike",
      rating: 5,
      numReviews: 28,
      description: "High quality product",
    },
  ],
};
