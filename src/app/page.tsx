"use client";

import PageWrapper from "@/components/PageWrapper";
import { Section } from "@/components/Section";
import { loader } from "@/contentful/client";
import { Suspense, useEffect, useState } from "react";
import { resolveComponents } from "@/components/resolveComponents";
import { HeroBanner } from "@/components/HeroBanner";
import LoadingPage from "./loading";
import dynamic from "next/dynamic";
import ImageLoader from "@/components/ImageLoader";

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
  const [pageData, setPageData] = useState<any>();

  useEffect(() => {
    loader().then((res: any) => setPageData(res));
  }, []);

  return (
    <PageWrapper>
      <HeroBanner heroData={pageData} />
      {pageData?.props?.entries.items[0].fields.pages[0].fields.pageSections.map(
        (section: any) => {
          console.log("section----", pageData?.props?.entries.items[0].fields.pages[0].fields);
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
