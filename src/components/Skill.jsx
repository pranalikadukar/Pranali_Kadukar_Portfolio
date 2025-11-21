import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiDocker,
  SiPostman,
} from "react-icons/si";

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {/* Java */}
          <div className="text-center">
            <FaJava className="w-20 h-20 mx-auto mb-4 text-red-600" />
            <h3 className="text-lg font-semibold">Java</h3>
            <p className="text-sm text-secondary">Core & Advanced Java</p>
          </div>

          {/* Spring Boot */}
          <div className="text-center">
            <SiSpringboot className="w-20 h-20 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold">Spring Boot</h3>
            <p className="text-sm text-secondary">REST APIs & Backend</p>
          </div>

          {/* Spring MVC */}
          <div className="text-center">
            <SiSpringboot className="w-20 h-20 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold">Spring MVC</h3>
            <p className="text-sm text-secondary">
              Web apps with MVC Architecture
            </p>
          </div>

          {/* JPA / Hibernate */}
          <div className="text-center">
            <SiHibernate className="w-20 h-20 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-lg font-semibold">Hibernate / JPA</h3>
            <p className="text-sm text-secondary">ORM & database operations</p>
          </div>

          {/* Microservices */}
          <div className="text-center">
            <SiSpringboot className="w-20 h-20 mx-auto mb-4 text-lime-600" />
            <h3 className="text-lg font-semibold">Microservices</h3>
            <p className="text-sm text-secondary">
              Eureka, API Gateway, Load Balancing
            </p>
          </div>

          {/* MySQL */}
          <div className="text-center">
            <SiMysql className="w-20 h-20 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold">MySQL</h3>
            <p className="text-sm text-secondary">Relational database</p>
          </div>

          {/* HTML */}
          <div className="text-center">
            <FaHtml5 className="w-20 h-20 mx-auto mb-4 text-orange-600" />
            <h3 className="text-lg font-semibold">HTML</h3>
            <p className="text-sm text-secondary">Web content structure</p>
          </div>

          {/* CSS */}
          <div className="text-center">
            <FaCss3Alt className="w-20 h-20 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold">CSS</h3>
            <p className="text-sm text-secondary">UI design & styling</p>
          </div>

          {/* JavaScript */}
          <div className="text-center">
            <FaJs className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="text-sm text-secondary">Dynamic web logic</p>
          </div>

          {/* React */}
          <div className="text-center">
            <FaReact className="w-20 h-20 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold">React (Basic)</h3>
            <p className="text-sm text-secondary">Components & UI building</p>
          </div>

          {/* Git */}
          <div className="text-center">
            <FaGitAlt className="w-20 h-20 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold">Git</h3>
            <p className="text-sm text-secondary">Version control</p>
          </div>

          {/* Docker */}
          <div className="text-center">
            <SiDocker className="w-20 h-20 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold">Docker (Basics)</h3>
            <p className="text-sm text-secondary">Containerization basics</p>
          </div>

          {/* Postman */}
          <div className="text-center">
            <SiPostman className="w-20 h-20 mx-auto mb-4 text-orange-600" />
            <h3 className="text-lg font-semibold">Postman</h3>
            <p className="text-sm text-secondary">API testing</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skill;
