import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { links } from "./data";
import Logo from "../../elements/logo/logo";
import Button from "@/elements/Button/Button";
import dark from "@/Components/DarkModeToggle/darkModeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <dark />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
