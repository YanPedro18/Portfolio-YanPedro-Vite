/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import styles from "./CardProfile.module.css";
import photo from "./img/photo.jpeg";
import {
  Download,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

function CardProfile() {
  return (
    <section className={styles.card_flex}>
      <div className={styles.card}>
        <div className={styles.card_border_top}></div>
        <div className={styles.img}>
          <img src={photo} alt="" />
        </div>
        <span>Yan Pedro</span>
        <p className={styles.job}>Desenvolvedor Front-end</p>
        <p>yanflag19@gmail.com | Belo Horizonte </p>
        <aside className={styles.aside}>
          <Link target="_blank" to="https://www.linkedin.com/in/yanpedro18/">
            <LinkedinLogo size={30} />
          </Link>
          <Link
            target="_blank"
            to="https://wa.me/+5531994045385?text=Ol%C3%A1%20Yan,%20gostaria%20de%20conversar%20com%20voc%C3%AA"
          >
            <WhatsappLogo size={30} />
          </Link>
          <Link target="_blank" to="https://github.com/YanPedro18">
            <GithubLogo size={30} />
          </Link>
        </aside>
        <p>&copy; 2023 Yan. Todos os Direitos Reservados</p>
        <button>
          {" "}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/10zJsAKbAhA-cpJn8HUvCra6VxWegfLIm/view?usp=sharing"
            download="https://drive.google.com/file/d/10zJsAKbAhA-cpJn8HUvCra6VxWegfLIm/view?usp=sharing" 
          >
            {" "}
            Currículo
            <Download size={14} />
          </a>
        </button>
      </div>
    </section>
  );
}

export default CardProfile;
