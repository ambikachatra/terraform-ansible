import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'XXXXXXXXXX',
    duration: 'Feb 2025 – May 2025',
    company: 'XXXXXXXX',
    description:
      'XXXXXXXXXX',
    responsibilities:
      'XXXXXXXXX'
  },
  {
    
    duration: 'July 2024 – Nov 2024',
    company: 'XXXXXXXX',
    description:
      'XXXXXXXXXX',
   {
    
    duration: 'July 2024 – Nov 2024',
    company: 'XXXXXXXX',
    description:
      'XXXXXXXXXX',
    responsibilities:
      'XXXXXXXXXX' 
  },
  {
    title: 'XXXXXXXXX',
    duration: 'Mar 2024 – Jun 2024',
    company: 'XXXXXXXXX',
    description:
{
    
    duration: 'July 2024 – Nov 2024',
    company: 'XXXXXXXX',
    description:
      'XXXXXXXXXX',
    responsibilities:
      'XXXXXXXXXX' 
  },
  {
    title: 'XXXXXXXXX',
    duration: 'Mar 2024 – Jun 2024',
    company: 'XXXXXXXXX',
    description:
responsibilities:
      'XXXXXXXXXX' 
  },
  {
    title: 'XXXXXXXXX',
    duration: 'Mar 2024 – Jun 2024',
    company: 'XXXXXXXXX',
    description:
      'XXXXXXXXXXX',
    responsibilities:
      'XXXXXXXXXX'
  },
   {
    title: 'XXXXXXXXX',
    duration: 'Mar 2024 – Jun 2024',
    company: 'XXXXXXXX',
    description:
      'XXXXXXX',
    responsibilities:
      'XXXXXXX'
  },
];
/*  u can add more projects after line 41 or else u want to delete from { to } u need to delete*/
function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>{project.company} • {project.duration}</small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
