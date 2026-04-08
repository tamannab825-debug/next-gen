"use client";

import { useState } from "react";

const stats = [
  { title: "Total Tasks", value: "420" },
  { title: "Completed", value: "342" },
  { title: "In Progress", value: "58" },
  { title: "Pending", value: "20" },
];

const tasks = [
  {
    title: "Build React Dashboard",
    mentee: "Ravi Kumar",
    priority: "High",
    status: "Completed",
    due: "12 Mar 2026",
  },
  {
    title: "API Integration",
    mentee: "Ananya Sharma",
    priority: "Medium",
    status: "In Progress",
    due: "18 Mar 2026",
  },
  {
    title: "Authentication System",
    mentee: "Rahul Verma",
    priority: "Low",
    status: "Pending",
    due: "22 Mar 2026",
  },
];

export default function TasksPage() {
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  const getStatusStyle = (status) => {
    if (status === "Completed")
      return "bg-green-100 text-green-600";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-600";
    return "bg-gray-200 text-gray-600";
  };

  const getPriorityStyle = (priority) => {
    if (priority === "High") return "text-red-500";
    if (priority === "Medium") return "text-yellow-500";
    return "text-gray-500";
  };

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen text-gray-200 space-y-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Task Management
          </h1>
          <p className="text-sm text-gray-500">
            Track task progress, priorities and completion status
          </p>
        </div>

        <div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
          + Assign Task
        </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-4 text-center rounded-xl shadow-sm">

            <h2 className="text-2xl font-semibold text-red-500 ">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
            
          </div>
        ))}
      </div>

      {/* FILTER + TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Task List
          </h3>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-3 py-1 rounded text-gray-600 text-sm"
          >
            <option>All</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((task, i) => (
            <div
              key={i}
              className="flex justify-between items-center border rounded-lg px-4 py-3 hover:bg-gray-50 transition"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {task.title}
                </p>
                <p className="text-xs text-gray-500">
                  {task.mentee} • Due {task.due}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className={getPriorityStyle(task.priority)}>
                  {task.priority}
                </span>

                <span
                  className={`px-2 py-1 rounded ${getStatusStyle(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KANBAN BOARD */}
      <div className="grid md:grid-cols-3 gap-6">

        {["Pending", "In Progress", "Completed"].map((col, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">

            <h3 className="font-semibold text-gray-700 mb-4">
              {col}
            </h3>

            <div className="space-y-3">
              {tasks
                .filter((t) => t.status === col)
                .map((task, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-3 rounded-lg border"
                  >
                    <p className="text-sm font-medium text-gray-800">
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {task.mentee}
                    </p>
                  </div>
                ))}
            </div>

          </div>
        ))}

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* ACTIVITY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h3>

          <div className="space-y-3 text-gray-600 text-sm">
            <p>{`Ravi completed "React Dashboard"`}</p>
            <p>Ananya updated API Integration</p>
            <p>Rahul assigned new task</p>
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Insights
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Most tasks are completed on time</li>
            <li>API-related tasks take longer duration</li>
            <li>Frontend tasks have highest completion rate</li>
          </ul>
        </div>

      </div>

    </div>
  );
}