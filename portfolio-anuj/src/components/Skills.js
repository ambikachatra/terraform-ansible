import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const skillCategories = {
  'Programming Languages': ['Java', 'Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS'],
  'Databases': ['PostgreSQL',  'AWS RDS'],
  'Cloud Platforms': ['AWS (EC2, S3, Lambda)', 'Custom VPC', 'Load Balancer'],
  'Operating Systems': ['Linux (Ubuntu)', 'Windows'],
  'Version Control': ['Git', 'GitHub'],
  'DevOps & Automation': [
    'Docker',
    'Kubernetes',
    'Jenkins CI/CD',
    'Ansible',
    'Terraform'
  ],
  'Monitoring & Observability': [
    'Prometheus',
    'Grafana',
   
  ],
  'Scripting': ['Shell Scripting', 'Bash']
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="container skills-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Skills</h2>

      {Object.entries(skillCategories).map(([category, skills], index) => (
        <div key={index} className="mb-4">
          <h5 className="text-info mb-3">{category}</h5>
          <div className="skills-wrapper d-flex flex-wrap justify-content-center gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="skill-badge"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}
