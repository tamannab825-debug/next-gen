"use client";

import { useState } from "react";

const tickets = [
  {
    id: "SUP-1023",
    issue: "Unable to upload resources",
    status: "Open",
    date: "15 Mar 2026",
  },
  {
    id: "SUP-1018",
    issue: "Mentor assignment not working",
    status: "Resolved",
    date: "13 Mar 2026",
  },
  {
    id: "SUP-1012",
    issue: "Student progress not updating",
    status: "Pending",
    date: "11 Mar 2026",
  },
];

export default function InstituteSupport() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-xl font-semibold text-gray-800">
            Support Center
          </h1>

          <p className="text-sm text-gray-500">
            Get help, manage support tickets and contact support
          </p>

        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
          + Create Ticket
        </button>

      </div>


      {/* SUPPORT STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Open Tickets</p>
          <h2 className="text-2xl font-semibold text-red-500">12</h2>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Resolved</p>
          <h2 className="text-2xl font-semibold text-green-500">48</h2>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Avg Response</p>
          <h2 className="text-2xl font-semibold text-gray-700">2 hr</h2>
        </div>

        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Satisfaction</p>
          <h2 className="text-2xl font-semibold text-gray-700">94%</h2>
        </div>

      </div>


      {/* QUICK HELP */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">

          <div className="text-3xl mb-3">📘</div>

          <h3 className="font-semibold text-gray-700 mb-1">
            Help Documentation
          </h3>

          <p className="text-sm text-gray-500">
            Read guides and tutorials to solve common problems.
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">

          <div className="text-3xl mb-3">💬</div>

          <h3 className="font-semibold text-gray-700 mb-1">
            Live Chat
          </h3>

          <p className="text-sm text-gray-500">
            Chat instantly with our support team for quick help.
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">

          <div className="text-3xl mb-3">📩</div>

          <h3 className="font-semibold text-gray-700 mb-1">
            Email Support
          </h3>

          <p className="text-sm text-gray-500">
            Send your issue via email and our team will respond.
          </p>

        </div>

      </div>


      {/* MAIN SUPPORT AREA */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        {/* LEFT - TICKETS */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">

          <div className="flex justify-between items-center mb-4">

            <h3 className="font-semibold text-gray-700">
              Recent Support Tickets
            </h3>

            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border text-red-300 rounded-lg px-3 py-2 text-sm focus:border-red-500 focus:border-2 focus:ring-red-500 focus:outline-none"
            />

          </div>

          <table className="w-full text-sm">

            <thead>

              <tr className="text-left text-gray-500 border-b">

                <th className="py-3">Ticket ID</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {tickets.map((ticket, i) => (

                <tr key={i} className="border-b hover:bg-gray-50">

                  <td className="py-3 text-gray-600 font-medium">
                    {ticket.id}
                  </td>

                  <td className="text-gray-600">
                    {ticket.issue}
                  </td>

                  <td>

                    <span className={`text-xs px-2 py-1 rounded-lg
                    ${
                      ticket.status === "Open"
                        ? "bg-red-100 text-red-600"
                        : ticket.status === "Resolved"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}>

                      {ticket.status}

                    </span>

                  </td>

                  <td className="text-gray-500">
                    {ticket.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* RIGHT - CONTACT SUPPORT */}

        <div className="bg-white rounded-xl shadow-sm p-6">

          <h3 className="font-semibold text-gray-700 mb-4">
            Contact Support
          </h3>

          <div className="space-y-3">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border text-red-400 rounded-lg px-3 py-2 text-sm focus:border-2 focus:border-red-500 focus:ring-red-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border text-red-400 rounded-lg px-3 py-2 text-sm focus:border-2 focus:border-red-500 focus:ring-red-500 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className="w-full border text-red-400 rounded-lg px-3 py-2 text-sm focus:border-2 focus:border-red-500 focus:ring-red-500 focus:outline-none"
            ></textarea>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-600 transition">
              Submit Request
            </button>

          </div>

        </div>


      </div>

    </div>
  );
}