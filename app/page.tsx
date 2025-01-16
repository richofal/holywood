import About from "./components/About";
import Homepage from "./components/Homepage";
import Services from "./components/Layanan/Services";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Product />
      <Order />
      <Testimonial />
    </>
  );
}
