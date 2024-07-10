'use client'

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from "react";
import styles from "./styles.module.css"
import { quicksand } from "@/fonts";
import Link from 'next/link';


interface CardComponentProps {
  imgSrc?: string; // Source URL for the image
  title: string; // Title of the card
  text: string; // Text content of the card
  linkUrl: string; // URL for the button
  altText?: string; // Optional alt text for the image
  cardClass?: string;
}

export const TESTCard: React.FC<CardComponentProps> = ({
  imgSrc,
  title,
  text,
  linkUrl,
  altText = "...",
  cardClass = ''
}) => {
  return (
    // <div className={`card m-2 border d-flex justify-content-center ${styles[cardClass]}`}>
    //   <img
    //     src={imgSrc}
    //     className="img-fluid"
    //     alt={altText}
    //     height={100}
    //     width={100}
    //   />
    //   <div className="card-body d-flex flex-column">
    //     <h5 className="card-title">{title}</h5>
    //     <p className={`card-text flex-grow-1 ${quicksand.className}`}>{text}</p>
    //     <a href={linkUrl} className={`btn mt-auto text-white ${styles.cardBtn}`}>
    //       View Project
    //     </a>
    //   </div>
    // </div>
    <Card style={{ width: '' }} className={styles[cardClass]}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className={quicksand.className}>
      {text}
      </Card.Text>
      <Button variant="primary" className={styles.cardBtn}>View Project</Button>
    </Card.Body>
  </Card>
  );
};
