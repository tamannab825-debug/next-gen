"use client";

import { Shield, Users, Settings } from "lucide-react";

const roles = [
  {
    name: "Admin",
    desc: "Full system access and control",
    users: 3,
    permissions: 25,
    status: "Active",
  },
  {
    name: "HR Manager",
    desc: "Manages candidates, interviews and hiring",
    users: 5,
    permissions: 18,
    status: "Active",
  },
  {
    name: "Recruiter",
    desc: "Handles candidate screening and trials",
    users: 8,
    permissions: 12,
    status: "Active",
  },
  {
    name: "Project Manager",
    desc: "Access to projects and performance reports",
    users: 4,
    permissions: 10,
    status: "Active",
  },
];

export default function RolesPermissionsPage() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Roles & Permissions
          </h1>
          <p className="text-sm text-gray-500">
            Manage access control for your company team
          </p>
        </div>

        <button className="bg-red-500 text-white px-4 py-3 rounded-lg text-sm hover:bg-red-600 transition">
          + Create Role
        </button>
      </div>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Total Roles", value: "6", icon: Shield },
          { label: "Active Users", value: "42", icon: Users },
          { label: "Permissions Assigned", value: "75", icon: Settings },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 py-4 shadow-sm flex items-center justify-between hover:shadow-md transition"
            >
              <div>

                <h2 className="text-2xl font-semibold text-red-500 mt-1">
                  {stat.value}
                </h2>
                <p className="text-sm text-gray-600">{stat.label}</p>
                
              </div>

              <div className="bg-red-100 text-red-500 p-3 rounded-xl">
                <Icon size={30} />
              </div>
            </div>
          );
        })}
      </section>

      {/* Roles Table */}
      <section className="bg-white rounded-2xl shadow-sm py-4 px-8">

        <h2 className="font-semibold text-gray-700 mb-2">
          Company Roles
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="text-red-400 border-b border-red-300">
              <tr>
                <th className="text-left py-3">Role</th>
                <th className="text-left">Description</th>
                <th className="text-center">Users</th>
                <th className="text-center">Permissions</th>
                <th className="text-center">Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>

              {roles.map((role, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-4 font-medium text-gray-700">
                    {role.name}
                  </td>

                  <td className="text-gray-500">
                    {role.desc}
                  </td>

                  <td className="text-center text-gray-600">
                    {role.users}
                  </td>

                  <td className="text-center text-gray-600">
                    {role.permissions}
                  </td>

                  <td className="text-center">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                      {role.status}
                    </span>
                  </td>

                  <td className="text-right space-x-2">

                    <button className="text-sm text-gray-500 border border-gray-300 px-3 py-1 rounded hover:bg-gray-300 hover:text-gray-800 hover:border-gray-500">
                      View
                    </button>

                    <button className="text-sm border border-gray-300 text-gray-500  px-3 py-1 rounded hover:bg-gray-300 hover:text-gray-800 hover:border-gray-400
                    ">
                      Edit
                    </button>

                    <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>
    </div>
  );
}