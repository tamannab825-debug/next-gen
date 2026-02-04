"use client"

import Link from "next/link";


export default function ProfilePage(){
    return(
        <div className="min-h-screen bg-green-200 px-2 ">


       {/* COVER IMAGE */}
      <div className="max-w-8xl bg-white mx-auto relative">
        <div className="h-56 md:h-64 rounded-b-xl overflow-hidden">
          <img
            src="https://via.placeholder.com/60"
            alt="Cover"
            
            className="object-cover w-full"
            
          />
        </div>
      </div>

      {/* PROFILE CARD (OVERLAPPING) */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md  flex flex-col md:flex-row items-center gap-6 -mt-16 relative z-10">
        
        {/* PROFILE IMAGE */}
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-white"
        />

        {/* PROFILE INFO */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">
            Tamanna Bhardwaj
          </h1>

          <p className="text-green-600 font-medium">
            Frontend Developer | Job Seeker
          </p>

          <p className="text-gray-600 mt-2 max-w-xl">
            Frontend engineer focused on building scalable, responsive, and
            user-centric web applications using modern JavaScript frameworks.
          </p>
        </div>
      </div>

         {/* ================= PROFILE STATS ================= */}
<div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { label: "Projects Completed", value: "12+" },
    { label: "Verified Skills", value: "10+" },
    { label: "Experience", value: "1 Year" },
    { label: "Availability", value: "Immediate" },
  ].map((stat) => (
    <div
      key={stat.label}
      className="bg-white rounded-xl shadow-md p-6 text-center"
    >
      <p className="text-3xl font-bold text-green-600">
        {stat.value}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        {stat.label}
      </p>
    </div>
  ))}
</div>
      

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1  lg:grid-cols-3 gap-6">
        
        {/* ========== LEFT COLUMN (ABOUT & DETAILS) ========== */}
        <div className="lg:col-span-2 space-y-6">

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The candidate is a frontend developer with a strong foundation in
              web technologies and experience building responsive, accessible,
              and performance-optimized interfaces. Skilled in translating
              design requirements into functional UI components.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Interested in opportunities where technical skills, creativity,
              and problem-solving abilities can be applied to real-world
              software products and scalable platforms.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Projects
            </h2>

          <div className="space-y-4">
           <div>
            <h3 className="font-semibold text-gray-800">
             Skill-Based Hiring Platform
            </h3>
          <p className="text-sm text-gray-500">
            Next.js • Tailwind CSS • Node.js
         </p>
         <p className="text-gray-600 mt-2">
        Developed a platform enabling recruiters to evaluate candidates based
        on verified skills, portfolios, and real-world assessments.
      </p>
     </div>

    <div>
      <h3 className="font-semibold text-gray-800">
        Portfolio Website
      </h3>
      <p className="text-sm text-gray-500">
        React • Responsive UI
      </p>
      <p className="text-gray-600 mt-2">
        Designed and implemented a personal portfolio website showcasing
        projects, skills, and professional experience.
      </p>
       </div>
      </div>
     </div>


          {/* Experience Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Experience
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Frontend Developer Intern
                </h3>
                <p className="text-sm text-gray-500">
                  Company Name • 2024
                </p>
                <p className="text-gray-600 mt-2">
                  Worked on building reusable UI components, integrating APIs,
                  and optimizing frontend performance.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ========== RIGHT COLUMN (SIDE SECTION) ========== */}
        <div className="space-y-6">

          {/* Profile Overview */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Profile Overview
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li><strong>Experience:</strong> 0–1 Years</li>
              <li><strong>Location:</strong> India</li>
              <li><strong>Availability:</strong> Open to Work</li>
              <li><strong>Employment:</strong> Internship / Full-Time</li>
              <li><strong>Work Mode:</strong> Remote / On-site</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-blue-100 text-green-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
           <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Certifications
           </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Frontend Development Certification – Company / Platform</li>
        <li>JavaScript & Modern Web Development</li>
        <li>React & Component-Based Architecture</li>
       </ul>
       </div>


          {/* Verification */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Verification
            </h3>

            <p className="text-sm text-blue-600">
              ✔ Skills verified by platform assessment
            </p>
          </div>

        </div>
      </div>
      

    {/* ================= FEEDBACK & TESTIMONIALS ================= */}
<div className="max-w-7xl pb-5 mx-auto mt-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    Feedback & Recommendations
  </h2>
  <p className="text-gray-600 mb-8">
    What mentors, colleagues, and recruiters say about the candidate
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Feedback Card */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Project Mentor
          </p>
          <p className="text-sm text-gray-500">
            Senior Frontend Engineer
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Tamanna demonstrated strong frontend fundamentals and consistently
        delivered clean, reusable components. Her ability to understand
        requirements and convert them into functional UI was impressive.
      </p>
    </div>

    {/* Feedback Card */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Team Lead
          </p>
          <p className="text-sm text-gray-500">
            Product Development
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        A reliable team member with a positive attitude. She actively
        participated in discussions, took ownership of tasks, and delivered
        features on time.
      </p>
    </div>

    {/* Feedback Card */}
    <div className="bg-white rounded-xl  shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Recruiter
          </p>
          <p className="text-sm text-gray-500">
            Hiring Manager
          </p>
        </div>
      </div> 

      <p className="text-gray-600 text-sm leading-relaxed">
        The profile is well-structured and showcases relevant skills clearly.
        Strong potential for frontend development roles in fast-paced teams.
      </p>
    </div>

  </div>
</div>


     
     
        </div>
    )
}