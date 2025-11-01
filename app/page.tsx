import Image from "next/image";
import Link from "next/link";
import { pageData } from "./data/mock-data";

import styles from "./page.module.css";

export default function Home() {
  {
    /*******
     *
     * Example of using real API endpoint
     * we would have to change the function to async
     * and uncomment the fetchPageData import
     *
     * const pageData = await fetchPageData();
     *
     *******/
  }
  return (
    <main>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link href="/" aria-label="Go to Avant Mutual homepage">
            <Image src="/images/avant-logo.svg" alt="Avant Mutual Logo" width={150} height={50} />
          </Link>
          <h1 className={styles.title}>{pageData.title}</h1>
        </div>
      </div>

      {/******* Render Sections:
       * Hero
       * TextBlock
       * FeatureGrid
       * Testimonial
       * CtaBanner
       * *******/}

      {/*
         {pageData.sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} data={section} />;
          case "textBlock":
            return <TextBlock key={index} data={section} />;
          case "featureGrid":
            return <FeatureGrid key={index} data={section} />;
          case "testimonial":
            return <Testimonials key={index} data={section} />;
          case "ctaBanner":
            return <CtaBanner key={index} data={section} />;
          default:
            return null;
        }
      })}
       */}
    </main>
  );
}
