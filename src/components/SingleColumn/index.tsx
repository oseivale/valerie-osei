import { sacramento } from "@/fonts";
import Image from "next/image";
import styles from "./styles.module.css";
import { TESTCard } from "../Card";

export function SingleColumn() {
  return (
    <section className={`bg-light ${styles.section}`}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h1 className={` ${sacramento.className}`}>Projects</h1>
        <div className={`card-group mt-5 ${styles.cardGrid}`}>
          <TESTCard
            cardClass={styles.card__0}
            imgSrc={
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            title={"Kinetic Sand International"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            }
            linkUrl={"#"}
            altText="..."
          />
     
        </div>
      </div>
    </section>
  );
}
