"use client";
import React from "react";
import { useState } from "react";

const performers = [
  {
    name: "Aman Sharma",
    role: "Frontend Developer",
    trials: 5,
    completion: 100,
    avgScore: 92,
    rating: 4.8,
  },
  {
    name: "Priya Mehta",
    role: "Backend Engineer",
    trials: 4,
    completion: 95,
    avgScore: 90,
    rating: 4.7,
  },
  {
    name: "Rohit Verma",
    role: "Product Designer",
    trials: 3,
    completion: 88,
    avgScore: 88,
    rating: 4.6,
  },
  {
    name: "Sneha Patel",
    role: "QA Engineer",
    trials: 4,
    completion: 91,
    avgScore: 86,
    rating: 4.5,
  },
];

export default function CompanyTopPerformersPage() {
    const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-8 space-y-4 text-gray-800">

      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Top Trial Performers
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Ranked candidates based on trial performance and completion metrics
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          {/* <select className="bg-white border px-4 py-2 rounded-lg text-sm">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>

          <select className="bg-white border px-4 py-2 rounded-lg text-sm">
            <option>All Roles</option>
            <option>Frontend Developer</option>
            <option>Backend Engineer</option>
            <option>Designer</option>
          </select>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600 transition">
            Export Leaderboard
          </button> */}

          <input
          type="text"
          placeholder="Search candidate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-red-400 text-red-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        </div>
      </div>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          ["Total Evaluated", "126"],
          ["Avg Performance", "82%"],
          ["Completion Rate", "91%"],
          ["Top Score", "96%"],
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100"
          >
            <p className="text-xl font-semibold text-red-500 mt-2">
              {stat[1]}
            </p>
            <p className="text-sm text-gray-600">{stat[0]}</p>
            
          </div>
        ))}
      </div>

      {/* ===== RANKING TABLE ===== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="px-6 pt-5 pb-2 ">
          <h2 className="font-semibold text-gray-900 text-lg">
            Performance Leaderboard
          </h2>
        </div>

        <div className="">

          {performers.map((candidate, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-between items-start border-b border-gray-300 lg:items-center px-6 py-6 hover:bg-gray-100 transition"
            >
              {/* LEFT SIDE */}
              <div className="flex items-center gap-5">

                {/* Rank */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-semibold">
                  #{index + 1}
                </div>

                {/* Candidate Info */}
                <div>
                  <p className="font-semibold text-gray-700">
                    {candidate.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {candidate.role}
                  </p>
                </div>
              </div>

              {/* METRICS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 lg:mt-0 text-sm">

                <div>
                  <p className="text-gray-600">Trials</p>
                  <p className="font-medium text-gray-900">
                    {candidate.trials}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Completion</p>
                  <p className="font-medium text-gray-900">
                    {candidate.completion}%
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Avg Score</p>
                  <p className="font-semibold text-red-500">
                    {candidate.avgScore}%
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Rating</p>
                  <p className="font-medium text-gray-900">
                    ⭐ {candidate.rating}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 mt-6 lg:mt-0">
                <button className="text-sm text-gray-600 hover:underline">
                  View Profile
                </button>
                <button className="text-sm text-red-500 font-medium hover:underline">
                  View Trials →
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}