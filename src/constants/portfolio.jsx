import emoji from "react-easy-emoji";
import fullstack from "../assets/lottie/fullstack.json"
import cloudinfra from "../assets/lottie/cloudinfra.json"
import york from "../assets/images/york.png"
import instagram from "../assets/images/projects/instagram.png"
import blog from "../assets/images/projects/blog.png"
import portfolio from "../assets/images/projects/portfolio.png"
import mernstate from "../assets/images/projects/mernstate.png"
import hujwzat from "../assets/images/projects/hujwzat.png"
import vendor from "../assets/images/projects/vendor.png"
import { SiLaravel, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiDocker, SiPhp, SiNodedotjs, SiBootstrap, SiReact, SiNpm, SiRedux, SiFirebase, SiMongodb, SiGithub, SiWebpack, SiLinkedin } from 'react-icons/si';

export const greetings = {
    name: "Adel Alradaie",
    title: "Hi all, I'm Adel Alradaie",
    description:
        "I am a passionate and skilled Full Stack Developer with over 2 years of experience working with modern web and mobile technologies. My expertise lies in Node.js, React.js, React Native, and Laravel, allowing me to build robust, scalable, and user-friendly applications. I am dedicated to writing clean, efficient code and delivering high-quality solutions that exceed client expectations. Whether it's creating seamless web experiences or developing cross-platform mobile apps, I enjoy building complete solutions from front-end to back-end.",
    resumeLink:
        "https://drive.google.com/file/d/17EeN65baze7KA2uSNuAe2ks9z0CcqrmE/view?usp=drive_link",

};




export const socialLinks = {

    linkedin: "https://www.linkedin.com/in/adel-alradaie",
    github: "https://github.com/AdelAlradaie",

};

export const skillsSection = {
    title: "What I do",
    subTitle:
        "Skilled FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: fullstack, // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Building responsive Single-Page Applications (SPAs) using React.js"),
                emoji("⚡ Building mobile applications with React Native"),
                emoji("⚡ Building responsive static websites using React.js"),
                emoji("⚡Building RESTful APIs using PHP and the Laravel REST framework"),
            ],
            softwareSkills: [
                { Icon: <SiLaravel size={30} color='#FF2D20' />, title: 'Laravel' },
                { Icon: <SiJavascript size={30} color='#F7DF1E' />, title: 'JavaScript' },
                { Icon: <SiHtml5 size={30} color='#E34F26' />, title: 'HTML5' },
                { Icon: <SiCss3 size={30} color='#1572B6' />, title: 'CSS3' },
                { Icon: <SiTailwindcss size={30} color='#38B2AC' />, title: 'Tailwind CSS' },
                { Icon: <SiDocker size={30} color='#2496ED' />, title: 'Docker' },
                { Icon: <SiPhp size={30} color="#777BB4" />, title: 'PHP' },
                { Icon: <SiNodedotjs size={30} color='#339933' />, title: 'Node.js' },
                { Icon: <SiBootstrap size={30} color='#7952B3' />, title: 'Bootstrap' },
                { Icon: <SiRedux size={30} color="#764ABC" />, title: 'Redux' },
                { Icon: <SiNpm size={30} color="#CB3837" />, title: 'npm' },
                { Icon: <SiReact size={30} color="#61DAFB" />, title: 'React' },
                { Icon: <SiReact size={30} color="" />, title: 'React-Native' },



            ],
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: cloudinfra, // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Experience of working on multiple cloud platforms"),
                
                emoji("⚡ Develop, implement, and maintain applications and systems that integrate MongoDB technology"),
                emoji("⚡ Develop and maintain mobile and web applications using Firebase as a backend platform."),
            ],
            softwareSkills: [
                // ? Check README To get icon details
                { Icon: <SiMongodb size={30} color='#47A248' />, title: 'MongoDB' },

                { Icon: <SiFirebase size={30} color='#FFCA28' />, title: 'Firebase' },
                { Icon: <SiGithub size={30} color=' #181717' />, title: 'Github' },


            ],
        }
    ],
};

export const SkillBars = [
    {
        Stack: "Frontend/Design",
        progressPercentage: "90",
    },
    {
        Stack: "Backend",
        progressPercentage: "90",
    },
    {
        Stack: "Mobile/App",
        progressPercentage: "85",
    },

    {
        Stack: "Programming",
        progressPercentage: "90",
    },
];

export const educationInfo =
{
    schoolName: "National University",
    subHeader: "Bachelor degree in Information Technology",
    duration: "November 2020 - February 2024",
    desc: "",

}



export const experienceData = [
    {
        role: "Front-End Developer",
        company: "YORK BRITISH ACADEMY",
        companylogo: york,
        date: "2023-2024",
        desc: "It's a startup in UK .",
    },
    {
        role: "Full Stack Developer",
        company: "TECH.SOFT",
        companylogo: "",
        date: "2024-present",
        desc: "It's a startup in Ye .",
    },



];

export const projects = [
    {
        name: "Hujwzat",
        desc: "built this project for a client of ( TECH.SOF ). ( React js - Laravel - TailwindCSS  - Webppack ).. ",
        github: "",
        link: "https://hujwzat.com/",
        images: [
            {
                link: hujwzat
            }
        ],
        technologies: [
            { Icon: <SiReact size={25} color="#61DAFB"  />, title: 'React' },
            { Icon: <SiLaravel size={25} color='#FF2D20' />, title: 'Laravel' },
            { Icon: <SiWebpack size={25} color="blue" />, title: 'WebPack' },
            { Icon: <SiTailwindcss size={25} color='#38B2AC' />, title: 'Tailwind CSS' },
            { Icon: <SiNpm size={25} color="#CB3837" />, title: 'npm' },

        ]
    },
    {
        name: "Hujwzat-Vendor",
        desc: "built this project for a client of ( TECH.SOF ). ( React js - Laravel - TailwindCSS  - Webppack ).. ",
        github: "",
        link: "https://vendor.hujwzat.com/",
        images: [
            {
                link: vendor
            }
        ],
        technologies: [
            { Icon: <SiReact size={25} color="#61DAFB" />, title: 'React' },
            { Icon: <SiLaravel size={25} color='#FF2D20' />, title: 'Laravel' },
            { Icon: <SiWebpack size={25} color="blue" />, title: 'WebPack' },
            { Icon: <SiTailwindcss size={25} color='#38B2AC' />, title: 'Tailwind CSS' },
            { Icon: <SiNpm size={25} color="#CB3837" />, title: 'npm' },

        ]
    },
    {
        name: "Blog-Website",
        desc: "Fullstack Blog website with admin-panel Built With Laravel 11 , Filament-php , Tailwind-Css. ",
        github: "https://github.com/AdelAlradaie/Laravel-blog",
        // link: "",
        images: [
            {
                link: blog
            }
        ],
        technologies: [
            { Icon: <SiLaravel size={25} color='#FF2D20' />, title: 'Laravel' },
            { Icon: <SiTailwindcss size={25} color='#38B2AC' />, title: 'Tailwind CSS' },


        ]
    },
    {
        name: "instagram-clone",
        desc: "Fullstack Instagram Clone Built With React, Firebase && Chakra UI. ",
        github: "https://github.com/AdelAlradaie/Instagram-clone",
        link: "https://insta-24255.web.app",
        images: [
            {
                link: instagram
            }
        ],
        technologies: [
            { Icon: <SiReact size={25} color="#61DAFB" />, title: 'React' },
            { Icon: <SiFirebase size={25} color='#FFCA28' />, title: 'Firebase' },
            { Icon: <SiNpm size={25} color="#CB3837" />, title: 'npm' },

        ]
    },
    {
        name: "Portfolio",
        desc: "Software Developer Portfolio  built with react.js and tailwindcss that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/AdelAlradaie/adelalradaie.github.io",
        link: "https://adelalradaie.github.io",
        images: [
            {
                link: portfolio
            }
        ],
        technologies: [
            { Icon: <SiReact size={25} color="#61DAFB" />, title: 'React' },
            { Icon: <SiTailwindcss size={25} color='#38B2AC' />, title: 'Tailwind CSS' },
            { Icon: <SiHtml5 size={25} color='#E34F26' />, title: 'HTML5' },
            { Icon: <SiCss3 size={25} color='#1572B6' />, title: 'CSS3' },


        ]
    },
    {
        name: "Merne-Estate",
        desc: "Real Estate app using MERN and tailwind css ( React js - Node js - MongoDB, Firebase ).",
        github: "https://github.com/AdelAlradaie/mern-state",
        link: "https://mernestate-ir4m.onrender.com/",
        images: [

            {
                link: mernstate
            }
        ],
        technologies: [
            { Icon: <SiReact size={25} color="#61DAFB" />, title: 'React' },
            { Icon: <SiMongodb size={25} color='#47A248' />, title: 'MongoDB' },
            { Icon: <SiNodedotjs size={25} color='#339933' />, title: 'Node.js' },
            { Icon: <SiFirebase size={25} color='#FFCA28' />, title: 'Firebase' },
            { Icon: <SiTailwindcss size={25} color='#38B2AC' />, title: 'Tailwind CSS' },



        ]
    },



];

export const FooterDetails = {
    title: "Reach Out to me!",
    desc: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL",
    email: "adelmohm209@gmail.com"
}




