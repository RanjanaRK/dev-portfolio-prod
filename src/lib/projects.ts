export const projectsData = [
  {
    id: 1,
    name: "Task Manager",
    description:
      "Developed Task Manager, a microservice Task management web application to streamline daily task organization.  Implemented User Authentication with secure JWT-based access.  Designed an intuitive task management system with CRUD operation. ",

    respository_link: "https://github.com/RanjanaRK/task-manager",

    keywords: ["nextjs", "tailwindCSS", "Shadcn ui", "directus", "jose"],
  },
  {
    id: 2,
    name: "Ecom Cart",
    description:
      "Developed Ecom Cart, a dynamic and e-commerce web application with multi features. View and purchase products from collection. Easily add, remove, update items in your cart. Sign up and login to user account to access cart items and order.",

    respository_link: "https://github.com/RanjanaRK/shopping-cart.git",

    keywords: [
      "nextjs",
      "tailwindCSS",
      "directus",
      "typescript",
      "Shadcn ui",
      "Stripe",
      "jose",
    ],
  },
  {
    id: 3,
    name: "Microservice FullStack Book Library",
    description:
      "Microservice FullStack Book libray project allows to create author and add book with get post edit delete features",

    respository_link: "https://github.com/RanjanaRK/book-library.git",

    keywords: [
      "nextjs",
      "axios",
      "tailwindCSS",
      "directus",
      "typescript",
      "tanstack",
    ],
  },
  {
    id: 4,
    name: "Octagram",
    description:
      "Octagram, a Microservice Full-stack Social Media project n enabling user to share thoughts, experience with the world. Integrated Post updates, Share photos and videos, comment and like, browse and search people and profile updating features.",

    respository_link: "https://github.com/RanjanaRK/weather-forecast.git",

    keywords: [
      "nextjs",
      "tailwindCSS",
      "directus",
      "typescript",
      "tanstack",
      "nextui",
      "jotai",
    ],
  },
  {
    id: 5,
    name: "Portfolio",
    description:
      "this portfolio is a reflection of my jouney, feautring projects taht highlight ny creativity, technical expertise.",

    respository_link: "https://github.com/RanjanaRK/dev-portfolio-prod.git",

    keywords: [
      "nextjs",
      "tailwindCSS",
      "fastify",
      "prisma",
      "typescript",
      "tanstack",
      "nextui",
    ],
  },
];

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  respository_link: string;
  keywords: string[];
};
