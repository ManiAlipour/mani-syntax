"use client";
import { motion } from "motion/react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useIntersectionObserver } from "iso-hooks";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const { isIntersecting } = useIntersectionObserver(ref);

  return (
    <section id="contact" className="relative min-h-screen px-6 py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2ee6a6]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="inline-block mb-16">
            <span className="text-sm font-mono text-[#2ee6a6]">05.</span>
            <span className="text-sm font-mono text-[#9aa3b2] ms-3">
              Get In Touch
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Side - Info */}
            <div>
              <h2 className="mb-6 text-[#e6eaf0]">
                Let&apos;s create something amazing together
              </h2>

              <p className="text-[#9aa3b2] mb-12 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#11151c] border border-[#1c2230] rounded-lg group-hover:border-[#2ee6a6] transition-colors">
                    <Mail size={20} className="text-[#2ee6a6]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#9aa3b2] mb-1 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:hello@manialipour.com"
                      className="text-[#e6eaf0] hover:text-[#2ee6a6] transition-colors"
                    >
                      mani.alipour.dev@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#11151c] border border-[#1c2230] rounded-lg group-hover:border-[#2ee6a6] transition-colors">
                    <MapPin size={20} className="text-[#2ee6a6]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#9aa3b2] mb-1 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-[#e6eaf0]">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs font-mono text-[#9aa3b2] mb-4 uppercase tracking-wider">
                  Follow Me
                </p>
                <div className="flex items-center gap-3">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com",
                      label: "LinkedIn",
                    },
                    {
                      icon: Twitter,
                      href: "https://twitter.com",
                      label: "Twitter",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#11151c] border border-[#1c2230] rounded-lg hover:border-[#2ee6a6] hover:text-[#2ee6a6] hover:-translate-y-1 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#9aa3b2] mb-3 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#11151c] border border-[#1c2230] rounded-lg px-4 py-3.5 text-[#e6eaf0] placeholder:text-[#9aa3b2] focus:border-[#2ee6a6] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#9aa3b2] mb-3 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#11151c] border border-[#1c2230] rounded-lg px-4 py-3.5 text-[#e6eaf0] placeholder:text-[#9aa3b2] focus:border-[#2ee6a6] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#9aa3b2] mb-3 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-[#11151c] border border-[#1c2230] rounded-lg px-4 py-3.5 text-[#e6eaf0] placeholder:text-[#9aa3b2] focus:border-[#2ee6a6] focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2ee6a6] text-[#0b0e13] rounded-lg hover:bg-[#26bd8c] transition-all font-medium glow hover:glow-strong"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-32 pt-8 border-t border-[#1c2230] text-center">
            <p className="text-sm font-mono text-[#9aa3b2]">
              © 2025 Mani Alipour. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
