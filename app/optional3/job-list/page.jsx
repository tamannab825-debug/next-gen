"use client";
import { useState } from "react";

export default function JobList() {
  const [filter, setFilter] = useState("All");

  const jobs = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-Time",
      applicants: 18,
      status: "Open",
      posted: "12 Feb 2026",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Contract",
      applicants: 9,
      status: "Open",
      posted: "20 Feb 2026",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-Time",
      applicants: 24,
      status: "Closed",
      posted: "02 Jan 2026",
    },
  ];

  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-3 space-y-3">

      {/* HEADER */}
      <section className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Job Management
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Create, manage and monitor job openings across departments.
          </p>
        </div>

        <div className="flex items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg text-sm">
          + Create Job
        </button>
        </div>
      </section>

      {/* JOB STATS */}
      <section className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="grid grid-cols-4 divide-x divide-gray-100 text-center">
          {[
            { label: "Total Jobs", value: "12" },
            { label: "Open", value: "7" },
            { label: "Closed", value: "5" },
            { label: "Selected Candidates", value: "24" },
          ].map((stat, i) => (
            <div key={i} className="px-4 py-2 border-r border-gray-500 last:border-none bg-yellow-50">
              <p className="text-2xl font-semibold text-red-500">
                {stat.value}
              </p>
              <p className="text-md text-gray-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="flex px-3 gap-4">
        {["All", "Open", "Closed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1.5 text-sm rounded-lg border
              ${
                filter === tab
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* JOB LIST */}
      <section className="space-y-4 bg-white px-3 py-5 rounded-xl">
        {filteredJobs.map((job, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row justify-between gap-6 hover:shadow-sm transition"
          >
            <div>
              <h2 className="font-semibold text-gray-800">
                {job.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {job.department} <span className="text-red-500">· {job.type}</span>
              </p>
              <p className="text-xs text-green-500 mt-2">
                Posted on {job.posted}
              </p>
            </div> 

            <div className="flex items-center gap-6">

              <div className="text-center">
                <p className="text-lg font-semibold text-red-500">
                  {job.applicants}
                </p>
                <p className="text-xs text-gray-500">
                  Applicants
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full
                  ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-200 text-gray-600"
                  }
                `}
              >
                {job.status}
              </span>

              <button className="text-sm text-gray-600 hover:underline">
                View
              </button>

              <button className="px-4 py-1.5 text-xs border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                Manage
              </button>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
}