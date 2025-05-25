import styles from './Hero.module.css';
import Button from '../../components/ui/Button/Button';
import PricingCard from '../../components/ui/PricingCard/PricingCard';
import NavbarLogo from '../../components/ui/NavbarLogo/NavbarLogo';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img
        className={styles.image}
        src="/assets/image/hero_img.png"
        alt="Hero section"
      />

      <div className={styles.overlay}>
        <header className={styles.header}>
          <span><NavbarLogo /></span>
          <Button label="Book your slot" variant="navbar" />
        </header>

        <main className={styles.content}>
          <h1>Develop habit reverse age</h1>
          <p>
            Consistent yoga improves flexibility, boosts immunity, reduces stress &
            slows down signs of aging all through one powerful daily habit.
          </p>
          
          <PricingCard 
            price="Per session ₹5000"
            description="book your slots now & feel the change"
            buttonText="Book"
          />
        </main>
      </div>
    </section>
  );
};

export default Hero;