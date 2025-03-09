import { ProductDetailProps } from "@/interfaces";
import { nunito } from "@/fonts";
import Image from "next/image";

/* className="max-w-sm bg-[#F0F0F0] rounded-xl pb-3 shadow-md text-night" */
function ProductDetail({ image, name, price, category }: ProductDetailProps) {
  return (
    <article className="max-w-sm min-h-auto bg-[#F0F0F0] rounded-xl pb-3 shadow-md text-night">
      <Image
        src={image}
        alt={name}
        width={532}
        height={415}
        className="w-full h-2/3 rounded-t-lg object-cover object-center"
      />

      <div className="m-4">
        <p className="text-2xl text-moss-green capitalize font-semibold">
          {name}
        </p>
        <p
          className={`${
            category > 0 ? "text-mold-green" : "text-imperial-red"
          } mb-4 capitalize font-medium`}
        >
          {category > 0 ? `In stock ${category}` : "Out of stock"}
        </p>
        <p className={`${nunito.className} text-lg text-lime-green font-bold `}>
          Ksh. {price}
        </p>
      </div>
    </article>
  );
}

export default ProductDetail;
