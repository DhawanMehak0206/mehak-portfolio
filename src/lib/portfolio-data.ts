import portraitSrc from "@/assets/photos/portrait.jpg";
import digisakhiGuidingSrc from "@/assets/photos/digisakhi-guiding.jpg";
import kindlingHomeSrc from "@/assets/photos/kindling-home.jpg";
import learnovateSrc from "@/assets/photos/kindling-learnovate.jpg";
import festivalSrc from "@/assets/photos/let-the-music-speak.jpg";
import digisakhiSessionSrc from "@/assets/photos/digisakhi-session.jpg";
import digisakhiStudentsSrc from "@/assets/photos/digisakhi-students.jpg";
import digisakhiTalkSrc from "@/assets/photos/digisakhi-talk.jpg";
import digisakhiClassroomSrc from "@/assets/photos/digisakhi-classroom.jpg";
import kindlingQuestionSrc from "@/assets/photos/kindling-question.jpg";
import kindlingAssessmentSrc from "@/assets/photos/kindling-assessment.jpg";
import kindlingFamilySrc from "@/assets/photos/kindling-connect-family.jpg";
import kindlingOnlineSrc from "@/assets/photos/kindling-connect-online.jpg";

// Every fact below comes from Mehak's portfolio PDF.
export const profile = {
  firstName: "Mehak",
  // Taken from her name in the online Kindling Connect session; the PDF text has no surname.
  lastName: "Dhawan",
  name: "Mehak Dhawan",
  school: "Jumeirah College",
  city: "Dubai",
  location: "Dubai, United Arab Emirates",
  tagline: "Exploring the intersection of cognitive science, computer science, economics and music",
  // Resume link for the Resume buttons; they stay hidden while this is empty.
  resumeUrl: "",
  // Contact details appear on the contact page once they are filled in.
  email: "mehak.dhawan0206@gmail.com",
  linkedin: "",
};

export type SitePath =
  | "/"
  | "/about"
  | "/education"
  | "/research"
  | "/experience"
  | "/community"
  | "/leadership"
  | "/awards"
  | "/music"
  | "/contact";

export type IconName =
  | "award"
  | "brain"
  | "calculator"
  | "chart"
  | "code"
  | "compass"
  | "cpu"
  | "flag"
  | "flask"
  | "globe"
  | "graduation"
  | "handshake"
  | "heart"
  | "house"
  | "landmark"
  | "languages"
  | "mail"
  | "lightbulb"
  | "medal"
  | "mic"
  | "music"
  | "pen"
  | "rocket"
  | "scale"
  | "school"
  | "sigma"
  | "sparkles"
  | "star"
  | "trophy"
  | "users"
  | "waves";

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Which part of the photo to keep when it is cropped into a square tile. */
  focus?: "top" | "upper";
  /** Show the whole image in its tile instead of cropping it (for slides). */
  fit?: "contain";
}

export const photos = {
  portrait: {
    src: portraitSrc,
    width: 854,
    height: 960,
    alt: "Portrait of Mehak Dhawan",
    caption: "Mehak Dhawan",
  },
  digisakhiSession: {
    src: digisakhiSessionSrc,
    width: 1690,
    height: 1260,
    alt: "Mehak leaning over a laptop to guide a participant in a computer lab",
    caption: "Guiding a participant during a DigiSakhi session",
  },
  digisakhiGuiding: {
    src: digisakhiGuidingSrc,
    width: 816,
    height: 1024,
    alt: "Mehak helping a participant at a computer",
    caption: "One-to-one support at the computer",
    focus: "top",
  },
  digisakhiStudents: {
    src: digisakhiStudentsSrc,
    width: 952,
    height: 1144,
    alt: "Mehak working on a laptop with a group of students gathered around her",
    caption: "Working through a session with students",
  },
  digisakhiTalk: {
    src: digisakhiTalkSrc,
    width: 920,
    height: 1052,
    alt: "Mehak speaking to a class of students",
    caption: "Speaking with a class",
    focus: "upper",
  },
  digisakhiClassroom: {
    src: digisakhiClassroomSrc,
    width: 1400,
    height: 920,
    alt: "A classroom of students listening during a session",
    caption: "Students during a session",
  },
  kindlingHome: {
    src: kindlingHomeSrc,
    width: 648,
    height: 1382,
    alt: "Kindling home screen with a parenting-style assessment, a daily plan and weekly milestones",
    caption: "Daily plan and milestones",
  },
  kindlingQuestion: {
    src: kindlingQuestionSrc,
    width: 628,
    height: 1382,
    alt: "Kindling assessment question about warmth and structure, with five answer options",
    caption: "Parenting-style assessment",
  },
  kindlingAssessment: {
    src: kindlingAssessmentSrc,
    width: 654,
    height: 1366,
    alt: "Kindling screen describing personalised plans, AI-powered insights and weekly challenges",
    caption: "Personalised plans and insights",
  },
  kindlingLearnovate: {
    src: learnovateSrc,
    width: 922,
    height: 1184,
    alt: "Mehak presenting Kindling to a family in the Learnovate innovation space",
    caption: "Presenting Kindling to a family",
  },
  kindlingFamily: {
    src: kindlingFamilySrc,
    width: 542,
    height: 1026,
    alt: "Mehak at a table with a laptop, printed materials and a QR code, talking with a visitor",
    caption: "Introducing Kindling to visitors",
    focus: "upper",
  },
  kindlingOnline: {
    src: kindlingOnlineSrc,
    width: 1400,
    height: 680,
    alt: "Slide from an online session asking: One word that describes parenting your child during growing years?",
    caption: "A prompt from an online Kindling Connect session",
    fit: "contain",
  },
  festival: {
    src: festivalSrc,
    width: 1572,
    height: 1136,
    alt: "Mehak speaking at a lectern beside a screen reading Let the Music Speak!",
    caption: "Speaking at Let the Music Speak!",
  },
} satisfies Record<string, Photo>;

export interface Stat {
  value: string;
  label: string;
  note?: string;
}

export const highlights: Stat[] = [
  { value: "15,000+", label: "Women reached through DigiSakhi" },
  { value: "2", label: "Published research papers" },
  { value: "₹18 lakh", label: "Pre-seed funding committed to Kindling" },
  { value: "150+", label: "Students tutored in competition mathematics" },
];

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export const principles: Feature[] = [
  {
    icon: "scale",
    title: "Analytical rigour",
    text: "From econometric models of foreign investment to Python simulations of standing waves, I test ideas against evidence and interpret the results with care.",
  },
  {
    icon: "heart",
    title: "Human understanding",
    text: "DigiSakhi began by understanding the barriers 25 women faced with digital tools. Lasting solutions start by listening to the people they are meant to serve.",
  },
  {
    icon: "lightbulb",
    title: "Curiosity",
    text: "A love of music led me to ask why some harmonies feel stable and others surprising, and then to measure it.",
  },
];

export const roles: Feature[] = [
  {
    icon: "rocket",
    title: "Founder",
    text: "I founded DigiSakhi, which has reached more than 15,000 women across four Indian states, and Kindling, an app designed to help parents and teenagers reconnect.",
  },
  {
    icon: "flask",
    title: "Researcher",
    text: "My research spans computational musicology, development economics and physics, with papers published in NHSJS and the International Journal of Scientific Research and Review.",
  },
  {
    icon: "users",
    title: "Mentor",
    text: "As Math Captain, I have tutored more than 150 students for competitions such as the BMO and AMC, and established a peer-led mentoring programme at school.",
  },
];

export interface WorkHighlight {
  kicker: string;
  title: string;
  text: string;
  to: SitePath;
  hash: string;
  media: { kind: "photo" | "screen"; photo: Photo } | { kind: "art" };
}

export const selectedWork: WorkHighlight[] = [
  {
    kicker: "Social impact",
    title: "DigiSakhi",
    text: "A vernacular learning platform helping women build digital and financial confidence, now reaching more than 15,000 women.",
    to: "/community",
    hash: "digisakhi",
    media: { kind: "photo", photo: photos.digisakhiGuiding },
  },
  {
    kicker: "Technology",
    title: "Kindling",
    text: "A context-aware app, developed with psychologists, that is designed to strengthen parent–adolescent relationships.",
    to: "/experience",
    hash: "kindling",
    media: { kind: "screen", photo: photos.kindlingHome },
  },
  {
    kicker: "Research",
    title: "The mathematics of music",
    text: "A published study that quantifies tonal stability and harmonic motion across five musical styles.",
    to: "/research",
    hash: "tonal-stability",
    media: { kind: "art" },
  },
];

export const facts = [
  { label: "School", value: "Jumeirah College, Dubai" },
  { label: "Studying", value: "Mathematics, Further Mathematics, Physics and Economics" },
  {
    label: "Interests",
    value: "Cognitive science, computer science, economics and music",
  },
  { label: "Languages", value: "English (IELTS 8.5) and French (DELF B2)" },
];

export interface SkillGroup {
  icon: IconName;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "code",
    title: "Programming and software",
    items: ["Python", "GPT-powered functions", "JSON", "Supabase", "AWS Lambda", "UI/UX design"],
  },
  {
    icon: "chart",
    title: "Data and modelling",
    items: [
      "NumPy",
      "Matplotlib",
      "Numerical simulation",
      "Regression analysis",
      "Hypothesis testing",
      "Model diagnostics",
    ],
  },
  {
    icon: "scale",
    title: "Econometrics",
    items: ["OLS regression", "ADF unit-root tests", "ARDL bounds testing", "Granger causality"],
  },
  {
    icon: "music",
    title: "Computational music",
    items: ["Symbolic MIDI data", "Krumhansl–Schmuckler key-finding", "Tonnetz representations"],
  },
  {
    icon: "cpu",
    title: "Hardware and prototyping",
    items: [
      "Arduino",
      "Soil-moisture and temperature sensors",
      "Cloud connectivity",
      "3D printing",
      "LiDAR",
    ],
  },
  {
    icon: "languages",
    title: "Languages",
    items: ["English · IELTS 8.5 / 9", "French · DELF B2"],
  },
];

export interface EntryCard {
  id?: string;
  icon: IconName;
  title: string;
  meta: string;
  text: string;
  points?: string[];
}

export const education: EntryCard[] = [
  {
    icon: "school",
    title: "Jumeirah College, Dubai",
    meta: "A Levels",
    text: "I study Mathematics, Further Mathematics, Physics and Economics. Each gives me a different way to approach problems, question assumptions and connect theoretical ideas with real-world applications.",
    points: [
      "A* predicted in Mathematics, Further Mathematics, Physics and Economics",
      "Extended Project Qualification: A* achieved",
    ],
  },
  {
    icon: "graduation",
    title: "GEMS Modern Academy, Dubai",
    meta: "ICSE",
    text: "I received the Azeem Scholar Award for sustained academic excellence between April 2021 and April 2025.",
    points: [
      "Grade 10 ICSE board examinations: 97.6%",
      "Grade 9 final examinations: 98.4%, overall topper",
      "Grade 10 subject topper, with perfect scores of 100 in Social Science, Robotics & AI and Biology",
    ],
  },
  {
    icon: "globe",
    title: "Yale Young Global Scholars",
    meta: "Innovations in Science and Technology",
    text: "I explored scientific innovation alongside students from around the world, examining how interdisciplinary thinking can turn ideas into meaningful solutions. I was also selected as one of 10 speakers for the YYGS Speaker Series.",
  },
  {
    icon: "sigma",
    title: "St Catharine’s College, Cambridge",
    meta: "Mathematics camp",
    text: "Following my British Mathematical Olympiad results, I was selected for a mathematics camp of approximately 35 high-school students.",
  },
  {
    icon: "landmark",
    title: "Pembroke College, Oxford",
    meta: "British Mathematical Olympiad camp",
    text: "I was selected for the BMO camp at Pembroke College, which brings together approximately 30 high-school students.",
  },
  {
    icon: "compass",
    title: "BMO Asia Camp, Beijing",
    meta: "Olympiad training",
    text: "I was selected for the BMO Asia Camp in Beijing, China, continuing my engagement with advanced mathematics and olympiad-level problem-solving.",
  },
];

export const scores: Stat[] = [
  { label: "SAT", value: "1550", note: "790 Math · 760 Reading and Writing" },
  { label: "AP Computer Science Principles", value: "5", note: "Out of 5" },
  { label: "AP Microeconomics", value: "5", note: "Out of 5" },
  { label: "ICSE Grade 10", value: "97.6%", note: "Board examinations" },
  { label: "IELTS", value: "8.5", note: "Out of 9" },
  { label: "French", value: "B2", note: "DELF diploma" },
];

export const featuredResearch = {
  id: "tonal-stability",
  title: "Quantifying Tonal Stability and Harmonic Motion",
  kicker: "Computational musicology · Published in NHSJS",
  paragraphs: [
    "Music has been part of my life for over a decade, but I have always been curious about more than how it sounds. I wanted to understand the mathematical structures that make music feel stable, surprising or emotionally complex.",
    "Using Python and symbolic MIDI data, I analysed 50 musical excerpts across five categories: Classical, Pop, Rock, Jazz and Stravinsky’s compositions. I combined the Krumhansl–Schmuckler key-finding algorithm with Tonnetz-based representations of harmonic relationships to build a quantitative framework for examining tonal ambiguity and movement.",
    "The project showed me that mathematical modelling need not remove the human element from music. It can reveal new ways to study the structures through which we experience it.",
  ],
  outcomes: [
    "Published in the National High School Journal of Science",
    "CREST Gold Award, British Science Association",
    "Lightning talk accepted at MIT’s URTC 2026",
    "Presented at the Sigma Xi Student Research Showcase",
    "One of 10 speakers at the YYGS Speaker Series, to around 300 participants",
    "Submitted or presented to further audiences, including the Princetonian Conference",
  ],
};

export interface ResearchEntry {
  id: string;
  icon: IconName;
  title: string;
  subtitle?: string;
  field: string;
  context: string;
  text: string;
  methods: string[];
  outcomes: string[];
}

export const research: ResearchEntry[] = [
  {
    id: "financial-inclusion",
    icon: "users",
    title: "Beyond the Interface",
    subtitle:
      "Internet Penetration, Human Agency, and Structural Determinants of the Gender Gap in Financial Inclusion Across Indian States",
    field: "Development economics",
    context: "Mentored by Dr. Nand Kumar, Professor of Economics, Delhi Technological University",
    text: "I examined state-level differences in women’s financial inclusion across 22 Indian states and Union Territories, using data from the Reserve Bank of India, the Telecom Regulatory Authority of India and the Ministry of Finance, and interviewed 15 women from digital-literacy programmes. My central argument is that digital infrastructure can create opportunities for inclusion, but individual agency and accessible education influence whether they become financial empowerment.",
    methods: ["Regression analysis", "Hypothesis testing", "Model diagnostics", "Field interviews"],
    outcomes: [
      "Published in the International Journal of Scientific Research and Review",
      "Runner-up, Best Presenter, Global Confluence Review International Conference",
      "Presented at the international seminar Women and Child Rights: Legal Perspectives and Challenges, organised by Law Mantra Trust with Maharashtra National Law University, Nagpur",
      "Accepted at the Princetonian Conference, IFERP’s WGL 2026 and the IFoRE conference",
    ],
  },
  {
    id: "standing-waves",
    icon: "waves",
    title: "Understanding and Simulating Standing Waves",
    field: "Computational physics",
    context: "Research internship with Dr. Nishchal Dwivedi, IIT Bombay",
    text: "I studied how standing waves emerge from the superposition of waves travelling in opposite directions, and how boundary conditions determine nodes, antinodes and allowed frequencies. I then built Python simulations of wave displacement over time, adding Gaussian noise and damping to represent real-world conditions, and compared the results with theoretical predictions.",
    methods: ["Python", "NumPy", "Matplotlib", "Numerical methods"],
    outcomes: ["Research paper: Understanding and Simulating Standing Waves"],
  },
  {
    id: "fdi-india",
    icon: "chart",
    title: "Determinants of Foreign Direct Investment Inflows into India",
    subtitle: "An Empirical Analysis, 1993–2022",
    field: "Applied economics",
    context: "Research internship with Dr. Nand Kumar, Delhi Technological University",
    text: "Using annual data from the World Bank’s World Development Indicators, I examined how GDP, domestic lending interest rates and exchange rates relate to FDI inflows in the short and long run, with careful attention to stationarity, residual behaviour and model stability.",
    methods: ["OLS regression", "ADF unit-root tests", "ARDL bounds testing", "Granger causality"],
    outcomes: [
      "GDP identified as the most consistent long-run determinant of FDI",
      "Examined evidence of a mutually reinforcing relationship between exports and FDI",
    ],
  },
  {
    id: "epq",
    icon: "brain",
    title: "Extended Project Qualification",
    subtitle:
      "To what extent can machine learning algorithms improve the accuracy and efficiency of real-time fraud detection in credit card and bank account transactions?",
    field: "Machine learning and finance",
    context: "Jumeirah College",
    text: "My EPQ examines the technical, economic and ethical dimensions of machine-learning-based fraud detection, evaluating the trade-offs between accuracy, speed, cost and fairness in real-world financial systems.",
    methods: ["Machine learning", "Technical analysis", "Economic analysis", "Ethical analysis"],
    outcomes: ["EPQ awarded A*"],
  },
];

export const researchThreads: Feature[] = [
  {
    icon: "music",
    title: "Mathematics and expression",
    text: "Computational music research showed me how mathematics can illuminate creative expression.",
  },
  {
    icon: "users",
    title: "Access and agency",
    text: "My work on DigiSakhi showed how empirical analysis can reveal the gap between access and agency.",
  },
  {
    icon: "sigma",
    title: "Modelling complex systems",
    text: "Physics and economics taught me to approach complex systems through modelling, diagnostics and careful interpretation.",
  },
];

export interface Engagement {
  id: string;
  organisation: string;
  role: string;
  text: string;
  points?: string[];
}

export const experience: Engagement[] = [
  {
    id: "kindling",
    organisation: "Kindling",
    role: "Founder",
    text: "Kindling is a context-aware, emotionally intelligent app designed to strengthen parent–adolescent relationships. Developed in consultation with professional psychologists, it offers an AI-powered chatbot, conversation starters, activity suggestions, smart reminders and parenting tips tailored to each family. I didn’t want to build another app competing for a family’s attention; Kindling is designed to help people put their phones down and reconnect.",
    points: [
      "Technovation Girls semifinalist, the only UAE-based project to advance",
      "Break the Scroll Award",
      "₹18 lakh pre-seed funding committed by Country Delight",
    ],
  },
  {
    id: "mywonder",
    organisation: "MyWonder",
    role: "Computer Science Intern",
    text: "At an ed-tech startup featured on Shark Tank, I contributed to a learn-through-play voice assistant and AI companion for children. I developed a GPT-powered Python function that generated personalised messages using JSON, contributed to UI/UX improvements, and worked with Supabase and AWS Lambda on code deployed to production.",
  },
  {
    id: "solarsoil",
    organisation: "SolarSoil",
    role: "Co-developer",
    text: "With a friend, I developed SolarSoil, an IoT- and AI-powered smart agriculture system that helps farmers make irrigation and fertilisation decisions from real-time soil data. We built a solar-powered prototype with soil-moisture and temperature sensors, cloud connectivity, Arduino hardware and 3D-printed components.",
    points: [
      "Gold in the Global Innovation Challenge qualifying round and the SDG 6 Award, among 600+ startups from nine countries",
      "Pitched to more than 100 investors, CEOs and industry professionals",
      "Selected for a six-month incubation programme associated with Plug and Play Tech Center",
    ],
  },
  {
    id: "iit-bombay",
    organisation: "IIT Bombay",
    role: "Research Intern, Computational Physics",
    text: "With Dr. Nishchal Dwivedi, I explored the mathematics of standing waves and built Python simulations to show how Gaussian noise and damping change wave behaviour, comparing the results with theoretical predictions.",
  },
  {
    id: "dtu",
    organisation: "Delhi Technological University",
    role: "Research Intern, Economics",
    text: "With Dr. Nand Kumar, I investigated the determinants of foreign direct investment into India between 1993 and 2022 using OLS regression, ARDL bounds testing and Granger-causality analysis. Dr. Kumar also mentored my research on women’s financial inclusion.",
  },
  {
    id: "curtin",
    organisation: "Curtin University STEM Challenge",
    role: "Team Lead",
    text: "I led a six-person team to first place nationally, competing against more than 50 teams with an autonomous LiDAR robot car built on an Arduino-based prototype. Winning also earned me an internship opportunity at Lab of the Future.",
  },
  {
    id: "tedx",
    organisation: "TEDx",
    role: "Speaker",
    text: "In my talk, From Technoference to Togetherness: Kindle Something Real, I drew on families sharing meals without truly engaging with one another. I argued that excessive screen use is not simply a distraction problem but a design problem, and that the principles that make technology so good at capturing attention can help us reconnect.",
  },
  {
    id: "yygs",
    organisation: "Yale Young Global Scholars",
    role: "Speaker, YYGS Speaker Series",
    text: "Selected as one of 10 speakers for the YYGS Speaker Series, I presented my computational music research on tonal stability and harmonic motion to approximately 300 participants, followed by discussions with Yale professors.",
  },
];

export const community: Engagement[] = [
  {
    id: "digisakhi",
    organisation: "DigiSakhi",
    role: "Founder · Digital and financial empowerment",
    text: "I founded DigiSakhi after noticing a gap in digital inclusion: many women have access to technology, yet lack the confidence, practical knowledge or support to use it independently. I began on the ground with 25 women across eight sessions over two months, then developed DigiSakhi into a vernacular learning platform of bite-sized videos and blogs, expanding through student-led chapters and community partnerships.",
    points: [
      "More than 15,000 women reached across four Indian states",
      "Supported by more than 10 student chapters",
      "Youth Entrepreneurship and Service Award",
    ],
  },
  {
    id: "kindling-connect",
    organisation: "Kindling Connect Initiative",
    role: "Founder · Family connection beyond the app",
    text: "Through Kindling Connect, I work directly with parents, employees and community organisations through workshops, guided conversations and family-wellness sessions. With NGOs, psychologists and mental-health professionals, I help families approach difficult conversations, recognise emotional needs, establish small shared rituals and make time for one another.",
  },
  {
    id: "inclusive-families",
    organisation: "Families of neurodivergent children",
    role: "Kindling Connect · Inclusive family support",
    text: "I extended Kindling Connect to families of neurodivergent children and adolescents, including those on the autism spectrum. Working alongside validated NGO partners, psychologists and mental-health experts, I sought to understand these families’ needs, share practical communication strategies and make Kindling more accessible. These sessions taught me that connection cannot be built around a single definition of family or communication.",
  },
  {
    id: "country-delight",
    organisation: "Country Delight",
    role: "Family-friendly workplace policy",
    text: "Following workshops with Country Delight, I presented its executive team with a five-point family-wellness policy framework covering childcare assistance, caregiving support and structured family leave.",
    points: [
      "Two core proposals formally adopted into the company’s updated HR policy",
      "₹18 lakh in pre-seed funding committed to Kindling",
    ],
  },
  {
    id: "let-the-music-speak",
    organisation: "Let the Music Speak!",
    role: "Founder · GEMS Modern Academy",
    text: "I founded Let the Music Speak! and organised the school’s first music festival, bringing together more than 75 performers across seven genres to celebrate musical talent and create opportunities for students to perform.",
  },
  {
    id: "jumeirah-primary",
    organisation: "Jumeirah Primary School",
    role: "Mathematics sessions",
    text: "As part of my role as Math Captain, I delivered mathematics sessions for younger students at Jumeirah Primary School.",
  },
];

export const leadership: EntryCard[] = [
  {
    icon: "flag",
    title: "Form Captain and Senior Prefect",
    meta: "Student Council",
    text: "I represent student interests, coordinate with faculty, mentor younger students and help organise school-wide initiatives, strengthening communication between the administration and the student body.",
  },
  {
    icon: "calculator",
    title: "Math Captain and Curriculum Lead",
    meta: "Jumeirah College Math Society",
    text: "I lead the Math Society and promote competitive mathematics through enrichment and peer mentoring.",
    points: [
      "Tutored more than 150 students for competitions such as the BMO and AMC",
      "Spearheaded the Dubai Math Super League and JC Math Championship 2026",
      "Established a peer-led mentoring programme and mentored five Year 12 interns",
    ],
  },
  {
    icon: "lightbulb",
    title: "Head of STEAM and Founder of the STEM Club",
    meta: "Innovation Committee · Innovators’ Hub",
    text: "I lead STEAM initiatives across the school, including campus-wide projects such as JC Buddy, Tech Feud and the Innovation Magazine.",
    points: [
      "Mentored five teams for the GEMS Global Innovation Challenge",
      "Directed Shark Tank DXB, with 150+ participants and six venture capitalists as judges",
    ],
  },
  {
    icon: "house",
    title: "House Representative",
    meta: "Fihri (Green) House",
    text: "I work with the Head of House to organise house activities, celebrations and House Week events, from inter-house sports to bake-offs, Float Your Boat and singing competitions.",
  },
  {
    icon: "music",
    title: "Music Ambassador",
    meta: "Jumeirah College",
    text: "I help organise music competitions, school showcases and Battle of the Bands events, perform as a pianist with the JC Band, and help younger students develop their instrumental skills.",
  },
  {
    icon: "handshake",
    title: "Peer Mentor",
    meta: "Year 7 mentoring",
    text: "I was selected to mentor a Year 7 student, providing academic support in mathematics, science and English while helping them with their wellbeing and transition through school.",
  },
];

export interface Honour {
  title: string;
  detail: string;
  text: string;
}

export interface HonourGroup {
  id: string;
  title: string;
  icon: IconName;
  items: Honour[];
}

export const honourGroups: HonourGroup[] = [
  {
    id: "mathematics-science",
    title: "Mathematics and science",
    icon: "trophy",
    items: [
      {
        title: "British Mathematical Olympiad",
        detail: "Round 1 Distinction and Round 2 qualification",
        text: "One of only two students in my year group selected for the BMO. I achieved a Distinction in Round 1, within the top 0.3% of UKMT SMC participants, and qualified for Round 2 (top 0.1%), placing among the top 100 participants worldwide.",
      },
      {
        title: "British Physics Olympiad",
        detail: "Gold",
        text: "One of only three students in my entire year group to receive Gold.",
      },
      {
        title: "International Psychology Olympiad",
        detail: "Highest Distinction",
        text: "A regional top-six score in the UAE, within the top 5%, and selection for the UAE Psychology National Team.",
      },
      {
        title: "ChallengeME Mathematics Competition",
        detail: "Finalist",
        text: "Among the top two students in my year group to qualify from the invitational stage.",
      },
      {
        title: "CREST Gold Award",
        detail: "British Science Association",
        text: "Awarded for my STEM work and independent project development, including my computational music research.",
      },
      {
        title: "Azeem Scholar Award",
        detail: "GEMS Modern Academy",
        text: "Sustained academic excellence from April 2021 to April 2025, as overall topper in Grade 9 and a subject topper in Grade 10.",
      },
      {
        title: "Sunny Varkey Merit Scholarship",
        detail: "25% tuition scholarship",
        text: "Awarded towards my Grade 11 and Grade 12 tuition for scoring above 95% in my board examinations.",
      },
    ],
  },
  {
    id: "innovation",
    title: "Innovation and entrepreneurship",
    icon: "rocket",
    items: [
      {
        title: "Global Innovation Challenge",
        detail: "Gold (qualifying round) and SDG 6 Award",
        text: "Earned with SolarSoil while competing against more than 600 startups across nine countries, followed by selection for a six-month incubation programme.",
      },
      {
        title: "Technovation Girls Global Challenge",
        detail: "Semifinalist and Break the Scroll Award",
        text: "Kindling was the only UAE-based project to advance as a semifinalist, then won the $500 Break the Scroll Award for encouraging in-person connection.",
      },
      {
        title: "Curtin University STEM Challenge",
        detail: "National first prize",
        text: "Led a six-person team to first place among more than 50 teams with an autonomous LiDAR robot car.",
      },
      {
        title: "Blue Ocean Student Entrepreneur Competition",
        detail: "Top 500",
        text: "Ranked among the top 500 of more than 23,000 submissions.",
      },
      {
        title: "Learnovate Technovator and Social Impact Distinction",
        detail: "Innovation and community impact",
        text: "Recognising my efforts to apply technology to practical challenges.",
      },
    ],
  },
  {
    id: "service",
    title: "Service and leadership",
    icon: "heart",
    items: [
      {
        title: "COBIS Student Achievement Award",
        detail: "Significant Contribution to the Wider Community",
        text: "Nominated by my school for my work through Kindling and DigiSakhi, one of 456 students from 172 international British schools to receive it.",
      },
      {
        title: "Youth Entrepreneurship and Service Award",
        detail: "For DigiSakhi",
        text: "One of 28 awardees from 277 applications across 45 countries, presented by Mr. Prabhat Kumar Jha of India’s Ministry of MSME and Shri P. K. Majumder of the Consulate General of India in Dubai.",
      },
      {
        title: "Platinum Award",
        detail: "Jumeirah College",
        text: "Awarded at the year-end assembly for achieving the highest number of achievement points in the academic year.",
      },
      {
        title: "Form Tutor Award",
        detail: "Jumeirah College",
        text: "Recognising my positive contribution to the Jumeirah College community beyond academics.",
      },
    ],
  },
  {
    id: "research-writing",
    title: "Research and writing",
    icon: "pen",
    items: [
      {
        title: "John Locke Essay Competition",
        detail: "History Commendation, 2025",
        text: "Commended among more than 63,000 participants for an essay on whether anyone should be ashamed, or proud, of their nation’s history.",
      },
      {
        title: "Global Confluence Review International Conference",
        detail: "Runner-up, Best Presenter",
        text: "Recognised for my DigiSakhi research paper, competing alongside postgraduate and graduate researchers.",
      },
    ],
  },
  {
    id: "music",
    title: "Music",
    icon: "music",
    items: [
      {
        title: "London College of Music",
        detail: "Grade 8 Piano, Distinction",
        text: "Awarded through London College of Music Examinations at the University of West London.",
      },
      {
        title: "International music competitions",
        detail: "Laureate honours",
        text: "Laureate honours across 10 international competitions, including the Ravel, Brahms and Beethoven awards.",
      },
    ],
  },
  {
    id: "programmes",
    title: "Selective programmes",
    icon: "graduation",
    items: [
      {
        title: "Mathematics camp",
        detail: "St Catharine’s College, Cambridge",
        text: "A selective camp of approximately 35 high-school students.",
      },
      {
        title: "British Mathematical Olympiad camp",
        detail: "Pembroke College, Oxford",
        text: "A camp bringing together approximately 30 high-school students.",
      },
      {
        title: "BMO Asia Camp",
        detail: "Beijing, China",
        text: "Advanced mathematics and olympiad-level problem-solving.",
      },
    ],
  },
];

export interface MusicCard {
  title: string;
  meta: string;
  text: string;
}

export const musicCards: MusicCard[] = [
  {
    title: "Grade 8 Piano",
    meta: "London College of Music · Distinction",
    text: "I achieved a Distinction in my Grade 8 piano examination, awarded through London College of Music Examinations at the University of West London. It reflects years of study, technical development and dedication to performance.",
  },
  {
    title: "International competitions",
    meta: "Laureate and finalist honours",
    text: "I have received Laureate and finalist honours across more than 10 international music competitions. At the Beethoven Award International Music Competition, I placed among the top 80 participants and received Laureate recognition.",
  },
  {
    title: "Music Ambassador",
    meta: "Jumeirah College",
    text: "I help organise music competitions, showcases and Battle of the Bands events, perform as a pianist with the JC Band, and support younger students as they develop their instrumental skills.",
  },
  {
    title: "Let the Music Speak!",
    meta: "Founder · GEMS Modern Academy",
    text: "I founded Let the Music Speak! and organised the school’s first music festival, bringing together more than 75 performers across seven genres to celebrate musical talent.",
  },
];

export const musicCompetitions = [
  "Ravel Award (twice)",
  "Brahms Award",
  "Classical Music Stars (twice)",
  "Beethoven Award International Music Competition",
  "Fenix International Award",
  "Global Young Musicians Competition",
  "Mozart International Music Competition",
  "World’s Best Musicians",
  "Haydn Music International Competition",
];

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — ${profile.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
