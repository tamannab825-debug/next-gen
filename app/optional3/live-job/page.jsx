"use client";
import { useState } from "react";

export default function LiveJobTrialPage() {
  const trials = [
    {
      name: "Aman Verma",
      role: "Frontend Developer",
      task: "Build Responsive Landing Page",
      deadline: "28 Feb 2026",
      progress: 70,
      status: "In Progress",
    },
    {
      name: "Riya Sharma",
      role: "UI/UX Designer",
      task: "Dashboard Wireframe",
      deadline: "26 Feb 2026",
      progress: 100,
      status: "Submitted",
    },
    {
      name: "Happy Rao",
      role: "Data Analyst",
      task: "Table Creation",
      deadline: "02 March 2026",
      progress: 60,
      status: "In Progress",
    },
      {
      name: "Aman Verma",
      role: "Frontend Developer",
      task: "Build Responsive Landing Page",
      deadline: "28 Feb 2026",
      progress: 70,
      status: "In Progress",
    },
    {
      name: "Riya Sharma",
      role: "UI/UX Designer",
      task: "Dashboard Wireframe",
      deadline: "26 Feb 2026",
      progress: 100,
      status: "Submitted",
    },
    {
      name: "Happy Rao",
      role: "Data Analyst",
      task: "Table Creation",
      deadline: "02 March 2026",
      progress: 60,
      status: "In Progress",
    },
  ];

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Live Job Trials
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Evaluate candidates through real-world task simulations.
          </p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow">
          + Create Trial
        </button>
      </div>

      {/* Stats */}
      <div className=" p-5 rounded-xl   bg-white mb-6">
        <div className="grid md:grid-cols-4  bg-white">
       
        {[
          { title: "Ongoing", value: "12" },
          { title: "Submitted", value: "8" },
          { title: "Under Review", value: "5" },
          { title: "Approved", value: "3" },
        ].map((item, i) => (
          <div key={i} className="text-center px-4 bg-yellow-50 border-r last:border-none border-gray-500 py-2">
            
            <h2 className="text-2xl font-bold text-red-600 mt-2">
              {item.value}
            </h2>
            
                <p className="text-gray-700 text-md">{item.title}</p>
          </div>
        ))}
      </div>
      </div>

      {/* Trials List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-red-50 text-left text-gray-600 text-sm">
            <tr>
              <th className="p-4">Candidate</th>
              <th>Role</th>
              <th>Task</th>
              <th>Deadline</th>
              <th>Progress</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {trials.map((trial, i) => (
              <tr key={i} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 font-medium text-red-500">
                  {trial.name}
                </td>
                <td className="text-gray-600">{trial.role}</td>
                <td className="text-gray-600">{trial.task}</td>
                <td className="text-gray-600">{trial.deadline}</td>

                {/* Progress */}
                <td>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${trial.progress}%` }}
                    />
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                    {trial.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="text-center space-x-2">
                 <a href="/optional3/candidate-profile">
                   <button className="text-sm px-3 py-1 bg-gray-400 rounded hover:bg-gray-300">
                    View
                  </button>
                 </a>
                  <button className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}