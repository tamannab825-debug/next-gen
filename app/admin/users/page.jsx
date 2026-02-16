"use client";

import { Ban,Search, CheckCircle, Mail } from "lucide-react";

const users = [
  {
    name: "TechNova Solutions",
    email: "hr@technova.com",
    role: "Company",
    status: "Active",
  },
  {
    name: "Aarav Sharma",
    email: "aarav@gmail.com",
    role: "Candidate",
    status: "Active",
  },
  {
    name: "ZenCore Pvt Ltd",
    email: "contact@zencore.com",
    role: "Company",
    status: "Blocked",
  },
  {
    name: "Neha Verma",
    email: "neha@gmail.com",
    role: "Candidate",
    status: "Active",
  },
  {
    name: "Tannu Sharma",
    email: "tannu@gmail.com",
    role: "Candidate",
    status: "Active",
  },
  {
    name: "Rudra Bhardwaj",
    email: "rudra@gmail.com",
    role: "Candidate",
    status: "Blocked",
  },
];

export default function ManageUsersPage() {
  return (
    <div className="space-y-8">

      {/* ================= SEARCH & FILTERS ================= */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <div className="flex flex-col justify-between md:flex-row gap-4">

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:border-2 hover:border-gray-500 w-full md:w-1/2">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search by name or email"
              className="w-full text-sm outline-none"
            />
          </div>

          <select className="px-4 py-2 rounded-xl border border-gray-300 hover:border-2 hover:border-gray-500 text-sm">
            <option>All Roles</option>
            <option>Candidate</option>
            <option>Company</option>
          </select>

          <select className="px-4 py-2 rounded-xl border border-gray-300 hover:border-2 hover:border-gray-500 text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
          </select>

        </div>
      </div>

      {/* ===== USER CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {user.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <Mail size={14} />
                  {user.email}
                </div>
              </div>

              {/* Status dot */}
              <span
                className={`w-3 h-3 rounded-full mt-1 ${
                  user.status === "Active"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              />
            </div>

            {/* Badges */}
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                {user.role}
              </span>

              {user.status === "Active" ? (
                <span className="px-3 py-1 rounded-full text-xs bg-green-50 text-green-600">
                  Active
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs bg-red-50 text-red-600">
                  Blocked
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 mt-5 mb-3" />

            {/* Actions */}
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                User management action
              </p>

              {user.status === "Active" ? (
                <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
                  <Ban size={16} />
                  Block
                </button>
              ) : (
                
                <button className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700">
                  <CheckCircle size={16} />
                  Activate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
