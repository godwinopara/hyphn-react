import React, { ButtonHTMLAttributes, ReactNode } from 'react';


type CustomBtnProps = {
  children: ReactNode;
  isPending?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  children,
  isPending,
  className,
  ...rest
}: CustomBtnProps) => {
  const { disabled, type, onClick } = rest;

  return (
    <button
      type={type}
      className={`w-fit  px-8 flex items-center justify-center h-14 bg-dark3 text-white text-base ${className}`}
      onClick={onClick}
      disabled={isPending || disabled}
      {...rest}
    >
     {children}
    </button>
  );
};

export default CustomButton;

// clsx(
//     {
//       'flex items-center h-14 w-full text-white text-xl bg-orange-500 rounded-[5px] duration-300 justify-center':
//         true,
//       'opacity-70 cursor-not-allowed': isPending || disabled,
//     },
//     className
//   )