"use client";

export default function CompanyTeam() {
  const leaders = [
    {
      name: "Ankit Verma",
      role: "Founder & CEO",
      department: "Leadership",
    },
    {
      name: "Riya Sharma",
      role: "CTO",
      department: "Engineering",
    },
  ];

  const teamMembers = [
    {
      name: "Rohit Sharma",
      role: "Senior Frontend Engineer",
      team: "Engineering",
      projects: 4,
      status: "Active",
    },
    {
      name: "Priya Kapoor",
      role: "Product Designer",
      team: "Design",
      projects: 3,
      status: "Active",
    },
    {
      name: "Arjun Mehta",
      role: "Backend Engineer",
      team: "Engineering",
      projects: 2,
      status: "On Leave",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 space-y-4">

      {/* HEADER */}
      <section className="bg-white rounded-2xl p-4 border border-gray-100 flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Team Management
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            Manage your leadership, departments, and team members.
            Track performance, roles, and active project allocation.
          </p>
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm">
          + Add Member
        </button>
      </section>

      {/* TEAM STATS – Clean Modern Version */}
<section className="bg-white rounded-2xl border border-gray-100 p-4">

  <div className="grid grid-cols-2 md:grid-cols-4  bg-yellow-50">

    {[
      { label: "Total Members", value: "26", sub: "+3 this month" },
      { label: "Engineering", value: "12", sub: "46% of team" },
      { label: "Design", value: "6", sub: "23% of team" },
      { label: "Active Projects", value: "14", sub: "2 new this week" },
    ].map((stat, i) => (
      <div
        key={i}
        className="px-6 py-4  border-r border-gray-500 last:border-none gap-4 text-center"
      >
        <p className="text-3xl font-semibold text-red-600">
          {stat.value}
        </p>

        <p className="text-sm text-gray-700 mt-1">
          {stat.label}
        </p>

        <p className="text-xs text-red-400 mt-2">
          {stat.sub}
        </p>
      </div>
    ))}

  </div>

</section>

      {/* LEADERSHIP */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100 space-y-5">
        <h2 className="font-semibold text-gray-800">
          Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 rounded-xl p-5"
            >
              <div className="flex items-center gap-4">
               <img src="/images/person2.jpg" alt="" className="rounded-full w-15 h-15" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-red-500">
                    {leader.role}
                  </p>
                </div>
              </div>

              <span className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full">
                {leader.department}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS TABLE STYLE */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-800">
            All Team Members
          </h2>
          <input
            type="text"
            placeholder="Search member..."
            className="border border-gray-400 text-gray-400 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="space-y-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-xl p-4 hover:shadow-sm transition"
            >
              <div className="flex items-center gap-4">
                <img src="/images/person.png" alt="photo" className="rounded-full w-15 h-15" />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {member.role} <span className="text-red-400">· {member.team}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 md:mt-0">

                <div className="text-center">
                  <p className="text-sm font-medium text-gray-800">
                    {member.projects}
                  </p>
                  <p className="text-xs text-gray-500">
                    Projects
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full
                    ${
                      member.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                >
                  {member.status}
                </span>

                <button className="text-xs border text-red-500 border-red-400 px-3 py-1 rounded-lg hover:text-red-600 hover:bg-red-100">
                  Manage
                </button>

              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}