import { Link } from "react-router-dom";

import styles from "./CardProjects.module.css";
import { Card } from "../../Style";
import {
  GithubLogo,
  LinkSimpleHorizontal,
} from "@phosphor-icons/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CardProjects({ title, imgs, skill1, skill2, skill3, linkRep, linkSit }) {
  const [isOpen, setIsOpen] = useState(false);

  function onHover() {
    setIsOpen(!isOpen);
  }
  return (
    <Card>
        <div className={styles.section_03_flex}>
          <div className={styles.card}>
            <p className={styles.text_body}>{title}</p>
            <img
              onMouseOver={onHover}
              className={isOpen ? styles.img : "imghover"}
              srcSet={imgs}
              alt=""
            />
            {!isOpen && (
              <ul className={styles.skill_items}>
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
              </ul>
            )}
            <div className={styles.card_items}>
              <Link to={linkRep} target="_blank" className={styles.item_1}>
                {" "}
                <abbr title="Repositorio">
                  <GithubLogo size={32} />
                </abbr>{" "}
              </Link>
              <Link to={linkSit} target="_blank" className={styles.item_2}>
                {" "}
                <abbr title="Site">
                  <LinkSimpleHorizontal size={32} />
                </abbr>{" "}
              </Link>
            </div>
          </div>
        </div>

    </Card>
  );
}

export default CardProjects;
