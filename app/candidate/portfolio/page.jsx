"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Skill-Based Hiring Platform",
    description:
      "A platform that enables recruiters to evaluate candidates based on verified skills, portfolios, and real-world assessments.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    image: "https://via.placeholder.com/400x250",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio showcasing projects, skills, and professional experience.",
    tech: ["React", "CSS", "Responsive UI"],
    image: "https://via.placeholder.com/400x250",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Job Recommendation Dashboard",
    description:
      "Dashboard that displays job recommendations, application status, and resume score analytics.",
    tech: ["Next.js", "Charts", "API Integration"],
    image: "https://via.placeholder.com/400x250",
    live: "#",
    github: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="p-4 space-y-4 bg-green-100">

      {/* ===== PAGE HEADER ===== */}
     

            <h2 className="text-blue-700  font-semibold text-3xl pt-1 px-2 ">
      Portfolio 
    </h2>
    <p className="text-blue-700 mt-1">
        A collection of projects demonstrating technical skills and real-world experience
    </p>

      {/* ===== PORTFOLIO HIGHLIGHTS ===== */}
<section className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { label: "Projects Completed", value: "12+" },
    { label: "Years Experience", value: "1+" },
    { label: "Technologies Used", value: "10+" },
    { label: "GitHub Repositories", value: "15+" },
  ].map((item) => (
    <div
      key={item.label}
      className="bg-white rounded-xl shadow-md p-6 text-center
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-3xl font-bold text-blue-700">{item.value}</h3>
      <p className="text-sm text-gray-500 mt-3">{item.label}</p>
    </div>
  ))}
</section>
  

  {/* ===== FEATURED PROJECTS ===== */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-800">
    Featured Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
      <h3 className="text-xl font-semibold text-blue-500">
        Skill-Based Hiring Platform
      </h3>
      <p className="text-sm text-gray-600">
        A real-world platform focused on skill verification and portfolio-based
        hiring for recruiters.
      </p>
      <p className="text-sm text-gray-500">
        <strong>Role:</strong> Frontend Developer
      </p>
      <p className="text-sm text-gray-500">
        <strong>Impact:</strong> Improved candidate screening efficiency
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
      <h3 className="text-xl font-semibold text-blue-500">
        Job Recommendation Dashboard
      </h3>
      <p className="text-sm text-gray-600">
        Dashboard showing resume score, application status, and recommended jobs.
      </p>
      <p className="text-sm text-gray-500">
        <strong>Role:</strong> UI Developer
      </p>
      <p className="text-sm text-gray-500">
        <strong>Impact:</strong> Enhanced user engagement
      </p>
    </div>
  </div>
</section>


   <div className="grid grid-col sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ===== SKILLS IN ACTION ===== */}
<section className="bg-white rounded-xl shadow-md p-6 space-y-4">
  <h2 className="text-xl font-semibold text-blue-500">
    Skills in Action
  </h2>

  <ul className="space-y-2 text-gray-600">
    <li>✔ React – Component-based architecture & hooks</li>
    <li>✔ Next.js – App Router, SSR, routing, layouts</li>
    <li>✔ Tailwind CSS – Scalable UI systems</li>
    <li>✔ API Integration – REST APIs & async data handling</li>
  </ul>
</section>


{/* ===== CERTIFICATIONS ===== */}
<section className="bg-white rounded-xl shadow-md p-6">
  <h2 className="text-xl font-semibold text-blue-500 mb-4">
    Certifications & Achievements
  </h2>

  <ul className="list-disc list-inside text-gray-600 space-y-2">
    <li>Frontend Development Certification</li>
    <li>JavaScript & Modern Web Development</li>
    <li>IBM Internship Certification</li>
  </ul>
</section>
   </div>


      {/* ===== PROJECT GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden 
                       transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="relative w-full h-54">
              <img
                src={project.image}
                alt={project.title}
            
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full 
                               bg-green-100 text-green-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.live}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-sm font-medium text-gray-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            
          </div>
        ))}
      </div>

      {/* ===== CALL TO ACTION ===== */}
<section className="bg-green-100 rounded-xl p-8 text-center space-y-4">
  <h2 className="text-2xl font-bold text-gray-800">
    Interested in working together?
  </h2>
  <p className="text-gray-600">
    Explore the profile or connect to discuss opportunities.
  </p>

  <div className="flex justify-center gap-4">
    <a
      href="/candidate/profile"
      className="px-6 py-2 bg-green-600 text-white rounded-lg
                 hover:bg-green-700 transition"
    >
      View Profile
    </a>
    <a
      href="#"
      className="px-6 py-2 border border-green-600 text-green-700 rounded-lg
                 hover:bg-green-200 transition"
    >
      Contact
    </a>
  </div>
</section>

    </div>
  );
}



