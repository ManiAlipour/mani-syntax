"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { useIntersectionObserver } from "iso-hooks";
interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string; // ✅ add this
  author: string;
  tags: string[];
  publishDate: string;
  category: string;
}

type BlogCardProps = {
  post: Blog;
  isFeatured?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function BlogCard({
  post,
  isFeatured = false,
  onClick,
  className = "",
}: BlogCardProps) {
  const ref = useRef(null);

  const { isIntersecting } = useIntersectionObserver(ref);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      onClick={onClick}
      className={`
        group h-full cursor-pointer border border-border rounded-xl overflow-hidden transition-all duration-500 
        ${
          isFeatured
            ? "md:grid md:grid-cols-2 bg-background p-8 gap-8"
            : "flex flex-col bg-background"
        }
        ${className}
      `}
    >
      {/* Image */}
      <div
        className={`
          relative overflow-hidden
          ${isFeatured ? "aspect-[4/3]" : "aspect-[16/10]"}
        `}
      >
        <Image
          src="https://picsum.photos/300/200"
          alt={post.title}
          className={`
            w-full h-full object-cover 
            ${isFeatured ? "opacity-70 group-hover:scale-105" : "opacity-60"}
            transition-all duration-700
          `}
          fill
        />

        {isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-accent text-background rounded-full text-xs font-mono">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div
        className={`${
          isFeatured ? "flex flex-col justify-center" : "p-6 flex flex-col"
        }`}
      >
        <div className="flex items-center gap-3 text-xs font-mono text-muted mb-3">
          <span>{new Date().toDateString()}</span>•<span>6</span>
        </div>

        <h3 className="text-foreground mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>

        <p
          className={`
            text-muted
            leading-relaxed
            ${isFeatured ? "mb-6" : "line-clamp-2 mb-4 text-sm"}
          `}
        >
          {post.excerpt}
        </p>

        <div className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
          <span>Read more</span>
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </div>
      </div>
    </motion.article>
  );
}
