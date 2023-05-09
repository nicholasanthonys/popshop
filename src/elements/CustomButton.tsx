import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
  children,
  type = "submit",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 bg-[#3E76FF] hover:bg-[#3534FA] text-white drop-shadow-[0_4px_61px_rgba(62,118,255,0.4)] w-full font-medium rounded-md ${className}  disabled:bg-slate-50 disabled:text-slate-500`}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
