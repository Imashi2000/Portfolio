// The local CV is private and not in Git, so the live site hides the button.
// When the public CV is ready, add it to public/assets/images and use its path for both.
export const RESUME_URL = import.meta.env.DEV ? "./assets/images/Imashi-Samarawickrama-CV.pdf" : "";

export const NAV_LINKS = [
    { id: "ABOUT", label: "About" },
    { id: "WORK", label: "Experience" },
    { id: "PROJECT", label: "Projects" },
    { id: "SKILLS", label: "Skills" },
    { id: "EDUCATION", label: "Education" },
    { id: "CONTACT", label: "Contact" }
];

export const ROLES = ["Software Engineer", "Full-Stack Developer", "Backend Developer", "Mobile App Developer"];

export const TECH_STRIP = ["PHP", "Flutter", "ASP.NET Core", "React", "CodeIgniter", "Dart", "Node.js", "MySQL", "MSSQL", "MongoDB", "Firebase", "Docker", "Kubernetes", "Azure DevOps"];

export const FOCUS_AREAS = [
    {
        title: "Web & Backend",
        description: "Web systems, REST APIs, databases and business workflows using PHP, CodeIgniter, ASP.NET Core, Node.js, React, MySQL and MSSQL."
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform Flutter apps for Android and iOS, with payments, push notifications, QR scanning and multilingual support."
    },
    {
        title: "DevOps",
        description: "Docker containers, Helm charts for Kubernetes, and Azure DevOps CI/CD pipelines that automate builds and deployments."
    }
];

export const SKILLS = [
    {
        title: "Backend",
        icon: "./assets/images/Backend (2).png",
        skills: ["PHP", "CodeIgniter", "ASP.NET Core", "C#", "Node.js", "Java", "Python", "WordPress", "WooCommerce", "REST APIs"]
    },
    {
        title: "Web & Mobile",
        icon: "./assets/images/Frontend.png",
        skills: ["React", "JavaScript", "HTML", "CSS", "Flutter", "Dart"]
    },
    {
        title: "Databases",
        icon: "./assets/images/Database (2).png",
        skills: ["MySQL", "MSSQL", "MongoDB", "Firebase"]
    },
    {
        title: "DevOps",
        icon: "./assets/images/devops.png",
        skills: ["Docker", "Kubernetes", "Helm", "CI/CD Pipelines", "Azure DevOps", "Git/GitHub"]
    },
    {
        title: "Tools",
        icon: "./assets/images/applications.png",
        skills: ["VS Code", "Android Studio", "Xcode", "Postman", "NetBeans", "MATLAB", "Figma", "Asana", "Trello", "Microsoft Office"]
    },
    {
        title: "Operating Systems",
        icon: "./assets/images/operating-system.png",
        skills: ["macOS", "Windows", "Linux"]
    }
];

export const WORK = [
    {
        company: "Infobahn Consultancy",
        role: "Mobile App Developer",
        period: "Nov 2024 – Present",
        location: "Dubai, UAE",
        highlights: [
            "Develop and maintain cross-platform mobile apps with Flutter and Dart for clients including Japan's Niterra, and across the UAE, India, Ethiopia and Saudi Arabia.",
            "Design and maintain backend systems and REST APIs using PHP, CodeIgniter and MySQL.",
            "Integrate Firebase Authentication, Cloud Messaging, payment gateways, push notifications, QR scanning and localization.",
            "Manage the full application lifecycle on Android and iOS, from requirements and UI through API integration, testing and deployment."
        ]
    },
    {
        company: "Creative Software",
        role: "Software Engineer Intern",
        period: "May 2024 – Nov 2024",
        location: "Colombo, Sri Lanka",
        highlights: [
            "Developed ASP.NET Core backend services for AgroLink with full CRUD for Districts, AI Models, Users and Roles.",
            "Integrated JWT authentication, lazy loading and advanced filtering, and managed the MSSQL database structures.",
            "Created Azure DevOps CI/CD pipelines for the frontend, backend, Python microservices and a proxy server.",
            "Authored an umbrella Helm chart for Kubernetes deployment and containerized the services with Docker.",
            "Worked directly with the Agricultural Department of Sri Lanka through client meetings and feature demonstrations."
        ]
    }
];

export const PROJECT_FILTERS = [
    { id: "all", label: "All" },
    { id: "web", label: "Web & Backend" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "desktop", label: "Desktop" }
];

/*
 * To add a project, copy one block below.
 * types:     any of "mobile", "web", "desktop" (controls the filter tabs)
 * source:    where you did it (employers match the company name in WORK)
 * appStore, playStore, website: paste the full link and the button appears
 * icon:      the app icon or logo, shown on the card
 * images:    screenshots from public/assets/images (click to enlarge)
 */
export const PROJECTS = [
    {
        title: "TrustedProg",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "Niterra · Middle East & Africa",
        description: "Niterra's anti-counterfeit program for genuine NGK and NTK automotive parts, helping vehicle owners find trusted garages and retailers. Includes QR product verification, vehicle registration, warranty claims and English, Arabic and French support.",
        technologies: ["Flutter", "Dart", "REST APIs", "Google Maps"],
        appStore: "https://apps.apple.com/ae/app/trusted-prog/id6739157436",
        playStore: "https://play.google.com/store/apps/details?id=com.infobahn.trustedprog",
        website: "https://trustedprog.com/trusted-program",
        icon: "./assets/images/projects/trustedprog/icon.webp",
        images: [
            { src: "./assets/images/projects/trustedprog/screen-1.webp", alt: "TrustedProg home screen", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-2.webp", alt: "TrustedProg dashboard menu", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-3.webp", alt: "TrustedProg vehicle list", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-4.webp", alt: "TrustedProg NGK spark plug details", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-5.webp", alt: "TrustedProg vehicle registration form", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-6.webp", alt: "TrustedProg manage claim form", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-7.webp", alt: "TrustedProg Trusted Garage information", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-8.webp", alt: "TrustedProg Trusted Retailer information", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-9.webp", alt: "TrustedProg home screen in Arabic", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-10.webp", alt: "TrustedProg dashboard menu in Arabic", width: 739, height: 1600 },
            { src: "./assets/images/projects/trustedprog/screen-11.webp", alt: "TrustedProg profile screen", width: 739, height: 1600 }
        ]
    },
    {
        title: "SEDRES Trading & Maritime Services",
        types: ["web"],
        source: "Infobahn Consultancy",
        client: "Saudi Arabia",
        description: "Web-based port-management system for global marine services. Backend development covering APIs, database operations and business workflows.",
        technologies: ["PHP", "CodeIgniter 3", "MySQL", "REST APIs"],
        website: "https://sedres.onlinebareed.com/",
        icon: "./assets/images/projects/sedres-trading-maritime-services/icon.webp",
        images: [
            { src: "./assets/images/projects/sedres-trading-maritime-services/screen-1.webp", alt: "SEDRES login screen", width: 1366, height: 800 }
        ]
    },
    {
        title: "Fixzon",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "UAE",
        description: "Home repair and handyman booking app for the UAE. Customers book services such as AC repair, plumbing, electrical work and cleaning, choose add-ons and track their requests.",
        technologies: ["Flutter", "Dart", "REST APIs"],
        appStore: "https://apps.apple.com/ae/app/fixzon/id6746320419",
        playStore: "https://play.google.com/store/apps/details?id=com.infobahn.fixzon_infobahn",
        icon: "./assets/images/projects/fixzon/icon.webp",
        images: [
            { src: "./assets/images/projects/fixzon/screen-1.webp", alt: "Fixzon home screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-2.webp", alt: "Fixzon services", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-3.webp", alt: "Fixzon cleaning service details", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-4.webp", alt: "Fixzon booking time options", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-5.webp", alt: "Fixzon service add-ons", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-6.webp", alt: "Fixzon request a quote form", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-7.webp", alt: "Fixzon about screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-8.webp", alt: "Fixzon contact screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/fixzon/screen-9.webp", alt: "Fixzon services on tablet", width: 720, height: 960 }
        ]
    },
    {
        title: "AgroLink",
        types: ["web"],
        source: "Creative Software",
        client: "Agricultural Department of Sri Lanka",
        description: "A map-based system that identifies and segments farmland in Sri Lanka from satellite maps, giving farmers and stakeholders insight into land usage. Built the backend services, database and deployment pipelines.",
        technologies: ["ASP.NET Core", "MSSQL", "JWT", "Azure DevOps", "Docker", "Kubernetes", "Helm"],
        images: [
            { src: "./assets/images/projects/agrolink/screen-1.webp", alt: "AgroLink login screen", width: 659, height: 382 },
            { src: "./assets/images/projects/agrolink/screen-2.webp", alt: "AgroLink map explorer with Sri Lanka districts", width: 1001, height: 491 },
            { src: "./assets/images/projects/agrolink/screen-3.webp", alt: "AgroLink drawing a land area on a satellite map", width: 739, height: 359 },
            { src: "./assets/images/projects/agrolink/screen-4.webp", alt: "AgroLink satellite map view", width: 872, height: 422 },
            { src: "./assets/images/projects/agrolink/screen-5.webp", alt: "AgroLink districts management", width: 1001, height: 481 },
            { src: "./assets/images/projects/agrolink/screen-6.webp", alt: "AgroLink roles and users management", width: 1001, height: 468 }
        ]
    },
    {
        title: "Hitala",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "Ethiopia",
        description: "Official app of Hitala Trading PLC, a global trading company based in Addis Ababa, showcasing its import and export, manufacturing, food, agriculture and automotive divisions, with customer inquiries.",
        technologies: ["Flutter", "Dart"],
        appStore: "https://apps.apple.com/ae/app/hitala/id6741749154",
        playStore: "https://play.google.com/store/apps/details?id=com.hitalaInfobahn.hitalainfobahn",
        website: "https://www.hitala.com/",
        icon: "./assets/images/projects/hitala/icon.webp",
        images: [
            { src: "./assets/images/projects/hitala/screen-1.webp", alt: "Hitala welcome screen", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-2.webp", alt: "Hitala business services", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-3.webp", alt: "Hitala about screen", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-4.webp", alt: "Hitala navigation menu", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-5.webp", alt: "Hitala sign-up screen", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-6.webp", alt: "Hitala CEO message", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-7.webp", alt: "Hitala contact details", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-8.webp", alt: "Hitala gallery", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-9.webp", alt: "Hitala global reach", width: 600, height: 1299 },
            { src: "./assets/images/projects/hitala/screen-10.webp", alt: "Hitala home screen", width: 720, height: 1559 },
            { src: "./assets/images/projects/hitala/screen-11.webp", alt: "Hitala product inquiry form", width: 720, height: 1559 },
            { src: "./assets/images/projects/hitala/screen-12.webp", alt: "Hitala company values and social links", width: 720, height: 1559 }
        ]
    },
    {
        title: "Sunmeet",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "India & UAE",
        description: "Online shopping app for food products and gifts, with product search, cart and wishlist, secure checkout with multiple payment options, order tracking and notifications.",
        technologies: ["Flutter", "Dart", "WordPress", "WooCommerce"],
        playStore: "https://play.google.com/store/apps/details?id=com.infobahn.sunmeet",
        website: "https://sunmeet.ae/",
        icon: "./assets/images/projects/sunmeet/icon.webp",
        images: [
            { src: "./assets/images/projects/sunmeet/screen-1.webp", alt: "Sunmeet home screen", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-2.webp", alt: "Sunmeet shop", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-3.webp", alt: "Sunmeet product categories", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-4.webp", alt: "Sunmeet product details", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-5.webp", alt: "Sunmeet bakery products", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-6.webp", alt: "Sunmeet wishlist", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-7.webp", alt: "Sunmeet shopping cart", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-8.webp", alt: "Sunmeet payment options", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-9.webp", alt: "Sunmeet contact screen", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-10.webp", alt: "Sunmeet account menu", width: 720, height: 1600 },
            { src: "./assets/images/projects/sunmeet/screen-11.webp", alt: "Sunmeet address details", width: 720, height: 1600 }
        ]
    },
    {
        title: "Standpoint",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "Dubai, UAE",
        description: "Official app of Stand Point Technical Services, a Dubai property-maintenance company, with AC, electrical, plumbing and civil services, monthly maintenance packages and appointment booking.",
        technologies: ["Flutter", "Dart"],
        appStore: "https://apps.apple.com/ae/app/stand-point/id6749294489",
        playStore: "https://play.google.com/store/apps/details?id=com.infobahn.standpoint",
        website: "https://standpoint-me.com/",
        icon: "./assets/images/projects/standpoint/icon.webp",
        images: [
            { src: "./assets/images/projects/standpoint/screen-1.webp", alt: "Standpoint home screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-2.webp", alt: "Standpoint monthly maintenance packages", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-3.webp", alt: "Standpoint services", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-4.webp", alt: "Standpoint navigation menu", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-5.webp", alt: "Standpoint civil works service", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-6.webp", alt: "Standpoint appointment booking", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-7.webp", alt: "Standpoint about screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-8.webp", alt: "Standpoint registration screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-9.webp", alt: "Standpoint splash screen", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-10.webp", alt: "Standpoint inquiry summary", width: 591, height: 1280 },
            { src: "./assets/images/projects/standpoint/screen-11.webp", alt: "Standpoint request a quote form", width: 591, height: 1280 }
        ]
    },
    {
        title: "My Sri Lanka",
        types: ["mobile", "web"],
        source: "Final year project",
        description: "A tourism mobile app and web admin dashboard that lets tourists choose tailored travel packages. Built Flutter screens, React pages and the Node.js and MongoDB backend.",
        technologies: ["Flutter", "React", "Node.js", "Express", "MongoDB", "Postman"],
        images: [
            { src: "./assets/images/8.PNG", alt: "A-Z Sri Lanka screen in the My Sri Lanka app", width: 426, height: 921 },
            { src: "./assets/images/10.PNG", alt: "Festival details screen in the My Sri Lanka app", width: 431, height: 929 }
        ],
        links: [
            { label: "App code", url: "https://github.com/Chamidilshan/sl_explorer" },
            { label: "Backend code", url: "https://github.com/Chamidilshan/sl_explorer_backend" },
            { label: "Admin code", url: "https://github.com/Chamidilshan/sl-explorer-admin-web" }
        ]
    },
    {
        title: "Unimerse",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "UAE",
        description: "Mobile app for a UAE heating, cooling and refrigeration company, with service and product catalogues, enquiries and contact forms.",
        technologies: ["Flutter", "Dart"],
        icon: "./assets/images/projects/unimerse/icon.webp",
        images: [
            { src: "./assets/images/projects/unimerse/screen-1.webp", alt: "Unimerse home screen", width: 576, height: 1280 },
            { src: "./assets/images/projects/unimerse/screen-2.webp", alt: "Unimerse services", width: 576, height: 1280 },
            { src: "./assets/images/projects/unimerse/screen-3.webp", alt: "Unimerse products", width: 576, height: 1280 }
        ]
    },
    {
        title: "Juliana Khalil LMS",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "Dubai, UAE",
        description: "Official learning app of MindMapping instructor Juliana Khalil, with structured courses, language programs, e-books, progress tracking, quizzes and integrated payments.",
        technologies: ["Flutter", "Dart", "WordPress", "WooCommerce"],
        playStore: "https://play.google.com/store/apps/details?id=com.infobahn.juliana_khalil",
        icon: "./assets/images/projects/juliana-khalil-lms/icon.webp",
        images: [
            { src: "./assets/images/projects/juliana-khalil-lms/screen-1.webp", alt: "Juliana Khalil LMS home screen", width: 576, height: 1280 },
            { src: "./assets/images/projects/juliana-khalil-lms/screen-2.webp", alt: "Juliana Khalil LMS e-books", width: 576, height: 1280 },
            { src: "./assets/images/projects/juliana-khalil-lms/screen-3.webp", alt: "Juliana Khalil LMS course details", width: 576, height: 1280 }
        ]
    },
    {
        title: "BNI Rising Phoenix",
        types: ["mobile"],
        source: "Infobahn Consultancy",
        client: "Dubai, UAE",
        description: "Official mobile app for the BNI Rising Phoenix business networking chapter in Central Dubai, with event management, a member directory and notifications.",
        technologies: ["Flutter", "Dart", "Firebase"],
        website: "https://bnicentraldubai.ae/central-dubai-bni-rising-phoenix/en-AE/index",
        icon: "./assets/images/projects/bni-rising-phoenix/icon.webp"
    },
    {
        title: "Weather Website",
        types: ["web"],
        source: "Personal & academic",
        description: "Full-stack weather website with a React frontend, an Express API and a PostgreSQL database.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL"],
        links: [{ label: "View code", url: "https://github.com/Imashi2000/Weather_postgre" }]
    },
    {
        title: "Hospital Appointment System",
        types: ["desktop"],
        source: "Personal & academic",
        description: "Registration for doctors, patients and administrators. Built patient registration forms and full CRUD for administrators.",
        technologies: ["C#", "MSSQL"],
        links: [{ label: "View code", url: "https://github.com/Pasan-Waga-Arachchi/Doc-Appointment-System" }]
    },
    {
        title: "Itinerary Planner",
        types: ["desktop"],
        source: "Personal & academic",
        description: "Lets users create, view and manage travel itineraries. Built the login and registration pages and the MySQL integration.",
        technologies: ["Java", "MySQL", "XAMPP"],
        links: [{ label: "View code", url: "https://github.com/Imashi2000/Itinerary_Planner" }]
    },
    {
        title: "Shanthi Children's Society",
        types: ["web"],
        source: "Personal & academic",
        description: "Website prototype for a local non-profit, based on stakeholder interviews. Built the membership page with login and registration forms.",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

export const EDUCATION = {
    degree: "Bachelor of Computer Science (General)",
    school: "University of Ruhuna",
    period: "Nov 2021 – Nov 2024",
    location: "Matara, Sri Lanka",
    gpa: "3.54"
};

export const CERTIFICATIONS = [
    { title: "IELTS", issuer: "Overall band score 6.5" },
    { title: "Python for Beginners", issuer: "University of Moratuwa" },
    { title: "Introduction to Java & Object-Oriented Programming", issuer: "Coursera" },
    { title: "Figma Project Certificate", issuer: "Coursera" }
];

export const ACHIEVEMENTS = [
    "Merit Certificate, Royal Australian Chemistry Quiz",
    "Participated in the Hack X 8.0 Inter-University Competition"
];
