import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import nadStore from "../assets/images/nad-store-showcase.png";
import todoApp from "../assets/images/To-do-showcase.png";
import portfolio from "../assets/images/portfolio-showcase.jpg";
import blogSystem from "../assets//images/blog-system-showcase.jpg";
import algorithmsDSApp from "../assets/images/algorithms&DDS-showcase (1).jpg";

export const projectsData = [
  {
    slug: "nad-store",
    title: "Nad Store",
    eyebrow: "E-COMMERCE PLATFORM",
    category: "React",
    detailCategory: "E-Commerce Application",

    // Project showcase image
    image: nadStore,

    description:
      "A modern e-commerce platform featuring product discovery, shopping cart management, user authentication, order tracking, and Stripe payment integration. Currently under active development.",

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

    github: "",
    liveDemo: "",

    accent: "orange",
    icon: FaReact,
    iconType: "react",
    number: "01",
    featured: true,
    status: "in-progress",
    statusLabel: "IN PROGRESS",

    translations: {
      ar: {
        title: "متجر ناد",
        eyebrow: "منصة تجارة إلكترونية",
        detailCategory: "تطبيق تجارة إلكترونية",
        statusLabel: "قيد التطوير",
        description:
          "منصة تجارة إلكترونية عصرية تتيح استكشاف المنتجات وإدارة سلة التسوق وتسجيل الدخول ومتابعة الطلبات والدفع الإلكتروني عبر Stripe. المشروع حالياً قيد التطوير.",
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
    title: "To-Do App",
    eyebrow: "PRODUCTIVITY APPLICATION",
    category: "React",
    detailCategory: "React Application",

    // Project showcase image
    image: todoApp,

    description:
      "A clean and responsive task management application built with React. Organize everyday tasks, manage your workflow, and keep track of your progress through a simple and intuitive interface.",

    overview:
      "The To-Do App was created to make everyday task management simple and accessible. It demonstrates reusable React components, state management with Hooks, and persistent task storage using the browser's Local Storage.",

    challenge:
      "Keeping tasks organized while providing a responsive and easy-to-use interface across different screen sizes.",

    solution:
      "A component-based React interface with clear task actions, filtering options, and Local Storage persistence so tasks remain available after refreshing the page.",

    features: [
      "Add, edit, and delete tasks",
      "Filter tasks to find what matters",
      "Persistent storage with Local Storage",
      "Responsive interface for desktop and mobile",
      "Reusable React components and Hooks",
    ],

    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    cardTechnologies: ["React", "JavaScript", "CSS"],

    github: "https://github.com/NadirAhmedMohamed/Todo-App",
    liveDemo: "https://2doapp-li.netlify.app/",

    accent: "violet",
    icon: FaReact,
    iconType: "react",
    number: "02",
    featured: true,

    translations: {
      ar: {
        title: "تطبيق إدارة المهام",
        eyebrow: "تطبيق للإنتاجية",
        detailCategory: "تطبيق React",
        description:
          "تطبيق لإدارة المهام اليومية باستخدام React، يساعد على تنظيم المهام ومتابعة الإنجاز من خلال واجهة بسيطة ومتجاوبة.",
        overview:
          "يهدف التطبيق إلى تسهيل إدارة المهام اليومية، ويستخدم مكونات React قابلة لإعادة الاستخدام وHooks وحفظ البيانات باستخدام Local Storage.",
        challenge:
          "تنظيم المهام مع توفير واجهة سهلة الاستخدام ومتجاوبة مع مختلف أحجام الشاشات.",
        solution:
          "واجهة مبنية باستخدام React تتيح إدارة المهام وتصفيتها وحفظها محلياً حتى بعد تحديث الصفحة.",
        features: [
          "إضافة المهام وتعديلها وحذفها",
          "تصفية المهام وتنظيمها",
          "حفظ البيانات باستخدام Local Storage",
          "واجهة متجاوبة مع الهواتف والحواسيب",
          "استخدام مكونات React وHooks",
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

    // Project showcase image
    image: portfolio,

    description:
      "A personal developer portfolio designed to showcase technical skills, selected projects, and professional growth through a modern, responsive experience.",

    overview:
      "This portfolio brings projects, skills, and contact information together in one place. Its design focuses on clarity, smooth interactions, responsive layouts, and a consistent visual identity.",

    challenge:
      "Presenting technical work in a memorable way while keeping the experience accessible across devices and languages.",

    solution:
      "A modular React interface with reusable components, responsive styling, and a visual system designed to support future improvements.",

    features: [
      "Dedicated sections for skills and projects",
      "Responsive layout for different screen sizes",
      "Project links and detailed project pages",
      "Consistent reusable UI components",
      "Room for Arabic and English localization",
    ],

    technologies: ["React", "JavaScript", "CSS3", "React Router"],
    cardTechnologies: ["React", "CSS", "React Router"],

    github: "",
    liveDemo: "",

    accent: "orange",
    icon: FaReact,
    iconType: "react",
    number: "03",
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
          "دعم العربية والإنجليزية",
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

    // Project showcase image
    image: blogSystem,

    description:
      "A dynamic content management application built with vanilla JavaScript and a MockAPI integration. It allows users to manage blog entries through an interactive interface.",

    overview:
      "The Blog System demonstrates how JavaScript can communicate with an API to retrieve and update content. The interface focuses on managing entries and reflecting changes in the displayed data.",

    challenge:
      "Creating an interactive content interface that communicates with an API and keeps displayed records up to date.",

    solution:
      "A JavaScript-driven interface connected to MockAPI, with CRUD operations for creating, viewing, editing, and deleting entries.",

    features: [
      "Create new content entries",
      "View and manage existing posts",
      "Edit and update records",
      "Delete entries when no longer needed",
      "API integration using MockAPI",
    ],

    technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
    cardTechnologies: ["JavaScript", "HTML", "CSS", "MockAPI"],

    github: "https://github.com/NadirAhmedMohamed/Blog-System-App",
    liveDemo: "https://blog-system-app.netlify.app/",

    accent: "yellow",
    icon: SiJavascript,
    iconType: "javascript",
    number: "04",
    featured: false,

    translations: {
      ar: {
        title: "نظام المدونة",
        eyebrow: "تطبيق إدارة المحتوى",
        detailCategory: "تطبيق JavaScript",
        description:
          "تطبيق لإدارة محتوى المدونات باستخدام JavaScript وربطه بواجهة MockAPI لإضافة المقالات وتعديلها وحذفها.",
        overview:
          "يوضح المشروع كيفية استخدام JavaScript للتواصل مع واجهة API واسترجاع المحتوى وتحديثه.",
        challenge:
          "إنشاء واجهة تفاعلية لإدارة المحتوى والتواصل مع API وتحديث البيانات المعروضة.",
        solution:
          "واجهة JavaScript متصلة بـ MockAPI وتدعم عمليات الإضافة والعرض والتعديل والحذف.",
        features: [
          "إنشاء محتوى جديد",
          "عرض وإدارة المقالات",
          "تعديل وتحديث البيانات",
          "حذف المقالات",
          "التكامل مع MockAPI",
        ],
      },
    },
  },

  {
    slug: "algorithms-ds-app",
    title: "Algorithms & Data Structures",
    eyebrow: "INTERACTIVE LEARNING APPLICATION",
    category: "Vanilla JS",
    detailCategory: "JavaScript Application",

    // Project showcase image
    image: algorithmsDSApp,

    description:
      "An educational web application presenting data structures and their related algorithms through an interactive visual experience designed to make core computer science concepts easier to explore.",

    overview:
      "This project focuses on presenting foundational computer science concepts in a more approachable way. It combines structured information with visual output to support learning and exploration.",

    challenge:
      "Making abstract data structures and algorithms easier to understand through a clear and engaging interface.",

    solution:
      "An interactive educational experience that organizes concepts and presents supporting visual output in a browser-based interface.",

    features: [
      "Explore data structures and algorithms",
      "Visual presentation of core concepts",
      "Organized educational content",
      "Browser-based interactive experience",
      "Responsive web interface",
    ],

    technologies: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    cardTechnologies: ["JavaScript", "HTML", "CSS", "Algorithms"],

    github: "https://github.com/NadirAhmedMohamed/Algorithms-DSs-App",
    liveDemo: "https://algorirthms-dss-app.netlify.app/",

    accent: "cyan",
    icon: SiJavascript,
    iconType: "javascript",
    number: "05",
    featured: true,

    translations: {
      ar: {
        title: "الخوارزميات وهياكل البيانات",
        eyebrow: "تطبيق تعليمي تفاعلي",
        detailCategory: "تطبيق JavaScript",
        description:
          "تطبيق تعليمي يعرض هياكل البيانات والخوارزميات المرتبطة بها من خلال تجربة تفاعلية تساعد على فهم مفاهيم علوم الحاسوب.",
        overview:
          "يركز المشروع على تقديم المفاهيم الأساسية في علوم الحاسوب بطريقة مبسطة، من خلال محتوى منظم وعروض مرئية.",
        challenge:
          "تسهيل فهم هياكل البيانات والخوارزميات المجردة من خلال واجهة واضحة وتفاعلية.",
        solution:
          "تجربة تعليمية تفاعلية تنظم المفاهيم وتعرض تمثيلات مرئية داخل المتصفح.",
        features: [
          "استكشاف هياكل البيانات والخوارزميات",
          "عرض مرئي للمفاهيم الأساسية",
          "تنظيم المحتوى التعليمي",
          "تجربة تفاعلية داخل المتصفح",
          "واجهة متجاوبة",
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
