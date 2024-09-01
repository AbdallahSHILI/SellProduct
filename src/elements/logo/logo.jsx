import React from "react";
import styles from "./logo.module.css";
import { Lobster } from "next/font/google";
import Link from "next/link";

const logoFont = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const logo = () => {
  return (
    <Link href="/" className={`$styles.logo ${logoFont.className}`}>
      HexaShop
    </Link>
  );
};

export default logo;
