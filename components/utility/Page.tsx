import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React, { ReactChildren } from "react";

const bp = process.env.BASE_PATH || '';

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Sebastian Palomares - Productor BTL & Marketing"
      : `${currentPage} - Sebastian Palomares`
  }`;

  const siteUrl = "https://cofoundy.github.io/portfolio-sebastian-palomares-v2/";
  const ogImage = `${siteUrl}static/profile.jpg`;

  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        <link
          rel="icon"
          type="image/svg+xml"
          href={`${bp}/static/favicon/favicon.svg`}
        />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={ogImage}></meta>
      </Head>

      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
