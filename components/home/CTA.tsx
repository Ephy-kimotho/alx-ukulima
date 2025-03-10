import { montserrat, nunito } from "@/fonts";
import Link from "next/link";

function CTA() {
  return (
    <div className="bg-[url(/images/field3.png)] bg-cover bg-right md:bg-center inset-shadow-overlay h-[450px] flex gap-6 flex-col justify-center py-6 pl-6">
      <p
        className={`${montserrat.className} text-white font-bold text-3xl md:text-3xl max-w-3xl`}
      >
        Sustainable Farming Meets Technology Building a Greener Future
      </p>
      <div className={`${nunito.className} flex gap-5 items-center `}>
        <Link
          href="/about"
          className="bg-moss-green hover:scale-105 rounded-lg text-white py-2 px-8"
        >
          Learn more
        </Link>
        <Link
          href="/contact"
          className="border-2 border-white hover:scale-105 rounded-lg text-white bg-transparent py-2 px-8"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default CTA;
