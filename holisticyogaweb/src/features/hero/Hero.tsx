import styles from "./Hero.module.css";
import Button from "../../components/ui/Button/Button";
import PricingCard from "../../components/ui/PricingCard/PricingCard";
import NavbarLogo from "../../components/ui/NavbarLogo/NavbarLogo";
import { useIsMobile } from "../../hooks/useIsMobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const handleBookSlot = () => {
    console.log("Book your slot clicked - handler working!");
    // alert('Button clicked!'); // This will help us see if the click is working
  };

  return (
    <section className={styles.hero}>
      <picture>
        <source
          media="(max-width: 425px)"
          srcSet="/assets/image/hero/Hero_Mobile.png"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="/assets/image/hero/Hero_Tablet.png"
        />
        <img
          src="/assets/image/hero/Hero.png"
          alt="Hero section"
          className={styles.image}
        />
      </picture>

      <div className={styles.overlay}>
        <header className={styles.header}>
          <span>
            <NavbarLogo />
          </span>
          <Button
            label="Book your slot"
            variant={isMobile ? "navbarmobile" : "navbar"}
            onClick={handleBookSlot}
          />
        </header>
        <main className={styles.content}>
          <div className={styles.heroText}>
            <h1>Develop habit reverse age</h1>
            <p>
              Daily yoga boosts flexibility, immunity, calmness, and keeps you
              youthful.
            </p>
          </div>

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
