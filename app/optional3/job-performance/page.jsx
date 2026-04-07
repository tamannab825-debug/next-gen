"use client";
import React from "react";

const jobs = [
  {
    role: "Frontend Developer",
    applicants: 320,
    shortlisted: 88,
    hires: 14,
    days: 11,
  },
  {
    role: "Backend Engineer",
    applicants: 260,
    shortlisted: 72,
    hires: 11,
    days: 14,
  },
  {
    role: "Product Designer",
    applicants: 190,
    shortlisted: 54,
    hires: 9,
    days: 10,
  },
  {
    role: "QA Engineer",
    applicants: 140,
    shortlisted: 36,
    hires: 6,
    days: 12,
  },
];

export default function JobPerformanceOverview() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] p-8 space-y-8 text-gray-800">

      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Job Performance Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Role-wise hiring analytics and conversion insights
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <select className="border bg-white px-4 py-2 rounded-lg text-sm">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
            <option>This Year</option>
          </select>

          <select className="border bg-white px-4 py-2 rounded-lg text-sm">
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Design</option>
          </select>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600 transition">
            Export Report
          </button>
        </div>
      </div>

      {/* ===== KPI STRIP ===== */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        {[
          ["Total Applicants", "910"],
          ["Total Shortlisted", "250"],
          ["Total Hires", "40"],
          ["Avg Conversion", "4.3%"],
          ["Avg Time to Hire", "12 Days"],
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{kpi[0]}</p>
            <p className="text-xl font-semibold text-red-500 mt-2">{kpi[1]}</p>
          </div>
        ))}

      </div>

      {/* ===== JOB PERFORMANCE TABLE ===== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-300">
          <h2 className="font-semibold text-gray-900 text-lg">
            Role-wise Performance
          </h2>
        </div>

        <div className="">

          {jobs.map((job, i) => {
            const conversion = ((job.hires / job.applicants) * 100).toFixed(1);

            return (
              <div
                key={i}
                className="flex flex-col md:flex-row border-b border-gray-300 last:border-none justify-between items-start md:items-center px-6 py-5 hover:bg-red-50 transition"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">
                    {job.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {job.applicants} applicants · {job.shortlisted} shortlisted · {job.hires} hired
                  </p>
                </div>

                <div className="flex items-center gap-8 mt-4 md:mt-0">

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Conversion</p>
                    <p className="font-semibold text-red-500">{conversion}%</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">Avg Hire Time</p>
                    <p className="font-semibold text-gray-900">{job.days} days</p>
                  </div>

                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>

                  <button className="text-sm text-red-500 font-medium hover:underline">
                    View Details →
                  </button>

                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* ===== FUNNEL SECTION ===== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-900 mb-4 text-lg">
          Hiring Funnel Breakdown
        </h2>

        <img src="/images/12.jpg.jpeg" alt="chart" className="h-48  bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400" />
      </div>

    </div>
  );
}