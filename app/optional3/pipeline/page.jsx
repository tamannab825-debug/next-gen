"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const pipelineStages = [
  {
    title: "Applied",
    color: "bg-blue-500",
    candidates: [
      { name: "Aarav Sharma", role: "Frontend Developer" },
      { name: "Meera Joshi", role: "UI/UX Designer" },
    ],
  },
  {
    title: "Shortlisted",
    color: "bg-yellow-500",
    candidates: [
      { name: "Rohan Mehta", role: "Backend Developer" },
    ],
  },
  {
    title: "Interview",
    color: "bg-purple-500",
    candidates: [
      { name: "Sneha Kapoor", role: "Product Manager" },
    ],
  },
  {
    title: "Hired",
    color: "bg-green-500",
    candidates: [
      { name: "Aditya Verma", role: "Full Stack Developer" },
    ],
  },
];

export default function CandidatePipelinePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Candidate Pipeline
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Track and manage your hiring process efficiently
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-red-400" size={18} />
          <input
            type="text"
            placeholder="Search candidates..."
            className="pl-10 pr-4 py-2 rounded-xl border border-red-300 text-red-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Pipeline Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pipelineStages.map((stage, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-5 flex flex-col"
          >
            {/* Stage Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-700">
                {stage.title}
              </h2>
              <span
                className={`w-3 h-3 rounded-full ${stage.color}`}
              ></span>
            </div>

            {/* Candidate Cards */}
            <div className="space-y-4">
              {stage.candidates
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((candidate, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 hover:bg-white border rounded-xl p-4 transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold">
                        {candidate.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {candidate.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}