"use client";

import React from "react";
import { dm_sans, alatsi, quicksand, sacramento } from "@/fonts";
import styles from "./styles.module.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Close, Hamburger } from "@/icons";

interface MainNavigationProps {
  mainNavigationLinks: [];
  siteName: string;
}
const TESTNavbar: React.FC<MainNavigationProps> = ({
  mainNavigationLinks,
  siteName,
}: any) => {
  console.log("mainNavigationLinks", mainNavigationLinks);
  const [open, setOpen] = useState(false);
  return (
    // <Navbar
    //   expand="lg"
    //   className={`${quicksand.className} ${styles.nav}`}
    // >
    //   <Container style={{ maxWidth: "960px", margin: "0 auto" }}>
    //     <Navbar.Brand href="/">{siteName}</Navbar.Brand>
    //     {/* <Link href={'/'}>Test</Link> */}
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         {mainNavigationLinks.map((link: any) => {
    //           return <Nav.Link key={link.sys.id} href={link.fields.hashId}>{link.fields.label}</Nav.Link>;
    //         })}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={`${styles.brand} ${sacramento.className}`}>
          <Link className={styles.brandLink} href={"/"}>
            {siteName}
          </Link>

          <Button
            className={styles.button}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? (
              <Close color={"black"} size={"2.75rem"} />
            ) : (
              <Hamburger color={"black"} size={"2.75rem"} />
            )}
          </Button>
        </div>
        <ul>
          {mainNavigationLinks.map((link: any) => {
            return (
              <Nav.Link
                className={`mx-3 ${quicksand.className} ${styles.navLink}`}
                key={link.sys.id}
                href={link.fields.hashId}
              >
                {link.fields.label}
              </Nav.Link>
            );
          })}
        </ul>
        {/* <div className={styles.mobileToggle}></div> */}
        <Collapse in={open} className={styles.collapseWrapper}>
          <div id="collapse">
            {mainNavigationLinks.map((link: any) => {
              return (
                <div key={link.sys.id} className={styles.linkWrapper}>
                  <Link
                    className={`mx-3 ${quicksand.className}`}
                    href={link.fields.hashId}
                  >
                    {link.fields.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </Collapse>
      </div>
    </nav>
  );
};

export default TESTNavbar;
