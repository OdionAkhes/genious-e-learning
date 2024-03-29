/** @format */

// courses.js
import animationImage from "../assets/animation.png";
import designImage from "../assets/design.png";
import scratchImage from "../assets/scratch.png";
import psychologyImage from "../assets/psycology.png";
import developmentImage from "../assets/development.png";
import pythonImage from "../assets/python.png";
import drawingImage from "../assets/drawing.png"
import googleImage from "../assets/googlead.png"
import artificialImage from "../assets/AI.png"
import javascript1 from "../assets/javascript.png";
import jsImage from "../assets/js.png";
import awsImage from "../assets/awsImage.png";
// import course13Image from "../assets/python.png";
// import course14Image from "../assets/python.png";
// import course15Image from "../assets/python.png";



const courses = [
  {
    id: "1",
    name: "Learning  Maxon  4D  Trainingg Course",
    image: animationImage,
    price: 140,
    duration: "10h 5m",
    lessons: 10,
    enrollments: 1900,
    category: "4D Animation",
    coursesIncluded: 6,
    downloads: 70,
    positiveReviews: 45,
    students: 2167,

    availability: "Available from the app",
    audio: "Spanish",
    level: "Beginner",
    subcourses: [
      {
        name: "Introduction",
        units: [
          { title: " Presentation", completed: true },
          { title: " Job opportunities ", completed: true },
          {
            title: " How to get the most...",
            completed: false,
          },
          {
            title: " How to get the most...",
            completed: false,
          },
          {
            title: "Interface and the...",
            completed: false,
          },
          {
            title: " Volume with vectors",
            completed: false,
          },
          {
            title: " Symmetry, connector...",
            completed: false,
          },
          {
            title: " Add and remove lines...",
            completed: false,
          },
        ],
      },
      {
        name: "Learn Manufacturing",

        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: " Mograph (cloner)", completed: false },
          { title: " How to get the most...", completed: false },
          { title: " Interface and the...", completed: false },
          { title: "Interface and the...", completed: false },
          { title: " Symmetry, connector...", completed: false },
          { title: " Practice: first charac...", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
    ],

    discountPrice: 80,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tags: ["Sketch", "Product Design", "Tuts", "UI/UX"],

    description: `IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 
    
    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

  Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.`,
  },

  {
    id: "2",
    name: "Design Thinking: The Beginner’s Guide",
    image: designImage,
    price: 130,
    duration: "10h 5m",
    lessons: 15,
    category: "Design",
    enrollments: 1900,
    level: "Beginner",
    subcourses: [
      {
        name: "Introduction",
        units: [
          { title: " Presentation", completed: true },
          { title: " Job opportunities (career profile)", completed: true },
          {
            title: " How to get the most...",
            completed: false,
          },
          {
            title: " How to get the most...",
            completed: false,
          },
          {
            title: "Interface and the...",
            completed: false,
          },
          {
            title: " Volume with vectors",
            completed: false,
          },
          {
            title: " Symmetry, connector...",
            completed: false,
          },
          {
            title: " Add and remove lines...",
            completed: false,
          },
        ],
      },
      {
        name: "Learn Manufacturing",

        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: " Mograph (cloner)", completed: false },
          { title: " How to get the most...", completed: false },
          { title: " Interface and the...", completed: false },
          { title: "Interface and the...", completed: false },
          { title: " Symmetry, connector...", completed: false },
          { title: " Practice: first charac...", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
    ],

    discountPrice: 80,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tags: ["Sketch", "Product Design", "Tuts", "UI/UX"],

    description: `IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 
    
    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

  Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.`,
  },
  {
    id: "3",
    name: "Become a Ux Designer fromm Scratch",
    image: scratchImage,
    price: 220,
    duration: "10h 5m",
    category: "Scratch",
    lessons: 8,

    enrollments: 1900,
    level: "Beginner",
    subcourses: [
      {
        name: "Introduction",
        units: [
          { title: " Presentation", completed: true },
          { title: " Job opportunities (career profile)", completed: true },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: "Interface and the...",
            completed: false,
          },
          {
            title: " Volume with vectors",
            completed: false,
          },
          {
            title: " Symmetry, connector...",
            completed: false,
          },
          {
            title: " Add and remove lines...",
            completed: false,
          },
        ],
      },
      {
        name: "Learn Manufacturing",

        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: " Mograph (cloner)", completed: false },
          { title: " How to get the most...", completed: false },
          { title: " Interface and the...", completed: false },
          { title: "Interface and the...", completed: false },
          { title: " Symmetry, connector...", completed: false },
          { title: " Practice: first charac...", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
    ],

    discountPrice: 80,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tags: ["Sketch", "Product Design", "Tuts", "UI/UX"],

    description: `IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 
    
    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

  Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.`,
  },
  {
    id: "4",
    name: `Psychology and Web Design:
Ulitmate Guide`,
    image: psychologyImage,
    price: 200,
    duration: "4h 15m",
    category: "Psychology",
    lessons: 20,
    level: "Beginner",
    enrollments: 1200,
    subcourses: [
      {
        name: "Introduction",
        units: [
          { title: " Presentation", completed: true },
          { title: " Job opportunities (career profile)", completed: true },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: "Interface and the...",
            completed: false,
          },
          {
            title: " Volume with vectors",
            completed: false,
          },
          {
            title: " Symmetry, connector...",
            completed: false,
          },
          {
            title: " Add and remove lines...",
            completed: false,
          },
        ],
      },
      {
        name: "Learn Manufacturing",

        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: " Mograph (cloner)", completed: false },
          { title: " How to get the most...", completed: false },
          { title: " Interface and the...", completed: false },
          { title: "Interface and the...", completed: false },
          { title: " Symmetry, connector...", completed: false },
          { title: " Practice: first charac...", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
    ],

    discountPrice: 80,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tags: ["Sketch", "Product Design", "Tuts", "UI/UX"],

    description: `IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 
    
    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

  Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.`,
  },
  {
    id: "5",
    name: "The Complete 2021 Web Development Bootcamp",
    image: developmentImage,
    price: 350,
    category: "Development",
    duration: "2h 15m",
    lessons: 12,
    level: "Beginner",
    enrollments: 1600,
    subcourses: [
      {
        name: "Introduction",
        units: [
          { title: " Presentation", completed: true },
          { title: " Job opportunities (career profile)", completed: true },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: "Interface and the...",
            completed: false,
          },
          {
            title: " Volume with vectors",
            completed: false,
          },
          {
            title: " Symmetry, connector...",
            completed: false,
          },
          {
            title: " Add and remove lines...",
            completed: false,
          },
        ],
      },
      {
        name: "Learn Manufacturing",

        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: " Mograph (cloner)", completed: false },
          { title: " How to get the most...", completed: false },
          { title: " Interface and the...", completed: false },
          { title: "Interface and the...", completed: false },
          { title: " Symmetry, connector...", completed: false },
          { title: " Practice: first charac...", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
    ],

    discountPrice: 80,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tags: ["Sketch", "Product Design", "Tuts", "UI/UX"],

    description: `IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 

    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

  Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.`,
  },
  {
    id: "6",
    name: "Python for Data Science and Machine Learning",
    image: pythonImage,
    price: 199,
    category: "Python",
    duration: "1h 30m",
    lessons: 7,
    level: "Beginner",
    enrollments: 1900,
  },
  {
    id: "7",
    name: "The Complete 2021 Web Development Bootcamp",
    image: developmentImage,
    price: 199,
    category: "Artificial",
    duration: "3h 30m",
    lessons: 14,
    level: "Beginner",
    enrollments: 700,
  },
  {
    id: "8",
    name: "Python for Data Science and Machine Learning",
    image: developmentImage,
    price: 399,
    duration: "2h 45m",
    lessons: 11,
    category: "Python",
    enrollments: 550,
  },
  {
    id: "9",
    name: "Artificial Intelligence & Machine Learning",
    image: artificialImage,
    price: 300,
    duration: "5h 30m",
    lessons: 25,
    category: "Artificial",
    level: "Beginner",
    enrollments: 1500,
    subcourses: [
      {
        name: "Introduction",
        units: [
          { title: " Presentation", completed: true },
          { title: " Job opportunities (career profile)", completed: true },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: " How to get the most out of this course!",
            completed: false,
          },
          {
            title: "Interface and the...",
            completed: false,
          },
          {
            title: " Volume with vectors",
            completed: false,
          },
          {
            title: " Symmetry, connector...",
            completed: false,
          },
          {
            title: " Add and remove lines...",
            completed: false,
          },
        ],
      },
      {
        name: "Learn Manufacturing",

        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: " Mograph (cloner)", completed: false },
          { title: " How to get the most...", completed: false },
          { title: " Interface and the...", completed: false },
          { title: "Interface and the...", completed: false },
          { title: " Symmetry, connector...", completed: false },
          { title: " Practice: first charac...", completed: false },
        ],
      },
      {
        name: "Field Experience testing modules & investers!",
        units: [
          { title: " Spontaneous character", completed: true },
          { title: " Deformers", completed: true },
          { title: "Mograph (cloner)", completed: false },
        ],
      },
    ],

    discountPrice: 80,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tags: ["Sketch", "Product Design", "Tuts", "UI/UX"],

    description: `IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 

    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

  Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.`,
  },
  {
    id: "10",
    name: "Design of Graphic Elements to Boost Your Brand",
    image: javascript1,
    price: 178,
    category: "Design",
    duration: "3h 15m",
    lessons: 13,
    enrollments: 650,
  },
  {
    id: "11",
    name: "The Complete JavaScript Course 2021",
    image: jsImage,
    price: 260,
    duration: "1h 15m",
    category: "javascript",
    lessons: 6,
    enrollments: 200,
  },
  {
    id: "12",
    name: "Ultimate Google Ads Training 2021: Profit with Pay Per Click",
    image: googleImage,
    price: 410,
    category: "Google Ads",
    duration: "6h 15m",
    lessons: 30,
    enrollments: 1800,
  },
  {
    id: "13",
    name: "Course 1The Ultimate Drawing Course - Beginner to Advanced",
    image: drawingImage,
    price: 370,
    category: "Drawing",
    duration: "4h 30m",
    lessons: 18,
    enrollments: 900,
  },
  {
    id: "14",
    name: "AWS Certified Solutions Architect - Associate 2021",
    image: awsImage,
    price: 59.99,
    duration: "3h 30m",
    category: "Design",
    lessons: 14,
    enrollments: 700,
  },
  {
    id: "15",
    name: "Course 15",
    image: developmentImage,
    price: 49.99,
    duration: "2h 30m",
    lessons: 10,
    enrollments: 500,
  },
];

export default courses;


