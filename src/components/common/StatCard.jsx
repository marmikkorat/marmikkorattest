import { motion } from "framer-motion";

function StatCard({
  value,
  label,
}) {
  return (
    <motion.div
      className="stat-card"
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
    >
      <h3>{value}</h3>

      <p>{label}</p>
    </motion.div>
  );
}

export default StatCard;
