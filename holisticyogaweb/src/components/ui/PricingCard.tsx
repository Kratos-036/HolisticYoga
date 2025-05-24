import styles from '../../styles/PricingCard.module.css';

interface PricingCardProps {
  price: string;
  description: string;
  buttonText: string;
}

const PricingCard = ({ 
  price = "Per session ₹5000", 
  description = "book your slots now & feel the change",
  buttonText = "Book"
}: PricingCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <div className={styles.price}>{price}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <button className={styles.bookButton}>
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;