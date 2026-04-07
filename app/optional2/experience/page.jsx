"use client";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-800 space-y-6">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-xl font-semibold">Experience</h1>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              Hands-on experience building modern frontend interfaces,
              collaborating with teams, and delivering scalable UI solutions.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            {[
              ["Total Experience", "1 Year"],
              ["Roles", "Frontend Intern"],
              ["Companies", "1+"],
            ].map((s, i) => (
              <div key={i} className="text-center ">
                <p className="text-xl font-semibold text-red-500">{s[1]}</p>
                <p className="text-sm text-gray-500">{s[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        {/* ===== LEFT: TIMELINE ===== */}
        <section className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="font-semibold mb-6">Professional Timeline</h2>

          <div className="border-l-2 border-red-500 pl-6 space-y-8">

            {/* EXPERIENCE ITEM */}
            <div>
              <span className="inline-block text-xs text-red-500 bg-red-50 px-3 py-1 rounded-full mb-2">
                2024 – Present
              </span>

              <h3 className="text-md font-semibold">
                Frontend Developer Intern
              </h3>

              <p className="text-xs text-gray-500">
                Product-based Web Platform
              </p>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Worked on building scalable and responsive user interfaces
                using modern frontend frameworks. Collaborated with designers
                and backend developers to deliver production-ready features.
              </p>
            </div>

            {/* EXPERIENCE ITEM */}
            <div>
              <span className="inline-block text-xs text-red-500 bg-red-50 px-3 py-1 rounded-full mb-2">
                Academic Projects
              </span>

              <h3 className="text-md font-semibold">
                Frontend Engineer (Projects)
              </h3>

              <p className="text-xs text-gray-500">
                Self-driven & team-based work
              </p>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Designed and developed multiple real-world applications
                including dashboards, admin panels, and portfolio systems
                focusing on UX consistency and performance optimization.
              </p>
            </div>

            {/* EXPERIENCE ITEM */}
            <div>
              <span className="inline-block text-xs text-red-500 bg-red-50 px-3 py-1 rounded-full mb-2">
                Projects
              </span>

              <h3 className="text-md font-semibold">
                Frontend Engineer (Projects)
              </h3>

              <p className="text-xs text-gray-500">
                Self-driven & team-based work
              </p>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Designed and developed multiple real-world applications
                including dashboards, admin panels, and portfolio systems
                focusing on UX consistency and performance optimization.
              </p>
            </div>

          </div>
        </section>

        {/* ===== RIGHT: HIGHLIGHTS ===== */}
        <div className="space-y-6">

          {/* IMPACT */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Role Impact</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Built reusable UI components</li>
              <li>• Improved page load performance</li>
              <li>• Implemented responsive layouts</li>
              <li>• Converted designs into clean UI</li>
              <li>• Maintained design consistency</li>
            </ul>
          </section>

          {/* TOOLS */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Tools & Technologies</h3>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Git",
              ].map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-red-50 rounded-full text-red-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* WORK STYLE */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">Work Style</h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Agile & task-driven</li>
              <li>• Clean code practices</li>
              <li>• Feedback-oriented</li>
              <li>• UI/UX focused</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}