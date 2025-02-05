import About from "./components/About";
import Homepage from "./components/Homepage";
import Services from "./components/Layanan/Services";
import Product from "./components/Product/Product";
import Order from "./components/Order/Order";
import Testimonial from "./components/Testimonial/Testimonial";
import Catalog from "./components/Catalog/Catalog";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Product />
      <Order />
      <Testimonial />
      <Catalog />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
