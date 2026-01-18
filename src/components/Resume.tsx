import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface ResumeProps {
  onViewResume: () => void;
}

const Resume = ({ onViewResume }: ResumeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      date: "March 2025 - Present",
      title: "Student Assistant",
      company: "Rheingedeck GmbH",
      link: "https://www.rheingedeck.de/",
      points: [
        "Supported team with internal reporting, process catering service, and logistic assistances.",
        "Helped ensure quality service and organization for smooth internal operations.",
        "Supported event operations and logistics, working in a team to prepare venues, assist during peak service times, and maintain cleanliness and service standards according to company guidelines.",
      ],
    },
    {
      date: "Mar 2022 - July 2024",
      title: "Technical Support Engineer",
      company: "King Sun Estate Pte. Ltd",
      link: "https://www.kingsunestate.com/",
      points: [
        "Developed and implemented data-driven solutions to monitor and optimize the performance of solar energy systems, contributing to increased sustainability and efciency of renewable energy installations.",
        "Assisted customers with selecting and configuring solar energy solutions, including PV modules, hybrid inverters, and solar system components tailored to residential, commercial, and industrial needs.",
        "Managed product inquiries, quotes, and technical support, ensuring timely responses and accurate information to help clients make informed purchasing decisions.",
        "Analyzed operational data to identify patterns related to environmental factors, informing strategies for improved system reliability in the face of variable weather conditions.",
        "Coordinated with interdisciplinary teams to integrate technical solutions aligned with the company’s commitment to renewable energy and climate resilience.",
      ],
    },
    {
      date: "May 2018 - Nov 2020",
      title: "Executive (Ad Operations)",
      company: "ServicEngine Limited",
      link: "https://sebpo.com/",
      points: [
        "Supported clients by executing business process outsourcing tasks including customer support, back-office processing, and account management to ensure efficient and accurate operations.",
        "Assisted in ad operations and media planning workflows, helping manage digital campaigns, optimize processes, and ensure programmatic support met client objectives.",
        "Performed quality assurance and data analysis, reviewing workflows and outputs to maintain consistency, accuracy, and process governance for client deliverables.",
        "Collaborated with cross-functional teams to provide creative and technical services, supporting project execution and troubleshooting within outsourcing engagements.",
        "Analyzed large datasets using SQL and spreadsheets to track campaign performance, identify anomalies, and provide data-driven recommendations for optimization",
        "Built and maintained performance dashboards and recurring reports, visualizing key metrics such as CTR, CPC, CPA, impressions, and conversions for internal and client stakeholders.",
      ],
    },

  ];

  const education = [
    {
      date: "2024-ongoing",
      title: "Master of Science in Computer Simulation in Science (MSc in CSIS)",
      institution: "University of Wuppertal, Germany",
      description: "Focus: Numerical methods, data analysis, statistical modeling, Neural Network, Deep Learning, RNN, GNN, Simulation, etc",
      
    },
    {
      date: "2012-2017",
      title: "Bachelor of Science in Electrical & Electronic Engineering, (BSc in EEE)",
      institution: "Daffodil International University",
      thesis: "Thesis: Simulation and Analysis of Surge Arrester using EMTP",
      link: "DOI: 10.13140/RG.2.2.25154.45767"
      
    },
    {
      date: "2009-2011",
      title: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Science College, Dhaka",
      
    },
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineer with 4+ years in technical support, solar project management, and digital campaign execution. Skilled in MATLAB, AutoCAD, PVsyst, Python, and C++. Currently pursuing an M.Sc. in Computer Simulation in Science, with a focus on leveraging technical and analytical skills to drive engineering solutions. 
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-primary"
          >
            Experience
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex flex-col md:flex-row ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-8`}
                  >
                    {/* Content card */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div className="glass p-6 rounded-xl hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                        <span className="text-secondary text-sm font-semibold block mb-2">{exp.date}</span>
                        <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors font-medium">
                            {exp.company} →
                          </a>
                        ) : (
                          <span className="text-primary font-medium">{exp.company}</span>
                        )}
                        <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex">
                              <span className="text-primary mr-2 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            Education
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group"
              >
                <span className="text-secondary text-sm font-semibold block mb-2">{edu.date}</span>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{edu.title}</h4>
                <p className="text-primary mb-2 font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={onViewResume}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Full Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;