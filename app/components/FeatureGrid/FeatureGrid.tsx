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
  if (!data || !data.heading || !data.features || !Array.isArray(data.features) || data.features.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="feature-grid-heading">
      <div className="container">
        <h2 id="feature-grid-heading" className={styles.featureHeading}>
          {data.heading}
        </h2>
        <div className={styles.featureGridContainer}>
          <div className={styles.featureGrid}>
            {data.features.map((feature, index) => {
              // Validate individual feature data
              if (!feature || !feature.title || !feature.description) {
                return null;
              }

              return (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIconWrapper}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      {feature.icon || ""}
                    </span>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                  </div>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
