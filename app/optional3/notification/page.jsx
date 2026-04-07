"use client";

import { Bell, Briefcase, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    type: "application",
    title: "New Job Application",
    message: "Aman Sharma applied for Frontend Developer",
    time: "5 min ago",
    icon: Briefcase,
    unread: true,
  },
  {
    type: "trial",
    title: "Trial Submission",
    message: "Priya Mehta submitted the UI Dashboard task",
    time: "20 min ago",
    icon: FileText,
    unread: true,
  },
  {
    type: "system",
    title: "Candidate Shortlisted",
    message: "Rohit Verma moved to Final Interview stage",
    time: "1 hour ago",
    icon: CheckCircle,
    unread: false,
  },
  {
    type: "system",
    title: "New Mentorship Session",
    message: "Session scheduled with Design Mentor",
    time: "3 hours ago",
    icon: Bell,
    unread: false,
  },
];

export default function CompanyNotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-5">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Notifications
          </h1>
          <p className="text-sm text-gray-500">
            Stay updated with company activity
          </p>
        </div>

        <button className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Mark All Read
        </button>
      </div>


      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
          ["Total Notifications", "42"],
          ["Unread", "12"],
          ["Applications", "18"],
          ["Trial Updates", "9"],
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md text-center transition"
          >

            <h2 className="text-2xl font-semibold mt-2 text-red-500">
              {s[1]}
            </h2>
            <p className="text-sm text-gray-500">{s[0]}</p>
            
          </div>
        ))}

      </div>


      {/* FILTER TABS */}
      <div className="flex gap-3 flex-wrap">
        {["all", "application", "trial", "system"].map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm capitalize transition
              ${
                activeFilter === f
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600 border"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>


      {/* NOTIFICATION LIST */}
      <div className="bg-white rounded-2xl shadow-sm">

        {notifications
          .filter((n) => activeFilter === "all" || n.type === activeFilter)
          .map((n, i) => {
            const Icon = n.icon;

            return (
              <div
                key={i}
                className={`flex items-center justify-between p-5 border-b last:border-none hover:bg-gray-50 transition ${
                  n.unread ? "bg-red-50/40" : ""
                }`}
              >
                <div className="flex items-start gap-4">

                  <div className="bg-red-100 text-red-500 p-2 rounded-lg">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">{n.title}</p>
                    <p className="text-sm text-gray-500 pt-1">{n.message}</p>
                  </div>

                </div>

                <div className="text-xs text-red-400">
                  {n.time}
                </div>
              </div>
            );
          })}

      </div>

    </div>
  );
}