import About from "./components/About";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <>
      <div className="mt-[10rem] m-[10rem]">
        <Homepage />
      </div>
      <About />
    </>
  );
}
