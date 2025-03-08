import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/logo.png";
import Button from "@/components/common/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { asPath } = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-2 lg:px-4 flex justify-between items-center shadow-lg relative z-30">
      {/* Company Logo */}
      <Link href="/" className="cursor-pointer">
        <Image
          src={logo}
          alt="Company logo"
          className="w-9 h-9 sm:w-12 sm:h-12"
        />
      </Link>

      {/* Navigation links */}
      <nav className="hidden md:flex gap-6 lg:gap-12 items-center">
        <Link
          href="/"
          className={`${
            asPath === "/" && "text-tangerine"
          } font-medium text-lg  text-night hover:text-tangerine tracking-wide`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`${
            asPath === "/products" && "text-tangerine"
          }  font-medium text-lg text-night hover:text-tangerine tracking-wide`}
        >
          Products
        </Link>
        <Link
          href="/about"
          className={`${
            asPath === "/about" && "text-tangerine"
          } font-medium text-lg text-night hover:text-tangerine tracking-wide`}
        >
          About us
        </Link>
        <Link
          href="/contact"
          className={`${
            asPath === "/contact" && "text-tangerine"
          } font-medium text-lg text-night hover:text-tangerine tracking-wide`}
        >
          Contact us
        </Link>
      </nav>

      {/* Authentication buttons */}
      <div className="hidden md:flex gap-3 items-center">
        <Link
          href="/login"
          className="bg-mold-green hover:bg-white border-2 border-transparent hover:border-mold-green text-white hover:text-mold-green py-2 px-8 rounded-xl font-semibold text-lg tracking-wide"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-white hover:bg-mold-green border-2 border-mold-green hover:border-transparent text-mold-green hover:text-white py-2 px-5 rounded-xl font-semibold text-lg tracking-wide"
        >
          Sign up
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <Button action={toggleMenu} moreStyles="block md:hidden">
        <AlignRight color="#2d3134" size={32} />
      </Button>

      {/* MOBILE NAVIGATION BAR */}
      <aside
        className={`md:hidden fixed top-0 right-0 left-20 min-h-full  pt-5 px-6 flex flex-col gap-10 ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
        style={{
          background: "rgba(255,255,255, 0.65)",
          backdropFilter: "blur(30px)",
        }}
      >
        {/* Close menu button */}
        <Button action={toggleMenu}>
          <X color="#ED2939" size={32} />
        </Button>

        {/*nav links */}
        <div className="flex-1 flex  flex-col justify-between items-center pb-8">
          <nav className="flex flex-col gap-8 items-start">
            <Link
              href="/"
              className={`${
                asPath === "/" && "text-tangerine"
              } font-medium text-lg text-night tracking-wide`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${
                asPath === "/products" && "text-tangerine"
              } font-medium text-lg text-night tracking-wide`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`${
                asPath === "/about" && "text-tangerine"
              } font-medium text-lg text-night tracking-wide`}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={`${
                asPath === "/contact" && "text-tangerine"
              } font-medium text-lg text-night tracking-wide`}
            >
              Contact us
            </Link>
          </nav>

          {/* Authentication buttons */}
          <div className="flex flex-col gap-2">
            <Link
              href="/login"
              className="bg-mold-green hover:bg-white border-2 border-transparent hover:border-mold-green text-white hover:text-mold-green py-2 px-10  rounded-xl font-semibold"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white hover:bg-mold-green border-2 border-mold-green hover:border-transparent text-mold-green hover:text-white py-2 px-10 rounded-xl font-semibold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}

export default Header;
