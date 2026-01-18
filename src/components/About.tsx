import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import InteractiveElement from "@/components/InteractiveElement";

const About = () => {
  const { ref, isInView } = useScrollReveal();

  const skills = [
    { name: "Python", level: 95 },
    { name: "Matlab", level: 75 },
    { name: "Excel", level: 80 },
    { name: "Computer Simulation", level: 70 },
    { name: "Reinforcement Learning", level: 50 },
    { name: "Solar PV system", level: 70 },
    { name: "Web Development", level: 75 },

  ];

  const info = [
    { label: "Profile", value: "Simulation, Mathematical Modeling, Machine Learning, Advanced Numerical Analysis" },
    { label: "Domain", value: "Imaging Medicine, Quantum Mechanics, Classical Physics, Mechanical Statistics, Supercomputing" },
    { label: "Education", value: "Masters of Science in Computer Simulation in Science" },
    { label: "Frameworks", value: "Pytorch, TensorFlow, QT, CUBE4" },
    { label: "Other Skills", value: "Python, C, C++, Fortran, Matlab, Javascript, React.js, Next.js, node.js, Excel, Autocad, Git, SQL, Confluence, Pvsyst, CUBE4, EMTP, Scope, Scalasca, Google Ad Manager, Google Analytics" },
    { label: "Interest", value: "Sports, Learning, Reading, Travelling" },
    { label: "Language", value: "Bengali, English, German, Urdu" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Skills */}
          <InteractiveElement as="div" className="glass p-8 rounded-2xl">
            <motion.div
              initial={scrollVariants.scattered.initial}
              animate={isInView ? scrollVariants.scattered.animate : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div>
                <div className="mb-6">
                  <p className="text-primary text-sm font-semibold mb-2">Name: <span className="text-foreground font-normal">Mohammad Robiul Kabir</span></p>
                  <p className="text-primary text-sm font-semibold mb-2">Job Role: <span className="text-foreground font-normal">Electrical Engineer/Software Developer/Solar System Architect/Digital Ad Specialist</span></p>
                  <p className="text-primary text-sm font-semibold mb-2">Experience: <span className="text-foreground font-normal">4+ years</span></p>
                  <p className="text-primary text-sm font-semibold">Address: <span className="text-foreground font-normal">Wuppertal, Germany</span></p>
                </div>

                <h3 className="text-xl font-bold text-primary mb-6">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30, rotate: -3 }}
                      animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.4 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </InteractiveElement>

          {/* Right Column - About Text */}
          <motion.div
            initial={scrollVariants.scatteredRight.initial}
            animate={isInView ? scrollVariants.scatteredRight.animate : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Enthusiastic Master’s student in Computer Simulation in Science with a strong foundation in data
              analysis, simulation, and web technologies. Experienced in developing data-driven solutions. Software
              and hardware troubleshooting, as well as solar inverter solution, using modern web tools. Eager to apply
              technical and analytical skills to support the development of innovative, user-friendly web applications in
              interdisciplinary climate research. Motivated to contribute to impactful projects in fntech and inventory
              ERP</p>

            <div className="space-y-3">
              {info.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex"
                >
                  <span className="text-primary font-semibold min-w-[140px]">{item.label}:</span>
                  <span className="text-foreground/80">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <InteractiveElement as="div" className="pt-6">
              <motion.div
                initial={scrollVariants.depth.initial}
                animate={isInView ? scrollVariants.depth.animate : {}}
                transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass p-6 rounded-xl"
              >
                <p className="text-4xl font-bold text-primary mb-2">150+</p>
                <p className="text-muted-foreground">Tasks accomplished in multiple areas</p>
              </motion.div>
            </InteractiveElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;