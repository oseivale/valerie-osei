import { quicksand, sacramento } from '@/fonts';
import styles from './styles.module.css'
import Link from 'next/link';

export const HeroBanner = ({ heroData }: any) => {
  return (
    <div
    className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(70,60,95,0.70), rgba(70,60,95,0.70)), url(${heroData?.props?.entries.items[0].fields.pages[0].fields.hero.fields.backgroundImage.fields.file.url})`,
        // backgroundSize: "cover",
        // height: "50vh",
      }}
    >
      <div
      className={styles.heroText}
      >
        <p className={quicksand.className}>
          {
            heroData?.props?.entries.items[0].fields.pages[0].fields.hero.fields
              .content[0].fields.description
          }
        </p>
        <h2 className={quicksand.className}>
          {
            heroData?.props?.entries.items[0].fields.pages[0].fields.hero.fields
              .content[0].fields.header
          }
        </h2>
        <h3 className={quicksand.className}>
          {
            heroData?.props?.entries.items[0].fields.pages[0].fields.hero.fields
              .content[0].fields.subheader
          }
        </h3>
      </div>
      <Link href={'#styles_skills__pqLjH'} id={styles.scrollIndicator}>
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 2048 2048">
            <path fill='white' d="M2048 91L1024 1115L0 91L91 0l933 933L1957 0zM1024 1829l933-933l91 91l-1024 1024L0 987l91-91z"></path>
        </svg>
    </Link>
    </div>
  );
};
