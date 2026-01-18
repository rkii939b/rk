import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import { Award } from "lucide-react";
import InteractiveElement from "@/components/InteractiveElement";

const Certifications = () => {
  const { ref, isInView } = useScrollReveal();

  const certifications = [
    {
      date: "February 26, 2022",
      title: "Tools for Data Science",
      organization: "IBM-Coursera",
      description: "Introduction to essential tools and software used in data science, including Jupyter Notebooks, Git, and GitHub.",
    },
    {
      date: "March 22, 2022",
      title: "Python for Data Science, AI & Development",
      organization: "IBM-Coursera",
      description: "Comprehensive course on Python programming with a focus on data science, AI, and application development.",
    },
    {
      date: "September 28, 2022",
      title: "Innovation Practice of IOT",
      organization: "Huawei Talent Online",
      description: "Course on IoT technologies, applications, and innovation practices in the Internet of Things domain.",
    },
    {
      date: "March 20, 2022",
      title: "Introduction to Google SEO",
      organization: "UC DAVIS-Coursera",
      description: "Fundamentals of Search Engine Optimization (SEO) and strategies to improve website visibility on Google search results.",
    },
    {
      date: "February 2018",
      title: "PHP Web Development",
      organization: "Bangladesh Computer Council (BCC)",
      description: "Comprehensive training on PHP programming for web development, covering core concepts and practical applications.",
    },
    {
      date: "October 2015",
      title: "Industrial Engineering and Instrumentation",
      organization: "Bangladesh Chemical Industries Corporation (BCIC)",
      description: "Training on industrial engineering principles and instrumentation used in chemical industries.",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized courses and certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const variant = index % 2 === 0 ? scrollVariants.scattered : scrollVariants.scatteredRight;
            return (
              <InteractiveElement key={index} glowColor="hsl(38 92% 50%)">
                <motion.div
                  initial={variant.initial}
                  animate={isInView ? variant.animate : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="glass p-6 rounded-xl h-full group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:animate-glow-pulse">
                        <Award className="w-6 h-6 text-secondary" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-secondary text-xs font-semibold block mb-2">{cert.date}</span>
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">{cert.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              </InteractiveElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;