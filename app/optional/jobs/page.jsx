"use client";

import { useState } from "react";

 const jobs = [
    {
      title: "Web Designer",
      total: "240+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "Web Developer",
      total: "180+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "UI / UX Designer",
      total: "120+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },

     {
      title: "Web Designer",
      total: "240+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "Web Developer",
      total: "180+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "UI / UX Designer",
      total: "120+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
     {
      title: "Web Designer",
      total: "240+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "Web Developer",
      total: "180+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "UI / UX Designer",
      total: "120+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    
  ];


const ALL_TRIALS = [
  { id: 1, title: "React UI Challenge", level: "Intermediate" },
  { id: 2, title: "JavaScript Logic Test", level: "Beginner" },
  { id: 3, title: "Next.js Routing Task", level: "Intermediate" },
  { id: 4, title: "CSS Layout Assignment", level: "Beginner" },
  { id: 5, title: "API Integration Test", level: "Advanced" },
  { id: 6, title: "System Design Basics", level: "Advanced" },
];

export default function SearchJobsPage() {
  const unlocked = 6; // no state needed

   return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-6">

      {/* ===== TOP SEARCH BAR ===== */}
      <div className="bg-white rounded-2xl md:rounded-full p-2 mb-6 shadow-sm">
        <div className="flex flex-col lg:flex-row items-stretch gap-4">

          <div className="flex items-center justify-between px-4 py-3 text-sm  rounded-lg lg:w-1/4">
            <span className="text-red-500 font-medium">Choose Location</span>
            <ArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-3 text-sm  rounded-lg lg:w-1/4">
            <span className="text-red-500 font-medium">Salary Range</span>
            <ArrowIcon />
          </div>

          <input
            type="text"
            placeholder="Search job title here..."
            className="w-full lg:flex-1 rounded-lg px-4 py-3 text-sm text-gray-500 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-red-400"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2">
            Search
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-4/5 space-y-6">

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-gray-600">
                Showing 12 of 124 jobs
              </h2>
              <p className="text-sm text-gray-400">Based on your preference</p>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm rounded-md bg-red-400 hover:bg-red-600 text-white">
                Update Profile
              </button>
              <button className="px-4 py-2 text-sm rounded-md bg-red-100 hover:bg-red-200 text-red-500">
                Newest
              </button>
            </div>
          </div>

          {/* JOB GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 bg-white hover:shadow-lg transition text-center "
              >
                <img
                  src={job.img}
                  alt={job.title}
                  className="w-22 h-22 mx-auto  rounded-lg bg-gray-100"
                />

                <h4 className="text-sm font-semibold text-gray-800 mt-3">
                  {job.title}
                </h4>

                <p className="text-xs text-red-500">{job.total} Jobs</p>

                <p className="text-sm text-gray-500 mt-3">{job.location}</p>
                <p className="text-sm text-gray-500">{job.amount}</p>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 mt-6">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className="px-4 py-2 text-sm rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white"
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-1/5   ">
          <h3 className="text-gray-700 text-md font-semibold mb-6">
            Job Preview
          </h3>

          <div className="border rounded-xl p-4  bg-white text-center">
            <img
              src="/images/company.jfif"
              alt="photo"
              className="w-28 h-28 mx-auto mt-12 rounded-lg bg-blue-500"
            />

            <h3 className="text-sm font-semibold text-gray-600 mt-4">
              UX Researcher
            </h3>
            <p className="text-sm text-red-500">Kleon Studio</p>

            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitdolor sit amet, consectetur .
            </p>

            <ul className="text-sm text-gray-400 mt-3 space-y-2 text-left">
              <li>Tempor incididunt ut labore</li>
              <li>Incididunt labore</li>
              <li>Ut labore</li>
              <li>Incididunt labore</li>
            </ul>

            <div className="mt-6 space-y-4 text-sm text-gray-600 ">
              <p>Manchester, England</p>
              <p>$ 2,000 - $ 2,500</p>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs py-2 rounded-2xl">
                Apply Now
              </button>
              <button className="flex-1 bg-red-100 text-white hover:bg-red-300 text-xs py-2 rounded-2xl">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

/* ===== COMPONENTS ===== */



function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
  );
}