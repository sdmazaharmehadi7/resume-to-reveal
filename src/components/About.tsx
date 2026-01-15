import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "Java",
    "Python",
    "JavaScript",
    "C/C++",
    "MySQL",
    "HTML & CSS",
    "Data Structures",
    "OOP Concepts",
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-primary font-mono">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Mazahar, a dedicated Computer Science student with a deep passion 
                for software development and web technologies. My journey in tech started with 
                curiosity about how digital products work, which led me to dive deep into 
                programming and never look back.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm pursuing my B.Tech at{" "}
                <span className="text-primary">Lakireddy Balireddy College of Engineering</span>{" "}
                while simultaneously training as a{" "}
                <span className="text-primary">Java Full Stack Developer</span> at Conquer E-Learning. 
                This dual focus helps me bridge theoretical knowledge with practical application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to leverage my programming skills in real-world projects, 
                continuously learn new technologies, and contribute to building software 
                that makes a difference. I believe in writing clean, efficient code and 
                creating user-centric solutions.
              </p>

              <div className="pt-4">
                <p className="text-foreground mb-4">
                  Here are some technologies I've been working with:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {technologies.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                    >
                      <span className="text-primary">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="w-full aspect-square bg-gradient-to-br from-navy-light to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-8xl font-bold text-primary/20 font-mono">SM</span>
                </div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 rounded-lg" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;