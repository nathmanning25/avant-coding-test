import ButtonCta from "../Button/Button";
import styles from "./CtaBanner.module.css";

interface CtaBannerProps {
  data: {
    type: "ctaBanner";
    heading: string;
    buttonText: string;
    link: string;
  };
}

export default function CtaBanner({ data }: CtaBannerProps) {
  return (
    <section className={styles.ctaBanner} aria-labelledby="cta-heading">
      <div className={`container ${styles.content}`}>
        <h2 className={styles.heading} id="cta-heading">
          {data.heading}
        </h2>
        <ButtonCta link={data.link} text={data.buttonText} variant="secondary" />
      </div>
    </section>
  );
}
