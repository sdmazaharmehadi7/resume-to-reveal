import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    institution: "Lakireddy Balireddy College of Engineering",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 – Present",
    grade: "CGPA: 8.1",
    current: true,
  },
  {
    institution: "Chaitanya College, Nandigama",
    degree: "Higher Secondary Education",
    period: "2022 – 2024",
    grade: "Marks: 927",
    current: false,
  },
];

const certifications = [
  { name: "Java Full Stack Development", issuer: "Conquer E-Learning", icon: "☕" },
  { name: "Python Foundation", issuer: "Infosys Certified", icon: "🐍" },
  { name: "Java Foundation", issuer: "Infosys Certified", icon: "☕" },
  { name: "C Essentials 1", issuer: "Cisco Certified", icon: "💻" },
  { name: "Oracle Cloud Infrastructure Foundation", issuer: "Oracle", icon: "☁️" },
  { name: "IBM Data Fundamentals", issuer: "IBM Certified", icon: "📊" },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="flex-1 h-px bg-border max-w-xs hidden md:block" />
            <span className="text-primary font-mono">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education & Certifications</h2>
            <div className="flex-1 h-px bg-border max-w-xs hidden md:block" />
          </div>

          {/* Education Timeline */}
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Academic Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 w-5 h-5 rounded-full border-2 
                      ${edu.current 
                        ? "bg-primary border-primary animate-pulse-glow" 
                        : "bg-background border-muted-foreground"
                      }`}
                  />

                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.institution}
                      </h4>
                      {edu.current && (
                        <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={14} />
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2 justify-center">
              <Award className="text-primary" size={24} />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="group p-4 bg-card rounded-lg border border-border 
                             hover:border-primary/50 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;