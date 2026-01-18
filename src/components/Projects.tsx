import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ParallaxContainer from "@/components/ParallaxContainer";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Smart Electrical Distribution Panel with Energy Metering & Protection",
      description: "Built a three-phase electrical control panel with built-in energy monitoring and circuit protection. The panel includes a digital energy meter, dual molded-case circuit breakers (MCCBs), phase indication terminals, and neatly organized wiring for reliability and safety. Designed for efficient power management, fault isolation, and long-term operational stability.",
      badges: ["LT Panel", "MCCB", "Energy Meter"],
      //image: "public/images/LT_Panel.jpg",
      image: import.meta.env.BASE_URL + "images/LT_Panel.jpg",
    },
    {
      title: "100 kWp On-Grid Solar PV Power Plant – Design to Commissioning",
      description: "Successfully executed the complete design, procurement, construction, and commissioning of a 100 kWp on-grid solar photovoltaic (PV) system using the Huawei SUN2000-100KTL-M1 inverter. The project was delivered end-to-end, ensuring compliance with technical standards, grid interconnection requirements, and site-specific constraints. Customer feedback was actively incorporated throughout the project lifecycle to optimize system reliability, performance, and maintainability. The installation was engineered for long-term operational stability, efficient energy generation, and ease of monitoring.",
      badges: ["Inverter", "Commissioning", "Renewable Energy"],
      image: import.meta.env.BASE_URL + "images/solarprojects.jpg",
    },
    {
      title: "MovieCompare-widget",
      description: "Developed a movie comparison tool that allows users to compare two movies based on title, poster, box ofce, IMDB rating, and metascore using an autocomplete widget form.",
      badges: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/rkii939b/MovieCompare-widget",
      image: import.meta.env.BASE_URL + "images/moviewidget.png",
    },
    {
      title: "Weather-app",
      description: "Built a web application to check weather and humidity for any location. Showcases front-end development capabilities using HTML and CSS with integration of real-time weather data.",
      badges: ["HTML", "CSS", "Non-functional"],
      link: "https://github.com/rkii939b/Weather-app",
      image: import.meta.env.BASE_URL + "images/weatherapp.png",
    },
    {
      title: "Callgrind-viewer",
      description: "Created a simple text viewer application using QT Assistant as a customized help viewer. The project involved generating and customizing documentation as well as implementing functionality to launch and control QT Assistant within the application. Primarily developed in C++ with CMake and QMake",
      badges: ["C++", "QT Framework", "QMake"],
      link: "https://github.com/rkii939b/Callgrind-Viewer",
      image: import.meta.env.BASE_URL + "images/callgrind.png",
    },
    {
      title: "Game- Mastermind",
      description: "Developed a dark-themed Mastermind game using Python and Tkinter, highlighting skills in Python programming and GUI development.",
      badges: ["Python", "Tkinter", "GUI"],
      link: "https://github.com/rkii939b/mastermind-game",
      image: import.meta.env.BASE_URL + "images/mastermind.png",
    },

  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlighting some of my most impactful and innovative projects in AI and Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ParallaxContainer key={index} strength={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
              </motion.div>
            </ParallaxContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;