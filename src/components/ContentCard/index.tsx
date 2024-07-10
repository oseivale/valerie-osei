import Image from "next/image";
import styles from "./styles.module.css";
import { Card } from "../Card";
import { quicksand } from "@/fonts";
import Link from "next/link";
import { Email } from "@/icons";

const ContentCard = ({
  header,
  subheader,
  image,
  ctas,
  description,
  cardClass,
}: any) => {
  console.log("iiiii", image);
  if (
    image?.fields?.file?.url &&
    !header &&
    !subheader &&
    !ctas &&
    !description
  ) {
    return (
      <div className={styles.contentCard}>
        <Image
          className={styles.imageStyles}
          src={`https:${image?.fields?.file?.url}`}
          alt={""}
          height={image?.fields?.file?.details?.image?.height}
          width={image?.fields?.file?.details?.image.width}
        />
      </div>
    );
  }

  if (!image) {
    return (
      <div className={`${styles[cardClass]} ${styles.contentCard}`}>
        <h1 className="card-title pt-5">{header}</h1>
        <p className={`card-text flex-grow-1 ${quicksand.className}`}>
          {subheader}
        </p>
        <Link href={"mailto:valerie.osei@gmail.com"} className={`btn mt-auto text-white ${styles.cardBtn}`}>
          {description} <Email color={'white'} size={'1.5rem'} />
        </Link>
      </div>
    );
  }
  return (
    <Card
      imgSrc={`https:${image?.fields?.file?.url}`}
      title={header}
      text={description}
      linkUrl={"#"}
      altText="..."
      cardClass={cardClass}
    />
  );
};

export default ContentCard;
