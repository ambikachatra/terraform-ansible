import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
      Focuses on designing, building, and managing cloud infrastructure (AWS, Azure, GCP, etc.). And
      Ensures scalability, security, and high availability of cloud-based systems.
      Bridges development and operations by automating software delivery and infrastructure management.
      Focuses on CI/CD pipelines, monitoring, configuration management, and collaboration.
      </p>
    </motion.section>
  );
}

export default Summary;
