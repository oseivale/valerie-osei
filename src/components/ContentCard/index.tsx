"use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Image from "next/image";
import styles from "./styles.module.css";
import { TESTCard } from "../Card";
import { quicksand } from "@/fonts";
import Link from "next/link";
import { Email } from "@/icons";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import contentfulLoader from "../../../utils/contentfulLoader";


// const ContentCard = ({
//   header,
//   subheader,
//   image,
//   ctas,
//   description,
//   cardClass,
// }: any) => {
//   console.log("iiiii", image);

//   const [isLoading, setIsLoading] = useState(true);


//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   if (
//     image?.fields?.file?.url &&
//     !header &&
//     !subheader &&
//     !ctas &&
//     !description
//   ) {
//     console.log('isLoading', isLoading)



//     return (
//       <div className={styles.contentCard}>
        
//          {isLoading && (
//         <div className="loading-spinner">
//           <Spinner />
//         </div>
//       )}
        
//         <Image
//          onLoad={() => setIsLoading(false)}
//          style={{ display: isLoading ? 'none' : 'block' }}
//           className={styles.imageStyles}
//           src={`https:${image?.fields?.file?.url}`}
//           alt={""}
//           height={image?.fields?.file?.details?.image?.height}
//           width={image?.fields?.file?.details?.image.width}
//         />
//       </div>
//     );
//   }

//   if (!image) {
//     return (
//       <div className={`${styles[cardClass]} ${styles.contentCard}`}>
//         <h1 className="card-title pt-5">{header}</h1>
//         <p className={`card-text flex-grow-1 ${quicksand.className}`}>
//           {subheader}
//         </p>
//         <Link
//           href={"mailto:valerie.osei@gmail.com"}
//           className={`mt-auto text-white ${styles.cardBtn}`}
//         >
//           {description} <Email color={"white"} size={"1.5rem"} />
//         </Link>
//       </div>
//     );
//   }
//   //   return (

//   return (
//     <TESTCard
//       imgSrc={`https:${image?.fields?.file?.url}`}
//       title={header}
//       text={description}
//       ctas={ctas}
//       subheader={subheader}
//       altText="..."
//       cardClass={cardClass}
//     />
//   );
// };

const ContentCard = ({
  header,
  subheader,
  image,
  ctas,
  description,
  cardClass,
}: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  // };

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (image?.fields?.file?.url) {
      const img = new window.Image();
      img.src = `https:${image.fields.file.url}`;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsLoaded(false);
    }
  }, [image]);

  const handleLoadingComplete = () => {
    console.log('Image loaded');
    setIsLoaded(true);
    setImageLoaded(true);
  };

  if (
    image?.fields?.file?.url &&
    !header &&
    !subheader &&
    !ctas &&
    !description
  ) {
    console.log('Rendering image block, loading state:', isLoaded);

    return (
      // <div className={styles.contentCard}>
   
      //    <Image
      //     style={{ display: isLoading ? 'none' : 'block' }}
      //     className={styles.imageStyles}
      //     src={`https:${image?.fields?.file?.url}`}
      //     alt=""
      //     height={image?.fields?.file?.details?.image?.height}
      //     width={image?.fields?.file?.details?.image?.width}
      //     onLoad={handleLoadingComplete}

      //   />
      
       
      //     {isLoading && (
      //     <div className={styles.loadingSpinner}>
      //       <Spinner />
      //     </div>
      //   )}
      // </div>
      <div className={styles.contentCard}>
      {!isLoaded && (
        <div className={styles.loadingSpinner}>
          <Spinner />
        </div>
      )}
      <Image
        src={`https:${image?.fields?.file?.url}`}
        alt=""
        height={image?.fields?.file?.details?.image?.height}
        width={image?.fields?.file?.details?.image?.width}
        style={{ display: !isLoaded ? 'none' : 'block' }}
        className={styles.imageStyles}
        loader={contentfulLoader}
      />
    </div>
    );
  }

  if (!image) {
    return (
      <div className={`${styles[cardClass]} ${styles.contentCard}`}>
        <h1 className="card-title pt-5">{header}</h1>
        <p className={`card-text flex-grow-1 ${styles.quicksand}`}>
          {subheader}
        </p>
        <Link
          href={"mailto:valerie.osei@gmail.com"}
          className={`mt-auto text-white ${styles.cardBtn}`}
        >
          {description} <Email color={"white"} size={"1.5rem"} />
        </Link>
      </div>
    );
  }

  return (
    <TESTCard
      imgSrc={`https:${image?.fields?.file?.url}`}
      title={header}
      text={description}
      ctas={ctas}
      subheader={subheader}
      altText="..."
      cardClass={cardClass}
    />
  );
};

export default ContentCard;
