/* eslint-disable react/jsx-no-target-blank */
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Home.module.css";
import photo from "./img/photo.jpeg";
import { animations } from "../Sobre";
import {
  LinkedinLogo,
  WhatsappLogo,
  GithubLogo,
  Download,
} from "@phosphor-icons/react";
import { Link, Router } from "react-router-dom";
import { motion } from "framer-motion";
import { customEase } from "../Sobre";
import Typewriter from "../../components/Typewriter";

function Home() {
  
  const containerFlexVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.5, // Define o intervalo entre as animações de cada elemento
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  const photoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };


  return (
    <>
      <Header />
      <motion.div
        variants={animations}
        initial="exit"
        animate="animate"
        exit="initial"
        transition={{ duration: 0.25, ease: customEase, stiffness: 300 }}
      >
        <Container key={Router.pathname} mode={"wait"}>
          <aside className={styles.aside}>
            <Link target="_blank" to="https://www.linkedin.com/in/yanpedro18/">
              <LinkedinLogo size={32} />
            </Link>
            <Link
              target="_blank"
              to="https://wa.me/+5531994045385?text=Ol%C3%A1%20Yan,%20gostaria%20de%20conversar%20com%20voc%C3%AA"
            >
              <WhatsappLogo size={32} />
            </Link>
            <Link target="_blank" to="https://github.com/YanPedro18">
              <GithubLogo size={32} />
            </Link>
          </aside>

          <motion.section
            className={styles.container_flex}
            variants={containerFlexVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={itemVariants}>Quem sou</motion.h3>
            <motion.h1 variants={itemVariants}>Yan Pedro</motion.h1>
            <motion.p variants={itemVariants}>
            Estudante de desenvolvimento de sistemas, focado atualmente na
              área do {" "}
            <Typewriter />.

            </motion.p>
            <button >
              {" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1S-ZrlBISZqZiX_egngesWl1zvUSLacUx/view?usp=sharing"
                download="https://drive.google.com/file/d/1S-ZrlBISZqZiX_egngesWl1zvUSLacUx/view?usp=sharing"
              >
                {" "}
                Currículo
                <Download size={14} />
              </a>
            </button>
          </motion.section>

          <div className={styles.container_flex2}>
            <motion.img
              src={photo}
              alt=""
              variants={photoVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default Home;
