"use client";

const student = {
  name: "Ravi Kumar",
  email: "ravi.kumar@example.com",
  phone: "+91 9876543210",
  course: "Web Development",
  batch: "2026",
  progress: 80,
  attendance: "92%",
  projects: 6,
  about:
    "Passionate web development student focusing on modern frontend technologies like React and Next.js. Actively participates in projects and hackathons.",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
};

const courses = [
  { title: "React Bootcamp", progress: "80%", status: "Active" },
  { title: "JavaScript Mastery", progress: "65%", status: "Ongoing" },
];

const activities = [
  { text: "Completed React Module 5", time: "2 hours ago" },
  { text: "Submitted UI Design Assignment", time: "Yesterday" },
  { text: "Joined Web Development Program", time: "2 days ago" },
];

const achievements = [
  "🏆 Completed 5+ projects",
  "⭐ Top performer in React Bootcamp",
  "📜 Certificate in JavaScript",
];

export default function StudentProfilePage() {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-6">
          <img
            src="/images/profile.jpg"
            className="w-25 h-25 rounded-full object-cover"
            alt="student"
          />

          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {student.name}
            </h1>
            <p className="text-sm text-gray-500">
              {student.course} • Batch {student.batch}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {student.email} 
            </p>
            <p className="text-xs text-gray-400 mt-1">• {student.phone}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            Edit Profile
          </button>
          <button className="border px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-100">
            Message
          </button>
        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Overall Progress</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {student.progress}%
          </h2>
        </div>

        <div className="bg-white p-4 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Attendance</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {student.attendance}
          </h2>
        </div>

        <div className="bg-white p-4 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Projects</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {student.projects}
          </h2>
        </div>

        <div className="bg-white p-4 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Course</p>
          <h2 className="text-lg font-semibold text-red-500">
            {student.course}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              About Student
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {student.about}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
                {student.desc}
            </p>
          </div>

          {/* COURSES */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enrolled Courses
            </h3>

            {courses.map((course, i) => (
              <div key={i} className="mb-4">

                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">
                    {course.title}
                  </span>
                  <span className="text-red-400">
                    {course.progress}
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: course.progress }}
                  ></div>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {course.status}
                </p>

              </div>
            ))}
          </div>

          {/* ACTIVITY */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>

            {activities.map((item, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* SKILLS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {student.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Achievements
            </h3>

            {achievements.map((item, i) => (
              <p key={i} className="text-sm text-gray-700 mb-2">
                {item}
              </p>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Assign Course
            </button>

            <button className="w-full border py-2 text-gray-500 rounded-lg text-sm hover:bg-gray-200 hover:text-gray-700">
              View Reports
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}