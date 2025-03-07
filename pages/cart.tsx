import type { ReactElement } from "react";
import { useState } from "react";
import { CartProductProps } from "@/interfaces";
import Layout from "@/layout/Layout";
import CartProduct from "@/components/cart/CartProduct";
import OrderSummary from "@/components/cart/OrderSummary";
import Button from "@/components/common/Button";
import pesticide from "@/public/images/pesticides2.png";
import potash from "@/public/images/potash.png";
import Checkout from "@/components/cart/Checkout";

const items: CartProductProps[] = [
  {
    imageUrl: pesticide,
    name: "Altrazine",
    quantity: 1,
    price: "1200",
  },
  {
    imageUrl: potash,
    name: "D-A-P",
    price: "600",
    quantity: 1,
  },
];

function Cart() {
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleCheckout = () => {
    console.log("Show check out");
    setShowCheckout(!showCheckout);
  };

  return (
    <section className="bg-[#f0f0f0] py-10  min-h-screen relative">
      {showCheckout && <Checkout toggleCheckout={toggleCheckout} />}

      <h2 className="text-moss-green max-w-[95%] mx-auto  text-3xl md:text-4xl lg:text-5xl pb-2 border-b-2 border-b-moss-green font-bold">
        My Cart
      </h2>

      <div className="grid gap-6 mt-12 mb-28 max-w-[95%] mx-auto ">
        {items.map((item, idx) => (
          <CartProduct key={idx} {...item} />
        ))}
      </div>

      <OrderSummary subtotal={1800} deliveryFee={200} grandTotal={2000} />

      <div className="absolute  bottom-10 w-full flex justify-center ">
        <Button
          action={toggleCheckout}
          moreStyles="bg-moss-green hover:bg-lime-green active:scale-95 py-4 px-16 text-white text-xl font-bold rounded-xl"
        >
          Confrim Order
        </Button>
      </div>
    </section>
  );
}

Cart.getLayout = (page: ReactElement) => <Layout title="Cart">{page}</Layout>;

export default Cart;
