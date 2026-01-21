import products from "../data/products.js";
import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";

const Home = () => {
  return (
    <div className="home-container">
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
