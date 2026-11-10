
/*
========================================
PROJECT DATA
========================================

All project information is stored here.

Why?
- Keeps content separate from UI components.
- Makes project filtering easier.
- Allows us to reuse project data on the Home page.
- Makes updating projects much simpler.

To add a project later, create another object
inside the projects array.
*/

export const projects = [
  {
    id: 1,

    title: "StockMate",

    slug: "stockmate",

    shortDescription:
      "An inventory and order management system designed to help small businesses manage products, suppliers, purchases and stock levels.",

    category: [
      "Web Development",
      "Backend Systems",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],

    icon: "boxes",

    coverStyle: "stockmate",

    status: "In Development",

    featured: true,

    /*
    Add actual GitHub and live demo URLs when ready.

    github: "https://github.com/your-repository",
    demo: "https://your-demo-url.com",
    */

    github: null,
    demo: null,
  },

  {
    id: 2,

    title: "AstroScop",

    slug: "astroscop",

    shortDescription:
      "A Flutter astronomy application that provides access to NASA's Astronomy Picture of the Day and NASA image collections.",

    category: [
      "Mobile Applications",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "NASA APIs",
      "SharedPreferences",
    ],

    icon: "orbit",

    coverStyle: "astroscop",

    status: "Completed",

    featured: true,

    github: null,
    demo: null,
  },

  {
    id: 3,

    title: "Expense Tracker",

    slug: "expense-tracker",

    shortDescription:
      "A personal expense management application with a Flutter frontend and a REST API backend for managing and tracking financial records.",

    category: [
      "Mobile Applications",
      "Backend Systems",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],

    icon: "wallet",

    coverStyle: "expense-tracker",

    status: "Completed",

    featured: true,

    github: null,
    demo: null,
  },

  {
    id: 4,

    title: "Campus Service Request System",

    slug: "campus-service-request",

    shortDescription:
      "An academic project exploring service request scheduling using CSV-based datasets, scheduling algorithms and distance calculations.",

    category: [
      "Academic Projects",
    ],

    technologies: [
      "Python",
      "CSV",
      "Scheduling Algorithms",
      "Euclidean Distance",
    ],

    icon: "route",

    coverStyle: "campus",

    status: "Academic Project",

    featured: false,

    github: null,
    demo: null,
  },
];


/*
========================================
PROJECT CATEGORIES
========================================

These values must match the category names
used inside individual project objects.
*/

export const projectCategories = [
  "All Projects",
  "Web Development",
  "Mobile Applications",
  "Backend Systems",
  "Academic Projects",
];
