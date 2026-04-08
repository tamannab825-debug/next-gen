"use client";
import React from "react";

const kpis = [
  { label: "Applications", value: "1,248", change: "+12%", progress: 82 },
  { label: "Shortlisted", value: "286", change: "+8%", progress: 64 },
  { label: "Hires", value: "54", change: "+5%", progress: 41 },
  { label: "Hiring Speed", value: "12 days", change: "-10%", progress: 75 },
];


const jobStats = [
  { role: "Frontend Developer", applicants: 320, hires: 14 },
  { role: "Backend Engineer", applicants: 260, hires: 11 },
  { role: "Product Designer", applicants: 190, hires: 9 },
  { role: "QA Engineer", applicants: 140, hires: 6 },
];

export default function CompanyAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800 space-y-6">

     
    {/* ===== KPI ANALYTICS STRIP ===== */}
<div className="bg-white rounded-xl shadow-lg p-6">

  <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">

    {kpis.map((kpi, i) => (
      <div key={i} className="px-6 py-3 space-y-2">

        <p className="text-sm text-gray-500 tracking-wide">
          {kpi.label}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold pb-2 text-red-400">
            {kpi.value}
          </p>

          <span className={`text-sm font-medium px-3 py-1 rounded-full 
            ${kpi.change.includes("-") 
              ? "bg-red-100 text-red-600" 
              : "bg-green-100 text-green-600"}`}
          >
            {kpi.change}
          </span>
        </div>

        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-all"
            style={{ width: `${kpi.progress}%` }}
          />
        </div>

      </div>
    ))}

  </div>
</div>



      {/* ===== MAIN ANALYTICS GRID ===== */}
      <div className="grid lg:grid-cols-4 gap-6">

        {/* ===== CHARTS AREA ===== */}
        <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="font-semibold text-gray-900 mb-3">
              Applications Over Time
            </h2>
            <img src="/images/3.jpg.jpeg" alt="" className="h-56 w-full bg-gray-50 rounded-xl flex items-center justify-center text-gray-400" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="font-semibold text-gray-900 mb-3">
              Hires Per Month
            </h2>
            <img src="/images/6.jpg.jpeg" alt="" className="h-56 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 md:col-span-2">
            <h2 className="font-semibold text-gray-900 mb-3">
              Conversion Funnel
            </h2>
            <img src="/images/12.jpg.jpeg" alt="" className="h-40 w-full bg-gray-50 rounded-xl flex items-center justify-center text-gray-400" />
          </div>
        </div>

        {/* ===== RIGHT INSIGHTS PANEL ===== */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="font-semibold text-gray-900 mb-3">
              Hiring Efficiency
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Skill Match Accuracy</span>
                <span className="font-semibold text-green-500">92%</span>
              </div>
              <div className="flex justify-between">
                <span>Interview Pass Rate</span>
                <span className="font-semibold text-green-500">68%</span>
              </div>
              <div className="flex justify-between">
                <span>Offer Acceptance</span>
                <span className="font-semibold text-green-500">81%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="font-semibold text-gray-900 mb-3">
              Top Hiring Roles
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Frontend Developer</p>
              <p>Backend Engineer</p>
              <p>Product Designer</p>
              <p>QA Engineer</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="font-semibold text-gray-900 mb-3">
              Export Data
            </h3>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition text-sm">
              Download Report
            </button>
          </div>

        </div>
      </div>

{/* ===== ANALYTICS GRID ===== */}
<div className="grid lg:grid-cols-3 gap-6">

  {/* ===== LEFT : JOB PERFORMANCE ===== */}
  <div className="lg:col-span-2 bg-white rounded-3xl shadow-md p-6 space-y-5">

    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-gray-900 text-lg">
          Job Performance Overview
        </h2>
        <p className="text-sm text-gray-500">
          Hiring activity by role
        </p>
      </div>
      <a href="/optional3/job-performance">
      <button className="text-sm text-red-500 font-medium hover:underline">
        View details
      </button>
      </a>
    </div>

    <div className="divide-y">

      {jobStats.map((job, i) => {
        const rate = Math.round((job.hires / job.applicants) * 100);

        return (
          <div
            key={i}
            className="flex items-center justify-between py-4 hover:bg-yellow-50 rounded-xl px-5 transition"
          >
            <div>
              <p className="font-medium text-gray-900">{job.role}</p>
              <p className="text-sm  text-gray-500">
                {job.applicants} applicants <span className="ms-2">· {job.hires} hired</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right me-3">
                <p className="text-lg font-semibold text-red-500">
                  {rate}%
                </p>
                <p className="text-xs text-gray-400">success</p>
              </div>
              <span className="bg-red-50 text-red-500 text-xs px-3 py-1 rounded-full">
                Active
              </span>
            </div>
          </div>
        );
      })}

    </div>
  </div>

  {/* ===== RIGHT : QUICK INSIGHTS ===== */}
  <div className="bg-white rounded-3xl shadow-md p-6 space-y-5">

    <h3 className="font-semibold text-gray-900 text-lg">
      Quick Insights
    </h3>

    <div className="space-y-4 text-sm">

      <div className="flex justify-between">
        <span className="text-gray-500">Top Performing Role</span>
        <span className="font-medium text-gray-900">Frontend Dev</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Avg Time to Hire</span>
        <span className="font-medium text-gray-900">12 Days</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Offer Acceptance</span>
        <span className="font-medium text-red-500">78%</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Open Positions</span>
        <span className="font-medium text-gray-900">6</span>
      </div>

    </div>

    <a href="/optional3/full-report">
    <button className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
      View Full Report
    </button>
    </a>
  </div>

</div>



    </div>
  );
}