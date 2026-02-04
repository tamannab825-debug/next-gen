

export default async function CompanyPage({ params }) {
 const { companyId } = await params;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ===== HEADER ===== */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg" />

              <div>
                <h1 className="text-2xl font-bold capitalize">
                   {companyId}
                </h1>
                <p className="text-sm text-gray-500">
                  San Francisco, CA · Software & Digital Design
                </p>
                <p className="text-sm mt-1">
                  ⭐ 4.4 <span className="text-gray-400">(237 Reviews)</span>
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
              Follow
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6 border-b">
            {["Overview", "Jobs", "Culture", "Team"].map((tab) => (
              <button
                key={tab}
                className="pb-3 text-sm font-medium border-b-2 border-transparent hover:border-gray-800"
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* ===== MAIN GRID ===== */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="md:col-span-2 space-y-6">

            {/* ABOUT */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="font-semibold text-lg mb-2">About</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We are a recruiting-focused technology company helping
                organizations hire skilled professionals through
                real-world job trials and assessments.
              </p>
            </section>

            {/* JOB OPENINGS */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="font-semibold text-lg mb-4">
                Current Job Openings
              </h2>

              <JobCard title="UX Designer" salary="$1,800/mo" />
              <JobCard title="Software Engineer" salary="$3,500/mo" />
              <JobCard title="Marketing Specialist" salary="$7,500/mo" />
            </section>

            {/* FEATURED PROJECTS */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="font-semibold text-lg mb-4">
                Featured Projects
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <ProjectCard title="Mobile App Redesign" />
                <ProjectCard title="E-Commerce Campaign" />
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* LIFE AT COMPANY */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Life at Company</h3>
              <p className="text-sm text-gray-600">
                Transparent culture, fast growth, continuous feedback.
              </p>

              <div className="flex gap-2 mt-3 flex-wrap">
                <Tag text="Programming" />
                <Tag text="Feedback Loops" />
                <Tag text="Growth" />
              </div>
            </section>

            {/* TEAM */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">
                Mentorship Opportunities
              </h3>

              <TeamMember name="Sarah Lee" role="Senior UX Designer" />
              <TeamMember name="Jake Roberts" role="Marketing Strategist" />
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function JobCard({ title, salary }) {
  return (
    <div className="border rounded-lg p-4 mb-3 flex justify-between items-center">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">Full-time</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{salary}</p>
        <button className="mt-2 text-sm bg-gray-800 text-white px-3 py-1 rounded">
          Trial Task
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ title }) {
  return (
    <div className="border rounded-lg p-4">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">UI Design · Prototyping</p>
      <button className="mt-3 text-sm underline">
        View Case →
      </button>
    </div>
  );
}

function TeamMember({ name, role }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-gray-200" />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}

function Tag({ text }) {
  return (
    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
      {text}
    </span>
  );
}
