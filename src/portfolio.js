import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 



const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000 
};




const greeting = {
  username: "Adel Alradaie",
  title: "Hi all, I'm Adel ",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with  Reactjs  / React Native / Laravel / Nodejs / MongoDB ..etc. Experienced in working on team-based projects and delivering high-quality solutions for clients. Adept at problem-solving and ensuring smooth project delivery. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/17EeN65baze7KA2uSNuAe2ks9z0CcqrmE/view?usp=drive_link", 
  displayGreeting: true 
};



const socialMediaLinks = {
  github: "https://github.com/AdelAlradaie",
  linkedin: "https://www.linkedin.com/in/adel-alradaie",
  gmail: "adelmohm209@gmail.com",
  display: true 
};



const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Building responsive Single-Page-Apps using react js"
    ),
    emoji("⚡Building Mobile App in React-Native"),
    emoji(
      "⚡ Building responsive static websites using React.js"
    ),
    emoji(
      "⚡ Building RESTful APIs in PHP & Laravel REST Framework "
    ),
    emoji(
      "⚡ Develop, implement, and maintain applications and systems that integrate MongoDB technology"
    )
  ],



  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },


  ],
  
};



const educationInfo = {
  
  schools: [
    {
      schoolName: "National University ",
      logo: require("./assets/images/nationalLogo.png"),
      subHeader: "Bachelor degree in Information Technology",
  
    },

  ]
};



const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false 
};



const workExperiences = [

    {
      role: "Front-End Developer",
      company: "YORK BRITISH ACADEMY",
      companylogo: require("./assets/images/york.jpg"),
      date: "June 2024 – Aug 2024",
       desc: "It's a startup in UK  ."
      
    },
    {
      role: "Full Stack Developer",
      company: "TECH.SOFT",
      companylogo: require("./assets/images/image_default.png"),
      date: "Aug 2024 – present",
       desc: "It's a startup in YE  developing websites and mobile apps."
    },

  
]






const Projects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/portfolio.JPG"),
      projectName: "Portfolio",
      projectDesc: "Software Developer Portfolio Template that helps you showcase your work and skills as a software developer. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://adelalradaie.github.io/"
        }
      ]
    },
    {
      image: require("./assets/images/hujwzat.JPG"),
      projectName: "Hujwzat",
      projectDesc: "built this project for a client of ( TECH.SOF ). ( React js - Laravel - TailwindCSS  ).. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hujwzat.com/"
        }
        
      ]
    },
    {
      image: require("./assets/images/vendor.JPG"),
      projectName: "Hujwzat-Vendor",
      projectDesc: "built this project for a client of ( TECH.SOF ). ( React js - Laravel - TailwindCSS  ).. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vendor.hujwzat.com/"
        }
      ]
    },
    
  ],

};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Front End Development Libraries",
      subtitle:
        "Completed 300+ hours of coursework on FreeCodeCamp",
      image: require("./assets/images/frontend.JPG"),
      imageAlt: " FreeCodeCamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/AdelAlradaie/front-end-development-libraries"
        },

      ]
    },
    {
      title: "Back End Development and APIS",
      subtitle:
        "Completed 300+ hours of coursework on FreeCodeCamp",
      image: require("./assets/images/frontend.JPG"),
      imageAlt: " FreeCodeCamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/AdelAlradaie/back-end-development-and-apis"
        }
      ]
    },

    {
      title: "Front End Developer (React)",
      subtitle: "Completed Certifcation from HackerRank for Front End Development",
      image: require("./assets/images/frontend-2.JPG"),
      imageAlt: "HackerRank",
      footerLink: [
        { name: "Certification", url: "https://www.hackerrank.com/certificates/iframe/d939e62fba75" },

      ]
    }
  ],

};


const profileInfo = {
  title: "Reach Out to me!",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    image:require("./assets/images/profile.jpg")
 
};



const isHireable = true;

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  Projects,
  achievementSection,
  profileInfo,
  isHireable,
};
