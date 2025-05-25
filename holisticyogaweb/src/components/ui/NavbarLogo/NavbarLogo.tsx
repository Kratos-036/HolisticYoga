import React from "react";
import styles from "./NavbarLogo.module.css";

const NavbarLogo = () => {
  return (
    <picture className={styles.logo}>
      <source
        media="(max-width: 425px)"
        srcSet="/assets/image/logos/logo_mobile.svg"
      />
      <source
        media="(max-width: 1024px)"
        srcSet="/assets/image/logos/logo_tablet.svg"
      />
      <img
        src="/assets/image/logos/logo_desktop.svg"
        alt="Company Logo"
        className={styles.logoImage}
      />
    </picture>
  );
};

export default NavbarLogo;
