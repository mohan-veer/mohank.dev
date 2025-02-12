/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohan Kalyan Veeraghanta",
  title: "¡Hola, I'am Mohan",
  subTitle: emoji(
    "Transforming tricky challenges into clean, scalable code."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mohan-veer",
  linkedin: "https://www.linkedin.com/in/mohan-veeraghanta-9b55a1201/",
  gmail: "mohan.veeraghanta99@gmail.com",
  //gitlab: "https://gitlab.com/",
  //facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  //stackoverflow: "https://stackoverflow.com/users/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER CRAFTING SCALABLE SYSTEMS & INTELLIGENT SOLUTIONS-BRIDGING CODE, DATA AND AI TO SOLVE REAL-WORLD CHALLENGES",
  skills: [
    emoji(
      "⚡ Develop intelligent web applications by integrating Full-Stack web development with Machine Learning and NLP to deliver data-driven, smart solutions"
    ),
    emoji("⚡ Design and implement scalable systems that ensure reliability and performance while accommodating future growth."),
    emoji(
      "⚡ Integrate third-party services such as AWS and MuleSoft to extend functionality and enhance system interoperability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/ufLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - ",
      desc: "Learning advanced concepts in core courses",
      descBullets: [
        "Completed core coursework in the first semester, including Mathematics for Intelligent Systems, Distributed Operating Systems, and Advanced Data Structures, achieving a strong GPA of 3.89.",
        "Currently pursuing advanced courses in Data Science, Software Engineering, and Natural Language Processing, focusing on practical applications and research-driven methodologies"
      ]
    },
    {
      schoolName: "Institute of Aeronautical Engineering",
      logo: require("./assets/images/iareLogo.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2016 - October 2020",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Data Structure and Algorithms, Operating Systems, ...",
      descBullets: [
        "Worked on Projects related to Natural Language processing, and computer vision.",
        "Won the technical summit best competition award in 2018.",
        "Was the core committee member for the technical and cultural fest."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning and Natural Language Processing",
      progressPercentage: "85%"
    },
    {
      Stack: "Front end",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
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
      company: "Q2 Software Inc.",
      companylogo: require("./assets/images/q2logo.jpg"),
      date: "April 2021 – July 2024",
      desc: "",
      descBullets: [
        "Worked in Loan and Lease end-to-end product development.",
        "Designed and implemented new financial calculator using PV formula which reduced the schedule generation time by 70%.",
        "Developed predictive models for loan repayment behavior using survival analysis, and Bayesian networks, improving delinquency risk identification by 20%.",
        "Engineered scalable code optimization techniques using triggers, Async Apex, and Cron jobs to meet Salesforce Apex governor limits, including query limits, heap size, and CPU timeouts.",
        "Implemented an OCR-based solution for extracting and verifying customer info from documents, streamlining fintech onboarding",
        "Built global APIs and REST APIs in Salesforce for 3rd party integration of application via AWS.",
        "Designed and developed new user interfaces for the product using LWC, Visual force and Aura components in Salesforce.",
      ]
    },
    {
      role: "Applied Research Intern",
      company: "IIT Bombay",
      companylogo: require("./assets/images/iitBombay.jpg"),
      date: "Oct 2020 – Jan 2021",
      desc: "",
      descBullets: [
        "Supervised the complete end-end pipeline of Sanskrit books digitization project “Akshar-Anveshini”",
        "Developed an OCR model using Attention LSTM to detect the Sanskrit text in old archives, achieving 92.4%-word level accuracy.",
        "Implemented agile methodologies for developing and deploying a web application using Django on AWS EC2.",
        "Developed scripts to generate synthetic data combining Sanskrit and English text, mimicking natural language patterns.",
        "Created datasets through web scrapping, adapted layout annotation tool for digitizing Sanskrit books and quantitative analysis of other state of art OCR engines."
      ]
    },
    {
      role: "Application Development Intern",
      company: "Electronics Corporation of India Ltd.",
      companylogo: require("./assets/images/ecilLogo.png"),
      date: "June 2018 – July 2018",
      desc: "",
      descBullets: ["Developed a biometric-based e-voting application offering online voter registration. Managed both front-end and back-end development, leveraging object-oriented programming (OOP) to implement key features, ensuring efficient and scalable code. Contributed to a seamless user experience with a focus on security and functionality.",
        "Acquired extensive hands-on expertise in testing and debugging processes, greatly enhancing coding abilities and sharpening problem-solving techniques, especially in handling intricate algorithms."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects that I have done for Hackathons, Academics and Fun",
  projects: [
    {
      image: require("./assets/images/faap.png"),
      projectName: "FAAP – Food Access and Availability Predictor",
      projectDesc: "A web application to assess the demand and supply for a “crop yield” with respect to “state/region”. Developed using Python, Flask, IBM cloud and Deep Learning.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/mohan-veer/Food-Access-and-Availability-Predictor---FAAP"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eyeEarImage.png"),
      projectName: "Nethra",
      projectDesc: "An android application which detects and recognizes the objects and specifies them to the user by converting the text to speech. It is useful for visually challenged people for identifying objects in their surroundings.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/mohan-veer/Nethra-A-vision-in-dark"
        }
      ]
    },
    {
      image: require("./assets/images/summary.png"),
      projectName: "Text Summarizer",
      projectDesc: "An Extractive Text Summarization approach using sentence and word frequency analysis to generate concise summaries, implemented with advanced NLP techniques to efficiently extract key information.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/mohan-veer/Text-Summarization"
        }
      ]
    },
    {
      image: require("./assets/images/vision.png"),
      projectName: "LR Software",
      projectDesc: "Built a Neural Network for Letter Recognition in MATLAB, without external libraries, to classify handwritten characters by focusing on feature extraction and pattern recognition.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/mohan-veer/Hand-Written-Letter-Recognition-using-Neural-Network"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Q2 Leader's Choice Award",
      subtitle:
        "Surpassed team expectations by introducing innovative problem-solving approaches and resolving complex, high-impact issues for key customers like Merchant Money. Proactively identified and addressed previously unreported system inefficiencies, enhancing platform stability and customer satisfaction.",
      image: require("./assets/images/Q2LeaderChoice.png"),
      imageAlt: "Google Code-In Logo",
      /*footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]*/
    },
    {
      title: "Q2 Community Contributor 2022",
      subtitle:
        "Designed and developed an internal tool to streamline the creation and deployment of Salesforce orgs, significantly accelerating the process. The tool was adopted by multiple teams, enhancing workflow efficiency and reducing deployment time. Recognized with the Q2 Community Contributor Award for its impact on operational productivity",
      image: require("./assets/images/Q2Community.png"),
      imageAlt: "Q2 Community Contributor 2022 Logo",
      /*footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]*/
    },

    {
      title: "Salesforce Platform Developer - I",
      subtitle: "Completed Certification in Salesforce as a Platform Developer",
      image: require("./assets/images/PD-1.png"),
      imageAlt: "Salesforce PD-1 logo",
      /*footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]*/
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
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "mohan.veeraghanta99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "opinionMario", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
