import type { ReactNode } from 'react';

interface ButtonProps {
  label?: string;
  children?: ReactNode;
  variant?: 'navbar' | 'cta' | 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<string, string> = {
  navbar:
    'w-[115px] h-[31px] px-[16px] pt-[6px] pb-[8px] rounded-[100px] bg-black text-white text-[14px] font-normal leading-[100%] tracking-[-0.02em] font-["Inter_Display"] flex items-center justify-center',
    cta:
    'w-[83px] h-[44px] px-[24px] pt-[6px] pb-[8px] rounded-[100px] bg-black text-white text-[16px] font-normal leading-[100%] tracking-[-0.02em] font-["Inter_Display"] flex items-center justify-center transition-all duration-200 hover:bg-[#333] active:translate-y-0 hover:-translate-y-[1px]',
  
  
  primary:
    'px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-neutral-800',
  secondary:
    'px-6 py-3 bg-white text-black font-medium border border-gray-300 rounded-full hover:bg-gray-200',
};

const Button = ({
  label,
  children,
  variant = 'cta',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseClasses =
    'border-none transition-all duration-300 font-sans inline-block';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const variantClass = variantClasses[variant] || '';

  return (
    <button
      className={`${baseClasses} ${variantClass} ${disabledClasses} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
    >
      {children || label}
    </button>
  );
};

export default Button;
