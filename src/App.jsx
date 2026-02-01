import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet, useNavigation} from "react-router-dom";

export default function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      {navigation.state === "loading"
        ? (
          <div className="flex items-center justify-center min-h-screen">
            <span className="text-4xl font-semibold text-primary dark:text-light">
              Loading...
            </span>
          </div>
        )
        : (<Outlet />)}
      <Footer />
    </>
  );
}
