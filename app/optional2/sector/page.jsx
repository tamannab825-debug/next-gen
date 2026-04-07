"use client";

export default function TopHiringSectorPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-800 space-y-8">

      

      {/* ================= ROLE DEMAND ================= */}
      <section className="bg-white rounded-3xl p-5 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">
          Most Hired Roles
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Frontend Developer", "1,200+ openings"],
            ["Backend Engineer", "980+ openings"],
            ["Full Stack Developer", "860+ openings"],
            ["UI Engineer", "640+ openings"],
          ].map((r, i) => (
            <div
              key={i}
              className="bg-red-50 rounded-2xl p-5 hover:bg-white hover:shadow transition"
            >
              <p className="font-semibold text-gray-800">
                {r[0]}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {r[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILL ALIGNMENT ================= */}
      <section className="grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">
            Skills Companies Are Looking For
          </h3>

          <div className="space-y-4">
            {[
              ["React & Modern JS", "92% demand"],
              ["Performance Optimization", "78% demand"],
              ["UI Systems & Design", "71% demand"],
              ["API Integration", "84% demand"],
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{s[0]}</span>
                  <span>{s[1]}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-red-500 rounded-full w-[80%]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="font-semibold mb-3">
            Why This Sector?
          </h3>

          <ul className="text-sm text-gray-600 space-y-3">
            <li>• Product-based startups scaling fast</li>
            <li>• Strong demand for frontend excellence</li>
            <li>• Higher salary growth & flexibility</li>
            <li>• Remote & hybrid opportunities</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg">
            Ready to explore opportunities?
          </h3>
          <p className="text-sm text-gray-500">
            View jobs aligned with the top hiring sector and your skills.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-6 py-2 rounded-xl text-sm hover:bg-red-600">
            View Matching Jobs
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-xl text-sm hover:bg-red-500 hover:text-white">
            Enable Alerts
          </button>
        </div>
      </section>

       {/* ================= SECTOR HIGHLIGHT ================= */}
      <section className="bg-linear-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white text-center shadow-sm">
        <p className="text-sm uppercase tracking-wide opacity-90">
          Leading Sector
        </p>
        <h2 className="text-xl font-bold mt-2">
          Engineering & Technology
        </h2>
        <p className="mt-3  opacity-95">
          Engineering roles dominate hiring due to digital transformation,
          product scalability, and growing demand for frontend and full-stack
          talent.
        </p>

        <div className="mt-6 justify-center flex gap-4">
          <p className="bg-white/20 px-4 py-2 rounded-xl text-sm">
            🚀 High Demand
          </p>
          <p className="bg-white/20 px-4 py-2 rounded-xl text-sm">
            🌍 Remote Friendly
          </p>
          <p className="bg-white/20 px-4 py-2 rounded-xl text-sm">
             💼 Product & Service
          </p>
        </div>

        {/* <div className="mt-6 text-center items-center flex gap-4">
          <div className="bg-white/20 px-4 py-2 rounded-xl text-sm">
            🚀 High Demand
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-xl text-sm">
            🌍 Remote Friendly
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-xl text-sm">
            💼 Product & Service
          </div>
        </div> */}
      </section>

    </div>
  );
}