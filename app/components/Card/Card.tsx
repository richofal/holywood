import "./Card.css";
import Header from "../Header";
import Identity from "../Identity";
import Biodata from "../Biodata";

function Card() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fffff9] rounded-[1rem]">
      <div
        className="relative w-[300px] h-[360px] bg-white rounded-tl-[1rem] rounded-tr-[1rem] rounded-bl-[0] 
          rounded-br-[0] bg-[url('/foto.jpg')] bg-no-repeat bg-top transition-[background-size] duration-[1500ms] 
          ease-in-out bg-[length:130%]"
      >
        <Header />
        <Identity />
      </div>
      <div className="p-[1rem] pt-[1rem] pr-[1.5rem] pb-[0.8rem] bg-[#A6795B] rounded-bl-[1rem] rounded-br-[1rem] w-[300px]">
        <Biodata />
      </div>
    </div>
  );
}

export default Card;
