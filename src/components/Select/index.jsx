import { useState } from "react";
import styles from "./Select.module.css";
import CardProjects from "../CardProjects";
import imgPizza from "../../assets/img-pizza.png";
import imgJobAlmeida from "../../assets/imgJobAlmeida.png";
import imgJobContaibeis from "../../assets/imgJobContabeis.png";
import imgYanSongs from "../../assets/ImgYanSongs.png";
import imgEnsinio from "../../assets/imgEnsinio.png";
import imgAiko from "../../assets/imgAiko.png";
import imgMultiset from "../../assets/imgMultiset.png";
import imgEcommerce from "../../assets/imgEcommerce.jpg";
import { motion } from "framer-motion";
import { customEase } from "../../Pages/Sobre";

function Select() {
  const [selectedOption, setSelectedOption] = useState("todos");

  function selectOption(option) {
    setSelectedOption(option);
  }

  function renderCard() {
    switch (selectedOption) {
      case "react":
        return (
          <>
            <motion.div
              key="yanSongs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · YanSongs"
                imgs={imgYanSongs}
                skill1="React"
                skill2="Vite.js"
                skill3="DBfake"
                linkRep={"https://github.com/YanPedro18/YanSongs-App"}
                linkSit={"https://yansongs-app.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="ecommerce-FlagStore"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · ecommerce-FlagStore"
                imgs={imgEcommerce}
                skill1="TypeScript"
                skill2="Styled-Components"
                skill3="Context API"
                linkRep={"https://github.com/YanPedro18/ecommerce-FlagStore"}
                linkSit={"https://ecommerce-flagstore-git-main-yanpedro18.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="ensinio"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · Ensinio"
                imgs={imgEnsinio}
                skill1="Axios"
                skill2="Vite.js"
                skill3="Json-Server"
                linkRep={"https://github.com/YanPedro18/Project-Ensinio"}
                linkSit={"https://project-ensinio.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="aiko"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · Aiko"
                imgs={imgAiko}
                skill1="Javascript"
                skill2="Leaflet.Js"
                skill3="Json"
                linkRep={
                  "https://github.com/YanPedro18/teste-frontend-estagio-v3/tree/teste/yan-pedro"
                }
                linkSit={
                  "https://yanpedro18.github.io/teste-frontend-estagio-v3/"
                }
              />
            </motion.div>
          </>
        );
      case "todos":
        return (
          <>
            <motion.div
              key="pizzaWeb"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · Pizza Web"
                imgs={imgPizza}
                skill1="Javascript"
                skill2="Css"
                skill3="HTML"
                linkRep={"https://github.com/YanPedro18/Yan--Pizzas"}
                linkSit={"https://yan-pizzas-git-main.yanpedro18.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="almeidaAdvocacia"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Freelance · Almeida Advocacia"
                imgs={imgJobAlmeida}
                skill1="Javascript"
                skill2="Css"
                skill3="HTML"
                linkRep={"https://github.com/YanPedro18/Yan--Pizzas"}
                linkSit={"https://yan-pizzas-git-main.yanpedro18.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="ecommerce-FlagStore"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · ecommerce-FlagStore"
                imgs={imgEcommerce}
                skill1="TypeScript"
                skill2="Styled-Components"
                skill3="Context API"
                linkRep={"https://github.com/YanPedro18/ecommerce-FlagStore"}
                linkSit={"https://ecommerce-flagstore-git-main-yanpedro18.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="yanSongs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · YanSongs"
                imgs={imgYanSongs}
                skill1="React"
                skill2="Vite.js"
                skill3="DBfake"
                linkRep={"https://github.com/YanPedro18/YanSongs-App"}
                linkSit={"https://yansongs-app.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="ensinio"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · Ensinio"
                imgs={imgEnsinio}
                skill1="Axios"
                skill2="Vite.js"
                skill3="Json-Server"
                linkRep={"https://github.com/YanPedro18/Project-Ensinio"}
                linkSit={"https://project-ensinio.vercel.app/"}
              />
            </motion.div>
            <motion.div
              key="aiko"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Freelancer · Multiset"
                imgs={imgMultiset}
                skill1="Wix"
                skill2="Javascript"
                skill3="React"
                linkRep={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7044681406584602624/"
                }
                linkSit={"https://www.multiset.tech/"}
              />
            </motion.div>
            <motion.div
              key="aikos"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Projeto · Aiko"
                imgs={imgAiko}
                skill1="Javascript"
                skill2="Leaflet.Js"
                skill3="Json"
                linkRep={
                  "https://github.com/YanPedro18/teste-frontend-estagio-v3/tree/teste/yan-pedro"
                }
                linkSit={
                  "https://yanpedro18.github.io/teste-frontend-estagio-v3/"
                }
              />
            </motion.div>
            <motion.div
              key="almeidaContabei"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Freelancer · Soluções Contábeis"
                imgs={imgJobContaibeis}
                skill1="Javascript"
                skill2="HTML"
                skill3="CSS"
                linkRep={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7044681406584602624/"
                }
                linkSit={"https://www.multiset.tech/"}
              />
            </motion.div>
          </>
        );
      case "jobs":
        return (
          <>
            <motion.div
              key="almeidaAdvocacia"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Freelancer · Almeida Advocacia"
                imgs={imgJobAlmeida}
                skill1="Javascript"
                skill2="Css"
                skill3="HTML"
                linkRep={"https://github.com/YanPedro18"}
                linkSit={"https://almeidaadvogadosbh.com.br/"}
              />
            </motion.div>
            <motion.div
              key="multiset"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Freelancer · Multiset"
                imgs={imgMultiset}
                skill1="Wix"
                skill2="Javascript"
                skill3="React"
                linkRep={
                  "https://www.linkedin.com/posts/yanpedro18_frontend-freelance-networking-activity-7044681406584602624-NqMD?utm_source=share&utm_medium=member_desktop"
                }
                linkSit={"https://www.multiset.tech/"}
              />
            </motion.div>
            <motion.div
              key="almeidaContabeis"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <CardProjects
                title="Freelancer · Soluções Contábeis"
                imgs={imgJobContaibeis}
                skill1="Javascript"
                skill2="HTML"
                skill3="CSS"
                linkRep={
                  "https://www.linkedin.com/posts/yanpedro18_contabilidade-js-frontend-activity-7042471357363695616-yIaK?utm_source=share&utm_medium=member_desktop"
                }
                linkSit={"https://maissolucoescontabeis.com/"}
              />
            </motion.div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div className={styles.selectItems}>
        <h1
          className={selectedOption === "react" ? styles.selected : ""}
          onClick={() => selectOption("react")}
        >
          React
        </h1>
        <h1
          className={selectedOption === "todos" ? styles.selected : ""}
          onClick={() => selectOption("todos")}
        >
          Todos
        </h1>
        <h1
          className={selectedOption === "jobs" ? styles.selected : ""}
          onClick={() => selectOption("jobs")}
        >
          Jobs
        </h1>
      </div>
      <motion.div
        className={styles.render}
        initial="exit"
        animate="animate"
        exit="initial"
        transition={{ duration: 0.25, ease: customEase, stiffness: 300 }}
      >
        {renderCard()}
      </motion.div>
    </>
  );
}

export default Select;
