"use client";

export default function SkillPassport() {

  return (
    <div className="p-6 space-y-8 bg-green-100 min-h-screen">

      {/* ===== HEADER ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-blue-700">Skill Passport</h1>
        <p className="text-blue-500 mt-1">
          Verified skill profile showcasing real-world abilities
        </p>
      </section>
     

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* ===== CONFIDENCE INDEX ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700">
          Recruiter Confidence Index
        </h2>
       
          <div className="text-4xl font-bold mt-4 text-green-600">4.5 ★</div>
          <p className="text-gray-500 mt-4 text-sm max-w-md">
            Based on verified skills, project evidence, and assessment results.
          </p>
       
      </section>

     
           {/* ===== SKILL TIMELINE ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Skill Timeline
        </h2>

        <ul className="space-y-3">
          <li className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold text-gray-400">2023 – JavaScript Basics</p>
            <p className="text-sm text-gray-700">
              Learned fundamentals and DOM manipulation
            </p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold text-gray-400">2024 – React Development</p>
            <p className="text-sm text-gray-700">
              Built reusable components and dashboards
            </p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold text-gray-400">2025 – Next.js & Performance</p>
            <p className="text-sm text-gray-700">
              SSR, routing, and scalable layouts
            </p>
          </li>
        </ul>
      </section>
     </div>

      {/* ===== VERIFIED SKILLS ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Verified Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(
            (skill) => (
              <div
                key={skill}
                className="p-4 border rounded-lg flex justify-between items-center"
              >
                <span className="font-medium text-blue-500">{skill}</span>
                <span className="text-green-600 text-sm font-semibold">
                  ✔ Verified
                </span>
              </div>
            )
          )}
        </div>
      </section>

    

      {/* ===== SKILL USAGE ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Skill Usage Statistics
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4">
          <StatCard title="React" value="6 Projects"  />
          <StatCard title="Next.js" value="4 Projects" />
          <StatCard title="JavaScript" value="1000+ Hours" />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ===== RECOMMENDATIONS ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Improvement Recommendations
        </h2>

        <ul className="list-disc ps-6 text-gray-600 space-y-2">
          <li>Add unit testing with Jest</li>
          <li>Build one large-scale production app</li>
          <li>Improve performance optimization skills</li>
        </ul>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Certifications
        </h2>

        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-gray-600">Frontend Development – IBM</span>
            <span className="text-sm text-blue-600">2024</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">React & Component Architecture</span>
            <span className="text-sm text-blue-600">2024</span>
          </li>
        </ul>
      </section>

      </div>
    </div>
  );
}

/* ===== SMALL COMPONENT ===== */
function StatCard({ title, value }) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="font-bold text-blue-600 text-lg">{value}</p>
    </div>
  );
}
