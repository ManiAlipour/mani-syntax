import Image from "next/image";

interface IFeaturedBlogProps {
  title: string;
  date: string;
  readOf: number;
  slug: string;
  content: string;
  coverImage?: string;
}

function FeaturedBlogCard({
  content,
  date,
  readOf,
  slug,
  title,
  coverImage = "https://picsum.photos/200/300",
}: IFeaturedBlogProps) {
  return (
    <div className="w-full">
      <Image
        src={coverImage}
        alt={title}
        width={300}
        height={200}
        className="w-full h-56"
      />
    </div>
  );
}

export default FeaturedBlogCard;
