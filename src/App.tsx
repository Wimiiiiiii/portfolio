import { useEffect, useMemo, useState } from "react";
// Import d'images locales (exemples)
import opti from "./assets/opti.png";
import opti2 from "./assets/optii.png";
import opti3 from "./assets/optiii.jpg";
import locmat from "./assets/locmat.png";
import locmat1 from "./assets/locmaat.png";
import locmat2 from "./assets/locmaaat.png";
import cop from "./assets/4cop.png";
import coop from "./assets/4coop.png";
import motsign from "./assets/motsiiign.png";
import motsiign from "./assets/motsign.png";
import pentest from "./assets/pentest.png";
import adminphp from "./assets/adminphp.png";
import {
  BookOpen,
  Briefcase,
  Cake,
  Download,
  Github,
  Globe2,
  Instagram,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "parcours", label: "Parcours" },
  { id: "experience", label: "Expérience" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "contact", label: "Contact" },
];

const personalInfo = [
  {
    icon: Cake,
    label: "Date de naissance",
    value: "07 octobre 2002",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "7331 Saint-Ghislain, Belgique",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ouiambouazzati7@gmail.com",
    href: "mailto:ouiambouazzati7@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+32 487 71 31 26",
    href: "tel:+32487713126",
  },
];

const academicPath = [
  {
    period: "2024 – Aujourd'hui",
    institution: "Faculté Polytechnique de Mons",
    diploma:
      "Master en Ingénierie Civile - Informatique & Gestion | Cybersécurité et Forensics pour l’IoT",
  },
  {
    period: "2021 – 2024",
    institution: "Faculté Polytechnique de Mons",
    diploma: "Bachelier en Ingénierie Civile - Informatique & Gestion",
  },
];

const professionalExperiences = [
  {
    period: "Juillet – Septembre 2025",
    role: "Cybersecurity Intern",
    organisation: "CETIC",
    context: "Stage de 3 mois",
    missions: [
      "Assurance sécurité produit avec mise en place d’une surveillance continue",
      "Déploiement d’un WAF Apache + ModSecurity et centralisation des logs via Wazuh, Graylog, Vector",
      "Contribution aux tests de pénétration industriels : évaluation de vulnérabilités et scripts d’exploitation",
    ],
  },
  {
    period: "Juillet – Septembre 2024",
    role: "Chercheuse Junior",
    organisation: "Faculté Polytechnique de Mons",
    context: "Bourse d’initiation à la recherche",
    missions: [
      "Conception et développement d’un réseau de neurones pour l’analyse de signaux EEG",
      "Expérimentation de modèles multimodaux spécialisés dans le traitement des données EEG",
      "Veille scientifique approfondie autour de la multimodalité et des technologies EEG",
    ],
  },
];

const academicProjects = [
  {
    title: "Pentester junior – Ethical Hacking",
    company: "Projet Master 1 | Faculté Polytechnique de Mons & Thales",
    role: "Pentester junior",
    highlights: [
      "Test d’intrusion éthique en boîte noire sur une application web fournie par Thales (aucune info préalable)",
      "Phases complètes : reconnaissance, énumération, exploitation de vulnérabilités critiques",
      "Rapport détaillé avec analyse d’impact et recommandations de remédiation priorisées",
    ],
    gallery: [
      { src: pentest, alt: "Pentest en boîte noire – pages d'application ciblées" },
      { src: adminphp, alt: "Piste d'exploitation – interface d'administration détectée" },
    ],
  },
  {
    title: "Optimisation des soutenances",
    company: "Cooptech | Faculté Polytechnique de Mons",
    role: "Développeuse junior",
    highlights: [
      "Participation à un projet international dédié à l’optimisation des examens de soutenance",
      "Implémentation d’algorithmes d’optimisation et de fonctionnalités de planification",
      "Collaboration entre équipes techniques basées en Belgique et au Bénin",
      "Mission sur site au Bénin en janvier 2025",
    ],
    gallery: [
      { src: opti, alt: "Vue interface optimisation – capture locale" },
      { src: opti2, alt: "Planification – deuxième capture locale" },
      { src: opti3, alt: "Brainstorming – photo illustrative" },
    ],
  },
  {
    title: "4COP",
    company: "Projet d’engagement étudiant international",
    role: "Concept & design plateforme",
    highlights: [
      "Imagination d’une plateforme reliant étudiants, ONG et communautés locales à des partenaires internationaux",
      "Centralisation des dépôts de projets et des besoins de collaboration",
      "Création d’un parcours de soutien transparent pour générer des impacts concrets sur le terrain",
    ],
    gallery: [
      {
        src: cop,
        alt: "Illustration de collaboration internationale pour le développement communautaire",
      },
      {
        src: coop,
        alt: "Réunion virtuelle entre partenaires internationaux",
      },
    ],
  },
  {
    title: "Gestion LOCMAT",
    company: "Faculté Polytechnique de Mons",
    role: "Développeuse junior",
    highlights: [
      "Conception d’un site facilitant la location du matériel informatique",
      "Développement d’une expérience fluide côté front-end et back-end",
      "Mise en place de parcours utilisateurs intuitifs et performants",
    ],
    gallery: [
      {
        src: locmat,
        alt: "Réunion d’équipe autour d’un tableau interactif",
      },
      {
        src: locmat1,
        alt: "Collaboration virtuelle sur une plateforme numérique",
      },
      {
        src: locmat2,
        alt: "Brainstorming autour d’un projet numérique en équipe",
      },
    ],
  },
  {
    title: "MOTSign",
    company: "Faculté Polytechnique de Mons",
    role: "Développeuse junior",
    highlights: [
      "Développement d’une application mobile de traduction de la langue des signes",
      "Exploitation de modules NLP et NLTK pour le traitement linguistique",
      "Utilisation des modèles holistiques de MediaPipe pour la reconnaissance gestuelle",
    ],
    gallery: [
      {
        src: motsign,
        alt: "Collaboration virtuelle entre développeurs",
      },
      {
        src: motsiign,
        alt: "Atelier de conception d’application mobile inclusif",
      },
    ],
  },
];

// Nouvelle structuration des compétences techniques (remplace l'ancien affichage générique)
const technicalCompetences = [
  {
    category: "Développement & programmation",
    items: ["Python", "C++", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & librairies",
    items: [
      "React Native",
      "Flutter",
      "TensorFlow",
      "Flask",
      "Django",
      "Laravel",
    ],
  },
  {
    category: "Contrôle de version & environnements",
    items: ["GitHub", "GitLab", "Anaconda"],
  },
  {
    category: "Cybersécurité & Forensics ",
    items: [
      "Analyse forensics IoT",
      "Gestion de preuves numériques",
      "Segmentation & durcissement",
    ],
  },
  {
    category: "Tests d’intrusion / Pentesting",
    items: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Kali Linux"],
  },
  {
    category: "Sécurité applicative & réseau",
    items: [
      "Apache + ModSecurity (WAF)",
      "SIEM : Wazuh, Graylog, Vector",
      "Gestion des vulnérabilités",
    ],
  },
  {
    category: "Surveillance & analyse",
    items: [
      "Analyse de logs",
      "Exploitation de vulnérabilités",
      "Veille & documentation",
    ],
  },
  {
    category: "IoT",
    items: ["Arduino IDE", "Sécurité des équipements industriels"],
  },
];

const softSkills = [
  "Organisation et gestion du temps",
  "Capacité d’adaptation",
  "Travail en équipe et communication",
  "Autonomie et prise d’initiative",
  "Curiosité technologique",
];

const skillMatrix = {
  programming: [
    { label: "HTML & CSS", level: 88 },
    { label: "Python", level: 92 },
    { label: "PHP", level: 70 },
    { label: "Java", level: 55 },
    { label: "JavaScript", level: 72 },
    { label: "C++", level: 78 },
  ],
  frameworks: [
    { label: "React Native", level: 55 },
    { label: "Flask", level: 85 },
    { label: "TensorFlow", level: 72 },
    { label: "OpenCV", level: 68 },
    { label: "Laravel", level: 83 },
  ],
  tools: [
    { label: "Anaconda", level: 82 },
    { label: "Gurobi", level: 78 },
    { label: "GitHub", level: 74 },
    { label: "Visual Studio Code", level: 90 },
    { label: "Visual Paradigm", level: 60 },
    { label: "WampServer", level: 75 },
    { label: "Docker", level: 84 },
    { label: "Burp Suite", level: 92 },
    { label: "Wireshark", level: 76 },
    { label: "Nmap", level: 69 },
    { label: "Metasploit", level: 72 },
    { label: "Kali Linux", level: 86 },
  ],
  languages: [
    { label: "Français", flag: "🇫🇷", level: 90 },
    { label: "Anglais", flag: "🇺🇸", level: 90 },
    { label: "Néerlandais", flag: "🇳🇱", level: 35 },
    { label: "Arabe & Langues berbères", flag: "🇲🇦", level: 100 },
  ],
};

const motionConfig = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function App() {
  const groupedTools = useMemo(() => {
    const midpoint = Math.ceil(skillMatrix.tools.length / 2);
    return [
      skillMatrix.tools.slice(0, midpoint),
      skillMatrix.tools.slice(midpoint),
    ];
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-52 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-transparent blur-3xl" />
        <div className="absolute top-40 -right-40 h-[540px] w-[540px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 mx-auto mt-6 w-full max-w-5xl px-6">
        <div className="flex items-center justify-between rounded-full border border-slate-800/70 bg-slate-950/70 px-6 py-3 shadow-2xl shadow-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-lg font-semibold text-slate-900">
              OB
            </span>
            <div>
              <p className="text-sm font-medium text-slate-300">Ouiam Bouazzati</p>
              <p className="text-xs text-slate-500">
                Ingénieure civile informatique & cybersécurité
              </p>
            </div>
          </div>

          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-400 lg:flex">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-full px-4 py-2 transition-colors hover:bg-slate-800/60 hover:text-slate-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`${import.meta.env.BASE_URL}assets/MonCV.pdf`}
            download="MonCV.pdf"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/40 transition hover:scale-105 hover:shadow-sky-500/60 lg:flex"
          >
            <Download className="h-4 w-4" /> Mon CV
          </a>
        </div>
      </nav>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-44 lg:pt-48">
        <header className="relative overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/70 px-8 py-12 shadow-2xl shadow-slate-950/80 backdrop-blur-2xl">
          <div className="absolute inset-y-0 -left-40 w-2/3 bg-gradient-to-tr from-sky-500/10 via-sky-400/5 to-transparent opacity-70 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <motion.div {...motionConfig}>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                cybersécurité & forensic IoT
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[52px]">
                Ingénieure civile en informatique et gestion.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
Ingénieure civile en Informatique et Gestion, avec une spécialisation en Cybersécurité et Forensics pour l’IoT. Passionnée par les technologies innovantes et la sécurité des systèmes connectés, je suis à la recherche d’une première opportunité professionnelle me permettant de mettre à profit mes compétences techniques, analytiques et organisationnelles afin de contribuer activement aux projets et à la sécurité de l’entreprise. Mon objectif : rejoindre un environnement innovant où apprendre, collaborer et générer de la valeur sont au cœur des missions.              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:scale-105"
                >
                  <Sparkles className="h-4 w-4" /> Proposer une opportunité
                </a>
              </div>
            </motion.div>

            <motion.div
              {...motionConfig}
              className="relative mx-auto flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/80 p-6 text-sm text-slate-300 shadow-xl"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900">
                <img
                  src={`${import.meta.env.BASE_URL}assets/ouiam.jpeg`}
                  alt="Portrait de Ouiam Bouazzati"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <ul className="space-y-4">
                {personalInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="rounded-full bg-slate-800/70 p-2 text-sky-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-slate-200 transition hover:text-sky-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </header>

        {/* Section "À propos" retirée à la demande */}

        <motion.section id="parcours" {...motionConfig} className="rounded-3xl border border-slate-800/50 bg-slate-900/70 p-10 shadow-lg shadow-slate-950/60 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-sky-400" />
            <h2 className="text-2xl font-semibold text-white">Parcours académique</h2>
          </div>
          <div className="space-y-8 border-l border-slate-800 pl-6">
            {academicPath.map((item) => (
              <div key={item.period} className="relative">
                <span className="absolute -left-9 mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-sky-400 bg-slate-900">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                </span>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.institution}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.diploma}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" {...motionConfig} className="rounded-3xl border border-slate-800/50 bg-slate-900/70 p-10 shadow-lg shadow-slate-950/60 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-sky-400" />
            <h2 className="text-2xl font-semibold text-white">Expérience professionnelle</h2>
          </div>
          <div className="space-y-6">
            {professionalExperiences.map((experience) => (
              <article
                key={experience.period}
                className="overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/60 shadow-sm transition hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {experience.period}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {experience.organisation} • {experience.context}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {experience.missions.map((mission) => (
                      <li key={mission} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projets" {...motionConfig} className="rounded-3xl border border-slate-800/50 bg-slate-900/70 p-10 shadow-lg shadow-slate-950/60 backdrop-blur-xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-sky-400" />
              <h2 className="text-2xl font-semibold text-white">Projets académiques</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              Une sélection d’initiatives qui illustrent mes compétences techniques, mon approche collaborative et ma capacité à livrer des solutions concrètes.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {academicProjects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/60 transition hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/10"
              >
                {project.gallery && project.gallery.length > 0 && (
                  <GalleryCarousel images={project.gallery} />
                )}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {project.role}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-sky-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400">{project.company}</p>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Projet universitaire
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="competences" {...motionConfig} className="rounded-3xl border border-slate-800/50 bg-slate-900/70 p-10 shadow-lg shadow-slate-950/60 backdrop-blur-xl">
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Languages className="h-6 w-6 text-sky-400" />
            <div>
              <h2 className="text-2xl font-semibold text-white">Compétences</h2>
              <p className="text-sm text-slate-400">
                Une organisation ciblée de mes domaines d'expertise, en lien direct avec mon profil cybersécurité & forensics pour l’IoT.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {/* Bloc 1 : compétences techniques en pleine largeur */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Compétences techniques</h3>
              <div className="space-y-6">
                {technicalCompetences.map((bloc) => (
                  <div key={bloc.category}>
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-sky-300">{bloc.category}</p>
                    <ul className="flex flex-wrap gap-2 text-sm text-slate-300">
                      {bloc.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-slate-700/70 bg-slate-800/60 px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc 2 : langues en dessous, pleine largeur */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Langues</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                {skillMatrix.languages.map((language) => (
                  <li key={language.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 font-medium text-slate-200">
                      <span className="text-lg">{language.flag}</span>
                      {language.label}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
                          style={{ width: `${language.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">{language.level}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloc 3 : soft skills en dessous, pleine largeur */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Soft skills</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" {...motionConfig} className="grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/70 p-10 shadow-lg shadow-slate-950/50 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
              <Mail className="h-6 w-6 text-sky-400" /> Contact
            </h2>
            <p className="text-lg text-slate-300">
              Une opportunité, une question ou l’envie d’échanger sur un projet ? Je vous répondrai avec plaisir.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a
                href="mailto:ouiambouazzati7@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-3 font-semibold text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20"
              >
                <Mail className="h-4 w-4" /> ouiambouazzati7@gmail.com
              </a>
              <a
                href="tel:+32487713126"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                <Phone className="h-4 w-4" /> +32 487 71 31 26
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ouiam-bouazzati-9435a9266"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ouiambouazzati/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-pink-400 hover:text-pink-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Wimiiiiiii"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            className="space-y-5 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="d95a5b67-18c5-4ac2-b818-0cb536a1cac2" />
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">Nom</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="email@domaine.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">Objet</label>
              <input
                type="text"
                name="subject"
                required
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Sujet de votre message"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Décrivez votre projet ou votre question"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:scale-[1.02]"
            >
              Envoyer le message
            </button>
          </form>
        </motion.section>
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950/70 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Ouiam Bouazzati · Ingénierie civile – Informatique & Cybersécurité
        </p>
      </footer>
    </div>
  );
}

interface SkillColumnProps {
  title: string;
  skills: { label: string; level: number }[];
  layout?: "default" | "dense";
  groupedTools?: { label: string; level: number }[][];
}

function SkillColumn({ title, skills, layout = "default", groupedTools }: SkillColumnProps) {
  if (layout === "dense" && groupedTools) {
    return (
      <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6">
        <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {groupedTools.map((group, idx) => (
            <ul key={idx} className="space-y-4 text-sm text-slate-300">
              {group.map((skill) => (
                <li key={skill.label}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-200">{skill.label}</span>
                    <span className="text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6">
      <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-5 text-sm text-slate-300">
        {skills.map((skill) => (
          <li key={skill.label}>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-200">{skill.label}</span>
              <span className="text-xs text-slate-500">{skill.level}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
  autoPlayMs?: number;
}

function GalleryCarousel({ images, autoPlayMs = 3200 }: GalleryCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const [dims, setDims] = useState<{ w: number; h: number }[]>(() => images.map(() => ({ w: 0, h: 0 })));

  useEffect(() => {
    if (count <= 1) return; // Pas d'auto défilement si une seule image
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [count, autoPlayMs]);

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  // Détecte orientation de l'image active pour ajuster le mode d'affichage
  const activeDim = dims[index];
  const isPortrait = activeDim ? activeDim.h > activeDim.w : false;
  const containerMaxHeight = 208; // ≈ h-52 Tailwind (52 * 4 px)
  const PANORAMA_RATIO = 1.7; // seuil à partir duquel on évite le crop horizontal

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maxHeight: containerMaxHeight,
        height: isPortrait ? containerMaxHeight : containerMaxHeight,
      }}
    >
      {/* arrière-plan flouté basé sur l'image active pour éviter les bandes vides */}
      {images[index] && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center blur-lg"
          style={{ backgroundImage: `url(${images[index].src})` }}
        />
      )}
      {images.map((img, i) => {
        const dim = dims[i];
        const loaded = dim.w > 0 && dim.h > 0;
        const ratio = loaded ? dim.w / dim.h : 0;
        const portrait = loaded ? dim.h > dim.w : false;
        const panoramic = loaded ? ratio > PANORAMA_RATIO : false;
        // Si non chargé: fallback en contain pour éviter un flash croppé
        return (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onLoad={(e) => {
              const { naturalWidth, naturalHeight } = e.currentTarget;
              setDims((old) => {
                const copy = [...old];
                copy[i] = { w: naturalWidth, h: naturalHeight };
                return copy;
              });
            }}
            className={
              "absolute inset-0 z-10 h-full w-full transition-opacity duration-700 " +
              (i === index ? "opacity-100" : "opacity-0") +
              " " +
              // Choix du mode d'adaptation: portrait ou panorama => contain ; sinon cover
              (!loaded || portrait || panoramic ? "object-contain" : "object-cover") +
              " object-center"
            }
            style={{
              background:
                portrait
                  ? "linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.6))"
                  : undefined,
            }}
          />
        );
      })}
      {/* Ombre / gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      {count > 1 && (
  <div className="absolute inset-x-0 bottom-2 z-30 flex items-center justify-between px-3">
          <button
            type="button"
            aria-label="Image précédente"
            onClick={goPrev}
            className="pointer-events-auto rounded-full border border-slate-800/60 bg-slate-900/70 px-2 py-1 text-xs text-slate-200 backdrop-blur-sm transition hover:border-sky-400/60 hover:text-white"
          >
            ◀
          </button>
          <div className="pointer-events-none flex gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={
                  "h-1.5 w-1.5 rounded-full " +
                  (i === index ? "bg-sky-400" : "bg-slate-500/50")
                }
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={goNext}
            className="pointer-events-auto rounded-full border border-slate-800/60 bg-slate-900/70 px-2 py-1 text-xs text-slate-200 backdrop-blur-sm transition hover:border-sky-400/60 hover:text-white"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
