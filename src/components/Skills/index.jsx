import styles from "./Skills.module.css"
import { useState, useEffect} from "react";

// eslint-disable-next-line react/prop-types
function Skills({imgs, text, number}) {


    const [count, setCount] = useState(0)

    useEffect(() => {
        const finalValue = parseInt(number, 10);
    
        if (isNaN(finalValue)) {
          // Define um valor padrão para o contador caso não seja um número válido
          setCount(0);
          return;
        }
    
        const increment = Math.ceil(finalValue / 100);
        let currentCount = 0;
    
        const interval = setInterval(() => {
          if (currentCount >= finalValue) {
            setCount(finalValue);
            clearInterval(interval);
          } else {
            currentCount += increment;
            setCount(currentCount);
          }
        }, 35);
        return () => {
          clearInterval(interval);
        };
      }, [number]);
    

  return (
    <section className={styles.skills_container}> 
    <div className={styles.skills}>
       <img src={imgs} alt="" />
       <strong>{count}%</strong>
    </div>
        <article>
            <p>{text}</p>
        </article>
    </section>
  )
}

export default Skills;