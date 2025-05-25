// src/components/ui/Button.tsx
import styles from './Button.module.css';
interface ButtonProps {
  label: string;
  variant?: 'navbar' | 'cta';
  onClick?: () => void;
}

const Button = ({ label, variant = 'cta', onClick }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
