import Image from "next/image";
import { TestimonialCardProps } from "@/interfaces";
import { montserrat, nunito } from "@/fonts";

function TestimonialCard({ image, name, message }: TestimonialCardProps) {
  return (
    <article className="bg-[#DCDDD4] h-80 grid  gap-4 place-content-center  rounded-xl">
      <Image src={image} alt={name} className="rounded-full w-40 mx-auto" />

      <div className="w-[80%] mx-auto text-center">
        <p className={`${montserrat.className} text-[#143133] capitalize`}>{name}</p>
        <p className={`${nunito.className} text-night`}>
          &quot;{message}&quot;
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;
