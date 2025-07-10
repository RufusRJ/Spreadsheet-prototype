import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      {...props}
    >
      {children}
    </button>
  );
};
