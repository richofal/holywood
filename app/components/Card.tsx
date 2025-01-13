import Header from "./Header";
import Identity from "./Identity";
import Biodata from "./Biodata";

function Card() {
  return (
    <>
      <div className="max-w-[300px] m-[2rem] bg-[#fffff9] rounded-[1rem] shadow-[0_30px_20px_-10px_rgba(0,_0,_0,_0.2)]">
        <div
          className="relative w-[300px] h-[360px] bg-white rounded-tl-[1rem] rounded-tr-[1rem] rounded-bl-[0] 
          rounded-br-[0] bg-[url('/foto.jpg')] bg-no-repeat bg-top transition-[background-size] duration-[1500ms] 
          ease-in-out bg-[length:130%]"
        >
          <Header />
          <Identity />
        </div>
        <div className="p-[1rem] pt-[1rem] pr-[1.5rem] pb-[0.8rem] bg-[#A6795B] rounded-bl-[1rem] rounded-br-[1rem]">
          <Biodata />
        </div>
      </div>
    </>
  );
}

export default Card;
