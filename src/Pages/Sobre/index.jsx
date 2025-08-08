import ScrollReveal from "scrollreveal";
import Header from "../../components/Header";
import CardProfile from "../../components/CardProfile";
import styles from "./Sobre.module.css";
import Accordion from "../../components/Accordion";
import { motion, cubicBezier } from "framer-motion";
import { Router } from "react-router-dom";
import Skills from "../../components/Skills";
import imgReact from "../../assets/img-skills-react.svg";
import imgPostgre from "../../assets/img-postgre.svg";
import imgKafka from "../../assets/img-kafka.svg";
import imgPhp from "../../assets/img-php.svg";
import imgSql from "../../assets/img-mysql.svg";
import imgRabbitmq from "../../assets/img-rabbitmq.svg";
import imgNode from "../../assets/img-node.svg";
import imgJava from "../../assets/img-java.svg";
import imgFigma from "../../assets/Figma-logo.svg";
import imgASPnet from "../../assets/img-aspnet.svg";
import imgCsharp from "../../assets/img-csharp.svg";
import imgSsms from "../../assets/img-ssms.svg";
import Mouse from "../../components/Mouse";
import { useEffect, useRef } from "react";

export const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export const customEase = cubicBezier(0.25, 0.1, 0.25, 1);

const skills = [
  {
    img: imgReact,
    text: "React",
    number: 81,
  },
  {
    img: imgPostgre,
    text: "PostgreSQL",
    number: 55,
  },
  {
    img: imgSql,
    text: "MySql",
    number: 65,
  },
  {
    img: imgASPnet,
    text: "ASP.NET Core MVC",
    number: 65,
  },
  {
    img: imgCsharp,
    text: "C#",
    number: 64,
  },
  {
    img: imgSsms,
    text: "SSMS + SqlServer",
    number: 68,
  },
  {
    img: imgNode,
    text: "Node.Js",
    number: 42,
  },
  {
    img: imgFigma,
    text: "Figma",
    number: 74,
  },
  {
    img: imgKafka,
    text: "Kafka",
    number: 20,
  },
  {
    img: imgRabbitmq,
    text: "RabbitMQ",
    number: 29,
  },
  {
    img: imgPhp,
    text: "PHP",
    number: 35,
  },
  {
    img: imgJava,
    text: "Java",
    number: 33,
  },

];

const accordion = [
    {
    id: 1,
    title: "Analista Desenvolvedor FullStack - Reply / Hermes Reply",
    date: "05/04/2024 - 01/08/2025",
    job: "Analista Desenvolvedor FullStack",
    text: "Durante minha atuação como desenvolvedor FullStack na Reply/Hermes Reply, participei de projetos estratégicos envolvendo inteligência artificial, visão computacional e integrações de alto desempenho. Entre os principais trabalhos, destaque para o NexVision ML, solução de inspeção de baterias baseada em IA utilizando YOLOv11, Python, NVIDIA Jetson e AWS SageMaker AI, integrada a API .NET Core MVC 8 & mensageria RabbitMQ com MQTT e Kafka, front-end React + TypeScript. Também atuei no Callidus GEN(AI) Hub, desenvolvendo um hub de serviços de IA com integrações OpenAI, AWS Bedrock e Twilio para chatbot no WhatsApp, incluindo fine-tuning de modelos. Além disso, fui responsável por implementar APIs REST seguindo princípios de Clean Architecture e SOLID com Design Pattern, BDD, integrar modelos de machine learning em sistemas produtivos, realizar code reviews, testes unitários(Copilot) e dar suporte a estagiários. Trabalhei com metodologias ágeis, utilizando SCRUM, Jira, Azure DevOps e Git/Docker para gestão e versionamento de código e container/imagem.",
    skill1: " C# · .NET Core MVC 8/9 · ASP.NET MVC · React · TypeScript ",
    skill2: " RabbitMQ · YOLOv11 · Python · Azure DevOps · Docker"
  },
  {
    id: 2,
    title: "Estagiário em Desenvolvimento de Software FullStack - Reply / Hermes Reply",
    date: "04/12/2023 - (até o momento)",
    job: "Estagiário",
    text: "Durante minha passagem na Reply/Hermes Reply, contribuí para o desenvolvimento do InfoCenter, uma ferramenta crucial da Petronas para controle de estoque e operações internas. Também participei de testes na Stellantis no sistema echange, em 5 países. Minhas responsabilidades incluíram desenvolvimento de funcionalidades no InfoCenter, uso avançado de ASP.NET Core MVC e .NET Framework Core 8, implementação de JavaScript, jQuery e React para interfaces dinâmicas, gerenciamento eficiente com Azure DevOps e Git, além de correção de bugs e testes no sistema echange.",
    skill1: "ASP.NET Core MVC · .NET Core 8 · JavaScript",
    skill2: " jQuery · React · Azure DevOps · Jira · Git"
  },
  {
    
    id: 3,
    title: "Estagiário em Desenvolvimento de Software Front-end - SMPU/DPLM",
    date: "2023/07 - 2023/12",
    job: "Estagiário",
    text: "Atuei como estagiário colaborando no desenvolvimento de sistemas inovadores utilizando planilhas, JavaScript, Google Sheets, Appscript, React, HTML, CSS, Materialize e Git para automação e otimização de processos internos na SMPU/DPLM. Minhas principais responsabilidades incluíram o uso avançado de JavaScript e Google Sheets para criar funcionalidades dinâmicas e interativas, bem como contribuições ativas no desenvolvimento front-end com React, HTML e CSS para interfaces atraentes e intuitivas. Além disso, realizei correção de bugs e implementação de novas features.",
    skill1: "React · AppScript",
    skill2: "HTML · Materialize",
  },
  {
    id: 4,
    title: "Estagiário HelpDesk - CGE",
    date: "2022/10 - 2023/06",
    job: "Estagiário",
    text: "Responsável pela área de suporte necessário a infraestrutura de rede e aos funcionários, assistência ao desenvolvimento de sites, Joomla para criação e manutenção de sistemas, PHP, JavaScript, manutenção de maquinas, Active Directory, Office 365, proxys, instalação de softwares.",
    skill1: "Active Directory",
    skill2: "Joomla · PHP",
  },
  {
    id: 5,
    title: "Pós-graduação em Engenharia de Software - PUC Minas",
    date: "2024/07 - 2025/12 (em andamento)",
    job: "Pós-graduando",
    text: "Pós-graduação Lato Sensu voltada para o desenvolvimento e gestão de software, abordando desde análise e modelagem de sistemas até práticas avançadas de arquitetura e qualidade. Disciplinas incluem Engenharia de Requisitos, Arquitetura de Software, DevOps, Cloud Computing, Integração Contínua, Microserviços, Segurança da Informação e Inteligência Artificial aplicada. Foco em metodologias ágeis, padrões de projeto e práticas de desenvolvimento sustentável.",
    skill1: "Arquitetura de Software · DevOps · FinOps",
    skill2: "Microserviços & Cloud Computing AWS & Azure",
  },
{
  id: 6,
  title: "Análise e Desenvolvimento de Sistemas - Una",
  date: "2022/02 - 2024/08",
  job: "Graduado",
  text: "Ensino Superior concluído em Análise e Desenvolvimento de Sistemas. Competências adquiridas: UML (Linguagem de Modelagem Unificada) · MVC · Java · NetBeans · Banco de Dados Oracle · MySQL · Node.js · Express.js · React/Angular · PhpMyAdmin · PHP · JavaScript · TDD · BDD · Scrum · Kanban · métodos e técnicas de engenharia de software.",
  skill1: "Java · Angular",
  skill2: "MySQL & UML",
}

];

function Sobre() {
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(skillsContainerRef.current.children, {
      container: skillsContainerRef.current.parentNode,
      origin: "top",
      distance: "-2px",
      interval: 240,
      delay: 200,
      opacity: 0,
      duration: 800,
      easing: "cubic-bezier(0.6, 0.2, 0.1, 30)",
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        sr.reveal(skillsContainerRef.current.children, {
          reset: true, // Redefine as animações
          container: skillsContainerRef.current.parentNode,
          origin: "top",
          distance: "-2px",
          interval: 240,
          delay: 200,
          opacity: 0,
          duration: 800,
          easing: "cubic-bezier(0.6, 0.2, 0.1, 30)",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: customEase, stiffness: 300 }}
      >
        <section
          className={styles.section_02}
          key={Router.pathname}
          mode={"wait"}
        >
          <div className={styles.sobre_container}>
            <div className={styles.sobre_left}>
              <CardProfile />
            </div>
            <div className={styles.sobre_right}>
              <h1>
                Educação & <span>Experiências</span>
              </h1>
              {accordion.map((accordion) => {
                return (
                  <Accordion
                    key={accordion.id}
                    title={accordion.title}
                    date={accordion.date}
                    job={accordion.job}
                    text={accordion.text}
                    skills1={accordion.skill1}
                    skills2={accordion.skill2}
                  />
                );
              })}
              <Mouse />
              <section className={styles.section_02_skills}>
                <h1>
                  {" "}
                  Hard <strong>Skills</strong>
                </h1>
                <div className={styles.skills_flex} ref={skillsContainerRef}>
                  {skills.map((skill, index) => (
                    <Skills
                      key={index}
                      imgs={skill.img}
                      text={skill.text}
                      number={skill.number}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Sobre;
