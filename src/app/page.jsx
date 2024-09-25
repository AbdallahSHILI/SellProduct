import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/img/undraw_product_teardown_re_m1pc.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop Destination !</h1>
        <p className={styles.description}>
          Descover a world of endless shopping
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image src={Hero} alt="Hex" className={styles.img} />
      </div>
    </div>
  );
}
