import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import nadStore from "../assets/images/nad-store-showcase.png";
import tasklyPoster from "../assets/images/Taskly-poster.png";
import portfolio from "../assets/images/portfolio-showcase.jpg";
import blogSystemPoster from "../assets/images/Blog-System-poster.png";
import algoLabPoster from "../assets/images/AlgoLab-poster.png";

export const projectsData = [
  {
    slug: "nad-store",
    title: "Nad Store",
    eyebrow: "E-COMMERCE PLATFORM",
    category: "React",
    detailCategory: "E-Commerce Application",
    image: nadStore,
    description:
      "A deployed e-commerce platform featuring product discovery, shopping cart management, user authentication, order tracking, and Stripe checkout integration in test mode.",
    overview:
      "Nad Store is an e-commerce platform built to deliver a practical online shopping experience. It combines a modular React frontend with Firebase services and Cloudflare Workers for payment-related backend operations.",
    challenge:
      "Building a maintainable shopping experience that connects product browsing, authentication, cart persistence, order management, and payment processing.",
    solution:
      "A component-based React application integrated with Firebase Authentication, Firestore, and a Cloudflare Worker for payment processing and Stripe webhook handling.",
    features: [
      "Product browsing, search, and category filtering",
      "Shopping cart and checkout workflow",
      "Firebase authentication and user accounts",
      "Order creation and order tracking",
      "Stripe payment integration in test mode",
      "Responsive interface for desktop and mobile",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Stripe",
      "Cloudflare Workers",
      "CSS3",
    ],
    cardTechnologies: ["React", "Firebase", "Stripe", "Firestore"],
    github: "https://github.com/NadirAhmedMohamed/nad-store",
    liveDemo: "https://nad-store.pages.dev",
    accent: "#f59e0b",
    icon: FaReact,
    iconType: "react",
    number: "01",
    featured: true,
    status: "live",
    statusLabel: "LIVE — SOFT LAUNCH",
    translations: {
      ar: {
        title: "متجر ناد",
        eyebrow: "منصة تجارة إلكترونية",
        detailCategory: "تطبيق تجارة إلكترونية",
        statusLabel: "متاح — إطلاق تجريبي",
        description:
          "منصة تجارة إلكترونية منشورة تتيح استكشاف المنتجات وإدارة سلة التسوق وتسجيل الدخول ومتابعة الطلبات، مع تكامل Stripe في وضع الاختبار.",
        overview:
          "متجر ناد هو مشروع تجارة إلكترونية يهدف إلى تقديم تجربة تسوق عملية وسهلة الاستخدام، من خلال واجهة React وخدمات Firebase وCloudflare Workers للعمليات المتعلقة بالدفع.",
        challenge:
          "إنشاء تجربة تسوق متكاملة تربط بين تصفح المنتجات وتسجيل الدخول وحفظ السلة وإدارة الطلبات ومعالجة المدفوعات.",
        solution:
          "تطبيق React يعتمد على مكونات قابلة لإعادة الاستخدام، ومتكامل مع Firebase Authentication وFirestore وCloudflare Worker لمعالجة عمليات الدفع وتأكيدها.",
        features: [
          "تصفح المنتجات والبحث والتصفية حسب التصنيف",
          "سلة التسوق وإتمام الطلبات",
          "تسجيل الدخول وإدارة حسابات المستخدمين",
          "إنشاء الطلبات ومتابعتها",
          "تكامل Stripe في وضع الاختبار",
          "تصميم متجاوب مع الهواتف والحواسيب",
        ],
      },
    },
  },

  {
    slug: "todo-app",
    title: "Taskly",
    eyebrow: "TASK MANAGEMENT APPLICATION",
    category: "React",
    detailCategory: "React Application",
    image: tasklyPoster,
    description:
      "A responsive task management application built with React. Taskly helps users organize daily activities, manage tasks, and track progress through a clean and intuitive interface.",
    overview:
      "Taskly is designed to make everyday task management simple and accessible. It uses reusable React components, Context API for shared state management, and Local Storage to keep tasks saved between sessions.",
    challenge:
      "Creating a simple task management experience that makes it easy to organize activities, update tasks, and track completion without losing saved data.",
    solution:
      "A component-based React application with shared state through Context API, task filtering, reusable dialogs, toast notifications, and Local Storage persistence.",
    features: [
      "Add, edit, and delete tasks",
      "Mark tasks as completed or active",
      "Filter tasks by all, active, and completed status",
      "Persistent task storage with Local Storage",
      "Reusable React components and Context API",
      "Toast notifications and interactive dialogs",
      "Responsive interface for desktop and mobile",
    ],
    technologies: [
      "React",
      "JavaScript",
      "React Context",
      "CSS3",
      "Local Storage",
    ],
    cardTechnologies: ["React", "JavaScript", "Context API", "CSS"],
    github: "https://github.com/NadirAhmedMohamed/taskly",
    liveDemo: "https://taskly-nadir.netlify.app/",
    accent: "#8b5cf6",
    icon: FaReact,
    iconType: "react",
    number: "02",
    featured: true,
    translations: {
      ar: {
        title: "Taskly",
        eyebrow: "تطبيق إدارة المهام",
        detailCategory: "تطبيق React",
        description:
          "تطبيق متجاوب لإدارة المهام اليومية باستخدام React، يساعد على تنظيم الأنشطة ومتابعة الإنجاز من خلال واجهة بسيطة وسهلة الاستخدام.",
        overview:
          "يهدف Taskly إلى تسهيل إدارة المهام اليومية، ويستخدم مكونات React قابلة لإعادة الاستخدام وContext API لإدارة الحالة المشتركة، مع حفظ المهام باستخدام Local Storage.",
        challenge:
          "إنشاء تجربة بسيطة لتنظيم الأنشطة وتعديل المهام ومتابعة إنجازها دون فقدان البيانات المحفوظة.",
        solution:
          "تطبيق React يعتمد على Context API لإدارة الحالة، مع تصفية المهام ونوافذ تفاعلية وإشعارات وحفظ البيانات محلياً.",
        features: [
          "إضافة المهام وتعديلها وحذفها",
          "تحديد المهام كمكتملة أو نشطة",
          "تصفية المهام حسب حالتها",
          "حفظ المهام باستخدام Local Storage",
          "مكونات قابلة لإعادة الاستخدام وContext API",
          "إشعارات ونوافذ تفاعلية",
          "واجهة متجاوبة مع الهواتف والحواسيب",
        ],
      },
    },
  },

  {
    slug: "algorithms-ds-app",
    title: "AlgoLab",
    eyebrow: "ALGORITHMS & DATA STRUCTURES VISUALIZER",
    category: "Vanilla JS",
    detailCategory: "Vanilla JavaScript Application",
    image: algoLabPoster,
    description:
      "An interactive algorithms and data structures visualizer built with HTML, CSS, and Vanilla JavaScript. Explore core computer science concepts through hands-on operations and visual learning.",
    overview:
      "AlgoLab is an educational web application that helps learners explore algorithms and data structures. It brings together searching and sorting algorithms alongside common data structures in an interactive browser-based experience.",
    challenge:
      "Making fundamental algorithms and data structures easier to explore and understand through an accessible, interactive interface.",
    solution:
      "A browser-based learning application that organizes algorithms and data structures into dedicated sections, allowing users to interact with operations and follow their behavior.",
    features: [
      "Linear Search and Binary Search",
      "Selection, Bubble, Insertion, and Quick Sort",
      "Arrays and Linked Lists",
      "Stacks and Queues",
      "Circular Queues and Trees",
      "Interactive operations and visual learning",
      "Responsive user interface",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Algorithms",
      "Data Structures",
    ],
    cardTechnologies: ["JavaScript", "HTML", "CSS", "Algorithms"],
    github: "https://github.com/NadirAhmedMohamed/algolab",
    liveDemo: "https://algolab-nadir.netlify.app/",
    accent: "#06b6d4",
    icon: SiJavascript,
    iconType: "javascript",
    number: "03",
    featured: true,
    translations: {
      ar: {
        title: "AlgoLab",
        eyebrow: "مختبر الخوارزميات وهياكل البيانات",
        detailCategory: "تطبيق JavaScript",
        description:
          "تطبيق تفاعلي لاستكشاف الخوارزميات وهياكل البيانات، مبني باستخدام HTML وCSS وJavaScript، ويقدم مفاهيم علوم الحاسوب من خلال التجربة والتفاعل.",
        overview:
          "يساعد AlgoLab المتعلمين على استكشاف الخوارزميات وهياكل البيانات، ويجمع بين خوارزميات البحث والترتيب ومجموعة من هياكل البيانات في تجربة تعليمية تفاعلية داخل المتصفح.",
        challenge:
          "تسهيل استكشاف وفهم الخوارزميات وهياكل البيانات الأساسية من خلال واجهة واضحة وتفاعلية.",
        solution:
          "تطبيق تعليمي ينظم الخوارزميات وهياكل البيانات في أقسام مستقلة، ويتيح للمستخدم التفاعل مع العمليات ومتابعة طريقة عملها.",
        features: [
          "البحث الخطي والبحث الثنائي",
          "خوارزميات Selection وBubble وInsertion وQuick Sort",
          "المصفوفات والقوائم المرتبطة",
          "المكدسات والطوابير",
          "الطوابير الدائرية والأشجار",
          "عمليات تفاعلية وتجربة تعليمية مرئية",
          "واجهة مستخدم متجاوبة",
        ],
      },
    },
  },

  {
    slug: "blog-system",
    title: "Blog System",
    eyebrow: "CONTENT MANAGEMENT APPLICATION",
    category: "Vanilla JS",
    detailCategory: "Vanilla JavaScript",
    image: blogSystemPoster,
    description:
      "A vanilla JavaScript blog management application with MockAPI integration. Create, view, edit, and delete blog posts through a responsive content management interface.",
    overview:
      "Blog System demonstrates how JavaScript communicates with a REST API to manage content. It provides an interface for creating and managing posts while keeping displayed records synchronized with the API.",
    challenge:
      "Creating an interactive content management interface that communicates with an API and keeps displayed records up to date.",
    solution:
      "A JavaScript-driven interface connected to MockAPI, supporting CRUD operations for creating, viewing, editing, and deleting blog posts.",
    features: [
      "Create new blog posts",
      "View and manage existing posts",
      "Edit and update post records",
      "Delete posts when no longer needed",
      "REST API integration using MockAPI",
      "Responsive content management interface",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "MockAPI"],
    cardTechnologies: ["JavaScript", "HTML", "CSS", "MockAPI"],
    github: "https://github.com/NadirAhmedMohamed/Blog-System-App",
    liveDemo: "https://blog-system-app.netlify.app/",
    accent: "#eab308",
    icon: SiJavascript,
    iconType: "javascript",
    number: "04",
    featured: false,
    translations: {
      ar: {
        title: "Blog System",
        eyebrow: "تطبيق إدارة المحتوى",
        detailCategory: "تطبيق JavaScript",
        description:
          "تطبيق لإدارة محتوى المدونات باستخدام JavaScript وربطه بواجهة MockAPI لإنشاء المقالات وعرضها وتعديلها وحذفها من خلال واجهة متجاوبة.",
        overview:
          "يوضح Blog System كيفية استخدام JavaScript للتواصل مع REST API وإدارة المحتوى، مع توفير واجهة لإنشاء المقالات وإدارتها وتحديث البيانات المعروضة.",
        challenge:
          "إنشاء واجهة تفاعلية لإدارة المحتوى والتواصل مع API وتحديث السجلات المعروضة.",
        solution:
          "واجهة JavaScript متصلة بـ MockAPI وتدعم عمليات الإضافة والعرض والتعديل والحذف.",
        features: [
          "إنشاء مقالات جديدة",
          "عرض وإدارة المقالات الموجودة",
          "تعديل وتحديث المقالات",
          "حذف المقالات",
          "التكامل مع REST API باستخدام MockAPI",
          "واجهة متجاوبة لإدارة المحتوى",
        ],
      },
    },
  },

  {
    slug: "portfolio",
    title: "NADIR.DEV Portfolio",
    eyebrow: "PERSONAL DEVELOPER PORTFOLIO",
    category: "React",
    detailCategory: "React Application",
    image: portfolio,
    description:
      "A personal developer portfolio designed to showcase technical skills, selected projects, and professional growth through a modern, responsive experience.",
    overview:
      "This portfolio brings projects, skills, and contact information together in one place. Its design focuses on clarity, smooth interactions, responsive layouts, and a consistent visual identity.",
    challenge:
      "Presenting technical work in a memorable way while keeping the experience accessible across devices and languages.",
    solution:
      "A modular React interface with reusable components, responsive styling, and a visual system designed to support Arabic and English localization.",
    features: [
      "Dedicated sections for skills and projects",
      "Responsive layout for different screen sizes",
      "Project links and detailed project pages",
      "Consistent reusable UI components",
      "Arabic and English language support with RTL/LTR layouts",
      "Dark and light theme support",
    ],
    technologies: ["React", "JavaScript", "CSS3", "React Router"],
    cardTechnologies: ["React", "CSS", "React Router"],
    github: "https://github.com/NadirAhmedMohamed/Portfolio",
    liveDemo: "https://portfolio-nadirahmed.netlify.app/",
    accent: "#f97316",
    icon: FaReact,
    iconType: "react",
    number: "05",
    featured: false,
    translations: {
      ar: {
        title: "معرض أعمال نادر",
        eyebrow: "معرض أعمال مطور",
        detailCategory: "تطبيق React",
        description:
          "موقع شخصي لعرض المهارات التقنية والمشاريع والخبرات من خلال تصميم عصري ومتجاوب.",
        overview:
          "يجمع الموقع المشاريع والمهارات ومعلومات التواصل في مكان واحد، مع التركيز على وضوح المحتوى وسهولة الاستخدام.",
        challenge:
          "عرض الأعمال التقنية بطريقة احترافية مع الحفاظ على سهولة الاستخدام على مختلف الأجهزة واللغات.",
        solution:
          "واجهة React مقسمة إلى مكونات قابلة لإعادة الاستخدام مع تصميم متجاوب وهوية بصرية موحدة.",
        features: [
          "أقسام مخصصة للمهارات والمشاريع",
          "تصميم متجاوب مع مختلف الشاشات",
          "صفحات لعرض تفاصيل المشاريع",
          "مكونات واجهة قابلة لإعادة الاستخدام",
          "دعم العربية والإنجليزية واتجاه RTL/LTR",
          "الوضع الداكن والفاتح",
        ],
      },
    },
  },
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug) ?? null;

export const getProjectsByCategory = (category) => {
  if (!category || category === "All") {
    return projectsData;
  }

  return projectsData.filter((project) => project.category === category);
};

export const projectCategories = [
  "All",
  ...new Set(projectsData.map((project) => project.category)),
];
