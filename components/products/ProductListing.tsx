import { ProductDetailProps } from "@/interfaces";
import ProductDetail from "./ProductDetail";
import Link from "next/link";

function ProductListing({ results }: { results: ProductDetailProps[] }) {
  return (
    <div className="w-11/12  mx-auto my-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {results.map((item: ProductDetailProps, idx: number) => (
        <Link key={idx} href={`/products/${item.id}`}>
          <ProductDetail {...item} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListing;
