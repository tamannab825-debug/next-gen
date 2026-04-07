"use client";

export default function CandidateSkillsPage() {
  const skills = [
    { name: "React.js", level: 85, verified: true },
    { name: "Next.js", level: 78, verified: true },
    { name: "JavaScript", level: 82, verified: true },
    { name: "Tailwind CSS", level: 75, verified: false },
    { name: "HTML & CSS", level: 90, verified: true },
    { name: "Git & GitHub", level: 70, verified: false },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 space-y-5">

      {/* ================= HERO HEADER ================= */}
      <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Skills & Expertise
          </h1>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            Recruiters evaluate you based on skill strength, verification, and demand.
            Keep this section strong to increase visibility.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-xl font-bold text-red-500">62%</p>
            <p className="text-sm text-gray-500">Overall Strength</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-500">Total Skills</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">7</p>
            <p className="text-sm text-gray-500">Verified</p>
          </div>
        </div>
      </div>

      {/* ================= SKILL POWER CARD ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* POWER METER */}
        <div className="bg-linear-to-br from-red-500 to-pink-500 rounded-3xl p-6 text-white shadow-sm">
          <h3 className="font-semibold">Skill Power Index</h3>
          <p className="text-sm opacity-90 mt-1">
            Based on skill depth & recruiter demand
          </p>

          <div className="mt-6 bg-white/20 rounded-2xl p-5">
            <p className="text-4xl font-bold">62%</p>
            <p className="text-xs opacity-80 mt-1">
              Above average candidate
            </p>

            <ul className="mt-4 space-y-1 text-xs">
              <li>✔ Strong frontend foundation</li>
              <li>✔ High React demand</li>
              <li>✔ Verified core skills</li>
            </ul>
          </div>
        </div>

        {/* MARKET VALUE */}
<div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
  <div className="flex justify-between items-center mb-5">
    <div>
      <h3 className="font-semibold text-gray-800">
        Market Value Insights
      </h3>
      <p className="text-xs text-gray-500 mt-1">
        How your skills perform in the current job market
      </p>
    </div>

    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
      Strong Demand
    </span>
  </div>

  <div className="grid sm:grid-cols-3 gap-4">
    {[
      {
        label: "Jobs Matching Skills",
        value: "1,420+",
        sub: "Across frontend & UI roles",
        trend: "+18% this month",
      }, 
      {
        label: "Recruiter Profile Views",
        value: "3.2x",
        sub: "Higher than avg candidates",
        trend: "Growing weekly",
      },
      {
        label: "Skill Demand Level",
        value: "High",
        sub: "React & Next.js driven",
        trend: "Top 10% profiles",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="relative bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow overflow-hidden transition"
      >
        {/* Soft Accent */}
        <div className="absolute -right-6 -top-6 w-20 h-20 bg-red-100 rounded-full  opacity-30" />

        <div className="relative z-10 space-y-1">
          <p className="text-xs text-gray-500">
            {item.label}
          </p>

          <p className="text-2xl font-semibold text-gray-900">
            {item.value}
          </p>

          <p className="text-xs text-gray-500">
            {item.sub}
          </p>

          <p className="text-[11px] text-green-600 mt-2">
            ↑ {item.trend}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Footer Insight */}
  <div className="mt-6 bg-gray-50 rounded-2xl p-4 text-sm text-gray-600">
    💡 Profiles with similar skill sets receive more interview calls when
    skills are verified and updated regularly.
  </div>
</div>
      </div>

      {/* ================= SKILLS LIST ================= */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-6">
          Skill Breakdown
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border rounded-2xl p-5 hover:shadow-sm transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">
                    {skill.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {skill.verified ? "Verified Skill" : "Unverified"}
                  </p>
                </div>

                {skill.verified && (
                  <span className="text-[11px] px-2 py-1 rounded-full bg-green-100 text-green-600">
                    Verified
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold text-gray-800">
            Increase your hiring chances
          </h3>
          <p className="text-sm text-gray-500">
            Verified skills get up to 3x more recruiter attention.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-xl border text-sm text-gray-500 hover:bg-gray-100 transition">
            Add Skill
          </button>
          <button className="px-5 py-2 rounded-xl bg-red-500 text-white text-sm hover:bg-red-600 transition">
            Verify Skills
          </button>
        </div>
      </div>

    </div>
  );
}