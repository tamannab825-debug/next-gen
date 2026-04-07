"use client";

export default function CompanyJobsPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Bangalore",
      salary: "₹6–10 LPA",
      applicants: 320,
      status: "Active",
      posted: "3 days ago",
    },
    {
      title: "UI / UX Designer",
      type: "Remote",
      location: "India",
      salary: "₹5–8 LPA",
      applicants: 180,
      status: "Active",
      posted: "1 week ago",
    },
    {
      title: "Backend Engineer",
      type: "Hybrid",
      location: "Delhi NCR",
      salary: "₹8–12 LPA",
      applicants: 260,
      status: "Paused",
      posted: "2 weeks ago",
    },
    {
      title: "Data Analyst",
      type: "Full Time",
      location: "Gurgaon",
      salary: "6-8 LPA",
      applicants: 130,
      status: "Paused",
      posted: "1 weeks ago",
    },
    {
      title: "Frontend Developer",
      type: "Remote",
      location: "Noida",
      salary: "8-12 LPA",
      applicants: 70,
      status: "Active",
      posted: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-6">

      {/* ================= COMPANY HEADER ================= */}
      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex gap-6 items-center">
          <img
            src="/images/company.jfif"
            alt="Company"
            className="w-20 h-20 rounded-xl bg-gray-200"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              TechNova Solutions
            </h1>
            <p className="text-sm text-gray-500">
              IT Services • Product Development
            </p>
            <p className="text-sm text-red-400 mt-2">
               • Hiring since 2018 
            </p>
          </div>
        </div>

        <button className="bg-red-500 text-white px-5 py-5 rounded-xl text-sm hover:bg-red-600 transition">
          + Post New Job
        </button>
      </div>

      {/* ================= JOB STATS ================= */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Jobs", value: "18" },
          { label: "Active Jobs", value: "12" },
          { label: "Total Applicants", value: "1,240" },
          { label: "Positions Filled", value: "6" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div> */}

      {/* ================= JOB LIST ================= */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Open Positions
        </h2>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="border border-gray-300 bg-gray-100 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 hover:shadow-md transition"
            >
              {/* LEFT */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-700 mt-1">
                  {job.type} • {job.location} • {job.salary}
                </p>

                <div className="flex gap-4 text-xs text-red-500 mt-2">
                  <span>{job.posted}</span>
                  <span>{job.applicants} applicants</span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    job.status === "Active"
                      ? "bg-green-200 text-green-700"
                      : "bg-yellow-200 text-yellow-700"
                  }`}
                >
                  {job.status}
                </span>

                <button className="text-sm px-4 py-2 rounded-lg border bg-white  hover:bg-gray-200 hover:text-gray-600 text-red-500 transition">
                  View
                </button>

                <button className="text-sm px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                  Applicants
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}