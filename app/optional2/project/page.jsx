"use client";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-10 text-gray-800">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-xl font-semibold">Projects</h1>
            <p className="text-gray-500 mt-2 max-w-xl">
              A collection of real-world applications built with modern
              frontend technologies, focusing on performance, scalability,
              and user experience.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 items-center">
            {[
              ["Total Projects", "12+"],
              ["Production Apps", "6"],
              ["Tech Stack", "React / Next"],
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl font-semibold text-red-500">{s[1]}</p>
                <p className="text-sm text-gray-500">{s[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <img
            src="/images/cover1.jpg"
            className="rounded-2xl h-full shadow-sm"
            alt="Featured Project"
          />

          <div>
            <p className="text-sm text-red-500 font-medium mb-2">
              Featured Project
            </p>
            <h2 className="text-2xl font-semibold mb-3">
              Skill-Based Hiring Platform
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A modern recruitment platform enabling companies to evaluate
              candidates based on verified skills, portfolios, and assessments
              rather than resumes alone.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mt-6 text-sm">
              <span className="text-red-500 cursor-pointer">View Case Study</span>
              <span className="text-gray-500 cursor-pointer">Live Demo</span>
              <span className="text-gray-500 cursor-pointer">GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">All Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Portfolio Website",
              tech: "React • Tailwind",
              desc: "Personal portfolio showcasing skills, projects, and experience.",
            },
            {
              title: "Job Dashboard UI",
              tech: "Next.js • Analytics",
              desc: "Recruiter dashboard with charts, metrics, and role management.",
            },
            {
              title: "Task Manager App",
              tech: "JavaScript",
              desc: "CRUD-based productivity app with local storage and filters.",
            },
            {
              title: "Notification System UI",
              tech: "UI/UX • Components",
              desc: "Modern notification layout with filters and real-time states.",
            },
            {
              title: "Admin Panel",
              tech: "React • Role Based",
              desc: "Admin dashboard with users, permissions, and reports.",
            },
            {
              title: "Landing Pages",
              tech: "HTML • CSS",
              desc: "High-conversion landing pages with responsive layouts.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >
              <img
                src="/images/cover2.jfif"
                className="rounded-xl mb-4"
                alt="Project"
              />

              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.tech}</p>

              <p className="text-gray-600 text-sm mt-3">
                {p.desc}
              </p>

              <div className="flex gap-4 mt-4 text-sm">
                <span className="text-red-500 cursor-pointer">View</span>
                <span className="text-gray-500 cursor-pointer">Code</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPACT STRIP ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            ["Performance Focused", "Optimized UI & fast load times"],
            ["Scalable Architecture", "Reusable components & layouts"],
            ["User-Centric Design", "Clean UX with accessibility in mind"],
          ].map((i, idx) => (
            <div key={idx}
            className="rounded-xl p-3 bg-red-50">
              <h3 className="font-semibold mb-1">{i[0]}</h3>
              <p className="text-sm  text-gray-600">{i[1]}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}