import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import resumePDF from '../assets/ DevopsResume.pdf'; // Make sure this file exists
import profileImg from '../assets/ambika.jpeg'; // ✅ Your profile picture
import '../App.css';

export default function Home() {
  return (
    <main
      id="home"
      className="hero-section-advanced d-flex align-items-center justify-content-center"
    >
      <div className="overlay"></div>

      <div className="container text-center text-white position-relative z-1">
        {/* 👤 Profile Image */}
        <div className="profile-wrapper mb-4">
          <img
            src={profileImg}
            alt="Anuj Verma"
            className="profile-img shadow"
          />
        </div>

        <h1 className="display-4 fw-bold mb-3 animate-fade">
          Hi, I’m <span className="highlight-name">Anuj Verma</span>
        </h1>

        <h2 className="typing-text mb-4 fs-4">
          <TypeAnimation
            sequence={[
              'Aspiring Devops Engineer', 
              2000,
              'Cloud Enthusiast',
              2000
             
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <a
          href={resumePDF}
          download="devops_resume-anuj01.pdf" /* your resume name with extension of .pdf*/
          className="btn btn-glow btn-lg px-4 py-2 shadow d-inline-flex align-items-center"
        >
          <FaDownload className="me-2" />
          Download Resume
        </a>

        <div className="scroll-indicator mt-5" aria-hidden="true">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p className="mt-2 small text-white-50">Scroll Down</p>
        </div>
      </div>
    </main>
  );
}
