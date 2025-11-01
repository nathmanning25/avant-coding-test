import styles from "./Testimonials.module.css";

interface TestimonialsProps {
  data: {
    type: "testimonial";
    heading: string;
    testimonials: Array<{
      name: string;
      company: string;
      quote: string;
    }>;
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  if (
    !data ||
    !data.heading ||
    !data.testimonials ||
    !Array.isArray(data.testimonials) ||
    data.testimonials.length === 0
  ) {
    return null;
  }

  return (
    <section className={styles.testimonialSection} aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 className={styles.testimonialHeading} id="testimonials-heading">
          {data.heading}
        </h2>
        <div className={styles.testimonialsGrid}>
          {data.testimonials.map((testimonial, index) => {
            if (!testimonial || !testimonial.name || !testimonial.company || !testimonial.quote) {
              return null;
            }

            const authorId = `testimonial-author-${index}`;
            return (
              <div key={index} className={styles.testimonialItem} role="group" aria-labelledby={authorId}>
                <blockquote className={styles.testimonialQuote}>&#x0022;{testimonial.quote}</blockquote>
                <p className={styles.testimonialAuthor} id={authorId}>
                  —
                  <cite>
                    {testimonial.name}, {testimonial.company}
                  </cite>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
