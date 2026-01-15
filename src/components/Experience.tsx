import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Conquer E-Learning",
    role: "Java Programmer Intern",
    period: "June 2025 - August 2025",
    description: [
      "Developing and implementing Java applications with focus on clean code practices and design patterns",
      "Building full-stack applications using Java backend technologies and modern frontend frameworks",
      "Collaborating with team members on real-world projects to enhance practical programming skills",
      "Learning industry best practices for software development lifecycle and version control",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 bg-navy-light/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Where I've Worked</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 font-mono text-sm whitespace-nowrap text-left transition-all
                    ${
                      activeTab === index
                        ? "text-primary bg-primary/10 md:border-l-2 md:-ml-px border-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-[300px]"
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experiences[activeTab].role}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-muted-foreground font-mono text-sm mb-6">
                {experiences[activeTab].period}
              </p>
              <ul className="space-y-4">
                {experiences[activeTab].description.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;