
import Container from "../../components/Container";
import Header from "../../components/Header";
import styles from "./Projetos.module.css";
import { motion } from "framer-motion";
import { customEase, animations } from "../Sobre";
import { Router } from "react-router-dom";
import ProjectExp from "../../components/ProjectExp";
import Select from "../../components/Select";

function Projetos() {
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
          <ProjectExp />
          
          <article className={styles.card_flex}>
            <Select />
          </article>
          
        </Container>
      </motion.div>
    </>
  );
}

export default Projetos;
