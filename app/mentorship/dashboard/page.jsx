"use client";

const stats = [
  { title: "Total Mentors", value: "128", change: "+8%" },
  { title: "Total Mentees", value: "842", change: "+12%" },
  { title: "Active Programs", value: "24", change: "+4%" },
  { title: "Sessions Today", value: "36", change: "+5%" },
];

const sessions = [
  { mentor: "Sarah Johnson", mentee: "Alex Kim", time: "Today 3:00 PM" },
  { mentor: "Michael Lee", mentee: "Ravi Kumar", time: "Tomorrow 11:00 AM" },
];

const mentors = [
  {
    name: "Sarah Johnson",
    field: "UI/UX Design",
    img: "/images/person.png",
  },
  {
    name: "Michael Lee",
    field: "Frontend Development",
    img: "/images/person.png",
  },
  {
    name: "David Smith",
    field: "Backend Development",
    img: "/images/person.png",
  },
];

const programs = [
  {
    title: "Career Growth",
    mentees: "120 mentees",
  },
  {
    title: "Frontend Bootcamp",
    mentees: "95 mentees",
  },
  {
    title: "Startup Mentorship",
    mentees: "60 mentees",
  },
];

const mentorRequests = [
  { name: "David Clark", field: "AI Engineer" },
  { name: "Emma Watson", field: "Product Manager" },
];

const activities = [
  { title: "New mentee joined program", time: "10 minutes ago" },
  { title: "Mentor profile approved", time: "1 hour ago" },
  { title: "Session scheduled", time: "2 hours ago" },
  { title: "Feedback submitted", time: "5 hours ago" },
];

export default function MentorshipDashboard() {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-600">{item.title}</p>

            <div className="flex justify-between items-center mt-2">
              <h2 className="text-2xl font-semibold text-red-500">
                {item.value}
              </h2>

              <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-lg">
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* Mentorship Programs */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Mentorship Programs
              </h3>

              <a href="/mentorship/mentorship-program" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="border border-red-100 rounded-xl p-4 hover:shadow transition"
                >
                  <h4 className="text-sm font-semibold text-gray-800">
                    {program.title}
                  </h4>

                  <p className="text-xs text-red-400 mt-1">
                    {program.mentees}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Session Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Session Analytics
            </h3>

            <img src="/images/3.jpg.jpeg" alt="chart" className="h-60 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400" />
          </div>

         <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between  mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
              Upcoming Sessions
            </h3>

            <a href="/mentorship/upcoming-session" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

  {sessions.map((item, i) => (
    <div key={i} className="flex justify-between border-b py-2">
      <div>
        <p className="text-sm font-medium text-gray-700">
          {item.mentor}
        </p>
        <p className="text-xs text-red-400">
          with {item.mentee}
        </p>
      </div>

      <p className="text-xs text-gray-500">{item.time}</p>
    </div>
  ))}
</div>
          

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* Top Mentors */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Top Mentors
              </h3>

              <a href="/mentorship/top-mentor">
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

            <div className="space-y-4">
              {mentors.map((mentor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={mentor.img}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {mentor.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {mentor.field}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
  <div className="flex justify-between  mb-4">
    <h3 className="text-lg font-semibold text-gray-800">
    Pending Mentor Requests
  </h3>

   <a href="/mentorship/mentor-request">
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
  </div>

  {mentorRequests.map((item, i) => (
    <div key={i} className="flex justify-between py-2">
      <div>
        <p className="text-sm text-gray-600 font-medium">{item.name}</p>
        <p className="text-xs text-gray-400">{item.field}</p>
      </div>

      <button className="text-xs bg-green-500 text-white px-3 py-1 rounded">
        Approve
      </button>
    </div>

    
  ))}
</div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-4">
              {activities.map((item, index) => (
                <div key={index}>
                  <p className="text-sm text-gray-700">{item.title}</p>
                  <p className="text-xs text-red-400">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}