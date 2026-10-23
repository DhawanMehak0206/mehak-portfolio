// Photos and evidence images are bundled from src/assets; each has a small thumbnail for grids.
const imageFiles = import.meta.glob<string>(
  ["../assets/photos/*.jpg", "../assets/evidence/*.jpg"],
  {
    eager: true,
    import: "default",
  },
);
const thumbFiles = import.meta.glob<string>(
  ["../assets/photos/thumbs/*.jpg", "../assets/evidence/thumbs/*.jpg"],
  { eager: true, import: "default" },
);
const documentFiles = import.meta.glob<string>("../assets/evidence/files/*.pdf", {
  eager: true,
  import: "default",
});

/** Bundled URLs for an image in src/assets/<folder>, plus its thumbnail. */
function asset(folder: "photos" | "evidence", name: string) {
  const src = imageFiles[`../assets/${folder}/${name}.jpg`];
  const thumb = thumbFiles[`../assets/${folder}/thumbs/${name}.jpg`];
  if (!src || !thumb) throw new Error(`Missing image: ${folder}/${name}.jpg (or its thumbnail)`);
  return { src, thumb };
}

// Facts come from Mehak's portfolio PDF and the certificates and letters in her evidence folder.
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
  /** Smaller copy for gallery tiles. */
  thumb: string;
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
    ...asset("photos", "portrait"),
    width: 854,
    height: 960,
    alt: "Portrait of Mehak Dhawan",
    caption: "Mehak Dhawan",
  },
  digisakhiSession: {
    ...asset("photos", "digisakhi-session"),
    width: 1690,
    height: 1260,
    alt: "Mehak leaning over a laptop to guide a participant in a computer lab",
    caption: "Guiding a participant during a DigiSakhi session",
  },
  digisakhiGuiding: {
    ...asset("photos", "digisakhi-guiding"),
    width: 816,
    height: 1024,
    alt: "Mehak helping a participant at a computer",
    caption: "One-to-one support at the computer",
    focus: "top",
  },
  digisakhiStudents: {
    ...asset("photos", "digisakhi-students"),
    width: 952,
    height: 1144,
    alt: "Mehak working on a laptop with a group of students gathered around her",
    caption: "Working through a session with students",
  },
  digisakhiTalk: {
    ...asset("photos", "digisakhi-talk"),
    width: 920,
    height: 1052,
    alt: "Mehak speaking to a class of students",
    caption: "Speaking with a class",
    focus: "upper",
  },
  digisakhiClassroom: {
    ...asset("photos", "digisakhi-classroom"),
    width: 1400,
    height: 920,
    alt: "A classroom of students listening during a session",
    caption: "Students during a session",
  },
  kindlingHome: {
    ...asset("photos", "kindling-home"),
    width: 648,
    height: 1382,
    alt: "Kindling home screen with a parenting-style assessment, a daily plan and weekly milestones",
    caption: "Daily plan and milestones",
  },
  kindlingQuestion: {
    ...asset("photos", "kindling-question"),
    width: 628,
    height: 1382,
    alt: "Kindling assessment question about warmth and structure, with five answer options",
    caption: "Parenting-style assessment",
  },
  kindlingAssessment: {
    ...asset("photos", "kindling-assessment"),
    width: 654,
    height: 1366,
    alt: "Kindling screen describing personalised plans, AI-powered insights and weekly challenges",
    caption: "Personalised plans and insights",
  },
  kindlingLearnovate: {
    ...asset("photos", "kindling-learnovate"),
    width: 922,
    height: 1184,
    alt: "Mehak presenting Kindling to a family in the Learnovate innovation space",
    caption: "Presenting Kindling to a family",
  },
  kindlingFamily: {
    ...asset("photos", "kindling-connect-family"),
    width: 542,
    height: 1026,
    alt: "Mehak at a table with a laptop, printed materials and a QR code, talking with a visitor",
    caption: "Introducing Kindling to visitors",
    focus: "upper",
  },
  kindlingOnline: {
    ...asset("photos", "kindling-connect-online"),
    width: 1400,
    height: 680,
    alt: "Slide from an online session asking: One word that describes parenting your child during growing years?",
    caption: "A prompt from an online Kindling Connect session",
    fit: "contain",
  },
  festival: {
    ...asset("photos", "let-the-music-speak"),
    width: 1572,
    height: 1136,
    alt: "Mehak speaking at a lectern beside a screen reading Let the Music Speak!",
    caption: "Speaking at Let the Music Speak!",
  },
  digisakhiPractice: {
    ...asset("photos", "digisakhi-practice"),
    width: 1050,
    height: 1400,
    alt: "Mehak standing behind a row of participants practising at computers",
    caption: "Participants practising at the computers",
  },
  digisakhiPlatformVideos: {
    ...asset("photos", "digisakhi-platform-videos"),
    width: 1400,
    height: 657,
    alt: "The DigiSakhi platform's video library, showing Module 2: Financial Digital Literacy lessons presented by Mehak",
    caption: "The DigiSakhi video library",
    fit: "contain",
  },
  digisakhiPlatformBlogs: {
    ...asset("photos", "digisakhi-platform-blogs"),
    width: 1400,
    height: 748,
    alt: "The DigiSakhi platform's blog page, with articles in Tamil, English and Punjabi",
    caption: "Blogs in several Indian languages",
    fit: "contain",
  },
  kindlingShowcaseFamily: {
    ...asset("photos", "kindling-showcase-family"),
    width: 1050,
    height: 1400,
    alt: "Mehak at the Kindling stand showing a father and daughter the app on a laptop and phone",
    caption: "Showing a parent and child the app",
    focus: "upper",
  },
  kindlingShowcaseGroup: {
    ...asset("photos", "kindling-showcase-group"),
    width: 1050,
    height: 1400,
    alt: "Mehak explaining Kindling to a family of four holding a printed leaflet",
    caption: "Explaining Kindling to a family",
    focus: "upper",
  },
  kindlingShowcaseDemo: {
    ...asset("photos", "kindling-showcase-demo"),
    width: 1050,
    height: 1400,
    alt: "Mehak demonstrating Kindling on a laptop to a mother and her teenage son",
    caption: "A demonstration for a mother and son",
    focus: "upper",
  },
  kindlingShowcaseFather: {
    ...asset("photos", "kindling-showcase-father"),
    width: 1050,
    height: 1400,
    alt: "Mehak talking with a seated father and daughter at the Kindling stand",
    caption: "Talking with a father and daughter",
    focus: "upper",
  },
  kindlingSchoolGuide: {
    ...asset("photos", "kindling-school-guide"),
    width: 1400,
    height: 637,
    alt: "Mehak walking a father and daughter through Kindling at a school session",
    caption: "Guiding a family through the app",
  },
  kindlingSchoolStand: {
    ...asset("photos", "kindling-school-stand"),
    width: 1400,
    height: 637,
    alt: "Mehak speaking with parents seated at a round table with the Kindling leaflet and QR code",
    caption: "A Kindling session at a partner school",
  },
  kindlingConnectSpecialNeeds: {
    ...asset("photos", "kindling-connect-special-needs"),
    width: 1400,
    height: 751,
    alt: "Title slide: Navigating Adolescence for Children with Special Needs, Healing Nest Foundation",
    caption: "An online session on adolescence for children with special needs",
    fit: "contain",
  },
  kindlingConnectSupport: {
    ...asset("photos", "kindling-connect-support"),
    width: 1400,
    height: 788,
    alt: "Slide on government support and financial planning, covering the UDID card, Niramaya health insurance and disability pensions",
    caption: "A session on government support and financial planning",
    fit: "contain",
  },
  festivalPerformer: {
    ...asset("photos", "let-the-music-speak-performer"),
    width: 1400,
    height: 805,
    alt: "A student performing on a digital piano at the Let the Music Speak! festival",
    caption: "A performer at the festival",
  },
} satisfies Record<string, Photo>;

export interface ExternalLink {
  href: string;
  label: string;
}

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
    text: "My research spans computational musicology, development economics and physics, with papers published in NHSJS and the International Journal of Social Science Research and Review.",
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
  title: "Quantifying Tonal Stability and Key Ambiguity Metrics across Musical Genres",
  kicker: "Computational musicology · Published in NHSJS, 2026",
  link: {
    href: "https://nhsjs.com/2026/quantifying-tonal-stability-and-key-ambiguity-metrics-across-musical-genres-using-ks-and-tonnetz/",
    label: "Read the paper on NHSJS",
  } as ExternalLink,
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
  link?: ExternalLink;
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
      "Published in the International Journal of Social Science Research and Review, October 2026",
      "Runner-up, Best Presenter, Global Confluence Review International Conference",
      "Presented at the international seminar Women and Child Rights: Legal Perspectives and Challenges, organised by Law Mantra Trust with Maharashtra National Law University, Nagpur",
      "Accepted at the Princetonian Conference, IFERP’s WGL 2026 and the IFoRE conference",
    ],
    link: {
      href: "https://ijssrr.com/journal/article/view/3600",
      label: "Read the paper on IJSSRR",
    },
  },
  {
    id: "standing-waves",
    icon: "waves",
    title: "Understanding and Simulating Standing Waves",
    field: "Computational physics",
    context: "Research internship with Dr. Nishchal Dwivedi, IIT Bombay",
    text: "I studied how standing waves emerge from the superposition of waves travelling in opposite directions, and how boundary conditions determine nodes, antinodes and allowed frequencies. I then built Python simulations of wave displacement over time, adding Gaussian noise and damping to represent real-world conditions, and compared the results with theoretical predictions.",
    methods: ["Python", "NumPy", "Matplotlib", "Numerical methods"],
    outcomes: ["Independent study report, Research Archive of Rising Scholars, October 2025"],
    link: {
      href: "https://www.research-archive.org/index.php/rars/preprint/view/3165",
      label: "Read the report",
    },
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
  link?: ExternalLink;
}

export const experience: Engagement[] = [
  {
    id: "kindling",
    organisation: "Kindling",
    role: "Founder",
    text: "Kindling is a context-aware, emotionally intelligent app designed to strengthen parent–adolescent relationships. Developed in consultation with professional psychologists, it offers an AI-powered chatbot, conversation starters, activity suggestions, smart reminders and parenting tips tailored to each family. I didn’t want to build another app competing for a family’s attention; Kindling is designed to help people put their phones down and reconnect.",
    points: [
      "Piloted with Learnovate across 8 schools in the KIIT JEE network, engaging about 2,500–3,000 families",
      "Technovation Girls semifinalist, the only UAE-based project to advance",
      "Winner of the 2025–2026 Technovation Break the Scroll Prize",
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
    link: {
      href: "https://www.research-archive.org/index.php/rars/preprint/view/3165",
      label: "Read the report",
    },
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
    text: "Won first place nationally, competing against more than 50 teams with an autonomous LiDAR robot car built on an Arduino-based prototype. Winning also earned me an internship opportunity at Lab of the Future.",
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
      "Learning content integrated into Frontier Markets’ Meri Saheli network, alongside 20+ workshops and community sessions",
      "Youth Empowerment & Service Award of Excellence, 2026",
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
      "Designed and led over 30 workshops, reaching nearly 11,000 members of the company’s workforce community",
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
    text: "I lead STEAM initiatives across the school, including running my own STEM Club and mentoring younger students with their STEM Projects.",
    points: ["Mentored five teams for the GEMS Global Innovation Challenge"],
  },
  {
    icon: "house",
    title: "House Representative",
    meta: "Fihri (Green) House",
    text: "I work with the Head of House to organise house activities, celebrations and House Week events, from inter-house sports to bake-offs, Float Your Boat and singing competitions.",
  },
  {
    icon: "music",
    title: "Music Organizer",
    meta: "GEMS Modern Academy",
    text: "I organised music competitions, school showcases and Battle of the Bands events, and helped younger students develop their instrumental skills.",
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
  /** Key into `evidence` for the certificate or letter behind this honour. */
  evidence?: EvidenceId;
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
        evidence: "bmoRound1",
      },
      {
        title: "British Physics Olympiad",
        detail: "Gold, Online Senior Physics Challenge",
        text: "Gold Award in the BPhO Online Senior Physics Challenge 2026, one of only three students in my entire year group to receive Gold.",
        evidence: "bpho",
      },
      {
        title: "International Psychology Olympiad",
        detail: "Highest Distinction",
        text: "A regional top-six score in the UAE, within the top 5%, and selection for the UAE Psychology National Team.",
        evidence: "ipsyo",
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
        evidence: "crest",
      },
      {
        title: "Azeem Scholar Award",
        detail: "GEMS Modern Academy",
        text: "Sustained academic excellence from April 2021 to April 2025, as overall topper in Grade 9 and a subject topper in Grade 10.",
        evidence: "azeemScholar",
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
        evidence: "technovation",
      },
      {
        title: "Curtin University STEM Challenge",
        detail: "National first prize",
        text: "Won first place among more than 50 teams with an autonomous LiDAR robot car.",
        evidence: "curtin",
      },
      {
        title: "Blue Ocean Student Entrepreneur Competition",
        detail: "Top 500",
        text: "Ranked among the top 500 of more than 23,000 submissions.",
        evidence: "blueOcean",
      },
      {
        title: "Learnovate Technovator and Social Impact Distinction",
        detail: "Learnovate and the KIIT JEE school network",
        text: "Awarded for Kindling; I was the first and only high-school student in the network to receive it.",
        evidence: "letterLearnovate",
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
        evidence: "cobis",
      },
      {
        title: "Youth Empowerment & Service Award",
        detail: "For DigiSakhi",
        text: "One of 28 awardees from 277 applications across 45 countries, presented by Mr. Prabhat Kumar Jha of India’s Ministry of MSME and Shri P. K. Majumder of the Consulate General of India in Dubai.",
        evidence: "yesAward",
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
        evidence: "gcrBestPresenter",
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
        evidence: "lcmGrade8",
      },
      {
        title: "International music competitions",
        detail: "Laureate honours",
        text: "Laureate honours across 10 international competitions, including the Ravel, Brahms and Beethoven awards.",
        evidence: "finalRounds",
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
        evidence: "mathCamps",
      },
      {
        title: "British Mathematical Olympiad camp",
        detail: "Pembroke College, Oxford",
        text: "A camp bringing together approximately 30 high-school students.",
        evidence: "mathCamps",
      },
      {
        title: "BMO Asia Camp",
        detail: "Beijing, China",
        text: "Advanced mathematics and olympiad-level problem-solving.",
        evidence: "bmoAsiaCamp",
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
    title: "Music",
    meta: "Piano",
    text: "Perfomer.",
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

export interface MediaItem {
  outlet: string;
  kind: "Article" | "Video";
  date: string;
  title: string;
  text: string;
  href: string;
  image?: Photo;
}

export const media: MediaItem[] = [
  {
    outlet: "ETEducation, The Economic Times",
    kind: "Article",
    date: "29 September 2026",
    title:
      "Dubai Grade 12 student uses technology to expand family learning, digital skills for women",
    text: "A feature on how Kindling and DigiSakhi are changing family communication and women’s digital education.",
    href: "https://education.economictimes.indiatimes.com/news/skills/dubai-grade-12-student-uses-technology-to-expand-family-learning-digital-skills-for-women/134555471",
  },
  {
    outlet: "Être Girls",
    kind: "Video",
    date: "Gen E, episode 182",
    title: "Gen E: Mehak Dhawan",
    text: "A short video feature on DigiSakhi and what inspired me to pursue STEM and advocacy.",
    href: "https://www.youtube.com/shorts/udyd4YvzLaw",
    image: {
      ...asset("photos", "media-etre-girls"),
      width: 562,
      height: 1000,
      alt: "Mehak answering the question: What inspired you to pursue STEM and advocacy?",
      caption: "Être Girls, Gen E",
    },
  },
];

export interface EvidenceDoc {
  title: string;
  issuer: string;
  /** Left out when the document itself is undated. */
  date?: string;
  kind: string;
  description: string;
  /** Page images, in reading order. */
  pages: { src: string; thumb: string }[];
  /** The original document, when it is published alongside the images. */
  file?: { href: string; label: string };
  /** Where the document can be read online. */
  link?: ExternalLink;
}

function doc(
  meta: Omit<EvidenceDoc, "pages" | "file" | "link">,
  pages: string[],
  file?: { name: string; label: string },
  link?: ExternalLink,
): EvidenceDoc {
  const href = file && documentFiles[`../assets/evidence/files/${file.name}`];
  if (file && !href) throw new Error(`Missing document: evidence/files/${file.name}`);
  return {
    ...meta,
    pages: pages.map((name) => asset("evidence", name)),
    ...(file && href ? { file: { href, label: file.label } } : {}),
    ...(link ? { link } : {}),
  };
}

// Certificates, letters and results from Mehak's evidence folder. Dates of birth, a family
// member's name and other people's faces are hidden in the images.
export const evidence = {
  azeemScholar: doc(
    {
      title: "Azeem Scholar Award",
      issuer: "GEMS Modern Academy",
      date: "2021–2025",
      kind: "Certificate",
      description:
        "Awarded for academic excellence in four consecutive years, from Grade 7 (2021–22) to Grade 10 (2024–25).",
    },
    [
      "azeem-scholar-2024-25",
      "azeem-scholar-2021-24-p1",
      "azeem-scholar-2021-24-p2",
      "azeem-scholar-2021-24-p3",
    ],
  ),
  yygs: doc(
    {
      title: "Yale Young Global Scholars",
      issuer: "Yale University",
      date: "July 2026",
      kind: "Certificate of completion",
      description:
        "Completed all elements of the Innovations in Science & Technology session, 5–17 July 2026.",
    },
    ["yygs-certificate"],
  ),
  mathCamps: doc(
    {
      title: "Mathematics camps at Cambridge and Oxford",
      issuer: "St Catharine’s College, Cambridge · Pembroke College, Oxford",
      date: "August 2026",
      kind: "Programme details",
      description:
        "The two camps, open to British Mathematical Olympiad award winners: 35 places at St Catharine’s College and 30 at Pembroke College.",
    },
    ["math-camps-oxford-cambridge"],
  ),
  bmoAsiaCamp: doc(
    {
      title: "BMO Asia Camp, Beijing",
      issuer: "UK Mathematics Trust",
      date: "July 2026",
      kind: "Programme details",
      description:
        "The camp in Beijing, China, open to award winners in the 2025–26 British Mathematical Olympiad.",
    },
    ["bmo-asia-camp-beijing"],
  ),
  bmoRound1: doc(
    {
      title: "British Mathematical Olympiad Round 1",
      issuer: "UK Mathematics Trust",
      date: "2025",
      kind: "Certificate of Distinction",
      description: "Certificate of Distinction in BMO Round 1, with the Best in Year award.",
    },
    ["bmo-round-1"],
  ),
  bmoRound2: doc(
    {
      title: "British Mathematical Olympiad Round 2",
      issuer: "UK Mathematics Trust",
      date: "2026",
      kind: "Certificate",
      description:
        "Certificate for taking part in BMO Round 2, for which I qualified through my Round 1 result.",
    },
    ["bmo-round-2"],
  ),
  bpho: doc(
    {
      title: "British Physics Olympiad: Gold Award",
      issuer: "British Physics Olympiad",
      date: "January 2026",
      kind: "Certificate",
      description: "Gold Award in the BPhO Online Senior Physics Challenge 2026.",
    },
    ["bpho-gold"],
  ),
  ipsyo: doc(
    {
      title: "International Psychology Olympiad",
      issuer: "IPsyO",
      date: "July 2026",
      kind: "Certificates of achievement",
      description:
        "Highest Distinction in the 2026 International Psychology Olympiad, and a Regional Top 6 Scorer certificate for the United Arab Emirates.",
    },
    ["ipsyo-highest-distinction", "ipsyo-regional-top-six"],
  ),
  crest: doc(
    {
      title: "CREST Gold Award",
      issuer: "British Science Association",
      date: "June 2026",
      kind: "Award email",
      description:
        "Assessment result for “Quantifying Tonal Stability and Key Ambiguity Across Musical Genres”, awarded CREST Gold.",
    },
    ["crest-gold"],
  ),
  technovation: doc(
    {
      title: "Technovation Break the Scroll Prize",
      issuer: "Technovation",
      date: "July 2026",
      kind: "Award email",
      description:
        "Team Kindling selected as winner of the 2025–2026 Break the Scroll Prize, with $500 for each student team member.",
    },
    ["technovation-break-the-scroll"],
  ),
  curtin: doc(
    {
      title: "Curtin University STEM Challenge: Winner",
      issuer: "Curtin University Dubai",
      date: "May 2025",
      kind: "Certificate",
      description:
        "Winner certificate for Team Quark, GEMS Modern Academy, in the STEM Challenge 2025.",
    },
    ["curtin-stem-challenge"],
  ),
  blueOcean: doc(
    {
      title: "Blue Ocean Student Entrepreneur Competition",
      issuer: "Blue Ocean Competition",
      date: "May 2026",
      kind: "Certificate of achievement",
      description:
        "Top 500 Finalist in the 2026 competition, which drew more than 23,000 students from 175 countries.",
    },
    ["blue-ocean-top-500"],
  ),
  cobis: doc(
    {
      title: "COBIS Student Achievement Award",
      issuer: "Council of British International Schools",
      date: "2026",
      kind: "Certificate",
      description:
        "Student Achievement Awards 2026, for significant contribution to the wider community.",
    },
    ["cobis-student-achievement"],
  ),
  yesAward: doc(
    {
      title: "Youth Empowerment & Service Award of Excellence",
      issuer: "KCS Foundation and YES Events",
      date: "October 2026",
      kind: "Certificate",
      description:
        "Award of Excellence 2026, presented in Dubai on 4 October 2026, for leadership, dedication and community service through DigiSakhi.",
    },
    ["yes-award-2026"],
  ),
  nhsjsPaper: doc(
    {
      title:
        "Quantifying Tonal Stability and Key Ambiguity Metrics across Musical Genres using KS and Tonnetz",
      issuer: "National High School Journal of Science",
      date: "September 2026",
      kind: "Published paper",
      description:
        "First page of the published paper, received in April 2026 and accepted in August 2026.",
    },
    ["nhsjs-paper-p1"],
    { name: "nhsjs-tonal-stability-paper.pdf", label: "Read the full paper (PDF)" },
    {
      href: "https://nhsjs.com/2026/quantifying-tonal-stability-and-key-ambiguity-metrics-across-musical-genres-using-ks-and-tonnetz/",
      label: "View on NHSJS",
    },
  ),
  sigmaXiShowcase: doc(
    {
      title: "Sigma Xi Student Research Showcase",
      issuer: "Sigma Xi",
      date: "2026",
      kind: "Project page",
      description:
        "My Math & Computer Science entry, “Quantifying Music to Understand Human Perception”, with its abstract, slideshow and headshot.",
    },
    ["sigma-xi-showcase"],
  ),
  gcrBestPresenter: doc(
    {
      title: "Best Presenter Award, Runner-up",
      issuer: "Global Confluence Review International Multidisciplinary Conference",
      date: "August 2026",
      kind: "Certificate",
      description:
        "For the paper “Beyond the Interface”, presented at the GCR International Multidisciplinary Conference 2026.",
    },
    ["gcr-best-presenter"],
  ),
  mnluSeminar: doc(
    {
      title: "International Seminar on Women and Child Rights",
      issuer: "Law Mantra Trust and Maharashtra National Law University, Nagpur",
      date: "July 2026",
      kind: "Certificate",
      description:
        "For attending and presenting “Beyond the Interface” at the two-day international seminar, 17–18 July 2026.",
    },
    ["mnlu-seminar"],
  ),
  gcrColloquium: doc(
    {
      title: "GCR International Multidisciplinary Colloquium",
      issuer: "Global Confluence Review",
      date: "August 2026",
      kind: "Certificate",
      description: "For active participation in the GCR Colloquium on 29 August 2026.",
    },
    ["gcr-colloquium"],
  ),
  iferp: doc(
    {
      title: "Acceptance: Women, Gender and Leadership conference",
      issuer: "IFERP",
      date: "2026",
      kind: "Acceptance email",
      description:
        "“Bridging the Gap: Rethinking Women’s Financial Inclusion Beyond Access” accepted for presentation at the 3rd International Conference on Women, Gender, and Leadership in Thailand, 25–26 September 2026.",
    },
    ["iferp-acceptance"],
  ),
  ifore: doc(
    {
      title: "Acceptance: IFoRE Student Research Awards",
      issuer: "Sigma Xi",
      date: "2026",
      kind: "Acceptance email",
      description: "Abstract accepted for the IFoRE Student Research Awards Competition.",
    },
    ["sigma-xi-ifore-acceptance"],
  ),
  letterCountryDelight: doc(
    {
      title: "Letter of recommendation: Country Delight",
      issuer: "Nitin Kaushal, Co-Founder and CEO, Country Delight",
      kind: "Letter of recommendation",
      description:
        "On the Kindling Connect workshops with the company’s workforce community, the two policy proposals it adopted and its ₹18 lakh pre-seed commitment.",
    },
    ["letter-country-delight-p1", "letter-country-delight-p2"],
  ),
  letterLearnovate: doc(
    {
      title: "Letter of recommendation: Learnovate",
      issuer: "Sachin Kumar, Founder, Learnovate (True Cost Sourcing)",
      kind: "Letter of recommendation",
      description:
        "On piloting Kindling across 8 schools with about 2,500–3,000 families, and the Learnovate Technovator & Social Impact Distinction.",
    },
    ["letter-learnovate-p1", "letter-learnovate-p2"],
  ),
  letterFrontierMarkets: doc(
    {
      title: "Letter of recommendation: Frontier Markets",
      issuer: "Sushmita Ganguly, Manager – HR & Administration, Frontier Markets",
      date: "August 2026",
      kind: "Letter of recommendation",
      description:
        "On bringing DigiSakhi’s curriculum into the Meri Saheli network and its outreach to more than 15,000 women.",
    },
    ["letter-frontier-markets-p1", "letter-frontier-markets-p2"],
  ),
  letterTctf: doc(
    {
      title: "Letter of recommendation: The Creative Thinkers Forum",
      issuer: "President, The Creative Thinkers Forum (TCTF), New Delhi",
      date: "August 2025",
      kind: "Letter of recommendation",
      description:
        "On the technology bootcamp for young women that I designed and led during summer 2025.",
    },
    ["letter-tctf-p1", "letter-tctf-p2"],
  ),
  letterNutanMarathi: doc(
    {
      title: "Letter of support: Nutan Marathi Senior Secondary School",
      issuer: "Nutan Marathi Senior Secondary School, New Delhi",
      kind: "Letter of support",
      description:
        "On DigiSakhi workshops for students, teachers and the wider school community, covering AI, online safety, digital banking and UPI payments.",
    },
    ["letter-nutan-marathi"],
  ),
  mathCaptain: doc(
    {
      title: "Mathematics Captain",
      issuer: "Jumeirah College",
      kind: "School announcement",
      description:
        "The school’s announcement of its Mathematics Captains. The other captain’s face and name are hidden.",
    },
    ["math-captain"],
  ),
  lcmGrade8: doc(
    {
      title: "Piano Grade 8 with Distinction",
      issuer: "London College of Music Examinations, University of West London",
      kind: "Certificate",
      description:
        "UWL Level 3 Certificate in Graded Examination in Music Performance (Grade 8), with Distinction.",
    },
    ["lcm-grade-8"],
  ),
  finalRounds: doc(
    {
      title: "International competition final rounds",
      issuer:
        "Beethoven, Brahms, Classical Music Stars, Fenix, Global Young Musicians and Ravel competitions",
      date: "2026",
      kind: "Selection emails",
      description:
        "Invitations to the final round in the Piano category. Shown to the point of selection; entry and confirmation details are cropped out.",
    },
    [
      "final-round-beethoven",
      "final-round-brahms",
      "final-round-classical-music-stars",
      "final-round-fenix",
      "final-round-global-young-musicians",
      "final-round-ravel",
    ],
  ),
  codingAi: doc(
    {
      title: "Artificial Intelligence with Python",
      issuer: "Coding & More",
      date: "2024–2025",
      kind: "Certificates of completion",
      description:
        "Modules 2 (April 2025) and 1 (September 2024) of the Artificial Intelligence with Python enrichment programme.",
    },
    ["coding-and-more-ai-python", "coding-and-more-ai-python-p2"],
  ),
  codingPython: doc(
    {
      title: "Python: Data Structures and Core Python",
      issuer: "CodingZen Academy",
      date: "2023",
      kind: "Certificates of achievement",
      description: "Python: DSA Level I (November 2023) and Core Python Level I (October 2023).",
    },
    ["codingzen-python-dsa", "codingzen-core-python"],
  ),
  freeCodeCamp: doc(
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "September 2021",
      kind: "Developer certification",
      description:
        "The Responsive Web Design Developer Certification, about 300 hours of coursework.",
    },
    ["freecodecamp-web-design"],
  ),
  tennisNationals: doc(
    {
      title: "CISCE National Tennis Tournament",
      issuer: "Council for the Indian School Certificate Examinations",
      date: "September 2022",
      kind: "Certificate of participation",
      description:
        "Under-14 Girls category at the CISCE National Sports & Games 2022, Bengal Tennis Association, Kolkata. Date of birth hidden.",
    },
    ["tennis-cisce-nationals-2022"],
  ),
  tennisTraining: doc(
    {
      title: "Tennis training, Al Nasr Leisureland",
      issuer: "Al Nasr Leisureland, Dubai",
      date: "July–October 2023",
      kind: "Certificate of participation",
      description:
        "Tennis training from 1 July to 1 October 2023 with ITF-certified coach Manuel H. Gayon.",
    },
    ["tennis-al-nasr-training-2023"],
  ),
} satisfies Record<string, EvidenceDoc>;

export type EvidenceId = keyof typeof evidence;

/** The documents shown on each page, in display order. */
export const evidenceSets = {
  education: ["azeemScholar", "yygs", "mathCamps", "bmoAsiaCamp"],
  research: [
    "nhsjsPaper",
    "crest",
    "sigmaXiShowcase",
    "gcrBestPresenter",
    "mnluSeminar",
    "gcrColloquium",
    "iferp",
    "ifore",
  ],
  experience: ["letterLearnovate", "technovation", "curtin", "yygs"],
  community: [
    "letterCountryDelight",
    "letterFrontierMarkets",
    "letterTctf",
    "letterNutanMarathi",
    "yesAward",
    "cobis",
  ],
  leadership: ["mathCaptain"],
  music: ["lcmGrade8", "finalRounds"],
  coding: ["codingAi", "codingPython", "freeCodeCamp"],
  tennis: ["tennisNationals", "tennisTraining"],
  awards: [
    "bmoRound1",
    "bmoRound2",
    "bpho",
    "ipsyo",
    "crest",
    "azeemScholar",
    "technovation",
    "curtin",
    "blueOcean",
    "cobis",
    "yesAward",
    "gcrBestPresenter",
    "lcmGrade8",
    "finalRounds",
    "mathCamps",
    "bmoAsiaCamp",
  ],
} satisfies Record<string, EvidenceId[]>;

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
