import digisakhi from "@/assets/digisakhi-web.jpg.asset.json";
import kindling from "@/assets/kindling-web.jpg.asset.json";
import workshop from "@/assets/workshop-web.jpg.asset.json";

export const profile = {
  name: "Mehak",
  school: "Jumeirah College",
  location: "Dubai, United Arab Emirates",
  // Contact details appear on the contact page once they are filled in.
  email: "",
  linkedin: "",
};

export type ProjectCategory = "Technology" | "Social impact" | "Research";

export type ProjectVisual =
  | { kind: "photo" | "screen"; src: string; alt: string }
  | { kind: "art"; art: "tonnetz" | "solar" };

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  role: string;
  summary: string;
  visual: ProjectVisual;
  description: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "digisakhi",
    title: "DigiSakhi",
    category: "Social impact",
    role: "Founder · Digital and financial literacy",
    summary:
      "A vernacular learning platform helping women turn access to technology into confident, independent use.",
    visual: {
      kind: "photo",
      src: digisakhi.url,
      alt: "Mehak guiding a participant through a DigiSakhi digital-literacy session",
    },
    description: [
      "DigiSakhi began with a gap I observed in digital inclusion: many women have access to technology, yet lack the confidence, practical knowledge or support to use it independently and turn access into opportunity.",
      "I started on the ground with 25 women across eight sessions over two months, learning about the barriers they faced with digital tools and financial services. That pilot became a vernacular learning platform of bite-sized videos and blogs, expanded through student-led chapters and community partnerships.",
    ],
    outcomes: [
      "15,000+ women reached across four Indian states",
      "10+ student-led chapters",
      "Youth Entrepreneurship and Service Award, one of 28 awardees from 277 applications across 45 countries",
    ],
  },
  {
    id: "kindling",
    title: "Kindling",
    category: "Technology",
    role: "Founder · Human–computer interaction",
    summary:
      "A context-aware app that uses technology to bring parents and adolescents closer, rather than further apart.",
    visual: {
      kind: "screen",
      src: kindling.url,
      alt: "Kindling app home screen with a parenting-style assessment and a daily plan",
    },
    description: [
      "Kindling is a context-aware, emotionally intelligent application designed to strengthen parent–adolescent relationships. It offers an AI-powered chatbot, conversation starters, activity suggestions, smart reminders and parenting guidance tailored to each family.",
      "Developed in consultation with professional psychologists, it is built on a simple idea: technology should encourage families to put their phones down and reconnect, rather than compete for their attention.",
    ],
    outcomes: [
      "Technovation Girls Global Challenge semifinalist, the only UAE-based project to advance",
      "Break the Scroll Award",
      "₹18 lakh in pre-seed funding committed by Country Delight",
    ],
  },
  {
    id: "music-research",
    title: "The mathematics of music",
    category: "Research",
    role: "Independent research · Computational musicology",
    summary:
      "A quantitative study of how tonal stability and harmonic motion differ across musical styles.",
    visual: { kind: "art", art: "tonnetz" },
    description: [
      "Using Python and symbolic MIDI data, I analysed 50 musical excerpts across Classical, Pop, Rock, Jazz and the works of Stravinsky. Combining the Krumhansl–Schmuckler key-finding algorithm with Tonnetz-based representations, I built a framework for measuring tonal ambiguity and harmonic movement.",
      "The work explores how computational measures can capture stylistic differences that music theory usually describes only qualitatively.",
    ],
    outcomes: [
      "Published in the National High School Journal of Science",
      "CREST Gold Award, British Science Association",
      "Selected speaker, Yale Young Global Scholars Speaker Series",
      "Lightning talk accepted at MIT URTC 2026",
    ],
  },
  {
    id: "solarsoil",
    title: "SolarSoil",
    category: "Technology",
    role: "Co-developer · IoT and sustainable agriculture",
    summary:
      "A solar-powered smart-agriculture system that turns real-time soil data into irrigation decisions.",
    visual: { kind: "art", art: "solar" },
    description: [
      "Working with a friend, I developed SolarSoil, an IoT- and AI-powered system that helps farmers make informed irrigation and fertilisation decisions. Our solar-powered prototype combines soil-moisture and temperature sensors, cloud connectivity, Arduino hardware and 3D-printed components.",
      "I pitched the project to more than 100 investors, CEOs and industry professionals, and received mentorship on product–market fit, commercialisation and business strategy.",
    ],
    outcomes: [
      "Global Innovation Challenge: Gold in the qualifying round and the SDG 6 Award, among 600+ startups from nine countries",
      "Selected for a six-month incubation programme associated with Plug and Play Tech Center",
    ],
  },
  {
    id: "kindling-connect",
    title: "Kindling Connect",
    category: "Social impact",
    role: "Founder · Family wellbeing and advocacy",
    summary:
      "Workshops and policy work that take family connection beyond the app, into communities and workplaces.",
    visual: {
      kind: "photo",
      src: workshop.url,
      alt: "Mehak presenting Kindling to a family at an innovation showcase",
    },
    description: [
      "Kindling Connect takes the conversation beyond screens. Working with NGOs, psychologists and mental-health professionals, I run workshops, guided conversations and family-wellness sessions for parents, employees and community organisations, including families of neurodivergent children.",
      "Following workshops with Country Delight, I presented its executive team with a five-point family-wellness policy framework covering childcare assistance, caregiving support and structured family leave. Two core proposals were formally adopted into the company’s HR policy.",
    ],
    outcomes: [
      "Two proposals adopted into Country Delight’s HR policy",
      "Sessions for families of neurodivergent children, with NGO partners",
      "TEDx talk: From Technoference to Togetherness",
    ],
  },
];

export interface ResearchEntry {
  id: string;
  title: string;
  field: string;
  context: string;
  summary: string;
  methods: string[];
  outcomes: string[];
}

export const research: ResearchEntry[] = [
  {
    id: "tonal-stability",
    title: "Quantifying Tonal Stability and Harmonic Motion",
    field: "Computational musicology",
    context: "Independent research",
    summary:
      "An investigation of how tonal stability and harmonic movement differ across musical styles. I analysed 50 excerpts of symbolic MIDI data across Classical, Pop, Rock, Jazz and Stravinsky, combining the Krumhansl–Schmuckler key-finding algorithm with Tonnetz representations to quantify qualities that music theory usually discusses in words.",
    methods: ["Python", "MIDI analysis", "Krumhansl–Schmuckler", "Tonnetz"],
    outcomes: [
      "Published in the National High School Journal of Science (NHSJS)",
      "CREST Gold Award, British Science Association",
      "Lightning talk accepted at MIT’s Undergraduate Research Technology Conference (URTC) 2026",
      "Presented at the Sigma Xi Student Research Showcase",
      "One of 10 speakers at the Yale Young Global Scholars Speaker Series, to an audience of around 300",
    ],
  },
  {
    id: "financial-inclusion",
    title:
      "Beyond the Interface: Internet Penetration, Human Agency, and Structural Determinants of the Gender Gap in Financial Inclusion Across Indian States",
    field: "Development economics",
    context: "Mentored by Dr. Nand Kumar, Professor of Economics, Delhi Technological University",
    summary:
      "A state-level study of women’s financial inclusion across 22 Indian states and Union Territories, using data from the Reserve Bank of India, the Telecom Regulatory Authority of India and the Ministry of Finance, complemented by interviews with 15 women from digital-literacy programmes. The central finding: digital infrastructure creates opportunity, but individual agency and accessible education influence whether it becomes financial empowerment.",
    methods: ["Regression analysis", "Hypothesis testing", "Field interviews"],
    outcomes: [
      "Published in the International Journal of Scientific Research and Review",
      "Runner-up, Best Presenter, Global Confluence Review International Conference",
      "Presented at the international seminar Women and Child Rights: Legal Perspectives and Challenges, organised by Law Mantra Trust with Maharashtra National Law University, Nagpur",
      "Accepted at IFERP’s International Conference on Women, Gender and Leadership (WGL 2026)",
    ],
  },
  {
    id: "standing-waves",
    title: "Understanding and Simulating Standing Waves",
    field: "Computational physics",
    context: "Research internship with Dr. Nishchal Dwivedi, IIT Bombay",
    summary:
      "A study of how standing waves emerge from the superposition of waves travelling in opposite directions, and how boundary conditions fix nodes, antinodes and allowed frequencies. I built Python simulations of wave displacement over time, introduced Gaussian noise and damping to represent real-world perturbations, and compared the results with theoretical predictions.",
    methods: ["Python", "NumPy", "Matplotlib", "Numerical simulation"],
    outcomes: ["Research paper: Understanding and Simulating Standing Waves"],
  },
  {
    id: "fdi-india",
    title:
      "Determinants of Foreign Direct Investment Inflows into India: An Empirical Analysis, 1993\u2060–\u20602022",
    field: "Applied economics",
    context: "Research internship with Dr. Nand Kumar, Delhi Technological University",
    summary:
      "An econometric study of how GDP, domestic lending rates and exchange rates relate to FDI inflows, using the World Bank’s World Development Indicators. GDP emerged as the most consistent long-run determinant, while the significance of interest and exchange rates varied across specifications. The study also examined evidence of a mutually reinforcing relationship between exports and FDI.",
    methods: ["OLS regression", "ADF unit-root tests", "ARDL bounds testing", "Granger causality"],
    outcomes: ["GDP identified as the most consistent long-run determinant of FDI"],
  },
  {
    id: "epq",
    title:
      "To what extent can machine learning algorithms improve the accuracy and efficiency of real-time fraud detection in credit card and bank account transactions?",
    field: "Extended Project Qualification",
    context: "Independent dissertation",
    summary:
      "An evaluation of the technical, economic and ethical dimensions of machine-learning-based fraud detection, weighing the trade-offs between accuracy, speed, cost and fairness in real-world financial systems.",
    methods: ["Technical analysis", "Economic analysis", "Ethical analysis"],
    outcomes: ["EPQ awarded A*"],
  },
];

export const highlights = [
  { value: "15,000+", label: "Women reached through DigiSakhi" },
  { value: "2", label: "Published research papers" },
  { value: "₹18 lakh", label: "Pre-seed funding committed to Kindling" },
  { value: "150+", label: "Students tutored in competition mathematics" },
];

export interface Entry {
  title: string;
  organisation: string;
  description: string;
}

export const education = [
  {
    school: "Jumeirah College, Dubai",
    qualification: "A Levels",
    details: [
      "Mathematics, Further Mathematics, Physics and Economics: A* predicted in each",
      "Extended Project Qualification: A* achieved",
    ],
  },
  {
    school: "GEMS Modern Academy, Dubai",
    qualification: "ICSE",
    details: [
      "Grade 10 board examinations: 97.6%",
      "Grade 9: 98.4%, overall topper",
      "Azeem Scholar Award for sustained academic excellence",
    ],
  },
];

export interface Score {
  label: string;
  value: string;
  note?: string;
}

export const scores: Score[] = [
  { label: "SAT", value: "1550", note: "790 Math · 760 Reading and Writing" },
  { label: "AP Computer Science Principles", value: "5" },
  { label: "AP Microeconomics", value: "5" },
  { label: "IELTS", value: "8.5", note: "out of 9" },
  { label: "French", value: "DELF B2" },
];

export const experience: Entry[] = [
  {
    title: "Computer Science Intern",
    organisation: "MyWonder",
    description:
      "Contributed to a learn-through-play voice assistant and AI companion for children at an ed-tech startup featured on Shark Tank. Built a GPT-powered Python function for personalised messages, contributed to UI/UX improvements, and worked with Supabase and AWS Lambda on code deployed to production.",
  },
  {
    title: "Research Intern, Computational Physics",
    organisation: "With Dr. Nishchal Dwivedi, IIT Bombay",
    description:
      "Modelled standing waves through Python simulations, connecting mathematical derivations with numerical experiments.",
  },
  {
    title: "Research Intern, Economics",
    organisation: "With Dr. Nand Kumar, Delhi Technological University",
    description:
      "Investigated the determinants of foreign direct investment in India using econometric methods. Dr. Kumar also mentored my research on the gender gap in financial inclusion.",
  },
  {
    title: "Scholar, Innovations in Science and Technology",
    organisation: "Yale Young Global Scholars",
    description:
      "Explored interdisciplinary innovation with students from around the world, and was selected as one of 10 speakers for the YYGS Speaker Series.",
  },
  {
    title: "TEDx Speaker",
    organisation: "“From Technoference to Togetherness”",
    description:
      "Argued that excessive screen use is a design problem rather than simply a distraction problem, and that the principles which capture our attention can be used to help families reconnect.",
  },
];

export const leadership: Entry[] = [
  {
    title: "Senior Prefect and Form Captain",
    organisation: "Student Council, Jumeirah College",
    description:
      "Represent student interests, coordinate with faculty, mentor younger students and help organise school-wide initiatives.",
  },
  {
    title: "Math Captain and Curriculum Lead",
    organisation: "Jumeirah College Math Society",
    description:
      "Tutored more than 150 students for competitions including the BMO and AMC. Led the Dubai Math Super League and the JC Math Championship 2026, with around 300 participants, and established a peer-led mentoring programme.",
  },
  {
    title: "Head of STEAM and Founder of the STEM Club",
    organisation: "Jumeirah College",
    description:
      "Lead STEAM initiatives through the Innovation Committee and Innovators’ Hub STEM Club. Mentored five teams for the GEMS Global Innovation Challenge and directed Shark Tank DXB, with more than 150 participants and six venture capitalists as judges.",
  },
  {
    title: "Music Ambassador",
    organisation: "Jumeirah College",
    description:
      "Organise music competitions, showcases and Battle of the Bands, and perform as pianist with the JC Band.",
  },
  {
    title: "House Representative",
    organisation: "Fihri House",
    description: "Organise house activities and House Week events across year groups.",
  },
  {
    title: "Peer Mentor",
    organisation: "Jumeirah College",
    description:
      "Selected to mentor a Year 7 student, providing academic support in mathematics, science and English and helping with their wellbeing and transition through school.",
  },
];

export interface Honour {
  title: string;
  detail: string;
}

export const honours: { group: string; items: Honour[] }[] = [
  {
    group: "Mathematics and science",
    items: [
      {
        title: "British Mathematical Olympiad",
        detail: "Round 1 Distinction (top 0.3%) and Round 2 qualification (top 0.1%)",
      },
      { title: "British Physics Olympiad", detail: "Gold, one of three in the year group" },
      {
        title: "International Psychology Olympiad",
        detail: "Highest Distinction; selected for the UAE national team",
      },
      { title: "ChallengeME Mathematics Competition", detail: "Finalist" },
      { title: "CREST Gold Award", detail: "British Science Association" },
    ],
  },
  {
    group: "Innovation and entrepreneurship",
    items: [
      {
        title: "Global Innovation Challenge",
        detail: "Gold in the qualifying round and SDG 6 Award for SolarSoil",
      },
      {
        title: "Technovation Girls Global Challenge",
        detail: "Semifinalist and Break the Scroll Award for Kindling",
      },
      { title: "Curtin University STEM Challenge", detail: "National first prize as team lead" },
      {
        title: "Blue Ocean Student Entrepreneur Competition",
        detail: "Top 500 of more than 23,000 submissions",
      },
      {
        title: "Learnovate Technovator and Social Impact Distinction",
        detail: "Innovation and community impact",
      },
    ],
  },
  {
    group: "Service and leadership",
    items: [
      {
        title: "COBIS Student Achievement Award",
        detail: "Significant Contribution to the Wider Community",
      },
      {
        title: "Youth Entrepreneurship and Service Award",
        detail: "One of 28 awardees from 277 applications across 45 countries",
      },
      { title: "Platinum Award", detail: "Most achievement points of the year, Jumeirah College" },
      { title: "Form Tutor Award", detail: "Positive contribution to the school community" },
    ],
  },
  {
    group: "Research and writing",
    items: [
      { title: "John Locke Essay Competition", detail: "History Commendation, 2025" },
      {
        title: "Global Confluence Review International Conference",
        detail: "Runner-up, Best Presenter",
      },
    ],
  },
  {
    group: "Music",
    items: [
      { title: "London College of Music", detail: "Grade 8 Piano, Distinction" },
      { title: "International music competitions", detail: "Laureate honours in 10 competitions" },
    ],
  },
  {
    group: "Scholarships and selective programmes",
    items: [
      {
        title: "Sunny Varkey Merit Scholarship",
        detail: "25% tuition scholarship for board examination results",
      },
      { title: "Mathematics camp", detail: "St Catharine’s College, Cambridge" },
      { title: "British Mathematical Olympiad camp", detail: "Pembroke College, Oxford" },
      { title: "BMO Asia Camp", detail: "Beijing, China" },
    ],
  },
];

export const featuredHonours: Honour[] = [
  { title: "British Mathematical Olympiad", detail: "Round 1 Distinction, Round 2 qualification" },
  { title: "British Physics Olympiad", detail: "Gold" },
  { title: "Technovation Girls Global Challenge", detail: "Semifinalist, Break the Scroll Award" },
  {
    title: "Youth Entrepreneurship and Service Award",
    detail: "One of 28 awardees from 45 countries",
  },
  {
    title: "COBIS Student Achievement Award",
    detail: "Significant Contribution to the Wider Community",
  },
  { title: "John Locke Essay Competition", detail: "History Commendation, 2025" },
];

export const musicCompetitions = [
  "Ravel Award (twice)",
  "Brahms Award",
  "Beethoven Award International Music Competition",
  "Mozart International Music Competition",
  "Haydn Music International Competition",
  "Classical Music Stars",
  "Fenix International Award",
  "Global Young Musicians Competition",
  "World’s Best Musicians",
];

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Mehak` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Mehak` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
