import { ProductDetailProps } from "@/interfaces";
import { nunito } from "@/fonts";
import Image from "next/image";

function ProductDetail({ image, name, price, stock }: ProductDetailProps) {
  return (
    <article className="max-w-sm  bg-[#f0f0f0] rounded-xl pb-3 shadow-md text-night">
      <div className="w-full h-[300px] block relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <div className="m-4">
        <p className="text-2xl text-moss-green capitalize font-semibold">
          {name}
        </p>
        <p
          className={`${
            stock > 0 ? "text-mold-green" : "text-imperial-red"
          } mb-4 capitalize font-medium`}
        >
          {stock > 0 ? `In stock: ${stock}` : "Out of stock"}
        </p>
        <p className={`${nunito.className} text-lg text-lime-green font-bold `}>
          Ksh. {price}
        </p>
      </div>
    </article>
  );
}

export default ProductDetail;
