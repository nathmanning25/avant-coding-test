import styles from "./TextBlock.module.css";

interface TextBlockProps {
  data: {
    type: "textBlock";
    heading: string;
    body: string;
  };
}

export default function TextBlock({ data }: TextBlockProps) {
  return (
    <section className={styles.textBlockSection} aria-labelledby="textblock-heading">
      <div className="container">
        <h2 className={styles.textBlockHeading} id="textblock-heading">
          {data.heading}
        </h2>
        <p className={styles.textBlockBody}>{data.body}</p>
      </div>
    </section>
  );
}
