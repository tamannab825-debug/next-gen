"use client";

export default function ApplicantsPage() {
  const applicants = [
    {
      name: "Aman Verma",
      role: "Frontend Developer",
      experience: "2.5 yrs",
      skills: ["React", "Tailwind", "JavaScript"],
      status: "Shortlisted",
      applied: "2 days ago",
      score: 82,
    },
    {
      name: "Neha Sharma",
      role: "Frontend Developer",
      experience: "1.8 yrs",
      skills: ["React", "CSS", "UI"],
      status: "In Review",
      applied: "4 days ago",
      score: 74,
    },
    {
      name: "Rahul Mehta",
      role: "Frontend Developer",
      experience: "3.2 yrs",
      skills: ["Next.js", "API", "MongoDB"],
      status: "Rejected",
      applied: "1 week ago",
      score: 61,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-4 space-y-4">

      {/* HEADER */}
      <section className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Applicants
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Review, shortlist, and manage candidates for this job role
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800">128</p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-green-600">32</p>
            <p className="text-xs text-gray-500">Shortlisted</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-red-500">18</p>
            <p className="text-xs text-gray-500">Rejected</p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="  px-3 flex flex-wrap gap-8">
        {["All", "Shortlisted", "In Review", "Rejected"].map((filter) => (
          <button
            key={filter}
            className="px-4 py-1.5 text-sm rounded-full border  text-red-400 bg-red-50 hover:bg-red-500 hover:text-white "
          >
            {filter}
          </button>
        ))}
      </section>

      {/* APPLICANTS LIST */}
      <section className="space-y-4">
        {applicants.map((applicant, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6">

              {/* LEFT */}
              <div className="flex gap-4">
                <img
                  src="/images/person.png"
                  className="w-12 h-12 rounded-full bg-gray-200"
                  alt=""
                />

                <div>
                  <h3 className="font-medium text-gray-800">
                    {applicant.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {applicant.role} · {applicant.experience}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {applicant.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400 mt-2">
                    Applied {applicant.applied}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end justify-between gap-4">

                {/* STATUS + SCORE */}
                <div className="text-right">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full
                      ${
                        applicant.status === "Shortlisted"
                          ? "bg-green-100 text-green-600"
                          : applicant.status === "Rejected"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }
                    `}
                  >
                    {applicant.status}
                  </span>

                  <p className="text-sm text-gray-600 mt-2">
                    Match Score
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {applicant.score}%
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs border border-gray-500 rounded-lg text-gray-600 hover:bg-gray-100">
                    Resume
                  </button>
                  <button className="px-3 py-1.5 text-xs border border-green-500 text-green-600 rounded-lg hover:bg-green-50">
                    Shortlist
                  </button>
                  <button className="px-3 py-1.5 text-xs border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
