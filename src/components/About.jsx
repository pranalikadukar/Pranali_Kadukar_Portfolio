// import React from "react";
import AboutImage from "../assets/images/dp-kanch.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6 text-center">
          About Me
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden shadow-xl">
              <img
                src={AboutImage}
                alt="Saam Sheron - MERN Stack Developer"
                className="w-48 rounded-full h-48 object-cover border-4 border-primary"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3 md:px-8">
            <div className="text-[#333333]">
              <p className="mb-4 text-justify">
                Hi, I'm <strong>Pranali Kadukar</strong>, a passionate{" "}
                <strong>Java Backend Developer</strong> with hands-on experience
                in building scalable applications using{" "}
                <strong>
                  Java, Spring Boot, REST APIs, Microservices, and MySQL
                </strong>
                . I love developing real-world solutions that make workflows
                faster, smarter, and more efficient.
              </p>

              <p className="mb-4 text-justify">
                I have worked on impactful projects such as a full-stack{" "}
                <strong>ERP Inventory Management System</strong>, automated
                business processes, and a <strong>PDF invoice generator</strong>{" "}
                that improved operational efficiency by <strong>30%</strong>{" "}
                during my internship. I have also built multiple web
                applications using{" "}
                <strong>Spring MVC, Hibernate, Servlets, and React</strong>,
                significantly enhancing project delivery and integration speed.
              </p>

              <p className="mb-4 text-justify">
                I enjoy problem-solving, writing clean and maintainable code,
                and learning new technologies. I am now looking for an
                opportunity where I can contribute to{" "}
                <strong>
                  backend development, API engineering, and modern software
                  solutions
                </strong>
                , while growing further as a full-stack developer.
              </p>

              <p className="text-justify">
                Outside of coding, I enjoy <strong>listening to music</strong>,{" "}
                <strong>dancing</strong>, and <strong>cooking</strong>. These
                activities help me stay creative, focused, and motivated. I also
                love exploring new ideas and continuously upskilling myself to
                become a better developer every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
