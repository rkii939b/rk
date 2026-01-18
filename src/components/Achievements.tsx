import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import { Trophy, Award, Target, Briefcase } from "lucide-react";
import InteractiveElement from "@/components/InteractiveElement";
import { FaResearchgate, FaSolarPanel } from "react-icons/fa6";

const Achievements = () => {
  const { ref, isInView } = useScrollReveal();

  const achievements = [
    {
      icon: Target,
      title: "Noble Banadda International Summer School on Sustainability 2025",
      date: "September 2025",
      description: "Selected to attend the prestigious Noble Banadda International Summer School on Sustainability 2025, hosted by HKA Karlsruhe and the OST - Ostschweizer Fachhochschule (Rapperswil-Jona, Switzerland).",
      link: "https://www.ost.ch/en/studium/technik/bachelor-erneuerbare-energien-und-umwelttechnik/praxisnaehe/translate-to-english-international-summer-school-on-sustainability",
    },
    {
      icon: FaResearchgate,
      title: "Simulation and Analysis of Metal Oxide Surge Arrester using Electromagnetic Transient Program (EMTP)",
      date: "February 2017",
      description: "Data on characteristics of metal-oxide surge arresters indicates that for fast front surges, those with rising times less than 8μs, the peak of the voltage wave occurs before the peak of the current wave, and the residual voltage across the arrester increases as the time to the crest of the arrester discharge current decreases. Several models have been proposed to simulate this frequency-dependent characteristic. These models differ in the calculation and adjustment of their parameters. In the present paper, a simulation of metal (MOSA) dynamic behavior during fast electromagnetic transients on power systems is done. Some models proposed in the literature are used. The simulations are performed ATP version of EMTP to evaluate some metal oxide surge arrester models and verify their accuracy.",
      link: "https://drive.google.com/file/d/19ybYgR9ZKS2adS-l1OpARqd9tgceA9a4/view?usp=sharing",
    },
    {
      icon: FaSolarPanel,
      title: "Assistant Engineer with Engreen Engineering Ltd.",
      date: "December 2022",
      description: "Huawei SUN2000-100KTL-M1 on-grid installation at a commercial solar power plant in Bangladesh, assisting in the design, installation, and commissioning of solar energy systems to promote sustainable energy solutions.",
    },
    
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const variant = index % 2 === 0 ? scrollVariants.scattered : scrollVariants.scatteredRight;
            return (
              <InteractiveElement 
                key={index}
                as={achievement.link ? "a" : "div"}
                href={achievement.link}
                target={achievement.link ? "_blank" : undefined}
                rel={achievement.link ? "noopener noreferrer" : undefined}
                className="block"
              >
                <motion.div
                  initial={variant.initial}
                  animate={isInView ? variant.animate : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="glass p-8 rounded-2xl h-full group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:animate-glow-pulse">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-secondary text-sm font-semibold mb-3">{achievement.date}</p>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
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

export default Achievements;