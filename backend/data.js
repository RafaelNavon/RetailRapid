import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Rafael",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Ralph Lauren shirt",
      slug: "ralph-lauren-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 100,
      countInStock: 15,
      brand: "Ralph Lauren",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Tommy Hilfiger shirt",
      slug: "tommy-hilfiger-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 110,
      countInStock: 17,
      brand: "Tommy Hilfiger",
      rating: 4.4,
      numReviews: 12,
      description: "very comfy",
    },
    {
      name: "Ralph Lauren pants",
      slug: "ralph-lauren-pants",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 80,
      countInStock: 18,
      brand: "Ralph Lauren",
      rating: 4.7,
      numReviews: 25,
      description: "Definitly worth it",
    },
    {
      name: "Tommy Hilfiger pants",
      slug: "tommy-hilfiger-pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 70,
      countInStock: 0,
      brand: "Tommy Hilfiger",
      rating: 3.9,
      numReviews: 10,
      description: "pretty good",
    },
  ],
};
export default data;
