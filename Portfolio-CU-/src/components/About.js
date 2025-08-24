import React from 'react';
import '../App.css';
import profileImg from '../assets/ambika.jpeg ';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">About</h4>
              <p className="text-muted">
                {/* I'm an aspiring DevOps and Cloud Engineer */}
              </p>

              <p className="text-muted">
                {/* Hands on experience DevOps tools like Docker, Kubernetes, Jenkins, Ansible etc */}
              </p>

             </div>
              
              
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

