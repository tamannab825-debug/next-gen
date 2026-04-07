"use client";

const stats = [
  { title: "Total Tasks", value: "96" },
  { title: "Assigned Tasks", value: "42" },
  { title: "Submitted Tasks", value: "31" },
  { title: "Reviewed Tasks", value: "23" },
];

const assignedTasks = [
  {
    title: "Build Portfolio Website",
    mentee: "John Carter",
    deadline: "20 Jun 2026",
  },
  {
    title: "REST API Integration",
    mentee: "Lisa Brown",
    deadline: "22 Jun 2026",
  },
];

const submittedTasks = [
  {
    title: "Authentication System",
    mentee: "David Smith",
    submitted: "15 Jun 2026",
  },
];

const reviewedTasks = [
  {
    title: "React Dashboard UI",
    mentee: "Emma Wilson",
    feedback: "Excellent UI design and responsiveness",
  },
];

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-5">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentorship Tasks
          </h1>
          <p className="text-gray-500 text-sm">
            Manage assignments, submissions, and reviews
          </p>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          + Assign New Task
        </button>
      </div>

      {/* TASK STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-red-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
          >
            <p className="text-2xl font-semibold text-red-500 mt-1">
              {s.value}
            </p>
            <p className="text-gray-500 text-sm">{s.title}</p>
            
          </div>
        ))}
      </div>

      {/* TASK WORKFLOW */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ASSIGNED TASKS */}
        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-4">
            Assigned Tasks
          </h3>

          <div className="space-y-4">
            {assignedTasks.map((task, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 hover:shadow-sm transition"
              >
                <p className="font-medium text-gray-800 text-sm">
                  {task.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Mentee: {task.mentee}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Deadline: {task.deadline}
                </p>

                <button className="mt-3 text-sm bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600">
                  View Task
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SUBMITTED TASKS */}
        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-4">
            Submitted Tasks
          </h3>

          <div className="space-y-4">
            {submittedTasks.map((task, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50"
              >
                <p className="font-medium text-gray-800 text-sm">
                  {task.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Mentee: {task.mentee}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Submitted: {task.submitted}
                </p>

                <div className="flex gap-2 mt-3">
                  <button className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Review
                  </button>

                  <button className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                    Request Changes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWED TASKS */}
        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-4">
            Reviewed Tasks
          </h3>

          <div className="space-y-4">
            {reviewedTasks.map((task, i) => (
              <div
                key={i}
                className="border rounded-lg p-4"
              >
                <p className="font-medium text-gray-800 text-sm">
                  {task.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Mentee: {task.mentee}
                </p>

                <p className="text-xs text-green-600 mt-2">
                  Feedback: {task.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TASK ACTIVITY */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-4">
            Task Activity
          </h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>John Carter submitted Portfolio Website task</li>
            <li>Lisa Brown received new assignment</li>
            <li>Emma Wilson task reviewed by mentor</li>
            <li>David Smith updated API project submission</li>
          </ul>
        </div>

        {/* QUICK TASK ACTIONS */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-4">
            Quick Actions
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
              Assign New Task
            </button>

            <button className="bg-gray-200 text-gray-500 hover:text-gray-700 py-2 rounded-lg hover:bg-gray-300">
              View All Submissions
            </button>

            <button className="bg-gray-200 py-2 text-gray-500 rounded-lg hover:bg-gray-300">
              Export Task Report
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}