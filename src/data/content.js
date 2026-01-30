import {
  User,
  Briefcase,
  Code,
  BookOpen,
  Heart,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Activity,
  Dice5,
  Guitar
} from 'lucide-react';

export const content = {
  personal: {
    name: "Thomas Agerbæk Ruby",
    role: "Aspiring IT Consultant | Project/Product Manager | Business Analyst | Or anything else :-)",
    tagline: "Bridging the gap between technical complexity and business value - and most importantly human interactions.",
    bio: "",
    email: "thomasagerbaekruby@gmail.com",
    location: "Copenhagen, Denmark",
    avatar: "/Thomas1.jpg",
    aboutImage: "/Thomas2.jpg",
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/thomas-agerbæk-ruby-5a226b220/", icon: Linkedin },
      { name: "Instagram", url: "https://www.instagram.com/roadingwithruby/", icon: Instagram },
      { name: "Strava", url: "https://www.strava.com/athletes/134140334", icon: Activity },
    ]
  },
  navigation: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Interests", href: "#interests" },
    { name: "Reading", href: "#reading" },
    { name: "Contact", href: "#contact" },
  ],
  experience: [
    {
      role: "Junior IT Consultant/Student Assistant",
      company: "Veo Technologies",
      period: "Jan 2024 - Jun 2025",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7VvrojfNa3nSu6XCepMb5BK0Fh7Yf9Cipw&s",
      description: "Acted as the technical link between commercial teams and Builders, ensuring data integrity and resolving complex system issues.",
      achievements: [
        "Identified and resolved critical billing errors in Adyen, directly leading to a measurable increase in sales",
        "Leveraged API tools to validate data flows and troubleshoot integration errors across Salesforce and Zuora.",
        "Translated urgent commercial needs from Sales Teams into precise technical specifications for the Builders team"
      ]
    },
    {
      role: "Student Assistant",
      company: "IT-University of Copenhagen",
      period: "2022 - 2024",
      logo: "https://itu.kattis.com/images/site-logo?v=85af2b62c3aaae1309b8c6b8e51f79f1",
      description: "Executed digital content optimization and data analysis to support the university's external communication platforms.",
      achievements: [
        "Conducted data analysis and visualization using PowerBI, Excel, and MarketingPlatform to track and report on digital performance metrics.",
        "Optimized and maintained university web pages using Sitecore CMS, ensuring high content quality and user engagement.",
        "Improved search engine visibility and web accessibility through technical SEO work using Monsido."
      ]
    },
    {
      role: "Shift Manager",
      company: "Joe & The Juice",
      period: "2018 - 2020",
      logo: "https://via.ritzau.dk/data/images/00421/c24f1b0b-221d-4521-a6b9-c919992cea92.png/social",
      description: "Managed daily operations and a team of 20+ staff at the Copenhagen Airport flagship store.",
      achievements: [
        "Selected to manage the highest revenue-generating unit globally ('Bar 2' in CPH Airport) after completing the rigorous 'Hell Week' leadership program.",
        "Assumed full leadership responsibility for a team of 20+ employees at the age of 20, ensuring high performance in a high-pressure environment."
      ]
    }
  ],
  projects: [
    {
      title: "Van Trip Through Europe",
      description: "A van trip through France, Spain, and Portugal in 2025",
      tech: ["Van", "Sleeping", "Eating", "Traveling"],
      link: "https://www.instagram.com/roadingwithruby/",
      images: [
        "/Car.jpg",
        "/Jones.jpg",
        "/Lisbon.jpg"

      ]
    },
    {
      title: "Master's Thesis",
      description: "Wrote my Master's Thesis 'Startup Meets Big Systems: A Case Study of Veo Technologies' at Copenhagen Business School",
      tech: ["Master's Thesis", "Case Study", "Veo Technologies", "Copenhagen Business School"],
      link: "/masters-thesis.pdf",
      images: [
        "/Master.jpg",
        "/Master2.jpg"
      ]
    },
    {
      title: "Fosbury Project",
      description: "Veo Technologies Large Scale Data Migration Project, migrating thousands of customers from Zola and Shopify to Salesforce and Zuora.",
      tech: ["Large Scale Data Migration", "Zola", "Shopify", "Salesforce", "Zuora"],
      link: "https://www.veo.com/about-us",
      images: [
        "Veo1.jpg",
        "Veo2.jpg",
        "Veo3.jpg"
      ]
    },
    {
      title: "Creation of this Website",
      description: "It's been a fun journey to create this website utilising my coding skills and learning about Google Antigravity",
      tech: ["JavaScript", "Google Antigravity", "CSS"],
      link: "#",
      images: [
        "/Websiteproject1.jpg",
      ]
    }
  ],
  skills: {
    technical: ["Project Management (Agile/Scrum)", "Zuora Subscription Management", "Jira & Asana", "JavaScript, Python, C#", "Data Analysis", "Microsoft Office", "Google Antigravity", "Salesforce", "Gemini, Claude, and ChatGPT"],
    soft: ["Stakeholder Management", "Strategic Planning", "Team Leadership", "Problem Solving", "Communication", "Change Management", "Post Mortems", "Presentation Skills", "Latte Art"]
  },
  interests: [
    {
      title: "Running & Working Out",
      description: "Running and working out keeps me sane and healthy. Last summer I ran a 27km run around Esrum Lake",
      icon: Heart,
      images: ["/Løb3.jpg", "/Løb2.jpg", "/Løb1.jpg"]
    },
    {
      title: "Dungeons & Dragons",
      description: "A few years ago i started gathering my friends and became a Dungeon Master.",
      icon: Dice5,
      images: ["/Dnd1.jpg", "/Dnd2.jpg"]
    },
    {
      title: "Guitar & Music",
      description: "I've been playing guitar since i 10 years old and continue to love it and love listeingin to 60's and 70's rock music",
      icon: Guitar,
      images: ["/Guitar1.jpg", "/Guitar2.jpg", "/Guitar3.jpg"]
    }
  ],
  reading: [
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      thoughts: "Really interesting book that got me into investing and thinking more about money.",
      cover: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHASP3z9ePoUq205aaf5MB1ROT1CFXSoH7C7rpAI8xaPyTx6rds0iKAeJKZ67HGPt3GS0-2E0v6xVBSVYFYy1eD3_Bcu4A0UH7gWkvA7xb&usqp=CAc" // Placeholder
    },
    {
      title: "Jellyfish Age Backwards",
      author: "Nicklas Brendborg",
      thoughts: "Nicklas Brendborgs masterpiece about how to live a healthy life, and what we can learn from science about aging",
      cover: "https://imgcdn.saxo.com/_9781529387933/0x500"
    },
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      thoughts: "The best fantasy book ever written.",
      cover: "https://imgcdn.saxo.com/_9780618640157"
    }
  ]
};
