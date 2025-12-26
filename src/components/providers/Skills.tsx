"use client";
import { motion } from "motion/react";
import { useIntersectionObserver } from "iso-hooks";
import { useRef } from "react";
import { Code2, Palette, Users, Wrench } from "lucide-react";

const skillsData = [
  {
    key: "development",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    key: "design",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "UI/UX",
      "Prototyping",
    ],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: ["Git", "Docker", "VS Code", "Webpack", "Vite", "CI/CD"],
  },
  {
    key: "soft",
    icon: Users,
    skills: [
      "Communication",
      "Problem Solving",
      "Team Work",
      "Leadership",
      "Agile",
      "Mentoring",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const { isIntersecting } = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-accent">04.</span>
              <span className="text-sm font-mono text-muted ms-3">
                Skills & Expertise
              </span>
            </div>
            <h2 className="text-foreground">Tools & Technologies</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 bg-background border border-border rounded-xl hover:border-accent/50 transition-all h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon size={24} className="text-accent" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-foreground">{category.key}</h3>

                    {/* Skills List */}
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <span className="w-1 h-1 bg-accent rounded-full" />
                          <span className="font-mono">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
