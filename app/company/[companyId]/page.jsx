
export default async function CompanyPage({ params }) {
  const { companyId } = await params;


  return (
    <div className="min-h-screen bg-green-100">

      {/* ===== COMPANY HEADER ===== */}
      <section className="bg-white shadow">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
          
          {/* Logo */}
          <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center text-xl font-bold text-gray-500">
            LOGO
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {companyId.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-500 mt-1">
              IT Services • 50–100 Employees • India
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Follow
            </button>
            <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              View Jobs
            </button>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ===== LEFT COLUMN ===== */}
        <div className="lg:col-span-2 space-y-6">

          {/* About */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              About Company
            </h2>
            <p className="text-gray-600 leading-relaxed">
              NextGen Tech is a modern, skill-driven technology company focused on building 
              scalable digital products and intelligent hiring solutions. The company operates at 
              the intersection of software development, AI-assisted recruitment, and talent 
              assessment, helping organizations identify the right talent based on real
               skills rather than resumes alone. <br />

             <br /> Founded with the vision of transforming traditional hiring workflows, NextGen Tech
             emphasizes practical skills, transparency, and performance-based evaluation. The 
             company collaborates with startups, enterprises, and fast-growing teams to deliver
              high-impact solutions that improve productivity, hiring accuracy, and developer experience.
            </p>
          </section>

          {/* Open Jobs */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Open Jobs
            </h2>

            <div className="space-y-4">
              <JobCard title="Frontend Developer" />
              <JobCard title="Backend Developer" />
              <JobCard title="UI/UX Designer" />
            </div>
          </section>

          {/* Job Trials */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Skill Trials
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <TrialCard title="React UI Challenge" />
              <TrialCard title="JavaScript Logic Test" />
            </div>
          </section>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="space-y-6">

          {/* Company Overview */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company Overview
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className=""><strong>Founded:</strong> 2022</li>
              <li><strong>Industry:</strong> IT & Software</li>
              <li><strong>Company Size:</strong> 50–100</li>
              <li><strong>Work Mode:</strong> Hybrid</li>
              <li><strong>Location:</strong> India</li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "MongoDB", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Culture */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Company Culture
            </h3>
            
           <ul className="text-sm  text-gray-600">
             <li className="mb-1">  🚀 Growth focused </li>
             <li className="mb-1"> 🌍 Remote friendly </li> 
             <li className="mb-1"> 📚 Learning driven </li> 
             <li className="mb-1">🤝 Collaborative team</li>
             </ul> 
            
          </section>

          {/* Employer Highlights */}
<section className="bg-white p-6 rounded-xl shadow">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Why Work With Us
  </h3>

  <ul className="space-y-3 text-sm text-gray-600">
    <li>✅ Skill-based hiring & fair evaluations</li>
    <li>🚀 Fast-growing and innovation-driven team</li>
    <li>🌍 Remote & hybrid work flexibility</li>
    <li>📈 Continuous learning and career growth</li>
    <li>🤝 Supportive and collaborative culture</li>
  </ul>
</section>

        </div>
      </main>
    </div>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function JobCard({ title }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow transition">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">
        Full-time • Remote • 0–2 Years
      </p>
    </div>
  );
}

function TrialCard({ title }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow transition">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">
        Difficulty: Intermediate
      </p>
    </div>
  );
}
