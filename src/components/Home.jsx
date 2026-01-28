import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";
import apiClient from "../api/apiClient.js";
import {useState, useEffect} from "react";

// Hooks
const Home = () => {

  const [products, setProducts] = useState({});

  // Run once when the component mounts
  // Mounting is the process of creating and adding the component into DOM
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await apiClient.get("/products");
    setProducts(response.data);
  }

  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
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

export default Home
