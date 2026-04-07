"use client";

const skills = [
  { name: "React", progress: 85 },
  { name: "JavaScript", progress: 75 },
  { name: "Node.js", progress: 60 },
  { name: "System Design", progress: 40 },
];

const tasks = [
  { title: "Build React Dashboard", status: "Completed" },
  { title: "API Integration Project", status: "In Progress" },
  { title: "Authentication System", status: "Pending" },
];

const milestones = [
  { title: "Frontend Basics Completed", date: "Jan 2026" },
  { title: "React Advanced Concepts", date: "March 2026" },
  { title: "Full Stack Project", date: "June 2026" },
];

const feedback = [
  {
    mentor: "Sarah Johnson",
    message: "Great improvement in React performance optimization.",
  },
  {
    mentor: "Michael Lee",
    message: "Work on backend architecture and API security.",
  },
];

export default function LearningProgressPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-4">

      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Learning Progress
        </h1>
        <p className="text-gray-500 text-sm">
          Track mentee skill growth, task completion and mentor feedback
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Active Mentees", value: "128" },
          { title: "Tasks Completed", value: "342" },
          { title: "Skills Mastered", value: "26" },
          { title: "Milestones Achieved", value: "84" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
          >
            <p className="text-2xl font-semibold text-red-500 mt-1">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm">{stat.title}</p>
            
          </div>
        ))}
      </div>

      {/* SKILLS + TASKS */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SKILL PROGRESS */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-gray-700">
            Skills Progress
          </h3>

           <a href="/mentorship/skill-progress" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
          </div>

          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TASK COMPLETION */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
         <div className="flex justify-between mb-4">
           <h3 className="font-semibold text-gray-700">
            Task Completion
          </h3>

           <a href="/mentorship/task-completion" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
         </div>

          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div
                key={i}
                className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3"
              >
                <p className="text-sm text-gray-700">{task.title}</p>

                <span
                  className={`text-xs px-3 py-1 rounded ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MILESTONES + FEEDBACK */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* LEARNING MILESTONES */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
         <div className="flex justify-between  mb-5">
           <h3 className="font-semibold text-gray-700">
            Learning Milestones
          </h3>
           <a href="/mentorship/learning-milestone" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
         </div>

          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-3">

                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {m.title}
                  </p>
                  <p className="text-xs text-gray-400">{m.date}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* MENTOR FEEDBACK */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
         <div className="flex justify-between mb-4">
           <h3 className="font-semibold text-gray-700">
            Mentor Feedback
          </h3>

          <a href="/mentorship/feedback" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
         </div>

          <div className="space-y-4">
            {feedback.map((f, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50"
              >
                <p className="text-sm text-gray-600 mb-2">
                  {f.message}
                </p>

                <p className="text-xs text-red-400">
                  — {f.mentor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WEEKLY PROGRESS CHART AREA */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-semibold text-gray-700">
            Weekly Learning Progress
          </h3>

          <select className="border rounded px-2 py-1 text-sm">
            <option>Last 4 Weeks</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <img src="/images/3.jpg.jpeg" alt="chart" className="h-48 w-full flex items-center justify-center text-gray-400" />
      </div>

    </div>
  );
}