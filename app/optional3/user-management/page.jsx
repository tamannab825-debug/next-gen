"use client";

import { useState } from "react";
import { Search, MoreVertical, UserPlus } from "lucide-react";

export default function UserManagementPage() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: "EMP-1021",
      name: "Aarav Mehta",
      role: "HR Manager",
      department: "Human Resources",
      status: "Active",
      email: "aarav@nextgen.com",
    },
    {
      id: "EMP-1022",
      name: "Riya Sharma",
      role: "Frontend Developer",
      department: "Engineering",
      status: "Active",
      email: "riya@nextgen.com",
    },
    {
      id: "EMP-1023",
      name: "Kabir Singh",
      role: "Recruiter",
      department: "Talent Acquisition",
      status: "Inactive",
      email: "kabir@nextgen.com",
    },
    {
      id: "EMP-1024",
      name: "Aarav Mehta",
      role: "HR Manager",
      department: "Human Resources",
      status: "Inactive",
      email: "aarav@nextgen.com",
    },
    {
      id: "EMP-1025",
      name: "Riya Sharma",
      role: "Frontend Developer",
      department: "Engineering",
      status: "Active",
      email: "riya@nextgen.com",
    },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Employee Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage company users, roles, and access permissions.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition">
            <UserPlus size={18} />
            Add Employee
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl  border border-red-400 hover:border-3 hover:border-red-500 p-3 flex items-center gap-3">
          <Search className="text-red-400" size={18} />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full text-red-500  outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-red-50 text-gray-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-t border-red-200 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {emp.name}
                      </p>
                      <p className="text-red-400 text-xs">{emp.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{emp.role}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {emp.department}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-gray-400 bg-gray-300 text-white transition">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
