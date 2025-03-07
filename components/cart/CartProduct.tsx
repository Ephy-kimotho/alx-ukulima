import { Trash2 } from "lucide-react";
import { CartProductProps } from "@/interfaces";
import Image from "next/image";
import Button from "../common/Button";

function CartProduct({ imageUrl, name, price, quantity }: CartProductProps) {
  const deleteItem = () => {
    console.log("Deleted item");
  };

  return (
    <article className="bg-[#D9D9D9] py-4  px-4 rounded-lg shadow-md flex items-center justify-between ">
      <div className="flex-1 flex gap-4 items-center">
        <Image src={imageUrl} alt={name} className="size-30 rounded" />

        <div className="flex flex-col  text-black">
          <p className="font-bold text-2xl md:text-3xl">{name}</p>
          <p className="font-medium">Ksh. {price}</p>
        </div>
      </div>

      <div className="flex flex-col self-stretch justify-around  gap-4 items-end w-1/5">
        <Button action={deleteItem} moreStyles="p-2">
          <Trash2 size={30} color="#e9591b" />
        </Button>
        <div className="space-x-2">
          <span className="border-2 border-moss-green bg-white text-moss-green rounded-xl  text-lg py-1 px-3 md:px-5 md:text-xl cursor-pointer">
            -
          </span>
          <span className="text-night text-xl font-bold">{quantity}</span>
          <span className="border-2 border-moss-green bg-moss-green text-white rounded-xl  text-lg py-1 px-3 md:px-5 md:text-xl cursor-pointer">
            +
          </span>
        </div>
      </div>
    </article>
  );
}

export default CartProduct;
