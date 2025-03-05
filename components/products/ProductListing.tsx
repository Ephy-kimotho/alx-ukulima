import { ProductDetailProps } from "@/interfaces";
import ProductDetail from "./ProductDetail";
import maize from "@/public/images/maizeseeds.png";
import npk from "@/public/images/npk.png";
import pesticide from "@/public/images/pesticides2.png";
import potash from "@/public/images/potash.png";
import Link from "next/link";

export const items: ProductDetailProps[] = [
  {
    id: 1,
    imageUrl: maize,
    name: "Maize seeds",
    category: "seeds",
    price: "100",
    description: "kkn djkbvjbe jkbvrgn rgbjftnb kndknvjdsb gubreugbnb",
  },
  {
    id: 2,
    imageUrl: npk,
    name: "DAP",
    category: "fertilizer",
    price: "430",
    description: "jbdjkbih riohioydkfn vjkabeiwtir hginkbdf jksiorehtioqkfkn",
  },
  {
    id: 3,
    imageUrl: pesticide,
    name: "Altrazine",
    category: "pesticide",
    price: "1200",
    description: "cndjvkbvjreb jkbvubruin ibfurbugbiorvjnv",
  },
  {
    id: 4,
    imageUrl: potash,
    name: "D-A-P",
    category: "fetilizer",
    price: "600",
    description: "kjdvjdjg jkjkdbrgbir ibfibirg oiehgiorgior ibifbg",
  },
];

function ProductListing() {
  return (
    <div className="w-11/12 max-w-[85%] mx-auto my-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item: ProductDetailProps, idx: number) => (
        <Link key={idx} href={`/products/${encodeURIComponent(item.id)}`}>
          <ProductDetail {...item} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListing;
