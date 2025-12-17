"use client";
import { useIntersectionObserver, useUpdateEffect } from "iso-hooks";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/experience";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting: inView } = useIntersectionObserver(ref)!;

  useUpdateEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <section id="about" className="relative min-h-screen px-6 py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2ee6a6]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="inline-block mb-16">
            <span className="text-sm font-mono text-[#2ee6a6]">01.</span>
            <span className="text-sm font-mono text-[#9aa3b2] ms-3">
              About Me
            </span>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Text Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-[#9aa3b2] leading-relaxed">
                I&apos;m a passionate designer and developer focused on creating
                memorable digital experiences that blend form and function.
              </p>
              <p className="text-lg text-[#9aa3b2] leading-relaxed">
                With over 5 years of experience, I specialize in modern web
                technologies and minimal design principles that prioritize user
                experience.
              </p>
              <p className="text-lg text-[#9aa3b2] leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                design trends, contributing to open source, or capturing moments
                through photography.
              </p>

              {/* Highlight card */}
              <div className="mt-8 p-6 bg-[#11151c] border border-[#1c2230] rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#2ee6a6]/10 rounded-lg">
                    <Sparkles size={20} className="text-[#2ee6a6]" />
                  </div>
                  <div>
                    <h3 className="text-[#e6eaf0] mb-2">My Philosophy</h3>
                    <p className="text-[#9aa3b2] text-sm leading-relaxed">
                      I believe in creating digital experiences that are not
                      only beautiful but also meaningful, accessible, and
                      sustainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="mb-8 text-[#e6eaf0]">Experience</h3>

              <div className="relative space-y-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#2ee6a6] before:via-[#1c2230] before:to-transparent">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="relative ps-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full bg-[#2ee6a6]" />

                    {/* Company + Period */}
                    <p className="mb-2 font-mono text-xs text-[#2ee6a6]">
                      {item.company} • {item.period}
                    </p>

                    {/* Role */}
                    <p className="text-[#e6eaf0]">{item.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
