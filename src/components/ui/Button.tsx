import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`
        bg-vermelho text-creme font-title text-xl tracking-wide
      
        px-4 py-2 border-[3px] border-preto uppercase
        
        shadow-[6px_6px_0px_var(--color-preto)]
        
        transition-all duration-150 ease-in-out
      
        hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_var(--color-preto)]
        
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}