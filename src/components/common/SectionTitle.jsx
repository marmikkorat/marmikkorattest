import { motion } from "framer-motion";

function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
    >
      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
