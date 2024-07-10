'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { quicksand } from "@/fonts";
import { Email, Instagram, LinkedIn } from "@/icons";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";


interface FooterProps {
  footerData: any;
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="container p-2 pt-4"
        style={{ maxWidth: "960px", margin: "0 auto" }}
      >
        <div className="row">
          {/* <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img src={logoSrc} alt="Logo" style={{ maxWidth: "100px" }} />
          </div> */}

          <div className="col-lg-12 col-md-12 mb-2 mb-md-0">
            {/* <h5 className="text-uppercase">Links</h5> */}
            <ul className="list-unstyled mb-0 text-center">
              {footerData.fields.footerLinks.map((link: any, index: any) => (
                <li key={link.sys.id} className={styles.footerLink}>
                  <a
                    href={link.fields.hashId}
                    className={`text-dark ${quicksand.className}`}
                    style={{ textDecoration: "none" }}
                  >
                    {link.fields.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={`text-center p-3 ${quicksand.className}`}>
        <div className={styles.socialIcons}>
          <Link href={footerData.fields.socialIcons[0].fields.externalUrl}>
            <LinkedIn size={"30px"} color={"text-dark"} />
          </Link>
          <Link href={footerData.fields.socialIcons[1].fields.externalUrl}>
            <Instagram size={"35px"} color={"text-dark"} />
          </Link>
        </div>

        {`© ${new Date().getFullYear()} ${footerData.fields.copyright}`}
      </div>
    </footer>
  );
};

export default Footer;
