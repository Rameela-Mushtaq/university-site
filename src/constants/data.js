import { Arrow } from "@/svgs/arrow";
import { Arrow2 } from "@/svgs/arrow2";
import { Contact } from "@/svgs/contact";
import { Contact1 } from "@/svgs/contact1";
import { Footer1 } from "@/svgs/footer1";
import { Footer2 } from "@/svgs/footer2";
import { Footer3 } from "@/svgs/footer3";
import { CgChevronDown } from "react-icons/cg";
import { FaFilePen } from "react-icons/fa6";
import { PiHeadsetFill } from "react-icons/pi";

export const NavbarData = [
  {
    label: "ACADEMICS",
    icon: <CgChevronDown />,
    dropdown: [
      { label: "Undergraduate Programs" },
      { label: "Graduate Programs" },
      { label: "Online Courses" },
    ],
  },
  {
    label: "ADMISSION & AID",
    icon: <CgChevronDown />,
    dropdown: [
      { label: "How to Apply" },
      { label: "International Admission" },
      { label: "Scholarships" },
      { label: "ACPC Help Center" },
      { label: "Fees Breakdown" },
    ],
  },
  {
    label: "LIFE AT UNIVERSITY",
    icon: <CgChevronDown />,
    dropdown: [
      { label: "Campus Life" },
      { label: "Student Clubs" },
      { label: "Housing" },
    ],
  },
  {
    label: "CENTERS",
    icon: <CgChevronDown />,
    dropdown: [
      { label: "Campus Life" },
      { label: "Student Clubs" },
      { label: "Housing" },
    ],
  },
  {
    label: "PLACEMENTS",
  },
  {
    label: "EVENTS",
    icon: <CgChevronDown />,
    dropdown: [
      { label: "Upcoming Events" },
      { label: "Past Events" },
      { label: "Event Calendar" },
    ],
  },
  {
    label: "ABOUT US",
    icon: <CgChevronDown />,
    dropdown: [
      { label: "History" },
      { label: "Mission & Vision" },
      { label: "Leadership" },
    ],
  },
];

export const CoursesData = [
  {
    "Undergraduate Programme": [
      {
        id: 1,
        title: "Engineering",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource1.png",
        icon: "/images/icon1.png",
      },
      {
        id: 2,
        title: "Pharmacy",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource2.png",
        icon: "/images/icon2.png",
      },
      {
        id: 3,
        title: "Arts",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource3.png",
        icon: "/images/icon3.png",
      },
      {
        id: 4,
        title: "Law",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource4.png",
        icon: "/images/icon4.png",
      },
      {
        id: 5,
        title: "Management",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource5.png",
        icon: "/images/icon6.png",
      },
      {
        id: 6,
        title: "Science",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource6.png",
        icon: "/images/icon5.png",
      },
    ],
  },

  {
    "Postgraduate Programme": [
      {
        id: 1,
        title: "Engineering",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource2.png",
        icon: "/images/icon1.png",
      },
      {
        id: 2,
        title: "Arts",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource1.png",
        icon: "/images/icon3.png",
      },
      {
        id: 3,
        title: "Pharmacy",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource3.png",
        icon: "/images/icon2.png",
      },
      {
        id: 4,
        title: "Management",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource5.png",
        icon: "/images/icon6.png",
      },
      {
        id: 5,
        title: "Law",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource4.png",
        icon: "/images/icon4.png",
      },
      {
        id: 6,
        title: "Science",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource6.png",
        icon: "/images/icon5.png",
      },
    ],
  },
  {
    "Diploma Course": [
      {
        id: 1,
        title: "Engineering",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource4.png",
        icon: "/images/icon1.png",
      },
      {
        id: 2,
        title: "Pharmacy",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource2.png",
        icon: "/images/icon2.png",
      },
      {
        id: 3,
        title: "Arts",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource3.png",
        icon: "/images/icon3.png",
      },
      {
        id: 4,
        title: "Law",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource1.png",
        icon: "/images/icon4.png",
      },
      {
        id: 5,
        title: "Management",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource5.png",
        icon: "/images/icon5.png",
      },
      {
        id: 6,
        title: "Science",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource6.png",
        icon: "/images/icon6.png",
      },
    ],
  },
  {
    PHD: [
      {
        id: 1,
        title: "Engineering",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource5.png",
        icon: "/images/icon1.png",
      },
      {
        id: 2,
        title: "Arts",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource3.png",
        icon: "/images/icon3.png",
      },
      {
        id: 3,
        title: "Pharmacy",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource2.png",
        icon: "/images/icon2.png",
      },
      {
        id: 4,
        title: "Management",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource1.png",
        icon: "/images/icon6.png",
      },
      {
        id: 5,
        title: "Law",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource4.png",
        icon: "/images/icon4.png",
      },
      {
        id: 6,
        title: "Science",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource6.png",
        icon: "/images/icon5.png",
      },
    ],
  },
  {
    "Online Course": [
      {
        id: 1,
        title: "Engineering",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource3.png",
        icon: "/images/icon1.png",
      },
      {
        id: 2,
        title: "Pharmacy",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource2.png",
        icon: "/images/icon2.png",
      },
      {
        id: 3,
        title: "Arts",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource1.png",
        icon: "/images/icon3.png",
      },
      {
        id: 4,
        title: "Law",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource4.png",
        icon: "/images/icon4.png",
      },
      {
        id: 5,
        title: "Management",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource5.png",
        icon: "/images/icon5.png",
      },
      {
        id: 6,
        title: "Science",
        description:
          "Develop leadership and strategic skills in finance, marketing, HR, and operations for business success.",
        image: "/images/cource6.png",
        icon: "/images/icon6.png",
      },
    ],
  },
];

export const WhyUsData = [
  {
    icon: "/images/no1.png",
    number: "A+",
    title: "NAAC Accredited",
  },
  {
    icon: "/images/no2.png",
    number: "250",
    title: "Global Alliance",
  },
  {
    icon: "/images/no3.png",
    number: "50+",
    title: "Parents Filed",
  },
  {
    icon: "/images/no4.png",
    number: "10K+",
    title: "Scholarships given",
  },
];

export const FacilityDate = [
  { name: "Hostels", image: "/images/facility1.png", dot: "." },
  { name: "Transportation", image: "/images/facility1.png", dot: "." },
  { name: "Library", image: "/images/facility1.png", dot: "." },
  { name: "Physical Education", image: "/images/facility1.png",  },
  { name: "Student Clubs", image: "/images/facility1.png", dot: "." },
  { name: "Music & Dance", image: "/images/facility1.png", dot: "." },
  { name: "Cafeteria", image: "/images/facility1.png",  },
  { name: "Amphitheatre", image: "/images/facility1.png", dot: "." },
  { name: "Medical Room", image: "/images/facility1.png", dot: "." },
  { name: "Lake and Jogging Track", image: "/images/facility1.png",  },
  { name: "Highly Secure", image: "/images/facility1.png",dot: "." },
  { name: "Auditorium", image: "/images/facility1.png", dot: "." },
  { name: "Banking and ATM Facilities", image: "/images/facility1.png",},
  { name: "Sports Club", image: "/images/facility1.png",  dot: "."  },
  { name: "Advanced Labs", image: "/images/facility1.png", dot: "." },
  { name: "Students Club", image: "/images/facility1.png",  },
];

export const CampusData1 = [
  {
    image: "/images/campus1.png",
    title: "Campus Beats"
  },
  {
    image: "/images/campus2.png",
    title: "Sports"
  },
  {
    image: "/images/campus3.png",
    title: "Culture Festivals"
  },
  {
    image: "/images/campus4.png",
    title: "Mu fest"
  },
]

export const CampusData2 = [
  {
    image: "/images/campus5.png",
    title: "Students Clubs"
  },
  {
    image: "/images/campus6.png",
    title: "Cafeteria"
  },
  {
    image: "/images/campus7.png",
    title: "Advanced labs"
  },
]

export const StoryData = [
  {
    "STUDENTS" : [
      {
        id: 1,
        text: "In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made",
        name: "Zubery",
        course: "B.Tech (CSE)",
        flag: "/images/flag.png",
        tags: ["skills", "Transport", "food", "Support"],
        centerImage: "/images/story.png",
        leftImage: "/images/story1.png",
        rightImage: "/images/story2.png",
      },
      {
        id: 2,
        text: "In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful.",
        name: "Ayesha",
        course: "M.Tech (ECE)",
        flag: "/images/flag.png",
        tags: ["learning", "faculty", "career"],
        centerImage: "/images/story.png",
        leftImage: "/images/story2.png",
        rightImage: "/images/story1.png",
      },
      {
        id: 3,
        text: "In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made",
        name: "David",
        course: "MBA",
        flag: "/images/flag.png",
        tags: ["networking", "guidance", "growth"],
        centerImage: "/images/story.png",
        leftImage: "/images/story1.png",
        rightImage: "/images/story2.png",
      },
    ]
  },

  {
    "RECRUITERS" : {
      name: "No data"
    }
  },

  {
    "PARENTS" : {
      name: "No data"
    }
  },
];

export const RecruiterData1= [
  {
    icon: "/images/logo1.png"
  },
  {
    icon: "/images/logo2.png"
  },
  {
    icon: "/images/logo3.png"
  },
  {
    icon: "/images/logo4.png"
  },
  {
    icon: "/images/logo1.png"
  },
  {
    icon: "/images/logo2.png"
  },
  {
    icon: "/images/logo3.png"
  },
  {
    icon: "/images/logo4.png"
  },
]

export const RecruiterData2= [
  {
    icon: "/images/logo3.png"
  },
  {
    icon: "/images/logo4.png"
  },
  {
    icon: "/images/logo1.png"
  },
  {
    icon: "/images/logo2.png"
  },
  {
    icon: "/images/logo3.png"
  },
  {
    icon: "/images/logo4.png"
  },
  {
    icon: "/images/logo1.png"
  },
  {
    icon: "/images/logo2.png"
  },
]

export const DiscoverData= [
  {
    icon: "/images/talk1.png",
    name: "Hlubi Mboya-Arnold"
  },
  {
    icon: "/images/talk2.png",
    name: "Dr Mylswamy Annadurai"
  },
  {
    icon: "/images/talk3.png",
    name: "Rajesh Srivastava"
  },
  {
    icon: "/images/talk4.png",
    name: "Om Shanti"
  },
  {
    icon: "/images/talk5.png",
    name: "Dr Rupinder Singh Sodhi"
  },
  {
    icon: "/images/talk7.png",
    name: "Shruti Chaturvedi"
  },
]

export const FocusData= [
  {
    image: "/images/focus1.png",
    icon: "/images/focus.png",
    title: "Monthly Cultural Events celebrating diversity at MU",
    description: "Explore our online courses tailored for working professionals"
  },
  {
    image: "/images/focus1.png",
    icon: "/images/focus.png",
    title: "Monthly Cultural Events celebrating diversity at MU",
    description: "Explore our online courses tailored for working professionals"
  },
  {
    image: "/images/focus1.png",
    icon: "/images/focus.png",
  },
  {
    title: "Amazon Web Services offers up it’s own personalised course to students of MU",
    description: "Explore our online courses tailored for working professionals",
    btn: "APPLY NOW"
  },
]

export const FaqData = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time without any long-term commitment. Access your account settings to terminate the subscription or contact customer support for assistance.",
  },
  {
    question: "Can I postpone or skip a delivery?",
    answer: "Yes, you can reschedule deliveries through your account settings.",
  },
  {
    question: "How long will it take to see the results?",
    answer: "Results vary by individual, but most users notice improvements within a few weeks.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. Please visit our return policy page for details.",
  },
  {
    question: "How long will my order take to arrive?",
    answer: "Orders usually arrive within 5-7 business days, depending on your location.",
  },
];

export const FooterData = [
  {
    icon: (color) => <Footer1 color={color} />,
    title: "Apply Now",
    icon2: (color) => <Arrow color={color} />
  },
  {
    icon: (color) => <Footer2 color={color} />,
    title: "Get in Touch",
    icon2: (color) => <Arrow color={color} />
  },
  {
    icon: (color) => <Footer3 color={color} />,
    title: "Visit the campus",
    icon2: (color) => <Arrow color={color} />
  },
]

export const DevData = [
  {
   image: "/images/dev1.png"
  },
  {
    image: "/images/dev2.png"
   },
   {
    image: "/images/dev3.png"
   },
   {
    image: "/images/dev5.png"
   },
   {
    image: "/images/dev6.png"
   },
   {
    image: "/images/dev7.png"
   },
]

export const ProgramData = [
  {
    title: "Personality Development Programmes",
    description: "While stepping into the professional world, it is important for students to have a strong character that complements their occupational skills. From communication skills to workplace etiquettes, we make sure that our Soft Skills Development Programme covers all the necessary aspects so that MUites make a mark in the corporate world."
  },
  {
    title: "Personality Development Programmes",
    description: "While stepping into the professional world, it is important for students to have a strong character that complements their occupational skills. From communication skills to workplace etiquettes, we make sure that our Soft Skills Development Programme covers all the necessary aspects so that MUites make a mark in the corporate world."
  },
  {
    title: "Personality Development Programmes",
    description: "While stepping into the professional world, it is important for students to have a strong character that complements their occupational skills. From communication skills to workplace etiquettes, we make sure that our Soft Skills Development Programme covers all the necessary aspects so that MUites make a mark in the corporate world."
  },
  {
    title: "Personality Development Programmes",
    description: "While stepping into the professional world, it is important for students to have a strong character that complements their occupational skills. From communication skills to workplace etiquettes, we make sure that our Soft Skills Development Programme covers all the necessary aspects so that MUites make a mark in the corporate world."
  },
  
]

export const ContactData = [
  {
    icon: (color) => <Contact1 color={color} />,
    title: "Placement Department",
    description: "Reach out to our dedicated placement team for further information. Let us help you navigate the path to success.",
    text: "Contact Us",
    icon2: (color) => <Arrow2 color={color} />
  },
  {
    icon: (color) => <Contact color={color} />,
    title: "Recruitment Partnerships",
    description: "Connect with us to explore collaboration opportunities, and access to our pool of  motivated graduates.",
    text: "Contact Us",
    icon2: (color) => <Arrow2 color={color} />
  },
]

export const ProgressData = [
  {
    icon: "/images/5.png",
    title: "LEARNING",
    description: "Support services providing guidance to prepare students for successful careers."
  },
  {
    icon: "/images/6.png",
    title: "TRAINING & ASSESSMENTS",
    description: "Support services providing guidance to prepare students for successful careers."
  },
  {
    icon: "/images/7.png",
    title: "INTERNSHIP",
    description: "Support services providing guidance to prepare students for successful careers."
  },
]

export const OverviewData = [
  {
    icon: "/images/no1.png",
    number: "3,000+",
    title: "Industry Associations for Placements & Internships"
  },
  {
    icon: "/images/no2.png",
    number: "450+",
    title: "Company Visits"
  },
  {
    icon: "/images/no3.png",
    number: "125+",
    title: "Students bagged a package 5 LPA+"
  },
  {
    icon: "/images/no4.png",
    number: "34.5 LPA",
    title: "Highest Package Offered"
  },
]

export const OverviewImages = [
  {
    image: "/images/hero1.png",
    title: "Aisha Kapoor",
    subtitle: "B.Tech (CSE)",
    icon: "Adani",
    number: "25 "
  },
  {
    image: "/images/hero2.png",
    title: "Aisha Kapoor",
    subtitle: "B.Tech (CSE)",
    icon: "Adani",
    number: "25 "
  },
  {
    image: "/images/hero3.png",
    title: "Aisha Kapoor",
    subtitle: "B.Tech (CSE)",
    icon: "Adani",
    number: "25 "
  }
]