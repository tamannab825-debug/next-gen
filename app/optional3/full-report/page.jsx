"use client";
import React from "react";

const overviewStats = [
  { label: "Open Positions", value: "6" },
  { label: "Total Applications", value: "1,248" },
  { label: "Total Hires", value: "54" },
  { label: "Avg Time to Fill", value: "12 Days" },
  { label: "Offer Acceptance", value: "81%" },
];

const departmentStats = [
  { name: "Engineering", open: 3, hires: 28, applicants: 680 },
  { name: "Product", open: 1, hires: 6, applicants: 138 },
  { name: "Design", open: 1, hires: 11, applicants: 240 },
  { name: "QA", open: 1, hires: 9, applicants: 190 },
];

const recruiterStats = [
  { name: "Sarah Lee", hires: 18, avgTime: "10 Days" },
  { name: "John Doe", hires: 21, avgTime: "13 Days" },
  { name: "Alex Kim", hires: 15, avgTime: "12 Days" },
];

export default function CompanyFullHiringReport() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-8 space-y-8 text-gray-800">

      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Company Hiring Report
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Internal workforce hiring insights and performance overview
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <select className="bg-white border border-gray-400  px-4 py-2 rounded-lg text-sm">
            <option className="bg-red-500 text-white ">Last 30 Days</option>
            <option className="bg-red-500 text-white">Last Quarter</option>
            <option className="bg-red-500 text-white">This Year</option>
          </select>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600 transition">
            Export PDF
          </button>
        </div>
      </div>

      {/* ===== OVERVIEW CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {overviewStats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xl font-semibold text-red-600 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

    <div className="grid grid-cols-2 gap-6">
          {/* ===== DEPARTMENT BREAKDOWN ===== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-300">
          <h2 className="font-semibold text-gray-800 text-lg">
            Department Hiring Performance
          </h2>
        </div>

        <div className=" ">
          {departmentStats.map((dept, i) => {
            const conversion = ((dept.hires / dept.applicants) * 100).toFixed(1);
            return (
              <div
                key={i}
                className="flex justify-between items-center border-b border-gray-300 px-6 py-5 hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-900">{dept.name}</p>
                  <p className="text-sm text-gray-500">
                    {dept.open} open roles · {dept.applicants} applicants
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-red-500">
                    {conversion}%
                  </p>
                  <p className="text-xs text-gray-400">
                    Hire Conversion
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== RECRUITER PERFORMANCE ===== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-300">
          <h2 className="font-semibold text-gray-900 text-lg">
            Hiring Manager Performance
          </h2>
        </div>

        <div className="">
          {recruiterStats.map((rec, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-300 px-6 py-5 hover:bg-gray-50 transition"
            >
              <div>
                <p className="font-medium text-gray-900">{rec.name}</p>
                <p className="text-sm text-gray-500">
                  {rec.hires} hires completed
                </p>
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  {rec.avgTime}
                </p>
                <p className="text-xs text-gray-400">
                  Avg Time to Fill
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      
    </div>
  );
}