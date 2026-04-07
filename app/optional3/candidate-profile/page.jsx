"use client";
import { useState } from "react";

export default function CompanyCandidateProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = ["overview", "resume", "projects", "trial", "notes"];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 text-gray-800">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-5 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left */}
          <div className="flex items-center gap-5">
            <img
              src="/images/profile.jpg"
              alt="Candidate"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold">
                  Tamanna Bhardwaj
                </h1>

                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                  Shortlisted
                </span>
              </div>

              <p className="text-sm text-gray-500 ">
                Frontend Developer • 1 Year Experience
              </p>

              <p className="text-sm pt-1 text-gray-500">
                Applied for: <span className="text-red-500">Frontend Role (Remote)</span>
              </p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
              Schedule Interview
            </button>

            <button className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50">
              Assign Trial
            </button>

            <button className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50">
              Move Stage
            </button>

            <button className="px-4 py-2 text-sm rounded-lg border border-red-200 text-red-500 hover:bg-red-50">
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm mb-6">
        <div className="flex ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm capitalize font-medium transition ${
                activeTab === tab
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">

          {/* ================= OVERVIEW ================= */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-6">

              <div className="lg:col-span-2 space-y-6">

                <div>
                  <h3 className="font-semibold mb-2">Professional Summary</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Frontend developer skilled in building scalable and
                    responsive applications using React and Next.js.
                    Experienced in converting UI designs into functional
                    components and optimizing performance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <div className="border-l-2 border-red-500 pl-4">
                    <p className="font-medium">Frontend Intern</p>
                    <p className="text-sm text-red-600">2024</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Built reusable UI components and improved frontend
                      performance by 25%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Info */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <h3 className="font-semibold">Candidate Info</h3>
                <p className="text-sm text-red-600">Location: <span className="text-gray-600">India</span></p>
                <p className="text-sm text-red-600">Work Mode: <span className="text-gray-600">Remote</span></p>
                <p className="text-sm text-red-600">Availability: <span className="text-gray-600"> Immediate</span></p>
                <p className="text-sm text-red-600">Expected Salary: <span className="text-gray-600">₹6 LPA</span></p>
              </div>
            </div>
          )}

          {/* ================= RESUME ================= */}
          {activeTab === "resume" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Resume</h3>
                <button className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Download Resume
                </button>
              </div>

              <div className="h-96 border rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                Resume Preview Area
              </div>
            </div>
          )}
          {/* ================= PROJECTS ================= */}
          {activeTab === "projects" && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold">
                  Skill-Based Hiring Platform
                </h4>
                <p className="text-sm text-red-500">
                  Next.js • Tailwind • Node.js
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Built recruiter dashboard and candidate evaluation flow.
                </p>
              </div>
            </div>
          )}

          {/* ================= TRIAL ================= */}
          {activeTab === "trial" && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold">
                  UI Redesign Trial
                </h4>
                <p className="text-sm text-gray-500">
                  Submitted: <span className="text-red-500"> 2 days ago</span>
                </p>
                <button className="mt-3 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
                  View Submission
                </button>
              </div>
            </div>
          )}

          {/* ================= NOTES ================= */}
          {activeTab === "notes" && (
            <div className="space-y-4">
              <textarea
                placeholder="Add internal recruiter notes..."
                className="w-full h-32 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-200 text-sm"
              />
              <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
                Save Note
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}