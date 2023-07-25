/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Accordion.module.css";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";




function Accordion({ title, date, job, text, skills1, skills2 }) {

  //ele esta definido como tudo falso
  const [isOpen, setIsOpen] = useState(false);

  function click() {
    //colocando o ! eu vou inverter o valor para true, entao ele vai abrir e clicar de novo ele volta pra false

    setIsOpen(!isOpen);
  }
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    duration: {duration: 2.35}
    
  }

  return (
    <>
      {/* classe que fica definida no state eo deuruim e o botao, quando clicar, vai ser open
            e entao aparecera a div */}

      <motion.div className={isOpen ? "open" : "closed"} whileTap={{ scale: 0.97 }}>
        <div className={styles.accordion} onClick={click}>
          <button className={isOpen ? styles.isOpen : styles.isClosed}>
            <ArrowCircleLeft size={32} />
          </button>
          <h2 className={isOpen ? styles.h1doido : styles.h1fal}>{title}</h2>
        </div>

        {/* se existir o state 'open' entao ele abre a div, e troca a div primaria pra open */}
        {isOpen && (
          <motion.div  
          initial="hidden"
          animate="visible"
          variants={list}>
            <motion.div       
              className={styles.jobs}
            >
              <motion.span variants={item} transition={{ duration: 0.5, interval: 0.2 }}>{date}</motion.span> <br />
              <motion.strong variants={item} >{job}</motion.strong>
              <motion.p variants={item} >{text}</motion.p>
                <motion.div className={styles.skills}> 
                <h1>Hard Skills:</h1>
                  <ul className={styles.list_skills}>
                    <li><strong>Javascript</strong></li>
                    <li><strong>PHP</strong></li>
                    <li><strong>{skills1}</strong></li>
                    <li><strong>{skills2}</strong></li>
                  </ul>
                </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Accordion;
