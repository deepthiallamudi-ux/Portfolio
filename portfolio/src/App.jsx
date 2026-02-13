import { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpg";
import project1Img from "./assets/projects/project1.jpg";
import "./App.css";

const sectionFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const skills = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Express", icon: "express" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "GitHub", icon: "github" },
  { name: "Supabase", icon: "supabase" },
  { name: "VS Code", icon: "vscode" },
  { name: "Postman", icon: "postman" } // ✅ ADDED
];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
  <h1 className="logo">Deepthi</h1>

  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="nav-actions">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="resume-btn"
    >
      Resume
    </a>

    <button
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Menu"
    >
      ☰
    </button>
  </div>
</nav>
<section id="home" className="section home">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Hi, I’m <span>Deepthi Allamudi</span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="subtitle"
  >
    I build modern, scalable & user-friendly web applications.
  </motion.p>

  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    
  👩‍💻 <span>const developer = "Deepthi";</span>
    <a href="#projects" className="btn">View My Work</a>

</motion.div>

</section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="section about"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={profileImg} alt="Deepthi Allamudi" />
        <div>
          <h2>About Me</h2>
          <p>
            I am a Full Stack Web Developer experienced in building clean,
            responsive, and scalable web applications using React,HTML, CSS, Express,
            and Supabase having  Strong understanding of front-end and back-end development, RESTful APIs, and database management. I focus on modern UI, smooth UX, and performance.
            Passionate about writing clean, efficient code and continuously learning new technologies to deliver scalable solutions.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Resume
          </a>
        </div>
      </motion.section>

      {/* SKILLS */}

      <motion.section
        id="skills"
        className="section skills"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              className="skill-card"
              whileHover={{ scale: 1.12, rotate: 3 }}

            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>


{/*projects*/}
      <motion.section
  id="projects"
  className="section projects"
  variants={sectionFadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2>Projects</h2>

  <div className="project-case">
    <img src={project1Img} alt="Project" />

    <div className="project-content">
      <h3>Life recorder</h3>

      <p className="project-desc">
        A modern, responsive digital diary app built completely using AI.
         It features a clean UI, smooth animations, and secure user authentication. 
        Users can create, edit, and organize their daily entries with ease.
        Categorise and track their daily activities, thoughts, and memories in a visually appealing way.
      </p>

      <ul className="project-points">
        <li>✔ Fully responsive design</li>
        <li>✔ Animated UI with Framer Motion</li>
        <li>✔ Optimized for performance</li>
      </ul>

      <p className="tech">React • Tailwind • Firebase • Vite</p>

      <div className="project-links">
        <a href="https://github.com/deepthiallamudi-ux/time-tracking-app" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://time-tracking-app-qlrx.onrender.com" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  </div>
</motion.section>

      {/* CONTACT */}
      <motion.section
  id="contact"
  className="section contact"
  variants={sectionFadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2>Contact</h2>

  <div className="contact-card">
    <div>
      <span>📍 Location</span>
      <p>Bangalore, India</p>
    </div>

    <div>
      <span>📧 Email</span>
      <p>deepthiallamudi@gmail.com</p>
    </div>

    <div>
      <span>📞 Phone</span>
      <p>+91 9492092094</p>
    </div>
  </div>

  {/* Social Icons */}
  <div className="social-icons">
    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
    </a>

    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
    </a>
  </div>
</motion.section>

      {/* FOOTER */}
  
        <footer className="footer">
  <p>
    Made with <span className="heart">♥</span> by <strong>Deepthi Allamudi</strong>
  </p> <p>Thank You 💛</p>

  <a href="#home" className="scroll-top" aria-label="Back to top">
    ↑
  </a>
</footer>
    </>
  );
}
