import type { ReactElement } from "react";
import { montserrat, poppins } from "@/fonts";
import ProductListing from "@/components/products/ProductListing";
import Layout from "@/layout/Layout";
import Button from "@/components/common/Button";

function Products() {
  return (
    <section className="min-h-screen bg-[#fdfbf0]  pb-20">
      {/* Headings */}
      <div className="text-center pt-10">
        <h2
          className={`${montserrat.className} text-moss-green text-3xl md:text-4xl lg:text-5xl font-bold`}
        >
          Explore our Products
        </h2>
        <p
          className={`${poppins.className} text-night text-lg md:text-xl my-2`}
        >
          Click a product to view details
        </p>
      </div>

      {/* Filter and sort select */}
      <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto  mt-10">
        <div className="bg-[#F0F0F0] w-full md:w-max border border-black rounded-lg p-2 flex items-center gap-2">
          <label htmlFor="filter-select" className="text-base text-night/50">
            Filter by:
          </label>
          <select
            name="filter-select"
            id="filter-select"
            className="text-night cursor-pointer flex-1 md:flex-none  outline-none"
          >
            <option defaultValue="" disabled selected>
              -- choose category --
            </option>
            <option value="seeds">Seeds</option>
            <option value="pesticides">Pesticides</option>
            <option value="fertilizers">Fertilizers</option>
          </select>
        </div>

        <div className="bg-[#F0F0F0] w-full md:w-max  border border-black rounded-lg p-2 flex items-center gap-2">
          <label htmlFor="filter-select" className="text-base text-night/50">
            Sort by price:
          </label>
          <select
            name="filter-select"
            id="filter-select"
            className="text-night flex-1 cursor-pointer outline-none"
          >
            <option value="" disabled selected>
              -- &nbsp; choose &nbsp; --
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      {/* Product Listing */}
      <ProductListing />

      {/* Pagination buttons */}
      <div className="flex items-center max-w-[90%] mx-auto justify-between">
        <Button
          action={() => {}}
          moreStyles="text-white bg-moss-green py-2 px-10 rounded-md font-bold hover:bg-lime-green cursor-pointer active:scale-95"
        >
          Prev
        </Button>
        <Button
          action={() => {}}
          moreStyles="text-white bg-moss-green py-2 px-10 rounded-md font-bold hover:bg-lime-green cursor-pointer active:scale-95"
        >
          Next
        </Button>
      </div>
    </section>
  );
}

Products.getLayout = (page: ReactElement) => (
  <Layout title="Products">{page}</Layout>
);

export default Products;
