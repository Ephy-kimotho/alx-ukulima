import Link from "next/link";
import Button from "./Button";

function FooterNav() {
  const linkStyles =
    "hover:text-tangerine hover:translate-x-4 transition-transform duration-300 ease-in";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex flex-col gap-6 text-white font-semibold">
      <Link href="/products" className={`${linkStyles}`}>
        Explore Products
      </Link>
      <Link href="/about" className={`${linkStyles}`}>
        About us
      </Link>
      <Link href="/contact" className={`${linkStyles}`}>
        Contact us
      </Link>
      <Button moreStyles={`${linkStyles} text-left`} action={scrollToTop}>
        Back to top
      </Button>
    </nav>
  );
}

export default FooterNav;
