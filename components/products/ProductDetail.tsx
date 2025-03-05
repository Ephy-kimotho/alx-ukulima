import { ProdcutDetailProps } from "@/interfaces";
import { nunito } from "@/fonts";
import Image from "next/image";
import Button from "../common/Button";

function ProductDetail({ imageUrl, name, price }: ProdcutDetailProps) {
  const addItemToCart = () => {};

  return (
    <article className="max-w-md bg-[#F0F0F0] rounded-xl pb-3 shadow-md">
      <Image
        src={imageUrl}
        alt={name}
        className="h-2/3 rounded-t-lg object-cover object-center"
      />

      <div className="m-4">
        <p className="text-2xl text-mold-green font-semibold">{name}</p>
        <p
          className={`${nunito.className} font-medium text-lg text-mold-green  mb-4`}
        >
          Ksh. {price}
        </p>
        <Button
          action={addItemToCart}
          moreStyles="w-3/5 py-2 text-white md:text-lg font-bold bg-mold-green hover:bg-moss-green rounded-md cursor-pointer"
        >
          Add to cart
        </Button>
      </div>
    </article>
  );
}

export default ProductDetail;
