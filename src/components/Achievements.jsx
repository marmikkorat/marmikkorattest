import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <SectionTitle
          title="Achievements"
          subtitle="Recognition earned through consistent operational excellence and continuous improvement."
        />

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="achievement-card">
                <div className="achievement-image">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </div>

                <div className="achievement-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
