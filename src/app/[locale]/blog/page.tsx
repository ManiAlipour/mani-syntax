import FeaturedBlogCard from "@/src/components/features/blog/FeaturedCard";
import BlogCard from "@/src/components/features/BlogCard";

function BlogPage() {
  return (
    <div>
      <div>
        <h3>Featured</h3>
        <div className="flex flex-col">
          <div className="">
            <BlogCard
              isFeatured
              post={{
                _id: "LKDLJKJF;lsi9wp0s.,md",
                author: "Mani",
                category: "developer",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae molestias doloremque dolores velit perferendis officiis architecto soluta vitae voluptatem!",
                excerpt:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae molestias doloremque dolores velit perferendis officiis architecto soluta vitae voluptatem! ",
                publishDate: "2026/01/01",
                tags: ["Developers"],
                title: "Title",
              }}
              className="max-h-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
