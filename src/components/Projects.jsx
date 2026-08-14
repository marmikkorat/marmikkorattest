import { motion } from "framer-motion";
import { HiOutlineChartSquareBar, HiOutlineExternalLink } from "react-icons/hi";
import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import Button from "./common/Button";
import ProjectGallery from "./common/ProjectGallery";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Analytics tools built to give leadership real-time visibility into manufacturing performance."
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="project-card">
                <div className="project-grid">
                  <div className="project-image">
                    {project.images && project.images.length > 0 ? (
                      <ProjectGallery
                        images={project.images}
                        title={project.title}
                      />
                    ) : (
                      <div className="icon-tile project-image-placeholder">
                        <HiOutlineChartSquareBar size={56} />
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-features">
                      {project.features.map((feature) => (
                        <div className="feature" key={feature}>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <div className="project-buttons">
                        <Button
                          href={project.liveUrl}
                          target="_blank"
                          variant="primary"
                        >
                          <HiOutlineExternalLink size={18} />
                          Live Demo
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
