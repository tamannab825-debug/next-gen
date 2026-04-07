"use client";

import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const tasks = [
  {
    title: "Complete UI for Mentor Page",
    desc: "Finalize layout, spacing, and responsiveness for mentor section.",
    status: "In Progress",
    priority: "High",
    progress: 70,
    due: "Wednesday",
  },
  {
    title: "Fix Dashboard Responsiveness",
    desc: "Improve mobile and tablet UI issues.",
    status: "Pending",
    priority: "Medium",
    progress: 30,
    due: "Thursday",
  },
  {
    title: "API Integration Testing",
    desc: "Test candidate & company APIs with proper error handling.",
    status: "Completed",
    priority: "Low",
    progress: 100,
    due: "Monday",
  },
  {
    title: "Code Cleanup & Optimization",
    desc: "Remove unused components and optimize rendering.",
    status: "Pending",
    priority: "Medium",
    progress: 0,
    due: "Friday",
  },
];

export default function WeeklyTasksPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">

      {/* ===== HEADER ===== */}
      <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Weekly Tasks
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track your assigned tasks, progress, and deadlines for this week
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-red-50 px-4 py-3 rounded-xl text-center">
            <p className="text-xs text-gray-500">Week</p>
            <p className="font-semibold text-red-500">This Week</p>
          </div>
          <div className="bg-green-50 px-4 py-3 rounded-xl text-center">
            <p className="text-xs text-gray-500">Completed</p>
            <p className="font-semibold text-green-600">1 / 4</p>
          </div>
        </div>
      </div>

      {/* ===== TASK LIST ===== */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT – TASKS */}
        <div className="col-span-12 lg:col-span-8 space-y-5">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* TOP */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {task.desc}
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              {/* META */}
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  Due: {task.due}
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} />
                  Priority: {task.priority}
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mt-5">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>

              {/* ACTION */}
              <div className="mt-5 flex justify-end">
                {task.status !== "Completed" ? (
                  <button className="text-sm text-red-500 hover:underline">
                    Mark as Completed
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle size={16} />
                    Completed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – SUMMARY */}
        <div className="col-span-12 lg:col-span-4 space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">
              Weekly Summary
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>🗂 Total Tasks: <strong>4</strong></p>
              <p>✅ Completed: <strong>1</strong></p>
              <p>⏳ Pending: <strong>2</strong></p>
              <p>🚀 In Progress: <strong>1</strong></p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-400 rounded-2xl p-6">
            <h3 className="font-semibold text-red-600 mb-2">
              Focus Tip
            </h3>
            <p className="text-sm text-gray-600">
              Prioritize high-impact tasks first to stay ahead of deadlines and reduce last-day pressure.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}