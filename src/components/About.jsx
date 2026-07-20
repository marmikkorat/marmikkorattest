import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import { profile } from "../data/portfolioData";

function About() {
  return (
    <section id="about">

      <div className="container">

        <SectionTitle
          title="About Me"
          subtitle="Manufacturing Operations Leader with extensive experience in solar module manufacturing, production excellence, process optimization, Lean implementation and Greenfield project execution."
        />

        <div className="about-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="about-heading">
              Driving Manufacturing Excellence
            </h3>

            <p>
              {profile.about}
            </p>

            <p>
              Throughout my career I have successfully led large manufacturing
              teams, improved operational efficiency, optimized production
              planning, strengthened quality systems and supported multi-GW
              manufacturing expansion projects.
            </p>

            <p>
              My leadership philosophy focuses on building high-performance
              teams while maintaining world-class standards in Safety, Quality,
              Delivery, Cost and People Development.
            </p>

          </motion.div>

          <motion.div
            className="about-strengths"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <Card className="about-card">

              <h4>Manufacturing Leadership</h4>

              <p>
                Leading high-volume solar manufacturing operations with strong
                focus on productivity, quality improvement and operational
                excellence.
              </p>

            </Card>

            <Card className="about-card">

              <h4>Lean Manufacturing</h4>

              <p>
                Lean, Six Sigma, TPM, OEE improvement, Kaizen, Root Cause
                Analysis, CAPA, SPC, FMEA and continuous improvement.
              </p>

            </Card>

            <Card className="about-card">

              <h4>Greenfield Projects</h4>

              <p>
                Experience supporting installation, commissioning, production
                ramp-up, capacity expansion and process stabilization of GW
                scale manufacturing lines.
              </p>

            </Card>

            <Card className="about-card">

              <h4>People Development</h4>

              <p>
                Building high-performance manufacturing teams through coaching,
                mentoring, structured problem solving and leadership
                development.
              </p>

            </Card>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;
