import About from "./components/About";
import Card from "./components/Card/Card";
import Homepage from "./components/Homepage";
import Services from "./components/Layanan/Services";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";

export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Product />
      <Order />
    </>
  );
}
