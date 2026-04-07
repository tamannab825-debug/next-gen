"use client";

const overview = [
  { title: "Total Students", value: "1,284", icon: "🎓" },
  { title: "Total Mentors", value: "72", icon: "👨‍🏫" },
  { title: "Active Programs", value: "16", icon: "📚" },
  { title: "Resources Uploaded", value: "94", icon: "📂" },
];

const students = [
  { name: "Ravi Kumar", course: "Web Development", progress: "80%" },
  { name: "Ananya Sharma", course: "UI/UX Design", progress: "65%" },
  { name: "Rahul Verma", course: "React Bootcamp", progress: "90%" },
];

const mentors = [
  { name: "Sarah Johnson", field: "Frontend Development" },
  { name: "Michael Lee", field: "Backend Development" },
  { name: "David Smith", field: "UI/UX Design" },
];

const announcements = [
  { title: "New React Bootcamp starting next week", time: "2 hours ago" },
  { title: "New mentor joined the institute", time: "5 hours ago" },
  { title: "Updated JavaScript resources uploaded", time: "1 day ago" },
];

export default function InstituteDashboard() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Institute Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Manage students, mentors and institute programs
          </p>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
          + Add Student
        </button>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overview.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-semibold text-red-500 mt-1">
                {item.value}
              </h2>
            </div>

            <span className="text-3xl">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">

          {/* STUDENT PROGRESS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
           <div className="flex justify-between mb-4">
             <h3 className="text-lg font-semibold text-gray-800 ">
              Student Progress
            </h3>

            <a href="/institute/student-progress" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
           </div>

            {students.map((student, i) => (
              <div key={i} className="mb-4">

                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">
                    {student.name}
                  </span>

                  <span className="text-red-400">
                    {student.progress}
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: student.progress }}
                  ></div>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {student.course}
                </p>

              </div>
            ))}
          </div>

          {/* PROGRAM PERFORMANCE */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Program Performance
            </h3>

            <img
              src="/images/3.jpg.jpeg"
              className="w-full h-60 rounded-lg bg-gray-100"
              alt="chart"
            />
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">

          {/* MENTORS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between mb-4 ">
              <h3 className="text-lg font-semibold text-gray-800 ">
              Institute Mentors
            </h3>

            <a href="/institute/mentor" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
            </div>

            {mentors.map((mentor, i) => (
              <div key={i} className="flex justify-between py-2 border-b">

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {mentor.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {mentor.field}
                  </p>
                </div>

                <a href="/institute/mentor-profile">
                  <button className="text-xs text-red-500 hover:underline">
                  View
                </button>
                </a>

              </div>
            ))}
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Institute Announcements
            </h3>

            {announcements.map((item, i) => (
              <div key={i} className="mb-3">
                <p className="text-sm text-gray-700">{item.title}</p>
                <p className="text-xs text-red-400">{item.time}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}