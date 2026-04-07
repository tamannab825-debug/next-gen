"use client";

import { useState } from "react";

const notificationsData = [
  {
    title: "New student enrolled in Full Stack Program",
    time: "2 hours ago",
    status: "Unread",
  },
  {
    title: "React Bootcamp session scheduled",
    time: "5 hours ago",
    status: "Unread",
  },
  {
    title: "UI/UX mentor uploaded new resource",
    time: "1 day ago",
    status: "Read",
  },
  {
    title: "Data Science session completed successfully",
    time: "2 days ago",
    status: "Read",
  },
  {
    title: "New program request submitted",
    time: "3 days ago",
    status: "Read",
  },
  {
    title: "React Bootcamp session scheduled",
    time: "5 days ago",
    status: "Read",
  },
];

export default function InstituteNotifications() {
  const [search, setSearch] = useState("");

  const filtered = notificationsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <div>
          <h1 className="text-xxl font-semibold text-gray-800">
            Notifications
          </h1>

          <p className="text-sm text-gray-500">
            Stay updated with institute activities
          </p>
        </div>

       <div className="flex gap-4">

         <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border text-red-400 bg-white rounded-lg px-3 py-2 text-sm w-full sm:w-64 focus:border-red-500 focus:ring-red-500 focus:outline-none transition"
        />


         <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition w-fit">
          Mark All Read
        </button>

       </div>

      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="bg-white rounded-xl shadow-sm divide-y">

        {filtered.map((note, i) => (

          <div
            key={i}
            className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:bg-gray-50 transition"
          >

            {/* LEFT SIDE */}
            <div className="flex items-start gap-3">

              <div
                className={`w-2.5 h-2.5 mt-2 rounded-full ${
                  note.status === "Unread"
                    ? "bg-red-500"
                    : "bg-gray-300"
                }`}
              ></div>

              <div>

                <p className="text-sm font-medium text-gray-800">
                  {note.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {note.time}
                </p>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 text-sm">

              <button className="text-red-500 hover:underline">
                View
              </button>

              <button className="text-gray-500 hover:underline">
                Mark Read
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}