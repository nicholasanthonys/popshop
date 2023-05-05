import React, { ChangeEvent, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'


interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  isPassword?: boolean,
  showPassword?: boolean,
  className?: string
}

const InputField: React.FC<Props> = ({ label, placeholder, value, isPassword, showPassword, onChange, className,error }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const determineBorder = (): string => {
    if (error) {
      return 'focus:border-indigo-400 focus:outline-none  border-red-500 py-2 pr-2 pl-6'
    }

    return 'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-6 '
  }
  const inputClassName = `border-2 w-full border rounded placeholder-gray-400 rounded-md  ${determineBorder()}`

  const handleToggleTextVisibility = () => {
    setIsTextVisible((prev) => !prev);
  };

  const determineInputType = (isPassword?: boolean) => {
    if (isPassword) {
      if (isTextVisible) {
        return "text"
      }
      return "password"
    }

    return "text"

  }


  return (
    <div>
      {label ?
        <label htmlFor={label} className="block text-gray-700 font-bold mb-2">{label}</label>
        : <div />
      }
      <div className="relative">
        <input
          type={determineInputType(isPassword)}
          className={`${inputClassName} ${className}`}
          placeholder={placeholder}
          onChange={onChange}
        />

        {isPassword ?
          <button
            type="button"
            onClick={handleToggleTextVisibility}
            className="absolute bottom-0 top-0 right-0 px-3"
          >
            {isTextVisible ? (
              <EyeSlashIcon className="h-5 w-5 text-[#3E76FF]" />
            ) : (
              <EyeIcon className="h-5 w-5 text-[#3E76FF]" />
            )}
          </button> : <div />
        }

      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div >
  );
};

export default InputField;