"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function CandidateProfile() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="p-4 sm:p-6 bg-[#f5f6fa] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-4">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src="/images/person.png"
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Rahul Verma
            </h1>
            <p className="text-gray-500">Frontend Developer</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Delhi, India
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} /> rahul@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={14} /> +91 9876543210
              </span>
            </div>
          </div>

          <div className="flex  gap-3">
            <button className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm hover:bg-red-600">
              Hire
            </button>
            <button className="px-4 py-2 border border-gray-500 rounded-xl text-sm text-gray-600 hover:bg-gray-200">
              Message
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white rounded-2xl shadow-sm p-2 flex gap-2 overflow-x-auto">
          {["about", "experience", "education", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm capitalize whitespace-nowrap ${
                activeTab === tab
                  ? "bg-red-500 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          {/* ABOUT */}
          {activeTab === "about" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                About Candidate
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionate frontend developer with 2+ years of experience in
                building responsive web applications using React, Tailwind CSS,
                and modern JavaScript frameworks.
              </p>
            </div>
          )}

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Briefcase size={18} /> Experience
              </h2>

              <div className="border rounded-xl p-4">
                <h3 className="font-semibold text-gray-800">
                  Frontend Developer
                </h3>
                <p className="text-sm text-gray-500">Tech Solutions Pvt Ltd</p>
                <p className="text-xs text-gray-400">2023 - Present</p>
              </div>

              <div className="border rounded-xl p-4">
                <h3 className="font-semibold text-gray-800">
                  Intern Developer
                </h3>
                <p className="text-sm text-gray-500">Startup Inc</p>
                <p className="text-xs text-gray-400">2022 - 2023</p>
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <GraduationCap size={18} /> Education
              </h2>

              <div className="border rounded-xl p-4">
                <h3 className="font-semibold text-gray-800">
                  B.Tech in Computer Science
                </h3>
                <p className="text-sm text-gray-500">MDU University</p>
                <p className="text-xs text-gray-400">2021 - 2025</p>
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Skills
              </h2>

              {["HTML", "CSS", "JavaScript", "React"].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{skill}</span>
                    <span>{70 + i * 5}%</span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${70 + i * 5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SIDE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Resume */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Resume
            </h3>

            <button className="w-full border border-red-500 text-red-500 py-2 rounded-xl hover:bg-red-500 hover:text-white">
              Download Resume
            </button>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Activity
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Applied for Frontend Role</li>
              <li>Profile viewed by recruiter</li>
              <li>Completed React Assessment</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}