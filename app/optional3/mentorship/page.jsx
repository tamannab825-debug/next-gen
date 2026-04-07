"use client";

export default function CompanyMentorship() {
  const mentors = [
    {
      name: "Rohit Sharma",
      role: "Senior Frontend Engineer",
      mentees: 4,
      expertise: ["React", "System Design", "Code Reviews"],
      img:"/images/person.png"
    },
    {
      name: "Priya Kapoor",
      role: "Product Designer",
      mentees: 3,
      expertise: ["UX Research", "Figma", "Design Systems"],
      img:"/images/person2.jpg"
    },
  ];

  const sessions = [
    {
      topic: "Frontend Architecture Best Practices",
      mentor: "Rohit Sharma",
      date: "24 Feb 2026",
      status: "Upcoming",
    },
    {
      topic: "Design Thinking Workshop",
      mentor: "Priya Kapoor",
      date: "18 Feb 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-5 space-y-6">

      {/* HEADER */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentorship Program
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl">
            Guide team members through structured mentorship sessions,
            skill-based growth, and performance improvement.
          </p>
        </div>

        <div className="items-center flex">
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg text-sm">
          + Add Mentor
        </button>
        </div>
      </section>

      

      {/* MENTOR LIST */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100 space-y-5">
        <h2 className="font-semibold text-gray-800">
          Active Mentors
        </h2>

        <div className="space-y-4">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-between gap-6 bg-gray-100 rounded-xl p-5"
            >
             <div className="flex gap-6">
                <div className="">
                    <img src={mentor.img} alt="profile" className="h-20 w-20 rounded-full" />
                </div>
                 <div>
                <h3 className="font-medium text-gray-800">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {mentor.role}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {mentor.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white border border-red-300 text-red-500 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
             </div>

              <div className="text-right">
                {/* <p className="text-lg font-semibold text-red-500">
                  {mentor.mentees}
                </p> */}
                <p className="text-xs text-gray-500">
                  Active Mentees
                </p>

                <a href="/optional3/mentorProfile">
                  <button className="mt-3 px-3 py-1.5 text-sm text-red-500 border border-red-300 hover:bg-red-500 hover:text-white rounded-lg ">
                  View Profile
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* SESSION + INSIGHTS WRAPPER */}
<section className="grid lg:grid-cols-3 gap-6">

  {/* ================= LEFT: SESSION TRACKER ================= */}
  <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 space-y-5">

    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-gray-800">
        Mentorship Sessions
      </h2>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xs rounded-lg">
        + Schedule Session
      </button>
    </div>

    <div className="space-y-4">
      {sessions.map((session, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-gray-50 rounded-xl p-4 hover:shadow-sm transition"
        >
          <div>
            <h3 className="font-medium text-gray-800">
              {session.topic}
            </h3>
            <p className="text-sm text-gray-500">
              {session.mentor} · {session.date}
            </p>
          </div>

          <div className="text-right">
            <span
              className={`text-xs px-3 py-1 rounded-full
                ${
                  session.status === "Upcoming"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }
              `}
            >
              {session.status}
            </span>

            <p className="text-xs text-gray-400 mt-2">
              60 min session
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>


  {/* ================= RIGHT: SESSION INSIGHTS ================= */}
  <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-6">

    <h3 className="font-semibold text-gray-800">
      Session Insights
    </h3>


    {/* Monthly Breakdown */}
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-xs text-gray-500 mb-1">
        This Month
      </p>
      <h2 className="text-2xl font-semibold text-gray-800">
        12 Sessions
      </h2>
      <p className="text-xs text-green-600 mt-1">
        +3 compared to last month
      </p>
    </div>

    {/* Quick Note */}
    <div className="bg-red-50 rounded-xl p-4">
      <p className="text-xs text-red-500 font-medium">
        Insight
      </p>
      <p className="text-sm text-red-500 mt-1">
        Most sessions focus on frontend system design.
        Consider adding backend mentorship tracks.
      </p>
    </div>

  </div>

</section>

    </div>
  );
}