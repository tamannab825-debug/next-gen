"use client";

const mentor = {
  name: "Sarah Johnson",
  role: "Senior UI/UX Mentor",
  email: "sarah.johnson@example.com",
  phone: "+91 9876543210",
  experience: "6 Years",
  rating: 4.9,
  sessions: 82,
  mentees: 45,
  img: "/images/person.png",
  about:
    "Experienced UI/UX designer with expertise in product design, user research and frontend development. Passionate about mentoring and helping students grow in tech.",
};

const skills = [
  { name: "UI/UX Design", level: "Expert", progress: 90 },
  { name: "React", level: "Advanced", progress: 80 },
  { name: "Figma", level: "Expert", progress: 95 },
  { name: "Frontend Development", level: "Advanced", progress: 75 },
];

const sessions = [
  { title: "React Basics Session", date: "12 Mar 2026" },
  { title: "UI Design Principles", date: "10 Mar 2026" },
  { title: "Portfolio Review", date: "8 Mar 2026" },
];

const reviews = [
  {
    mentee: "Ravi Kumar",
    message: "Very helpful mentor, explained concepts clearly.",
  },
  {
    mentee: "Ananya Sharma",
    message: "Great guidance on UI projects and portfolio.",
  },
];

export default function MentorProfilePage() {
  return (
    <div className="p-5 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* PROFILE HEADER */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">

        <img
          src={mentor.img}
          className="w-24 h-24 rounded-full object-cover border"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl font-semibold text-gray-800">
            {mentor.name}
          </h1>
          <p className="text-sm text-gray-500">{mentor.role}</p>
          <p className="text-xs text-gray-400 mt-2">{mentor.email}</p>
          <p className="text-xs text-red-400"><span>{mentor.phone}</span>
            <span>{mentor.experience}</span></p>
        </div>

        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            Message
          </button>

          <button className="border px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-100">
            Edit Profile
          </button>
        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Sessions", value: mentor.sessions },
          { title: "Mentees", value: mentor.mentees },
          { title: "Rating", value: `${mentor.rating} ⭐` },
          { title: "Experience", value: mentor.experience },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center">

            <h2 className="text-2xl font-semibold text-red-500">
              {stat.value}
            </h2>
            <p className="text-sm  text-gray-500">{stat.title}</p>
            
          </div>
        ))}
      </div>

      {/* SKILLS + ABOUT */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SKILLS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Skills & Expertise
          </h3>

          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-gray-500 text-sm mb-1">
                  <span>{skill.name}</span>
                  <span className="text-gray-500">{skill.level}</span>
                </div>

                <div className="bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            About Mentor
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {mentor.about}
          </p>
        </div>

      </div>

      {/* SESSIONS + REVIEWS */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SESSIONS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Sessions
          </h3>

          <div className="space-y-3">
            {sessions.map((s, i) => (
              <div
                key={i}
                className="flex justify-between border rounded-lg px-4 py-3"
              >
                <p className="text-sm text-gray-700">{s.title}</p>
                <span className="text-xs text-gray-500">{s.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Mentee Reviews
          </h3>

          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="border rounded-lg p-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">
                  {r.message}
                </p>

                <p className="text-xs text-red-400">
                  — {r.mentee}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ACTIVITY + INSIGHTS */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* ACTIVITY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h3>

          <div className="space-y-3 text-gray-500 text-sm">
            <p>Completed 3 sessions this week</p>
            <p>New mentee assigned</p>
            <p>Feedback rating improved</p>
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Insights
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>High satisfaction rating (4.9 ⭐)</li>
            <li>Strong expertise in UI/UX domain</li>
            <li>Consistent session completion</li>
            <li>Top-performing mentor this month</li>
          </ul>
        </div>

      </div>

    </div>
  );
}