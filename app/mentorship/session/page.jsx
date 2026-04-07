"use client";

const upcomingSessions = [
  {
    mentor: "Sarah Johnson",
    mentee: "John Carter",
    topic: "React Fundamentals",
    time: "4:00 PM",
    date: "Today",
    link: "#",
  },
  {
    mentor: "Michael Lee",
    mentee: "Lisa Brown",
    topic: "Backend API Design",
    time: "6:00 PM",
    date: "Today",
    link: "#",
  },
];

const completedSessions = [
  {
    mentor: "Emma Wilson",
    mentee: "David Smith",
    topic: "Career Guidance",
    date: "Yesterday",
  },
  {
    mentor: "Alex Turner",
    mentee: "Riya Sharma",
    topic: "Portfolio Review",
    date: "2 days ago",
  },
];

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 px-8 py-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentorship Sessions
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and schedule mentorship meetings
          </p>
        </div>

        <button className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600">
          + Schedule Session
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* Today's Schedule */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between  mb-5">
              <h2 className="font-semibold text-lg">
              Today's Sessions
            </h2>

            <a href="/mentorship/today-session">
                 <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

            <div className="space-y-4">
              {upcomingSessions.map((s, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-800">{s.topic}</p>
                    <p className="text-sm text-gray-500">
                     <span className="text-red-400"> Mentor: </span>{s.mentor}
                    </p>
                    <p className="text-sm text-gray-500">
                     <span className="text-red-400"> Mentee:</span> {s.mentee}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-red-500 font-semibold">{s.time}</p>

                    <a
                      href={s.link}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Join Meeting
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions Grid */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between  mb-5">
              <h2 className="font-semibold text-lg">
              Upcoming Sessions
            </h2>

             <a href="/mentorship/upcoming-session">
                 <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {upcomingSessions.map((s, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-5 hover:shadow-md transition"
                >
                  <h3 className="font-medium text-gray-800">{s.topic}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {s.mentor} → {s.mentee}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-red-500 font-medium">
                      {s.date} • {s.time}
                    </span>

                    <button className="text-sm text-white bg-red-400 hover:bg-red-500 px-3 py-1 rounded ">
                      Details
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Mentor Availability */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold mb-4">
              Mentor Availability
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <p>Sarah Johnson —<span className="text-red-400"> Available Today</span></p>
              <p>Michael Lee — <span className="text-red-400"> Available Today</span></p>
              <p>Emma Wilson — <span className="text-red-400"> Busy</span></p>
            </div>
          </div>

          {/* Completed Sessions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold mb-4">
              Completed Sessions
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              {completedSessions.map((s, index) => (
                <p key={index}>
                  {s.topic} — {s.mentor} with {s.mentee}
                </p>
              ))}
            </div>
          </div>

          {/* Session Notes */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold mb-4">
              Session Notes
            </h2>

            <textarea
              placeholder="Write meeting notes..."
              className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-red-400"
              rows="4"
            />
          </div>

        </div>

      </div>
    </div>
  );
}