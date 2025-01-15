import About from "./components/About";
import Card from "./components/Card/Card";
import Homepage from "./components/Homepage";
import Services from "./components/Layanan/Services";
import Product from "./components/Product/Product";

export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Product />
    </>
  );
}
