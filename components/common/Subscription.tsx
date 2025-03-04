import { useState } from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";
import Button from "./Button";

function Subscription() {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    console.log("You have subscribed to our email list");
  };

  return (
    <article className="border-r-2 pr-5 border-white">
      <div className="flex items-center space-x-6">
        <Image
          src={logo}
          alt="Company logo"
          className="w-9 h-9 sm:w-12 sm:h-12"
        />
        <p className="font-bold text-white text-xl">Ukulima</p>
      </div>
      <p className="max-w-sm font-semibold my-4 text-white">
        Subscribe to our news letter for the latest farming tips, exclusive
        deals and updates on agricultural products
      </p>
      <div className="bg-white rounded-md max-w-sm  flex items-center">
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          className="border-none  text-night pl-3 flex-1 text-base outline-none placeholder:text-gray-400 w-full bg-transparent py-2"
          placeholder="Enter your email"
        />
        <Button action={subscribe} moreStyles="mx-2 ">
          <IoMdSend size={28} color="#1F4E3C" />
        </Button>
      </div>
    </article>
  );
}

export default Subscription;
