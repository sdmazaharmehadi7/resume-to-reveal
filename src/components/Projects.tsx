import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive console-based application for managing student records. Features include creating, reading, updating, and deleting student data with an intuitive interface. Built with focus on clean code architecture and efficient data handling.",
    tech: ["Java", "OOP", "File I/O", "CRUD Operations"],
    github: "#",
    external: "#",
    featured: true,
  },
  {
    title: "Library Management System",
    description:
      "An efficient system to track books, manage member registrations, and handle borrowing/return transactions. Implements proper data structures for quick lookups and maintains transaction history for audit purposes.",
    tech: ["Java", "MySQL", "Data Structures", "GUI"],
    github: "#",
    external: "#",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio showcasing my work and skills with smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Calculator Application",
    description: "A functional calculator with basic and scientific operations built using Java Swing.",
    tech: ["Java", "Swing", "Event Handling"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application that fetches data from APIs and displays forecasts.",
    tech: ["JavaScript", "HTML/CSS", "REST API"],
  },
  {
    title: "Data Analysis Project",
    description: "Analyzed and visualized datasets using Python libraries for insights extraction.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Things I've Built</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image/Placeholder */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  } relative rounded-lg overflow-hidden group`}
                >
                  <div className="aspect-video bg-gradient-to-br from-navy-light to-secondary flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/20 font-mono">
                      {index + 1}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-6"
                  } md:absolute md:inset-y-0 flex flex-col justify-center`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    <a href={project.external}>{project.title}</a>
                  </h3>
                  <div className="p-6 bg-card rounded-lg shadow-lg border border-border mb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                  >
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-bold text-foreground text-center mb-10">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="group p-6 bg-card rounded-lg border border-border 
                             hover:border-primary/50 transition-all duration-300 card-hover"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Folder className="text-primary" size={40} strokeWidth={1} />
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
