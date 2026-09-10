/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";
import resume from "./containers/Resume/resume.pdf";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1600// Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nada Diyab",
  title: "Hello, It's me Nada",
  subTitle: emoji(
    "A passionate Software Engineer...having an experience of building Web applications with HTML / CSS/ JavaScript / Reactjs."
  ),
  resumeLink:
    resume, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Nadaai",
  linkedin: "https://www.linkedin.com/in/nadadiyab/",
  gmail: "diabn926@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/diab9646",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WHO BELIEVES IN TURNING CREATIVE IDEAS INTO SMART & IMAPCTFUL APPLICATIONS",
  skills: [
    emoji(
      "🌸 Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("🌸 Design interfaces that are not only visually engaging but also easy to navigate and enjoyable to use"),


  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },



  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Eastern Mediterranean University",
      logo: require("./assets/images/emu-logo.png"),
      subHeader: "BSc in Software Engineering",
      duration: "Sep 2021 - Jul 2025",
      descBullets: [
        "Awarded Best Graduation Project Certificate",
        "ABET Accredited"
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Almadar AL-jadid",
      companylogo: require("./assets/images/Almadar-logo.png"),
      date: "Jul 2024 – Sep 2024",
      desc: "Backend Development Intern",
      descBullets: [
        "Participated in the development of an Employee Management System as part of the backend team.",
        "Built RESTful APIs then integrated them with a connected database.",
        "Implemented and tested full CRUD operations to manage employee data securely and efficiently."
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Projects I have Helped Bring to Life",
  projects: [
    {
      image: require("./assets/images/TLS-logo.jpeg"),
      projectName: "STLS",
      projectDesc: "Secure Teams-Like System",
      footerLink: [
        {
          name: "Visit the link",
          url: "https://github.com/Nadaai/Term_Project_CMS353_v1.2.git"
        }

      ]
    },
    {
      image: require("./assets/images/hero-img.jpg"),
      projectName: "DENCO",
      projectDesc: "People Detection And Counting System",
      footerLink: [
        {
          name: "Visit the link",
          url: "https://github.com/itsjustfaith/DENCO.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),

  achievementsCards: [
    {
      title: "Certificate of Excellence",
      subtitle:
        " Certificate of Excellence Awarded in recognition of an outstanding Graduation project",
      image: require("./assets/images/emu-logo.png"),
      imageAlt: "Certificate of Excellence",
      footerLink: [
        {
          name: "Award Certificate",
          url: require("./assets/images/award.jpeg")
        },

      ]
    },
    {
      title: "Foundations of UX Design",
      subtitle:
        "Certificate of Completion foundation of UX design",
      image: require("./assets/images/Google-Logo-.png"),
      imageAlt: "UX Design certificate",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/ux-cert.jpeg")
        }
      ]
    },

    {
      title: "Introduction to AI",
      subtitle: "Certificate of Completion Introduction of AI",
      image: require("./assets/images/uhelsinki-unu-logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/AI-CERTIFICATE.jpeg")
        },

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 💗"),
  subtitle:
    "Get in touch with ME my Inbox is open for all.",
  number: "0918638016",
  email_address: "diabn926@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};

