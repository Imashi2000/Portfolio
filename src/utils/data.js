export const SKILLS = [
    {
        title: "Frontend Development",
        icon: "./assets/images/Frontend.png",
        skills: [
            { skill: "ReactJS", percentage: "60%" },
            { skill: "Flutter", percentage: "70%" },
            { skill: "JavaScript", percentage: "30%" },
            { skill: "HTML", percentage: "70%" },
            { skill: "CSS", percentage: "70%" },
        ]
    },
    {
        title: "Backend Development",
        icon: "./assets/images/Backend (2).png",
        skills: [
            { skill: ".NET Core", percentage: "60%" },
            { skill: "Node.js", percentage: "50%" },
            { skill: "Express.js", percentage: "30%" },
            { skill: "PHP", percentage: "40%" },
            { skill: "Java", percentage: "60%" },
            { skill: "C#", percentage: "60%" },
            { skill: "Python", percentage: "40%" },
        ]
    },
    {
        title: "Databases & Cloud",
        icon: "./assets/images/Database (2).png",
        skills: [
            { skill: "MSSQL", percentage: "80%" },
            { skill: "MySQL", percentage: "80%" },
            { skill: "MongoDB", percentage: "80%" },
            { skill: "Firebase", percentage: "20%" },
            { skill: "Microsoft Azure", percentage: "70%" }
        ]
    },
    {
        title: "DevOps & Tools",
        icon: "./assets/images/devops.png",
        skills: [
            { skill: "Docker", percentage: "40%" },
            { skill: "CI/CD Pipelines", percentage: "60%" },
            { skill: "Helm", percentage: "30%" },
            { skill: "GIT/GitHub", percentage: "70%" },
            { skill: "Trello", percentage: "80%" },
            { skill: "Postman", percentage: "70%" }
        ]
    },
    {
        title: "Software & Applications",
        icon: "./assets/images/applications.png",
        skills: [
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Android Studio", percentage: "80%" },
            { skill: "Netbeans", percentage: "60%" },
            { skill: "MATLAB", percentage: "60%" },
            { skill: "Microsoft Office", percentage: "80%" },
            { skill: "Figma", percentage: "70%" },
        ]
    },
    {
        title: "Operating Systems",
        icon: "./assets/images/operating-system.png",
        skills: [
            { skill: "Windows", percentage: "80%" },
            { skill: "Linux", percentage: "50%" },
        ]
    }
];

export const PROJECT = [
    {
        title: "My Sri Lanka - Final year project",
        description: "Developed a tourism mobile application for tourists visiting Sri Lanka, enabling them to select travel packages tailored to their needs. Implemented an admin dashboard to automate client work, increasing efficiency and reducing manual errors.",
        contribution: [
            "Developed and implemented front-end components in Flutter, including the sign-up page, question pages, home page, day trip package page, A-Z Sri Lanka page, and festival page.",
            "Integrated front-end components with the backend, enhancing app functionality and user experience.",
            "Designed and developed festival page and A-Z Sri Lanka CRUD operations (frontend and backend) for the admin dashboard."
        ],
        technologies: "Technologies used: Flutter, React JS, MongoDB, Express JS, NodeJS.",
        images: ["./assets/images/1.PNG", "./assets/images/2.PNG", "./assets/images/3.PNG", "./assets/images/4.PNG"]
    },

    {
        title: "Hospital Appointment System",
        description: "Developed a hospital appointment system that facilitates registration for doctors, patients, and administrators using C# and SQL Server.",
        contribution: [
            "Designed and implemented patient registration management, including full CRUD operations for administrators.",
            "Developed patient registration forms to streamline patient onboarding."
        ],
        technologies: "Technologies used: C#, MSSQL.",
        images: ["https://www.rd.com/wp-content/uploads/2019/11/mangabey-e1574795521527.jpg", "https://www.rd.com/wp-content/uploads/2019/11/mangabey-e1574795521527.jpg"]
    },

    {
        title: "Itinerary Planner Desktop Application",
        description: "Implemented trip planning functionality in a desktop application, allowing users to create, view, and manage their travel itineraries.",
        contribution: [
            "Designed and developed login and registration pages."
        ],
        technologies: "Technologies used: Java, MySQL, XAMPP.",
        images: ["https://www.rd.com/wp-content/uploads/2019/11/mangabey-e1574795521527.jpg", "https://www.rd.com/wp-content/uploads/2019/11/mangabey-e1574795521527.jpg"]
    },

    {
        title: "Frontend Website for Shanthi Children's Society",
        description: "Developed a prototype website for a local non-profit organization, Shanthi Children's Society, based on information gathered through interviews with stakeholders.",
        contribution: [
            "Developed the membership page, including login and registration forms using JavaScript for secure user authentication."
        ],
        technologies: "Technologies used: HTML, CSS, JavaScript.",
        images: ["https://www.rd.com/wp-content/uploads/2019/11/mangabey-e1574795521527.jpg", "https://www.rd.com/wp-content/uploads/2019/11/mangabey-e1574795521527.jpg"]
    }
];
