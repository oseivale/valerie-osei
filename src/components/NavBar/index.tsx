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

interface MainNavigationProps {
  mainNavigationLinks: [];
  siteName: string;
}
const TESTNavbar: React.FC<MainNavigationProps> = ({
  mainNavigationLinks,
  siteName,
}: any) => {
  console.log("mainNavigationLinks", mainNavigationLinks);
  return (
    // <div className={`${quicksand.className} ${styles.nav}`}>
    //   {" "}
    //   {/* Container with max-width for desktop */}
    //   <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    //     <div
    //       className="container-fluid"
    //       style={{ maxWidth: "960px", margin: "0 auto" }}
    //     >
    //       <a className={`navbar-brand`} href="#">
    //         {siteName}
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul
    //           className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.linkWrapper}`}
    //         >
    //           {" "}
    //           {/* Changed from me-auto to ms-auto */}
    //           {mainNavigationLinks.map((link: any) => {
    //             return (
    //               <li key={link.sys.id}>
    //                 <a
    //                   className={`nav-link active`}
    //                   aria-current="page"
    //                   href={link.fields.hashId}
    //                 >
    //                   {link.fields.label}
    //                 </a>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${quicksand.className} ${styles.nav}`}
    >
      <Container style={{ maxWidth: "960px", margin: "0 auto" }}>
        <Navbar.Brand href="/">{siteName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {mainNavigationLinks.map((link: any) => {
              return <Nav.Link key={link.sys.id} href={link.fields.hashId}>{link.fields.label}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TESTNavbar;
