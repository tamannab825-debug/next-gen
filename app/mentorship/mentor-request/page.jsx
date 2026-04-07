"use client";

import { useState } from "react";

const requestsData = [
  {
    name: "David Clark",
    field: "AI Engineer",
    experience: "5 years",
    email: "david@email.com",
    status: "Pending",
  },
  {
    name: "Emma Watson",
    field: "Product Manager",
    experience: "6 years",
    email: "emma@email.com",
    status: "Pending",
  },
  {
    name: "John Miller",
    field: "Backend Developer",
    experience: "4 years",
    email: "john@email.com",
    status: "Pending",
  },
];

export default function MentorRequestsPage() {
  const [search, setSearch] = useState("");

  const filtered = requestsData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.field.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentor Requests  
          </h1>
          <p className="text-sm text-gray-500">
            Review and approve mentor applications
          </p>
        </div>

       <div>
         <input
          type="text"
          placeholder="Search requests..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-white px-4 py-2 text-red-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
       </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">

          {filtered.map((req, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* TOP */}
              <div className="flex justify-between items-center mb-3">

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    {req.name}
                  </h3>
                  <p className="text-xs text-red-400">
                    {req.field}
                  </p>
                </div>

                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                  {req.status}
                </span>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                <p>📧 {req.email}</p>
                <p>💼 {req.experience}</p>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between items-center">

                <button className="text-sm text-red-500 hover:underline">
                  View Profile
                </button>

                <div className="flex gap-3">
                  <button className="bg-green-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-green-600">
                    Approve
                  </button>

                  <button className="border px-4 py-1.5 text-gray-500 hover:text-gray-700 rounded-lg text-sm hover:bg-gray-200">
                    Reject
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Requests Summary
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Pending</span>
                <span className="font-semibold text-yellow-500">12</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Approved</span>
                <span className="font-semibold text-green-500">48</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Rejected</span>
                <span className="font-semibold text-red-500">5</span>
              </div>

            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Bulk Approve
            </button>

            <button className="w-full border py-2 text-gray-500 hover:text-gray-700 rounded-lg text-sm hover:bg-gray-200">
              Export Requests
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}