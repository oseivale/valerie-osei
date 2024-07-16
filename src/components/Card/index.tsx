"use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
import styles from "./styles.module.css";
import { quicksand } from "@/fonts";
import Link from "next/link";
import Image from "next/image";

interface CardComponentProps {
  imgSrc?: string; // Source URL for the image
  title: string; // Title of the card
  text: string; // Text content of the card
  subheader?: string; // URL for the button
  altText?: string; // Optional alt text for the image
  cardClass?: string;
  ctas?: [];
}

export const TESTCard: React.FC<CardComponentProps> = ({
  imgSrc,
  title,
  text,
  subheader,
  ctas,
  altText = "...",
  cardClass = "",
}) => {
  return (
    <Card style={{ width: "" }} className={styles[cardClass]}>
      <Card.Body className={`d-flex flex-column`}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className={`text-muted text-uppercase ${styles.subtitle} ${quicksand.className}`}>{subheader}</Card.Subtitle>
        <Card.Text className={`flex-grow-1 ${quicksand.className}`}>{text}</Card.Text>
        {ctas?.map((cta: any) => {
          return (
            <Link
            key={cta.sys.id}
              href={cta.fields.externalUrl}
              className={styles.cardBtn}
              target="_blank"
            >
              {cta.fields.label}
            </Link>
          );
        })}
      </Card.Body>
    </Card>
  );
};
