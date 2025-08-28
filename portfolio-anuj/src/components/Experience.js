import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../App.css';

const experiences = [
  {
    role: 'DevOps Engineer/Cloud Engineer Trainee',
    company: 'MicroDegree',
    duration: 'September 2024 - November 2024',
    description:
      'Gained hands-on experience with AWS, Ansible, Docker, Git, Kubernetes, Jenkins, Terraform, and Shell Scripting through practical labs. ' +
      'Built and automated infrastructure using Terraform and Ansible. ' +
      'Containerized applications with Docker and orchestrated deployments using Kubernetes. ' +
      'Implemented CI/CD pipelines with Jenkins and Git for automated builds and deployments , ' +
      'Developed shell scripts for automation and system administration tasks.'
  },
  {
    role: 'Cloud Trainee',
    company: 'Vinva Technologies Pvt Ltd',
    duration: 'August 2023 - February 2024',
    description:
      'Developed CI/CD pipelines for deploying web applications, built with various technologies likeNodeJs, Python etc. ' +
      'Setup EC2 servers for running the applications. ' +
      'Created multiple S3 buckets for use with production and testing deployments. ' +
      'Deployed multiple open source projects on on-premises servers, ' + 
      'Created automations for generating month-end, annual reports.'
      
  },
  {
    role: 'Technical Intern',
    company: 'Vinva Technologies Pvt Ltd',
    duration: 'February 2023 - July 2024',
    description:
      'Gained practical experience with DevOps tools such as Docker, Jenkins, and Ansible while contributing to the development of a CI/CD pipeline.' +
     'Streamlined the deployment process for updates and patches by automating a previously manual workflow, leading to enhanced productivity and reduced time for implementing changes.'
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience-section section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="section-title mb-5">Experience</h2>
        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-md-5 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <div className="experience-card p-4 h-100 text-start">
                <div className="icon-wrapper mb-3">
                  <FaBriefcase className="experience-icon" />
                </div>
                <h5 className="experience-role">{exp.role}</h5>
                <h6 className="experience-company">{exp.company}</h6>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
