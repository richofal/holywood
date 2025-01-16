import SocialButton from "./SocialButton";
import data from "../data.json";

function Header() {
  const middleIndex = Math.floor(data.length / 2);
  const socialLeft = data.slice(0, middleIndex);
  const socialRight = data.slice(middleIndex);
  return (
    <>
      <div className="absolute top-0 p-[1.5rem] pt-[0.6rem] pl-[0.9rem] space-x-4">
        {socialLeft.map((item, index) => {
          return <SocialButton key={index} icon={item.icon} link={item.href} />;
        })}
      </div>
      <div className="absolute top-0 right-0 p-[1.5rem] pt-[0.6rem] pr-[0.9rem] space-x-4">
        {socialRight.map((item, index) => {
          return <SocialButton key={index} icon={item.icon} link={item.href} />;
        })}
      </div>
    </>
  );
}

export default Header;
