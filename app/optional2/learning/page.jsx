"use client";

export default function CandidateLearning() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">

            {/* ACTIVE TRACK */}
            <section className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className=" font-semibold text-gray-800">
                    Frontend Developer Track
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    HTML · CSS · JavaScript · React
                  </p>
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600">
                  In Progress
                </span>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Overall Progress</span>
                  <span className="mt-1">60%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-red-500 rounded-full w-[60%]" />
                </div>
              </div>
            </section>

           {/* WEEKLY TASKS */}
<section className="bg-white rounded-2xl border border-gray-100 p-6">
  <div className="flex justify-between items-center mb-5">
    <h3 className=" font-semibold text-gray-800">
      Weekly Tasks
    </h3>
   
    <a href="/optional2/weekly">
    <button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm">View All</button>
    </a>
  </div>

  <div className="space-y-4">
    {[
      {
        title: "Build a Responsive Landing Page",
        tag: "HTML / CSS",
        status: "Completed",
        deadline: "Due Mon",
      },
      {
        title: "Practice JavaScript Array Methods",
        tag: "JavaScript",
        status: "Completed",
        deadline: "Due Wed",
      },
      {
        title: "Create React Component with Props",
        tag: "React",
        status: "In Review",
        deadline: "Due Fri",
      },
    ].map((task, i) => (
      <div
        key={i}
        className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-400 hover:bg-gray-100 transition"
      >
        {/* LEFT */}
        <div className="flex gap-4">
          {/* STATUS BAR */}
          <div
            className={`w-1 rounded-full ${
              task.status === "Completed"
                ? "bg-green-500"
                : "bg-yellow-400"
            }`}
          />

          <div>
            <p className="text-sm font-medium text-gray-800">
              {task.title}
            </p>
            <div className="flex gap-3 mt-1 text-xs text-gray-500">
              <span>{task.tag}</span>
              <span>•</span>
              <span>{task.deadline}</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            task.status === "Completed"
              ? "bg-green-50 text-green-600"
              : "bg-yellow-50 text-yellow-600"
          }`}
        >
          {task.status}
        </span>
      </div>
    ))}
  </div>
</section>


           {/* ASSIGNMENTS */}
<section className="bg-white rounded-2xl border border-gray-100 p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold text-gray-800">
      Assignments
    </h3>
    <a href="/optional2/assignment ">
    <button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-sm rounded-lg">Full View </button>
    </a>
  </div>

  <div className="space-y-4">

   {/* ASSIGNMENTS */}
<section className="bg-gray-100 rounded-2xl border border-gray-100 p-5">
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold text-gray-800">
      Assignments
    </h3>
   
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* LEFT: INFO */}
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-800">
        Portfolio Website
      </p>
      <p className="text-xs text-gray-500">
        React + Tailwind personal portfolio
      </p>

      <div className="flex items-center mt-4 gap-2 text-xs">
        <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
          Due in 3 days
        </span>
        <span className="px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
          Medium
        </span>
      </div>
    </div>

    {/* RIGHT: ACTION */}
    <div className="flex flex-col justify-between items-end">
      <button className="px-4 py-1.5 text-sm rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition">
        Submit
      </button>

      {/* MINI PROGRESS */}
      <div className="w-32">
        <div className="flex justify-between text-[10px] text-gray-600 mb-1">
          <span>Progress</span>
          <span>70%</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-red-500 rounded-full w-[70%]" />
        </div>
      </div>
    </div>

  </div>
</section>


  </div>
</section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">

            {/* LEADERBOARD */}
<section className="bg-white rounded-2xl border border-gray-100 p-6">
  <div className="flex items-center justify-between mb-5">
    <h3 className="font-semibold text-gray-800">
      Leaderboard
    </h3>
    <a href="/optional2/leaderboard">
    <button className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg">View</button>
    </a>
  </div>

  <ul className="space-y-3">
    {[
      { name: "Aman", score: "980 pts", rank: 1 },
      { name: "You", score: "920 pts", rank: 2 },
      { name: "Neha", score: "890 pts", rank: 3 },
    ].map((user, i) => (
      <li
        key={i}
        className={`flex items-center justify-between p-4 rounded-xl border border-gray-400 bg-white hover:border-red-200 hover:bg-red-50`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* RANK / ICON */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              user.rank === 1
                ? "bg-yellow-100 text-yellow-600"
                : user.rank === 2
                ? "bg-gray-200 text-gray-600"
                : user.rank === 3
                ? "bg-orange-100 text-orange-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {user.rank}
          </div>

          <div>
            <p
              className={`text-sm font-medium ${
                user.name === "You"
                  ? "text-red-600"
                  : "text-gray-800"
              }`}
            >
              {user.name}
            </p>
            <p className="text-xs text-gray-500">
              Frontend Track
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">
            {user.score}
          </p>
          {user.rank === 1 && (
            <p className="text-xs text-yellow-600 mt-0.5">
              🏆 Top Performer
            </p>
          )}
        </div>
      </li>
    ))}
  </ul>
</section>


            {/* COMPLETION BADGES – SIDEBAR VERSION */}
<section className="bg-white rounded-2xl border border-gray-100 p-6">
  <h3 className=" font-semibold text-gray-800 mb-4">
    Completion Badges
  </h3>

  <div className="space-y-3">
    {[
      { title: "HTML Basics", earned: true },
      { title: "CSS Mastery", earned: true },
      { title: "JavaScript Core", earned: false },
    ].map((badge, i) => (
      <div
        key={i}
        className={`flex items-center justify-between px-4 py-3 rounded-xl border ${
          badge.earned
            ? "bg-red-50 border-red-200"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${
              badge.earned
                ? "bg-red-100 text-red-600"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {badge.earned ? "✓" : "🔒"}
          </div>

          <span
            className={`text-sm ${
              badge.earned ? "text-gray-800" : "text-gray-500"
            }`}
          >
            {badge.title}
          </span>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            badge.earned
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {badge.earned ? "Earned" : "Locked"}
        </span>
      </div>
    ))}
  </div>
</section>

          </aside>
        </div>

        {/* PEER FEEDBACK */}
          {/* ================= FEEDBACK & TESTIMONIALS ================= */}
<div className="max-w-7xl pb-5 mx-auto mt-10">
  
  <div className="flex justify-between">
    <div>
      <h2 className=" font-semibold text-gray-800 mb-2">
    Feedback & Recommendations
  </h2>
  <p className="text-gray-600 mb-8">
    What mentors, colleagues, and recruiters say about the candidate
  </p>
    </div>

    <a href="/optional2/feedback" >
      <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-lg">View All</button>
    </a>
  </div>
 

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Feedback Card */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Project Mentor
          </p>
          <p className="text-sm text-gray-500">
            Senior Frontend Engineer
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Tamanna demonstrated strong frontend fundamentals and consistently
        delivered clean, reusable components. Her ability to understand
        requirements and convert them into functional UI was impressive.
      </p>
    </div>

    {/* Feedback Card */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Team Lead
          </p>
          <p className="text-sm text-gray-500">
            Product Development
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        A reliable team member with a positive attitude. She actively
        participated in discussions, took ownership of tasks, and delivered
        features on time.
      </p>
    </div>

    {/* Feedback Card */}
    <div className="bg-white rounded-xl  shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Recruiter
          </p>
          <p className="text-sm text-gray-500">
            Hiring Manager
          </p>
        </div>
      </div> 

      <p className="text-gray-600 text-sm leading-relaxed">
        The profile is well-structured and showcases relevant skills clearly.
        Strong potential for frontend development roles in fast-paced teams.
      </p>
    </div>

  </div>
</div>

      </div>
    </div>
  );
}
