import { sacramento } from "@/fonts";
import Image from "next/image";
import styles from "./styles.module.css";
import { Card } from "../Card";

export function SingleColumn() {
  return (
    <section className={`bg-light ${styles.section}`}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h1 className={` ${sacramento.className}`}>Projects</h1>
        <div className={`card-group mt-5 ${styles.cardGrid}`}>
          <Card
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
          <Card
            cardClass={styles.card__1}
            imgSrc={
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            title={"Afya Collective"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            }
            linkUrl={"#"}
            altText="..."
          />
          <Card
            cardClass={styles.card__2}
            imgSrc={
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            title={"MiDriver"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            }
            linkUrl={"#"}
            altText="..."
          />
          <Card
            cardClass={styles.card__3}
            imgSrc={
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            title={"Vaughan Centre for Autism"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            }
            linkUrl={"#"}
            altText="..."
          />

          <Card
            cardClass={styles.card__5}
            imgSrc={
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            title={"Vaughan Centre for Autism"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            }
            linkUrl={"#"}
            altText="..."
          />

          <Card
            cardClass={styles.card__6}
            imgSrc={
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            title={"Vaughan Centre for Autism"}
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
