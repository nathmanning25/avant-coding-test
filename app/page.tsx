import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import FeatureGrid from "./components/FeatureGrid";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
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
            <Image
              src="/images/avant-logo.svg"
              alt="Avant Mutual Logo"
              width={150}
              height={50}
              className={styles.headerLogo}
            />
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

      {pageData.sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={`${section.type}-${index}`} data={section} />;
          case "textBlock":
            return <TextBlock key={`${section.type}-${index}`} data={section} />;
          case "featureGrid":
            return <FeatureGrid key={`${section.type}-${index}`} data={section} />;
          case "testimonial":
            return <Testimonials key={`${section.type}-${index}`} data={section} />;
          case "ctaBanner":
            return <CtaBanner key={`${section.type}-${index}`} data={section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
