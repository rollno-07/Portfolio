"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  titele: "About Me",
  description: "asdfghjwertyu",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vivek Rawat",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)7028737096",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "vivekrawat0107@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Offering 5.3 years of progressive experience in owning web-based projects from concept and design through testing, implementation and client updates. Diligent about producing exceptionally clean, strong and secure code.",
  items: [
    {
      company: "Srijan Technologies PVT. LTD.",
      position: "Senior JavaScript Developer",
      duration: "Jan 2022 - Feb 2024",
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Programer Analyst",
      duration: "May 2018 - July 2021",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I completed my Bachelor of Technology (B.Tech) in Electronics and Communication Engineering from ITM University, Gwalior, from June 2013 to May 2017. During these four years, I developed a strong foundation in electronics, communication systems, and digital technologies. My coursework included subjects such as microprocessors, signal processing, wireless communication, and embedded systems. I actively participated in various technical projects and workshops, which honed my problem-solving skills and deepened my understanding of the field.",
  items: [
    {
      institution: "ITM University Gwalior",
      degree: "B-Tech(Electronics & Communication Engineering)",
      duration: "June 2013 - May 2017",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in ES6+, strong understanding of asynchronous programming, and experience with various JavaScript libraries and frameworks. I excel at writing clean, maintainable code and debugging complex issues. Expertise in building dynamic and responsive user interfaces, state management using Redux and Context API, and utilising React hooks for functional components. I have a knack for optimising performance and improving user experience. Strong foundation in semantic HTML and modern CSS, including Flex-box and Grid. I have a good eye for design, ensuring pixel-perfect implementation, and am adept at making web applications responsive and accessible.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justyfy-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh]" w-full>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 xl:text-[13px]">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 xl:text-[13px]">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl-mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] ">
                {skills.skillList.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div>{ skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>;
                })}
              </ul>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
