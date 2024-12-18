export const projectsData = [
  {
    id: 1,
    name: "Weather-Forecast",
    description:
      "Weather-forecast a web aplication, with live location, upcoming forecast.",

    respository_link: "https://github.com/RanjanaRK/weather-forecast.git",

    keywords: ["nextjs", "react", "axios", "tailwindCSS"],
  },
  {
    id: 2,
    name: "Microservice Full-Stack TODO App",
    description:
      "Microservice Full-stack todo web application built with auth, get, post, edit, delete features.",

    respository_link: "https://github.com/RanjanaRK/Todo-List.git",

    keywords: [
      "nextjs",
      "axios",
      "tailwindCSS",
      "directus",
      "typescript",
      "tanstack ",
      "nextui",
    ],
  },
  {
    id: 3,
    name: "Microservice FullStack Book Library",
    description:
      "This project allows to create author and add book with get post edit delete features",

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
    name: "Octagram : Microservice Full-stack Social Media",
    description:
      "Octagram ,a Microservice Full-stack Social Media project is created in collaboration with NextJS and Directors. It allows creating, liking, deleting posts and allowing other users to view the posts.",

    respository_link: "https://github.com/RanjanaRK/weather-forecast.git",

    keywords: [
      "nextjs",
      "tailwindCSS",
      "directus",
      "typescript",
      "tanstack",
      "nextui",
    ],
  },
  {
    id: 5,
    name: "Book Library",
    description: "full stack book library bulit with nextJs and fastify ",

    respository_link: "https://github.com/RanjanaRK/weather-forecast.git",

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
