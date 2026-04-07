"use client";

export default function SkillGrowthPage() {
  const journey = [
    {
      year: "2022",
      phase: "Foundation Phase",
      title: "Web Fundamentals",
      desc: "Built a strong base in web standards, layouts, and responsive design.",
      skills: ["HTML", "CSS", "Flexbox", "Media Queries"],
      progress: "35%",
    },
    {
      year: "2023",
      phase: "Core Engineering",
      title: "JavaScript & DOM Mastery",
      desc: "Developed logic-heavy UI features, DOM handling, and interactive components.",
      skills: ["JavaScript", "DOM", "Events", "ES6"],
      progress: "55%",
    },
    {
      year: "2023",
      phase: "Integration Layer",
      title: "API & Async Programming",
      desc: "Worked with REST APIs, async flows, and real-time UI updates.",
      skills: ["REST API", "Async/Await", "JSON"],
      progress: "70%",
    },
    {
      year: "2024",
      phase: "Advanced Frontend",
      title: "React & UI Architecture",
      desc: "Built scalable component systems and production-ready interfaces.",
      skills: ["React", "Hooks", "Component Design"],
      progress: "85%",
    },
    {
      year: "2024",
      phase: "Optimization",
      title: "UX & Performance",
      desc: "Improved UX, optimized rendering, and refined responsive behavior.",
      skills: ["UX", "Performance", "Tailwind"],
      progress: "95%",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-8">

      {/* ================= HEADER ================= */}
      <section className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Skill Growth & Learning Evolution
            </h1>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              A structured view of how skills evolved through hands-on learning,
              projects, and real-world frontend challenges.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Learning Years", value: "3+" },
              { label: "Skill Domains", value: "6+" },
              { label: "Growth Rate", value: "High" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-4 text-center"
              >
                <p className="text-xl font-semibold text-red-500">
                  {m.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ===== LEFT — GROWTH TIMELINE ===== */}
        <section className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-6">
            Skill Growth Timeline
          </h2>

          <div className="space-y-6">
            {journey.map((j, i) => (
              <div
                key={i}
                className="relative bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md transition"
              >
                {/* Phase + Year */}
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs text-gray-400">
                    {j.year} • {j.phase}
                  </p>
                  <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
                    Progress {j.progress}
                  </span>
                </div>

                <h3 className="font-semibold text-gray-800">
                  {j.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {j.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {j.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-3 py-1 rounded-full border bg-white text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: j.progress }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== RIGHT — INSIGHTS ===== */}
        <section className="space-y-6">

          {/* Growth Summary */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-gray-700">
              Growth Summary
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Strong foundation → advanced frontend systems</li>
              <li>• Hands-on project-driven learning</li>
              <li>• Continuous improvement mindset</li>
              <li>• Industry-aligned skill progression</li>
            </ul>
          </div>

          {/* Recruiter Insight */}
          <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">
              Recruiter Insight
            </h3>

            <p className="text-sm opacity-90 mt-2 leading-relaxed">
              This growth pattern shows consistent upskilling, real-world exposure,
              and readiness for modern frontend roles.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xl font-semibold">90%</p>
                <p className="text-xs opacity-80">Skill Consistency</p>
              </div>
              <div>
                <p className="text-xl font-semibold">High</p>
                <p className="text-xs opacity-80">Hiring Potential</p>
              </div>
            </div>
          </div>


    {/* ===== CAREER READINESS ===== */}
  <div className="bg-white rounded-3xl p-6 shadow-sm">
    <h3 className="font-semibold mb-4 text-gray-700">Career Readiness</h3>

    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-semibold text-green-600">
          92%
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Frontend Role Ready
        </p>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p>✔ Core Skills</p>
        <p>✔ Project Experience</p>
        <p>✔ UI Systems</p>
        <p>✔ Industry Tools</p>
      </div>
    </div>
  </div>

   {/* ===== NEXT SKILL FOCUS ===== */}
  <div className="bg-white rounded-3xl p-6 shadow-sm">
    <h3 className="font-semibold mb-4 text-gray-700">Next Skill Focus</h3>

    <ul className="space-y-3 text-sm text-gray-600">
      <li>• Advanced React Patterns</li>
      <li>• Performance Optimization</li>
      <li>• Accessibility (WCAG)</li>
      <li>• System Design for UI</li>
    </ul>

    <div className="mt-4 px-4 py-2 bg-red-50 text-red-600 text-xs rounded-xl inline-block">
      In Progress
    </div>
  </div>

  {/* ===== CERTIFICATIONS ===== */}
  <div className="bg-white rounded-3xl p-6 shadow-sm">
    <h3 className="font-semibold mb-4 text-gray-700">Certifications & Training</h3>

    <div className="space-y-3 text-sm text-gray-600">
      <p>• Frontend Development Bootcamp</p>
      <p>• JavaScript Advanced Certification</p>
      <p>• React Fundamentals Training</p>
      <p>• UI / UX Design Workshop</p>
    </div>
  </div>

        </section>

      </div>

    </div>
  );
}