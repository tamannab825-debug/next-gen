"use client";

export default function SkillImpactPage() {
  return (
    <div className="space-y-8 p-6 bg-gray-100 min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Skill Usage & Impact
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            A breakdown of how core technologies were applied in real projects,
            systems, and production-level implementations.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            ["Total Projects", "18+"],
            ["Production Apps", "10+"],
            ["Hands-on Hours", "1200+"],
          ].map((s, i) => (
            <div
              key={i}
              className="bg-red-50 rounded-2xl px-5 py-4 text-center"
            >
              <p className="text-2xl font-semibold text-red-500">{s[1]}</p>
              <p className="text-xs text-gray-600 mt-1">{s[0]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="grid lg:grid-cols-3 gap-8">

        {/* ===== CENTER / LEFT CONTENT ===== */}
        <div className="lg:col-span-2 space-y-8">

          {/* ===== SKILL USAGE CARDS ===== */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-6 text-gray-700">Core Skill Impact</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "React",
                  value: "6 Production Apps",
                  desc: "Dashboards, admin panels & reusable UI systems",
                  glow: "bg-blue-200",
                },
                {
                  title: "Next.js",
                  value: "4 Scalable Systems",
                  desc: "SSR, routing, SEO & performance optimization",
                  glow: "bg-purple-200",
                },
                {
                  title: "JavaScript",
                  value: "1000+ Coding Hours",
                  desc: "Business logic, APIs, animations & utilities",
                  glow: "bg-orange-200",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="relative bg-gray-50 rounded-2xl p-6 overflow-hidden hover:shadow-md transition group"
                >
                  <div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 ${m.glow} rounded-full opacity-40 group-hover:scale-110 transition`}
                  />

                  <div className="relative z-10 space-y-2">
                    <p className="text-sm text-red-500 font-medium">
                      {m.title}
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {m.value}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== PROJECT CONTRIBUTION ===== */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-6 text-gray-700">Project-Level Contribution</h2>

            <div className="space-y-5">
              {[
                ["Admin Dashboards", "Built scalable UI layouts with role-based access"],
                ["Job Portals", "Designed candidate & recruiter workflows"],
                ["Analytics Panels", "Integrated charts, metrics & filters"],
                ["Landing Systems", "Optimized SEO & performance"],
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-100 rounded-2xl p-4"
                >
                  <div className="w-3 h-3 mt-2 bg-red-500 rounded-full" />
                  <div>
                    <p className="text-md font-medium text-gray-700">
                      {p[0]}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {p[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        

        </div>

        {/* ===== RIGHT SIDE PANEL ===== */}
        <div className="space-y-6">

          {/* ===== SKILL DEPTH ===== */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-gray-700">Skill Depth</h3>

            {[
              ["React Ecosystem", "Advanced"],
              ["Next.js Architecture", "Strong"],
              ["JavaScript Logic", "Expert"],
              ["UI Systems", "Advanced"],
            ].map((s, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-sm mb-3"
              >
                <span className="text-gray-600">{s[0]}</span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                  {s[1]}
                </span>
              </div>
            ))}
          </div>

          {/* ===== INDUSTRY READINESS ===== */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-gray-700">Industry Readiness</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>✔ Production workflows</p>
              <p>✔ Modular architecture</p>
              <p>✔ Performance optimization</p>
              <p>✔ Maintainable codebase</p>
            </div>

            <div className="mt-4 bg-red-50 text-red-600 text-xs px-4 py-2 rounded-xl inline-block">
              Frontend Role Ready
            </div>
          </div>

            {/* ===== OUTCOME ===== */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4 text-gray-700">Outcome & Value Delivered</h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              These skills were applied to build production-ready interfaces,
              maintainable component systems, and user-centric designs that
              align with business goals, performance benchmarks, and scalability
              requirements.
            </p>
          </section>

        </div>
      </section>

    </div>
  );
}