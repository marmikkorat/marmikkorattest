import { motion } from "framer-motion";
import { profile, stats } from "../data/portfolioData";
import Button from "./common/Button";
import StatCard from "./common/StatCard";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-blur hero-blur-left"></div>
      <div className="hero-blur hero-blur-right"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">
            Manufacturing Operations Leader
          </div>

          <h1>{profile.name}</h1>

          <h2 className="hero-role">
            {profile.designation}
          </h2>

          <p className="hero-headline">
            {profile.headline}
          </p>

          <div className="hero-summary">
            {profile.summary.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <div className="hero-buttons">
            <Button
              href={profile.resume}
              target="_blank"
              variant="primary"
            >
              Download Resume
            </Button>

            <Button
              href={profile.linkedin}
              target="_blank"
              variant="outline"
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image float">
            <img
              src={profile.image}
              alt={profile.name}
            />
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="hero-stats">
          {stats.map((item) => (
            <StatCard
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
