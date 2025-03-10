import type { ReactElement } from "react";
import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { montserrat, poppins } from "@/fonts";
import { BASE_URL } from "@/constants";
import { Categories, ProductListingResponse } from "@/interfaces";
import Layout from "@/layout/Layout";
import Button from "@/components/common/Button";
import axios from "axios";

//Lazily import  the product listing component
const ProductListing = lazy(
  () => import("@/components/products/ProductListing")
);

function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();

  /* State to hold all product listings from database */
  const [productListings, setProductListings] =
    useState<ProductListingResponse | null>(null);

  /* State to hold all categories */
  const [categories, setCategories] = useState<Categories[]>([]);

  /* State to hold the current page being displayed */
  const [page, setPage] = useState(1);

  /* Get the category filter from URL search parameters */
  const selectedCategory = searchParams.get("category") || "";

  /* Side effect to fetch all product categories */
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get<Categories[]>(
          `${BASE_URL}/products/category/list/`
        );
        setCategories(data);
      } catch (error) {
        console.error("Error getting the categories: ", error);
      }
    };

    getCategories();
  }, []);

  /* Side effect to fetch all products from the database */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get<ProductListingResponse>(
          `${BASE_URL}/products/list/?ordering=id&page=${page}`
        );

        setProductListings(data);
      } catch (error) {
        console.error("Error getting Product Listing: ", error);
      }
    };

    getProducts();
  }, [page]);

  /* Function to handle category change and update URL */
  const handleCategoryChange = (categoryId: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      newParams.set("category", categoryId);
    } else {
      newParams.delete("category");
    }

    router.push(`/products/?${newParams.toString()}`);
  };

  /* Function to filter the product listings based on the result */
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return productListings?.results || [];
    }
    return productListings?.results.filter(
      (product) => product.category === Number(selectedCategory)
    );
  }, [selectedCategory, productListings]);

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

      {/* Product Listing */}
      <Suspense
        fallback={
          <div className="bg-grey grid place-items-center max-w-11/12 min-h-[80svh] text-slate-900 text-xl">
            <p className="text-center">Loading products</p>
          </div>
        }
      >
        {/* Filter and sort select */}
        <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto  mt-10">
          <div className="bg-[#F0F0F0] w-full md:w-max border border-black rounded-lg p-2 flex items-center gap-2">
            <label htmlFor="filter-select" className="text-base text-night/50">
              Filter by:
            </label>
            <select
              name="filter-select"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              id="filter-select"
              className="text-night cursor-pointer flex-1 md:flex-none  outline-none"
            >
              <option value="" selected>
                -- choose category --
              </option>
              {categories.map((category, idx) => (
                <option key={idx} value={category.id}>
                  {category.name}
                </option>
              ))}
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

        <ProductListing results={filteredProducts || []} />
      </Suspense>

      {/* Pagination buttons */}
      <div className="flex items-center max-w-[90%] mx-auto justify-between">
        <Button
          action={() => setPage((prev) => Math.max(prev - 1, 1))}
          moreStyles={`text-white bg-moss-green py-2 px-10 rounded-md font-bold hover:bg-lime-green cursor-pointer active:scale-95 disabled:bg-gray-500 disabled:cursor-not-allowed`}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          action={() =>
            setPage((prev) => (productListings?.next ? prev + 1 : prev))
          }
          moreStyles={`text-white bg-moss-green py-2 px-10 rounded-md font-bold hover:bg-lime-green cursor-pointer active:scale-95  disabled:bg-gray-400 disabled:cursor-not-allowed `}
          disabled={!productListings?.next}
        >
          Next
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get<Categories[]>(
    `${BASE_URL}/products/category/list/`
  );

  return {
    props: {
      categories: data,
    },
  };
}

Products.getLayout = (page: ReactElement) => (
  <Layout title="Products">{page}</Layout>
);

export default Products;
