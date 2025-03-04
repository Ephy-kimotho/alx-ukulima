import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";
import { quicksand } from "@/fonts";

function CategoryCard({ categoryImage, categoryName }: CategoryCardProps) {
  return (
    <article className="bg-white h-80 grid place-content-center gap-4 rounded-2xl shadow-lg ">
      <Image src={categoryImage} alt={categoryName} />
      <p className={`text-night  text-center text-lg ${quicksand.className}`}>
        {categoryName}
      </p>
    </article>
  );
}

export default CategoryCard;
