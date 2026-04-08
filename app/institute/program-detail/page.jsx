"use client";

const program = {
  title: "Full Stack Development",
  mentor: "Rohit Sharma",
  students: 120,
  duration: "6 Months",
  status: "Active",
  description:
    "This program covers frontend and backend technologies including React, Node.js, MongoDB, and modern deployment practices.",
};

const modules = [
  { title: "HTML, CSS Basics", progress: "60%" },
  { title: "JavaScript Advanced", progress: "80%" },
  { title: "React Development", progress: "65%" },
  { title: "Backend (Node + MongoDB)", progress: "40%" },
];

const students = [
  { name: "Ravi Kumar", progress: 80 },
  { name: "Ananya Sharma", progress: 65 },
  { name: "Rahul Verma", progress: 90 },
];

export default function ProgramDetailsPage() {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4">

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            {program.title}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            {program.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
            <span><span className="text-red-400">Mentor:</span> {program.mentor}</span>
            <span><span className="text-red-400">Duration:</span> {program.duration}</span>
            <span><span className="text-red-400">Students:</span> {program.students}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <button className="bg-red-500 text-white px-4 py-3 rounded-lg text-sm hover:bg-red-600">
            Edit Program
          </button>
          </div>
          <div>
            <button className="border px-4 py-3 rounded-lg text-sm text-gray-400 hover:bg-gray-100">
            Add Student +
          </button>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Total Students</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {program.students}
          </h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Completion Rate</p>
          <h2 className="text-2xl font-semibold text-green-500">72%</h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Modules</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {modules.length}
          </h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Status</p>
          <h2 className="text-lg font-semibold text-red-500">
            {program.status}
          </h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">

          {/* MODULES */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Course Modules
            </h3>

            {modules.map((m, i) => (
              <div key={i} className="mb-5">

                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{m.title}</span>
                  <span className="text-red-400">{m.progress}</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: m.progress }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

          {/* STUDENTS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enrolled Students
            </h3>

            {students.map((s, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b">

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {s.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Progress: {s.progress}%
                  </p>
                </div>

                <a href="/institute/student-profile">
                  <button className="text-xs text-red-500 hover:underline">
                  View Profile
                </button>
                </a>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* MENTOR CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Mentor
            </h3>

            <div className="flex items-center gap-3">
              <img
                src="/images/profile.jpg"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {program.mentor}
                </p>
                <p className="text-xs text-gray-500">
                  Senior Developer
                </p>
              </div>
            </div>

            <a href="/institute/mentor-profile">
              <button className="mt-4 text-sm text-red-500 hover:underline">
              View Mentor Profile
            </button>
            </a>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📌 New student enrolled</p>
              <p>{`📌 Module "React" updated`}</p>
              <p>📌 Assignment uploaded</p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Add Module
            </button>

            <button className="w-full border py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-700">
              Generate Report
            </button>
          </div>

        </div>

      </div>

    </div>
  );
} 