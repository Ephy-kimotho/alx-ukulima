import type { ReactElement } from "react";
import { useMemo } from "react";
import { items } from "@/components/products/ProductListing";
import { ProductDetailProps } from "@/interfaces";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { nunito } from "@/fonts";
import Layout from "@/layout/Layout";
import Button from "@/components/common/Button";
import Link from "next/link";
import Image from "next/image";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const selectedItem: ProductDetailProps | undefined = useMemo(() => {
    return items.find((item) => item.id === Number(id));
  }, [id]);

  const addItemToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <section
      className={`${nunito.className} bg-[#fdfbf0] min-h-screen py-10 px-5`}
    >
      <Link href="/products" className="ml-5 bg-red-500">
        <ArrowLeft size={30} color="#2d3134" />
      </Link>

      <div className="flex flex-col gap-6 mt-6 md:flex-row items-center md:justify-around ">
        {selectedItem && (
          <Image
            src={selectedItem?.imageUrl}
            alt={selectedItem?.name}
            className="rounded-xl md:w-2/5"
          />
        )}

        <ul className="bg-[#D9D9D9] self-stretch text-night p-8 gap-4 lg:gap-12 rounded-md text-xl flex flex-col md:justify-center list-none">
          <li>
            <span className="font-bold">Name: </span>
            <span>{selectedItem?.name}</span>
          </li>
          <li>
            <span className="font-bold">Category: </span>
            <span>{selectedItem?.category}</span>
          </li>
          <li>
            <span className="font-bold">Price: </span>
            <span> Ksh. {selectedItem?.price}</span>
          </li>
          <li>
            <span className="font-bold">Description: </span>
            <span>{selectedItem?.description}</span>
          </li>
        </ul>
      </div>

      <div className="text-center mt-20">
        <Button
          action={addItemToCart}
          moreStyles="font-bold text-white px-20 py-4 hover:bg-lime-green rounded-xl bg-moss-green text-xl active:scale-95 cursor-pointer tracking-wider"
        >
          Add to cart
        </Button>
      </div>
    </section>
  );
}

ProductDetail.getLayout = (page: ReactElement) => (
  <Layout title="Products">{page}</Layout>
);

export default ProductDetail;
