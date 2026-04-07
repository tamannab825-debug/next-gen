"use client";

import { useState } from "react";

const logs = [
  {
    user: "Admin (Tamanna)",
    action: "Logged In",
    device: "Chrome / Windows",
    ip: "192.168.1.1",
    time: "10 mins ago",
    status: "Success",
  },
  {
    user: "HR Manager",
    action: "Updated Candidate Status",
    device: "Safari / Mac",
    ip: "192.168.1.9",
    time: "30 mins ago",
    status: "Success",
  },
  {
    user: "Recruiter",
    action: "Failed Login Attempt",
    device: "Mobile / Android",
    ip: "192.168.1.22",
    time: "1 hour ago",
    status: "Failed",
  },
  {
    user: "Admin",
    action: "Changed Role Permission",
    device: "Chrome / Windows",
    ip: "192.168.1.1",
    time: "3 hours ago",
    status: "Success",
  },
];

export default function SecurityAuditPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-6 space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Security & Audit Logs
          </h1>
          <p className="text-sm text-gray-500">
            Monitor system activity and security events
          </p>
        </div>

        <button className="bg-red-500 text-white px-4 py-3 rounded-lg text-sm hover:bg-red-600 transition">
          Export Logs
        </button>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-2xl font-bold text-red-500 mt-2">48</h2>
           <p className="text-gray-500 text-sm">Total Logins Today</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-2xl font-bold text-red-500 mt-2">3</h2>
          <p className="text-gray-500 text-sm">Failed Logins</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-2xl font-bold text-red-500 mt-2">22</h2>
          <p className="text-gray-500 text-sm">Active Users</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-2xl font-bold text-red-500 mt-2">2</h2>
          <p className="text-gray-500 text-sm">Security Alerts</p>
        </div>

      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

        <input
          type="text"
          placeholder="Search activity..."
          className="border border-red-300 text-red-500 bg-red-50 rounded-lg px-4 py-2 text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-red-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3">
          <button className="border border-red-300 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-50">
            Filter
          </button>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            Clear
          </button>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">

        <table className="w-full text-sm text-left">
          <thead className="border-b border-red-200 text-red-400">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Action</th>
              <th className="p-4">Device</th>
              <th className="p-4">IP Address</th>
              <th className="p-4">Time</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 text-gray-700">{log.user}</td>
                <td className="p-4 text-gray-600">{log.action}</td>
                <td className="p-4 text-gray-600">{log.device}</td>
                <td className="p-4 text-gray-600">{log.ip}</td>
                <td className="p-4 text-red-400">{log.time}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      log.status === "Success"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Security Tips Panel */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <h3 className="font-semibold text-gray-800 mb-3">
          Security Recommendations
        </h3>

        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
          <li>Enable two-factor authentication for admin accounts</li>
          <li>Review failed login attempts regularly</li>
          <li>Limit admin permissions to trusted users</li>
          <li>Update passwords every 60 days</li>
        </ul>

      </div>

    </div>
  );
}