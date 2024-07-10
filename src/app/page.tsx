"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { alatsi, quicksand, sacramento } from "@/fonts";
import { Section } from "@/components/Section";
import { SingleColumn } from "@/components/SingleColumn";
import ProgressBar from "@/components/ProgressBar";
import { Download, Email } from "@/icons";
import { loader } from "@/contentful/client";
import { useEffect, useState } from "react";
import { resolveComponents } from "@/components/resolveComponents";

/*
Skills

HTML, 
CSS, 
JavaScript
Next.js
Typescript
GraphQL
REST APIs
Node.js

Certifications
Bitmaker General Assembly
Klaviyo Developer Certficate

Projects
MiDriver
Kinetic Sand International
Smaller Netlify Projects
Vaughan Centre for Autism
Afya Collective: https://afyacollective.ca/

placeholder: imgSrc={"https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"}

*/

export default function Home() {
  const [pageData, setPageData] = useState();

  useEffect(() => {
    loader().then((res: any) => setPageData(res));
  }, []);

  console.log(
    "home page data---",
    pageData?.props?.entries.items[0].fields.pages[0].fields.pageSections
  );

  return (
    <PageWrapper>
      {pageData?.props?.entries.items[0].fields.pages[0].fields.pageSections.map(
        (section: any) => {
          console.log("section----", section);
          return (
            <Section
              key={section.sys.id}
              sectionHeader={section.fields.sectionHeader}
              hashId={section.fields.hashId}
            >
              {section.fields.content.map((entry: any) => {
                return resolveComponents(entry.sys.contentType.sys.id, entry);
              })}
            </Section>
          );
        }
      )}
    </PageWrapper>
  );
}
