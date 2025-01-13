"use client";

interface SocialButtonProps {
  icon: string;
  link: string;
}

function SocialButton({ icon, link }: SocialButtonProps) {
  return (
    <>
      <button
        onClick={() => window.open(link, "_blank")}
        className="p-1 hover:bg-[#2e2218] rounded-full"
      >
        <i className={`fa ${icon} text-2xl p-1 rounded-md text-white`}></i>
      </button>
    </>
  );
}

export default SocialButton;
