"use client";

export default function JobOpenings() {
  const jobs = [
    {
      role: "Frontend Developer",
      type: "Full-time",
      salary: "₹8 – 12 LPA",
      applicants: 128,
      status: "Open",
      skills: ["React", "Tailwind", "JavaScript"],
      posted: "3 days ago",
    },
    {
      role: "UI/UX Designer",
      type: "Contract",
      salary: "₹40k / month",
      applicants: 76,
      status: "Open",
      skills: ["Figma", "UX Research", "Prototyping"],
      posted: "1 week ago",
    },
    {
      role: "Backend Engineer",
      type: "Full-time",
      salary: "₹12 – 18 LPA",
      applicants: 52,
      status: "Paused",
      skills: ["Node.js", "MongoDB", "APIs"],
      posted: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-4 space-y-6">

      {/* PAGE HEADER */}
     <section className="bg-white rounded-2xl p-5 border border-gray-100">
  <div className="flex flex-col lg:flex-row justify-between gap-6">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-xl pb-1 font-semibold text-gray-800">
        Job Openings
      </h1>

      <p className="text-sm text-gray-500 mt-1 max-w-lg">
        Manage your active and paused hiring positions, track applicants,
        and monitor hiring performance.
      </p>

      {/* MINI CONTEXT */}
      {/* <p className="text-xs text-green-600 mt-2">
        ● 12 new applications received today
      </p> */}
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-wrap items-center gap-6">

      {/* QUICK STATS */}
      <div className="flex gap-6">

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">6</p>
          <p className="text-xs text-gray-500">Active Jobs</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">2</p>
          <p className="text-xs text-gray-500">Paused</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-red-500">324</p>
          <p className="text-xs text-gray-500">Applicants</p>
        </div>

      </div>

      {/* PRIMARY ACTION */}
      <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-4 rounded-lg text-sm whitespace-nowrap">
        + Post New Job
      </button>
    </div>

  </div>
</section>


      {/* JOB LIST */}
      {/* JOB LIST – GRID */}
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {jobs.map((job, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition flex flex-col justify-between"
    >

      {/* TOP */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h2 className="text-base font-semibold text-gray-800">
            {job.role}
          </h2>

          <span
            className={`text-xs px-2 py-0.5 rounded-full
              ${
                job.status === "Open"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }
            `}
          >
            {job.status}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {job.type} · {job.salary}
        </p>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-1.5">
          {job.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-[11px] text-gray-400">
              +{job.skills.length - 4}
            </span>
          )}
        </div>

        <p className="text-xs text-gray-400">
          Posted {job.posted}
        </p>
      </div>

      {/* FOOTER */}
      <div className="mt-4 pt-4 border-t flex items-center justify-between">

        {/* APPLICANTS */}
        <div>
          <p className="text-lg font-semibold text-red-500">
            {job.applicants}
          </p>
          <p className="text-[11px] text-gray-500">
            Applicants
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs border border-gray-500 rounded-lg text-gray-500 hover:bg-gray-300 hover:text-gray-800 ">
            Applicants
          </button>

          <button className="px-3 py-1.5 text-xs border border-red-500 text-red-500 rounded-lg hover:bg-red-100 hover:text-red-600">
            Manage
          </button>
        </div>
      </div>
    </div>
  ))}
</section>

    </div>
  );
}
