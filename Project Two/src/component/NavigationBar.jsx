import imageses from "/public/images/Frame 2 1.png";
import styles from "../css/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={`${styles.navHead} container`}>
      <div>
        <img src={imageses} alt="brand_logo" />
      </div>

      <div>
        <ul className={styles.nav_ul}>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
