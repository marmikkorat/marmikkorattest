import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import { certifications } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <SectionTitle
          title="Certifications"
          subtitle="Formal credentials backing a career built on process discipline and quality systems."
        />

        <div className="certificate-grid">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="certificate-card">
                <div className="certificate-image">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </div>

                <div className="certificate-content">
                  <h3>{item.title}</h3>
                  <span>{item.date}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
