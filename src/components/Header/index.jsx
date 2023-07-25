import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import logo from "../../assets/Yp.svg";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  function clickMenu() {
    setIsMenu(!isMenu);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="" />
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/Sobre">Sobre Mim</Link>
          <Link to="/Projetos">Projetos</Link>
        </nav>
        <span
          onClick={clickMenu}
          className={`${styles.mobile_btn} ${isMenu ? styles.active : ""}`}
        ></span>
      </header>
      <AnimatePresence>
        {isMenu && (
          <motion.ul
            className={`${styles.menu_mobile} ${styles.active}`}
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
          >
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link to="/Sobre">Sobre Mim</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link to="/Projetos">Projetos</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
