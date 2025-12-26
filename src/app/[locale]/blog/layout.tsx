"use client";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const categories = ["All", "Design", "Development", "Technology", "Tutorial"];

function BlogLayout({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex text-muted items-center gap-2 text-sm hover:text-accent transition-colors duration-300
         group mb-10"
              aria-label="Back to home page"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              Back to home
            </Link>

            {/* Header Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h1>Blog</h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted max-w-3xl">
                Thoughts, stories, and ideas about design, development, and the
                creative process.
              </p>
            </div>

            {/* Filters Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 sm:mb-12 lg:mb-16">
              {/* Search Input */}
              <div className="relative flex-1 max-w-xl">
                <label htmlFor="blog-search" className="sr-only">
                  Search articles
                </label>
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="blog-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3.5 sm:py-4 text-foreground placeholder:text-muted-foreground 
                     focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-background
                     transition-all duration-300 hover:border-accent/50"
                  aria-label="Search blog articles"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-accent text-background shadow-lg shadow-accent/20"
                    : "bg-background text-muted border border-border hover:border-accent hover:text-accent hover:bg-accent/5"
                }
                focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background`}
                    aria-pressed={selectedCategory === category}
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">{children}</div>

            {/* Responsive Spacing */}
            <div className="h-8 sm:h-12 lg:h-16" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogLayout;
