import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "./Card";
import Hero from "./Hero";

function Homepage() {
  return (
    <>
      <div className="flex justify-center items-center gap-20">
        <div>
          <Card />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </>
  );
}

export default Homepage;
