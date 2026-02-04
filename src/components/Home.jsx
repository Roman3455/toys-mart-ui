import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";
import apiClient from "../api/apiClient.js";
import {useLoaderData} from "react-router-dom";

// Hooks
export default function Home() {
  const products = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Enjoy your own collection!">
        This is the place where your love of movies, games, comics, and anime
        takes tangible form. We find, select, and bring the best figurines,
        fan art, and limited editions so you can literally touch your favorite
        universes.
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products"); // Axios GET Request
    return response.data;
  } catch (error) {
    throw new Response(
      error.response?.data?.errorMessage
      || error.message
      || "Failed to fetch products. Please try again.",
      {status: error.status || 500}
    );
  }
}
