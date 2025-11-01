import styles from "./FeatureGrid.module.css";

interface FeatureGridProps {
  data: {
    type: "featureGrid";
    heading: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

export default function FeatureGrid({ data }: FeatureGridProps) {
  return (
    <section aria-labelledby="feature-grid-heading">
      <div className="container">
        <h2 id="feature-grid-heading" className={styles.featureHeading}>
          {data.heading}
        </h2>
        <div className={styles.featureGridContainer}>
          <div className={styles.featureGrid}>
            {data.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
