import Image from "next/image";
import ButtonCta from "../Button/Button";
import styles from "./Hero.module.css";

interface HeroProps {
  data: {
    type: "hero";
    heading: string;
    subheading: string;
    image: string;
    cta: { text: string; link: string };
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.imageContainer}>
        <Image src={data.image} alt={data.heading} fill className={styles.heroImage} sizes="100vw" priority />

        <div className="container">
          <div className={styles.heroContent}>
            <h2 className={styles.heroHeading} id="hero-heading">
              {data.heading}
            </h2>
            <p className={styles.heroSubheading}>{data.subheading}</p>
            <ButtonCta link={data.cta.link} text={data.cta.text} />
          </div>
        </div>
      </div>
    </section>
  );
}
