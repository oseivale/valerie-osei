'use client'

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { alatsi, quicksand } from "@/fonts";
import React from "react";
import { Download } from "@/icons";
import Link from "next/link";
import styles from './styles.module.css'

interface CTextWithCTAProps {
  description: string;
  ctas: any; // Assuming alatsiClass is similar
}

const TextWithCTA: React.FC<CTextWithCTAProps> = ({ description, ctas }) => {
  console.log("ctas", ctas);
  return (
    <div className={`${styles.textWithCTA} ${quicksand.className}`}>
      <p>{description}</p>
      {ctas?.map((cta: any) => {
        return (
          <Link
            key={cta.sys.id}
            href={cta.fields.pdfFile.fields.file.url}
            target={"_blank"}
            type="button"
            className={`btn text-white ${alatsi.className}`}
            style={{ backgroundColor: "#BAA6D4" }}
          >
            {cta.fields.label} <Download color="white" size="2rem" />
          </Link>
        );
      })}
    </div>
  );
};

export default TextWithCTA;
