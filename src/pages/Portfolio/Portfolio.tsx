import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Code2, Database, Smartphone, BrainCircuit, Coins, X, ChevronRight } from 'lucide-react';
import { AI_MENTAL_HEALTH_APP_LINK, EMAIL_ADDRESS, GOLD_CALCULATOR_LINK, MERCEDES_EXPERIENCE, MOGRASYS_PROJECTS, NEXA_EXPERIENCE, PORTFOLIO_LINK } from '../../type/common';

export default function Portfolio() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const projects = [
    {
      title: "Pulse – Mental Health Chatbot",
      tech: "React, Python, Google OAuth",
      desc: "A compassionate AI chatbot to support users through emotional moments. Custom NLP model trained via Kaggle dataset, running locally for privacy.",
      icon: <BrainCircuit className="text-pink-500" />
    },
    {
      title: "HAC – Gemini AI Chatbot",
      tech: "Python, Gemini API",
      desc: "Text and voice interactive bot powered by behavior analysis algorithm. Built purely in Python.",
      icon: <Code2 className="text-blue-500" />
    },
    {
      title: "MograHub – Parent Portal",
      tech: "React Native, Expo",
      desc: "Centralized cross-platform parent portal supporting multiple schools. Live on iOS and Android.",
      icon: <Smartphone className="text-purple-500" />
    },
    {
      title: "Online Admission System",
      tech: "React.js, Redux, Node.js",
      desc: "End-to-end admission management system handling student enrollment and document uploads.",
      icon: <Database className="text-green-500" />
    }
  ];

  return (
    <div className="page-wrapper app-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="portfolio-content"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="hero" style={{ textAlign: 'center', padding: '60px 0', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'var(--accent-gradient)',
            filter: 'blur(100px)',
            opacity: 0.3,
            zIndex: -1,
            borderRadius: '50%'
          }}></div>

          <motion.h1
            style={{ fontSize: '4rem', marginBottom: '10px' }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-gradient">Salath Joseph</span>
          </motion.h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '30px' }}>
            AI Engineer | Business Development Manager | Full-Stack Developer | MERN Stack | React Native | MLOps | GenAI
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
            <a href={AI_MENTAL_HEALTH_APP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)', boxShadow: '0 4px 15px rgba(236, 72, 153, 0.2)' }} title="Pulse - AI Mental Health App">
              <BrainCircuit size={18} /> Pulse AI App
            </a>
            <a href={PORTFOLIO_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)' }} title="Next.js Portfolio">
              <ExternalLink size={18} /> Next.js Portfolio
            </a>
            <a href={GOLD_CALCULATOR_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: '#fbbf24', color: '#fbbf24', boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)' }} title="Gold Calculator">
              <Coins size={18} /> Gold Calculator
            </a>
          </div>
        </motion.section>

        {/* Summary Section */}
        <motion.section variants={itemVariants} className="glass-panel" style={{ padding: '40px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--accent-purple)' }}>Professional Summary</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Full-Stack Developer with 3+ years of hands-on experience building scalable web and mobile applications using the MERN stack and React Native. My B.Tech in AI & Data Science gives me a foundation that goes beyond just writing frontend and backend code; I understand data, models, and how intelligent systems work. Coupled with 7 years of sales experience, I build things that actually solve real problems.
          </p>
        </motion.section>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '60px' }}>
          {/* Experience Section */}
          <motion.section variants={itemVariants}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">Experience</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                { role: "Full-Stack Developer", company: "Mograsys Technology Pvt Ltd", date: "May 2023 - Present" },
                { role: "Senior Sourcing Manager", company: "Mercedes-Benz", date: "Jul 2021 - May 2023" },
                { role: "Sourcing Manager", company: "NEXA", date: "Mar 2018 - Jul 2021" },
                { role: "Sales Officer", company: "Toyota", date: "Jul 2016 - Mar 2018" }
              ].map((job, i) => {
                const isClickable = job.company === "Mograsys Technology Pvt Ltd" || job.company === "Mercedes-Benz" || job.company === "NEXA";
                return (
                  <div 
                    key={i} 
                    className={`glass-panel hover-lift ${isClickable ? 'cursor-pointer' : ''}`} 
                    style={{ padding: '20px', borderLeft: '4px solid var(--accent-blue)', position: 'relative', cursor: isClickable ? 'pointer' : 'default' }}
                    onClick={() => isClickable && setSelectedCompany(job.company)}
                  >
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{job.role}</h4>
                    <p style={{ color: 'var(--accent-purple)', fontWeight: 500 }}>{job.company}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{job.date}</p>
                    {isClickable && (
                      <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 500 }}>
                        {job.company === "Mograsys Technology Pvt Ltd" ? "View Projects" : "View Details"} <ChevronRight size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <h3 style={{ fontSize: '2rem', marginBottom: '20px', marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">Education</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid var(--accent-pink)' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>B.Tech - AI & Data Science</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Suguna College of Engineering</p>
              </div>
              <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid var(--accent-pink)' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Diploma in Automobile Engineering</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Christ The King Polytechnic College</p>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={itemVariants}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">Tech Stack</span>
            </h3>
            <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                "React.js", "Next.js", "React Native", "Node.js", "Express",
                "MongoDB", "Python", "AI/NLP", "AWS", "Docker", "Redux"
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.95rem',
                    cursor: 'default'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Sales Skills Section */}
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="text-gradient">Sales & Business</span>
            </h3>
            <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                "Business Development", "Procurement & Sourcing",
                "Customer Engagement", "Relationship Management", "B2B/B2C Sales", "Product Demonstration"
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.95rem',
                    cursor: 'default',
                    color: 'var(--accent-blue)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.section>
        </div>

        {/* Projects Section */}
        <motion.section variants={itemVariants}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-panel"
                style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {project.icon}
                </div>
                <h4 style={{ fontSize: '1.3rem' }}>{project.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-pink)', fontWeight: 600 }}>{project.tech}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1 }}>{project.desc}</p>
                <button className="btn btn-secondary" style={{ width: '100%', marginTop: '10px' }}>
                  View Project <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Modals */}
        <AnimatePresence>
          {selectedCompany && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}
              onClick={() => setSelectedCompany(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                style={{
                  background: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '30px',
                  maxWidth: '700px',
                  width: '100%',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedCompany(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    color: 'white',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>
                
                {selectedCompany === "Mograsys Technology Pvt Ltd" && (
                  <>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '5px', color: 'var(--accent-blue)' }}>Projects at Mograsys</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Full-Stack Developer | React Native & MERN Stack</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                      {MOGRASYS_PROJECTS.map((proj, idx) => (
                        <div key={idx} style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '3px solid var(--accent-purple)' }}>
                          <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'white' }}>{proj.title}</h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', color: 'var(--accent-pink)', fontSize: '0.9rem', fontWeight: 500 }}>
                            <Code2 size={16} /> {proj.tech}
                          </div>
                          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {selectedCompany === "Mercedes-Benz" && (
                  <>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '5px', color: 'var(--accent-blue)' }}>Mercedes-Benz</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Senior Sourcing Manager</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {MERCEDES_EXPERIENCE.map((paragraph, idx) => (
                        <p key={idx} style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </>
                )}

                {selectedCompany === "NEXA" && (
                  <>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '5px', color: 'var(--accent-blue)' }}>NEXA (Maruti Suzuki)</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Sourcing Manager</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {NEXA_EXPERIENCE.map((paragraph, idx) => (
                        <p key={idx} style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .social-link {
          color: var(--text-secondary);
          transition: all 0.3s;
        }
        .social-link:hover {
          color: var(--accent-blue);
          transform: translateY(-3px);
        }
        .hover-lift {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hover-lift:hover {
          transform: translateX(10px);
          box-shadow: -5px 5px 15px rgba(0,0,0,0.2);
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </div>
  );
}
