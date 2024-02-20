import { AppWindow } from "@phosphor-icons/react";
import { Title } from "../../Style";
import styles from "./ProjectExp.module.css";
import { motion } from "framer-motion";
import { customEase } from "../../Pages/Sobre";

function ProjectExp() {
  return (
    <aside className={styles.aside_section_03}>
      <Title>
        <AppWindow size={42} />
        Meus Projetos
      </Title>

      <div className={styles.grid_container}>
        <motion.div
          key="circle1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.45, ease: customEase }}
          className={styles.grid_item}
          id="skill-1"
        >
          <div className={styles.circle}>
            <strong>+10</strong>
            <p>Projetos</p>
          </div>
        </motion.div>
        <motion.div
          key="circle2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.45, ease: customEase }}
          className={styles.grid_item}
          id="skill-1"
        >
          <div className={styles.circle}>
            <strong>+2</strong>
            <p>Experiências</p>
          </div>
        </motion.div>
        <motion.div
          key="circle3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.45, ease: customEase }}
          className={styles.grid_item}
          id="skill-1"
        >
          <div className={styles.circle}>
            <strong>+4</strong>
            <p>Empresas</p>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}

export default ProjectExp;
