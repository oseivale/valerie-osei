import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { alatsi } from "@/fonts";
import TESTNavbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { loader } from "@/contentful/client";
import dynamic from "next/dynamic";
import { LoadingProvider } from "../context/LoadingContext";
import Spinner from "../components/Spinner";

import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import LoadingPage from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valerie Osei - Portfolio",
  description: "My personal brand.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = await loader();

  // const TESTNavbar = dynamic(() => import("@/components/NavBar"), { ssr: false, loading: () => <LoadingPage /> })
  const TESTNavbar: any = dynamic(
    () => {
      return new Promise<any>((resolve) => {
        setTimeout(() => resolve(import("@/components/NavBar")), 3000); // 2 seconds delay
      });
    },
    {
      loading: () => <LoadingPage />,
    }
  );
  const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })
 

  console.log("page data---", pageData.props.entries.items[0].fields);
  // Main Navigation Data:
  const mainNavigationLinks =
    pageData.props.entries.items[0].fields.mainNavigation.fields
      .navigationLinks;
  const siteName =
    pageData.props.entries.items[0].fields.mainNavigation.fields.siteName;

  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alatsi&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className={alatsi.className}>
        <TESTNavbar
          mainNavigationLinks={mainNavigationLinks}
          siteName={siteName}
        />
        <main>{children}</main>
        <Footer footerData={pageData.props.entries.items[0].fields.footer} />
      </body>
    </html>
  );
}
