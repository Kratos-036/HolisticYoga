import Button from '../Button/Button';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  price: string;
  description: string;
  buttonText: string;
}

const PricingCard = ({ 
  price = "", 
  description = "",
  buttonText = ""
}: PricingCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <div className={styles.price}>{price}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <Button
        label={buttonText}
        variant="cta"
      />
    </div>
  );
};

export default PricingCard;