import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Globe, Wrench, Brain, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "C/C++", "JavaScript"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Database Design", "SQL Queries"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Microsoft Excel", "Power BI", "Git", "VS Code"],
  },
  {
    title: "Core Competencies",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP", "Problem Solving", "Clean Code"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Award,
    skills: ["Oracle Cloud Infrastructure", "IBM Cloud", "Basic DevOps"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-navy-light/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="flex-1 h-px bg-border max-w-xs hidden md:block" />
            <span className="text-primary font-mono">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border max-w-xs hidden md:block" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 
                           transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-mono bg-secondary text-muted-foreground 
                                 rounded-full border border-border hover:border-primary/50 
                                 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;