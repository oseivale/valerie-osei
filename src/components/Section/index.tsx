'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { alatsi, quicksand, sacramento } from "@/fonts";
import styles from "./styles.module.css";
import ProgressBar from "../ProgressBar";

export function Section({ sectionHeader, rowReverse, children, hashId }: any) {
  return (
    <section className={`py-5 ${styles.section}`}  id={styles[hashId]}>
      <h1 className={`${sacramento.className} ${rowReverse ? styles.textReverse : ''}`} style={{maxWidth: '960px', margin: '1rem auto 2rem' }}>{sectionHeader}</h1>
      <div className={`${styles.contentWrapper} ${styles.cardGrid} ${rowReverse ? styles.rowReverse : ''}`} style={{maxWidth: '960px', margin: '0 auto'}}>
       {children}
      </div>
    </section>
  );
}
