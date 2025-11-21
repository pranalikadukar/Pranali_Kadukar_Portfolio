import React from "react";
import AboutImage from "../assets/images/dp-kanch.jpg"; // change to your image
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>

        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">

          {/* LEFT COLUMN */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              
              {/* Skills */}
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Java (Core & Advanced)</li>
                <li>Spring Boot, Spring MVC, Spring Data JPA</li>
                <li>Microservices (Eureka, API Gateway, Load Balancing)</li>
                <li>REST API Development</li>
                <li>Hibernate</li>
                <li>MySQL, H2 Database</li>
                <li>HTML, CSS, JavaScript</li>
                <li>React (Basic)</li>
                <li>Git, Postman, Docker (Basics)</li>
              </ul>

              {/* Education */}
              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">
                B.E. – Information Technology
              </p>
              <p>Priyadarshini Bhagwati College of Engineering</p>
              <p>Rashtrasant Tukdoji Maharaj Nagpur University</p>
              <p className="text-sm text-secondary">79.31%</p>
    
              {/* Certification */}
              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Certifications
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Industrial Java Training – Asterisc Computer Institute</li>
                <li>C & C++ Certification – Asterisc Institute</li>
              </ul>

              {/* Projects */}
              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">

                <li>
                  <span className="font-medium">ERP Inventory Management System</span> – 
                  Full-stack system built using Spring Boot & React. Automated workflows: quotation → sales → production → dispatch.
                </li>

                <li>
                  <span className="font-medium">PDF Invoice Generator</span> – 
                  Java-based automation tool improving processing efficiency by 30%.
                </li>

                <li>
                  <span className="font-medium">Product Management System</span> – 
                  CRUD operations using Spring Boot MVC + Hibernate + MySQL.
                </li>

                <li>
                  <span className="font-medium">Property Insurance System</span> – 
                  Backend built using Hibernate, Java Servlets & MySQL.
                </li>

                <li>
                  <span className="font-medium">Medical Store Management System</span> – 
                  Application in C for long-term data storage.
                </li>

              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Pranali Kadukar"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />

            <p className="text-xl font-medium">Pranali Kadukar</p>
            <p className="text-lg text-secondary">
              Java Backend Developer | Spring Boot | Microservices
            </p>

            <a
              href="mailto:kadukarpranali27@gmail.com"
              className="text-lg text-primary mt-4 block"
            >
              kadukarpranali27@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/pranali-kadukar-463a68236"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>

              <a
                href="https://github.com/pranalikadukar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-[#333] hover:text-secondary" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-secondary" />
              </a>

              <a
                href="https://dev.to/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev className="text-2xl hover:text-secondary" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
