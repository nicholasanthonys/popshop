import React, { ChangeEvent, useState } from 'react';


type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
  };
  
  const CustomButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    children,
  }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`py-2 px-4 bg-[#3E76FF] hover:bg-[#3534FA] text-white drop-shadow-[0_4px_61px_rgba(62,118,255,0.4)] w-full font-medium rounded-md ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default CustomButton;