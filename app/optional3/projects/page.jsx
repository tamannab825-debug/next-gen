"use client";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Mobile App Redesign",
      category: "UI Design",
      type: "Trial",
      status: "Ongoing",
      team: 5,
      progress: 70,
      deadline: "30 Mar 2026",
    },
    {
      title: "E-Commerce Campaign",
      category: "Marketing",
      type: "Full Project",
      status: "Completed",
      team: 3,
      progress: 100,
      deadline: "12 Feb 2026",
    },
    {
      title: "Dashboard Analytics Revamp",
      category: "Engineering",
      type: "Internal",
      status: "Planning",
      team: 4,
      progress: 25,
      deadline: "15 Apr 2026",
    },
    {
      title: "E-Commerce Campaign",
      category: "Marketing",
      type: "Full Project",
      status: "Completed",
      team: 3,
      progress: 100,
      deadline: "12 Feb 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-3 space-y-4">

      {/* PAGE HEADER */}
      <section className="bg-white rounded-2xl py-4 px-5 border border-gray-100 flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Featured Projects
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            Highlighted company initiatives, trial projects, and high-impact
            collaborations across departments.
          </p>
        </div>

       <div className="items-center flex ">
         <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-3 rounded-lg text-sm">
          + Create Project
        </button>
       </div>
      </section>

      {/* PROJECT OVERVIEW STATS */}
      <section className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 text-center">
          {[
            { label: "Total Projects", value: "18" },
            { label: "Ongoing", value: "7" },
            { label: "Completed", value: "9" },
            { label: "Planning", value: "2" },
          ].map((stat, i) => (
            <div key={i} className="px-4 bg-yellow-50 border-r last:border-none border-gray-500 py-2">
              <p className="text-2xl font-semibold text-red-600">
                {stat.value}
              </p>
              <p className="text-md text-gray-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition flex flex-col justify-between"
          >

            {/* TOP */}
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-base font-semibold text-gray-800">
                  {project.title}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full
                    ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : project.status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-200 text-gray-600"
                    }
                  `}
                >
                  {project.status}
                </span>
              </div>

              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-500">
                <p>Team Members: {project.team}</p>
                <p>Deadline: {project.deadline}</p>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1 text-gray-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-red-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="mt-6 pt-4 border-t flex justify-between items-center">
              <button className="text-sm text-gray-600 hover:underline">
                View Details
              </button>

              <button className="px-4 py-1.5 text-xs border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                Manage
              </button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}