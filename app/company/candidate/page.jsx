"use client";

import React, { useState } from "react";

// Sample candidate data
const candidates = [
  {
    id: 1,
    name: "John Doe",
    job: "Frontend Developer",
    experience: "2 yrs",
    location: "New York, USA",
    status: "Applied",
  },
  {
    id: 2,
    name: "Jane Smith",
    job: "iOS Developer",
    experience: "3 yrs",
    location: "San Francisco, USA",
    status: "Interview Scheduled",
  },
  {
    id: 3,
    name: "Alice Johnson",
    job: "Backend Developer",
    experience: "4 yrs",
    location: "London, UK",
    status: "Shortlisted",
  },
  {
    id: 4,
    name: "Bob Brown",
    job: "Fullstack Developer",
    experience: "5 yrs",
    location: "Berlin, Germany",
    status: "Rejected",
  },
];

export default function CandidatePage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter candidates based on search and status
  const filtered = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "All" || c.status === statusFilter)
  );

  return (
    <div className="min-h-screen bg-green-100 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-blue-800">Candidates</h1>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search candidates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 bg-white rounded-md text-gray-500 p-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 bg-white rounded-md text-gray-400 p-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Candidate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-5 border border-green-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{c.name}</h2>
                <p className="text-gray-600 mt-1">{c.job}</p>
                <p className="text-gray-600 mt-1">Experience: {c.experience}</p>
                <p className="text-gray-600 mt-1">Location: {c.location}</p>  
              </div>

              <div className="flex items-center justify-between mt-4">
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    c.status === "Applied"
                      ? "bg-blue-100 text-blue-700"
                      : c.status === "Shortlisted"
                      ? "bg-green-100 text-green-700"
                      : c.status === "Interview Scheduled"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {c.status}
                </span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                  View
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No candidates found.
          </p>
        )}
      </div>
    </div>
  );
}
