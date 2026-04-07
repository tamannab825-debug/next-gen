"use client";

export default function CandidateCompaniesPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 space-y-5 text-gray-700">

      {/* ================= FILTER BAR ================= */}
      <section className="bg-white rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search company or tech stack"
          className="border text-red-500 rounded-xl px-4 py-2 text-sm w-full md:w-80 focus:ring-2 focus:ring-red-500 outline-none"
        />

        <div className="flex gap-3 flex-wrap">
          {["All", "Startups", "Product", "Service", "Remote Friendly"].map(
            (f, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-full text-sm border text-red-400 bg-red-50 hover:bg-red-500 hover:text-white transition"
              >
                {f}
              </button>
            )
          )}
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ================= LEFT: COMPANY LIST ================= */}
        <section className="lg:col-span-2 grid grid-cols-2 gap-6 ">

          {[
            {
              name: "TechNova Solutions",
              type: "Product Based",
              jobs: "8 Open Roles",
              tech: "React • Next.js • Node",
            },
            {
              name: "Designify Labs",
              type: "Startup",
              jobs: "4 Open Roles",
              tech: "UI/UX • Tailwind • Figma",
            },
            {
              name: "CloudCore Systems",
              type: "Service Based",
              jobs: "12 Open Roles",
              tech: "JavaScript • APIs • AWS",
            },
            {
              name: "Kleon Team",
              type: "Service Based",
              jobs: "6 Open Roles",
              tech: "React • APIs • Next",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/images/company.jfif"
                  className="w-14 h-14 rounded-full bg-gray-100 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-md">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {c.type}
                  </p>
                </div>

                <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  {c.jobs}
                </span>
              </div>

              {/* DETAILS */}
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Tech Stack:</strong> {c.tech}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="mt-5 flex gap-3">
                <a href="/optional2/companyJob">
                  <button className="flex-1 bg-red-500 text-white py-2 px-6 rounded-xl text-sm hover:bg-red-600">
                  View Open Roles
                </button>
                </a>
                <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-xl text-sm hover:bg-red-500 hover:text-white">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* ================= RIGHT: INSIGHTS ================= */}
        <aside className="space-y-6">

          {/* MARKET INSIGHT */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">
              Hiring Trends
            </h3>
            <p className="text-sm text-gray-600">
              Product-based companies are hiring aggressively for frontend
              roles with strong React and performance optimization skills.
            </p>
          </section>

          {/* SAVED COMPANIES */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">
              Saved Companies
            </h3>

            <div className="space-y-3 text-sm">
              <p className="text-gray-600">
                • TechNova Solutions
              </p>
              <p className="text-gray-600">
                • CloudCore Systems
              </p>
            </div>
          </section>

          {/* ALERT CTA */}
          <section className="bg-linear-to-r from-red-500 to-red-600 text-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">
              Job Alerts
            </h3>
            <p className="text-sm opacity-90">
              Get notified when companies start hiring for roles matching your
              skills.
            </p>
            <button className="mt-4 bg-white text-red-600 w-full py-2 rounded-xl text-sm font-medium">
              Enable Alerts
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}