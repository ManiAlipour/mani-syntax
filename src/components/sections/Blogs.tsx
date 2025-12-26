"use client";
import { useIntersectionObserver } from "iso-hooks";
import { motion } from "motion/react";
import { useRef } from "react";
import BlogCard from "../features/BlogCard";
import { ExternalLink } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string; // ✅ add this
  author: string;
  tags: string[];
  publishDate: string;
  category: string;
  isFeatured?: boolean;
}

export default function Blogs() {
  const ref = useRef(null);
  const { isIntersecting } = useIntersectionObserver(ref, { threshold: 0.1 });

  const BLOG_POSTS: Blog[] = [
    {
      _id: "blog-001",
      title: "Designing Quiet Interfaces",
      excerpt:
        "How clarity, spacing, and restraint can turn interfaces into calm systems instead of noisy artifacts.",
      content:
        "Modern interfaces often fail not because they lack features, but because they lack restraint. In this post, we explore how whitespace, hierarchy, and intentional silence can dramatically improve usability and emotional response.",
      author: "Mani Alipour",
      tags: ["UI", "UX", "Design Systems"],
      publishDate: "2025-12-15T10:30:00Z",
      category: "Design",
      isFeatured: true,
    },
    {
      _id: "blog-002",
      title: "Component-Driven UI Is Not Optional Anymore",
      excerpt:
        "Why treating UI as a system of composable components is the only scalable approach for modern frontend.",
      content:
        "As products grow, UI entropy grows with them. Component-driven architecture is not a trend—it's a necessity. This article breaks down practical patterns for building maintainable UI systems in React and Next.js.",
      author: "Mani Alipour",
      tags: ["Frontend", "React", "Architecture"],
      publishDate: "2025-12-10T18:45:00Z",
      category: "Engineering",
    },
    {
      _id: "blog-003",
      title: "Cold Design, Human Experience",
      excerpt:
        "Minimal, cold visual systems don’t have to feel robotic. Here’s how to balance precision with humanity.",
      content:
        "Cold design systems inspired by engineering aesthetics can still feel alive. Through typography, motion, and micro-decisions, we can inject subtle humanity into even the most minimal interfaces.",
      author: "Mani Alipour",
      tags: ["Design", "Aesthetics", "UI Engineering"],
      publishDate: "2025-12-05T09:15:00Z",
      category: "Design",
    },
  ];

  return (
    <section id="blogs" className="relative px-6 py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
        className="max-w-5xl mx-auto gap-5 relative"
      >
        <div className="inline-block mb-4">
          <span className="text-sm font-mono text-accent">03.</span>
          <span className="text-sm font-mono text-muted ms-3">
            Latest Articles
          </span>
        </div>
        <h2 className="text-foreground max-w-2xl mb-4">Thoughts & Stories</h2>
        <p className="text-muted max-w-xl">
          Insights on design, development, and everything in between.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch mt-13">
          {BLOG_POSTS.map((b, i) => (
            <div key={i} className="col-span-1">
              <BlogCard post={b} />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-14 text-center"
      >
        <button className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
          View all blogs
          <ExternalLink size={16} />
        </button>
      </motion.div>
    </section>
  );
}
