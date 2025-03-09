import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { nunito } from "@/fonts";
import { ProductDetailProps } from "@/interfaces";
import { BASE_URL } from "@/constants";
import Layout from "@/layout/Layout";
import Button from "@/components/common/Button";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [selectedItem, setSelectedItem] = useState<ProductDetailProps | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    const getProduct = async () => {
      try {
        setLoading(true);
        console.log(`${BASE_URL}/products/detail/${id}/`);
        const { data } = await axios.get<ProductDetailProps>(
          `${BASE_URL}/products/detail/${id}/`
        );

        console.log("Selected Product: ", data);
        setSelectedItem(data);
      } catch (error) {
        console.error("Error getting specific product: ", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  // TODO: write add to cart function.
  const addItemToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <section
      className={`${nunito.className} bg-[#fdfbf0] min-h-screen py-10 px-5 text-night`}
    >
      {loading ? (
        <div>
          <p className="text-slate-800 text-3xl font-bold">Loading product..</p>
        </div>
      ) : (
        <>
          <Link href="/products" className="ml-5 bg-red-500">
            <ArrowLeft size={30} color="#2d3134" />
          </Link>

          <div className="flex flex-col gap-6 mt-6 md:flex-row items-center md:justify-around ">
            {selectedItem && (
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={400}
                height={400}
                className="flex-1"
              />
            )}
            <ul className="bg-[#D9D9D9] self-stretch text-night p-8 gap-4 lg:gap-12 rounded-md text-xl flex flex-1 flex-col md:justify-center list-none">
              <li>
                <span className="font-bold">Name: </span>
                <span>{selectedItem?.name}</span>
              </li>
              <li>
                <span className="font-bold">Availability: </span>
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
        </>
      )}
    </section>
  );
}

ProductDetail.getLayout = (page: ReactElement) => (
  <Layout title="Products">{page}</Layout>
);

export default ProductDetail;
