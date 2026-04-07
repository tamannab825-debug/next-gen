"use client";

import { UploadCloud, Clock, CheckCircle } from "lucide-react";

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">

      {/* ===== PAGE HEADER ===== */}
      <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Assignments
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track, submit, and manage all your assigned tasks in one place
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-red-50 px-4 py-3 rounded-xl text-center">
            <p className="text-xs text-gray-500">Active</p>
            <p className="font-semibold text-red-500">1</p>
          </div>
          <div className="bg-green-50 px-4 py-3 rounded-xl text-center">
            <p className="text-xs text-gray-500">Completed</p>
            <p className="font-semibold text-green-600">2</p>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT SIDE – ASSIGNMENTS LIST */}
        <div className="col-span-12 lg:col-span-8 space-y-6">

          {/* ASSIGNMENT CARD */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                Active Assignment
              </h3>
              <span className="text-xs text-gray-400">
                Due Soon
              </span>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-800">
                  Portfolio Website
                </h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                  In Progress
                </span>
              </div>

              <p className="text-xs text-gray-500">
                Build a responsive personal portfolio using React and Tailwind CSS.
                Include projects, skills, and contact section.
              </p>

              <div className="flex flex-wrap gap-3 mt-4 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                  Due in 3 days
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
                  Medium Priority
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
                  Frontend
                </span>
              </div>

              {/* PROGRESS */}
              <div className="mt-5">
                <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>70%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-red-500 rounded-full w-[70%]" />
                </div>
              </div>

              {/* ACTION */}
              <div className="mt-5 flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition">
                  <UploadCloud size={16} />
                  Submit Assignment
                </button>
              </div>
            </div>
          </section>

          {/* COMPLETED ASSIGNMENT */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                Completed Assignment
              </h3>
              <CheckCircle className="text-green-600" size={18} />
            </div>

            <div className="bg-green-50 rounded-2xl p-5">
              <p className="text-sm font-medium text-gray-800">
                Dashboard UI Design
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Designed admin dashboard using Tailwind and React components.
              </p>

              <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                Submitted Successfully
              </span>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE – SUMMARY */}
        <div className="col-span-12 lg:col-span-4 space-y-6">

          {/* SUMMARY CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">
              Assignment Summary
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📌 Total Assigned: <strong>3</strong></p>
              <p>⏳ Active: <strong>1</strong></p>
              <p>✅ Completed: <strong>2</strong></p>
              <p>⚠️ Upcoming Deadline: <strong>3 days</strong></p>
            </div>
          </div>

          {/* DEADLINE TIP */}
          <div className="bg-red-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-red-500" />
              <h3 className="font-semibold text-red-600">
                Deadline Reminder
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Submit assignments at least one day before the deadline to avoid last-minute issues.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}