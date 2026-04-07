"use client";

const stats = [
  { title: "Students", value: "1,284" },
  { title: "Mentors", value: "72" },
  { title: "Programs", value: "18" },
  { title: "Resources", value: "96" },
];

const programs = [
  { title: "Full Stack Development", students: "210 Students" },
  { title: "UI / UX Design Bootcamp", students: "165 Students" },
  { title: "Data Science Program", students: "120 Students" },
];

const mentors = [
  { name: "Sarah Johnson", field: "UI/UX Designer" },
  { name: "Michael Lee", field: "Frontend Developer" },
  { name: "David Smith", field: "Backend Engineer" },
];

export default function InstituteProfile() {
  return (
    <div className="bg-[#f5f6fa] min-h-screen">

      {/* COVER BANNER */}
      <div className="h-58 bg-linear-to-r from-red-500 to-red-400 relative">

        <div className="absolute -bottom-1 left-10 flex items-center gap-4">

          <img
            src="/images/person.png"
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
          />

          <div className="text-white">
            <h1 className="text-2xl font-semibold">
              TechNova Institute
            </h1>
            <p className="text-sm opacity-90">
              Technology Training & Mentorship
            </p>
          </div>

        </div>

      </div>

      <div className="p-6 pt-4 space-y-6">

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-5 text-center"
            >
              <h2 className="text-2xl font-semibold text-red-500">
                {item.value}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {item.title}
              </p>
            </div>
          ))}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">

            {/* ABOUT */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                About Institute
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                TechNova Institute is focused on building career-ready
                professionals through industry-focused training programs.
                Our mentorship platform connects students with experienced
                mentors to guide them in technology, design, and innovation.
              </p>
            </div>

            {/* PROGRAMS */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <div className="flex justify-between mb-4">

                <h3 className="text-lg font-semibold text-gray-800">
                  Programs Offered
                </h3>

                <a href="/institute/program">
                  <button className="text-red-500 text-sm hover:underline">
                  View All
                </button>
                </a>

              </div>

              <div className="grid md:grid-cols-3 gap-4">

                {programs.map((program, i) => (
                  <div
                    key={i}
                    className="border border-red-100 rounded-xl p-4 hover:shadow transition"
                  >
                    <h4 className="text-sm font-semibold text-gray-800">
                      {program.title}
                    </h4>

                    <p className="text-xs text-red-400 mt-1">
                      {program.students}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-6">

            {/* CONTACT INFO */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>

              <div className="space-y-3 text-sm text-gray-600">

                <p>📧 contact@technova.com</p>
                <p>📞 +91 98765 43210</p>
                <p>🌐 www.technova.com</p>
                <p>📍 Delhi, India</p>

              </div>

            </div>

            {/* MENTORS */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <div className="flex justify-between mb-4">

                <h3 className="text-lg font-semibold text-gray-800">
                  Institute Mentors
                </h3>

                <a href="/institute/mentor">
                  <button className="text-red-500 text-sm hover:underline">
                  View All
                </button>
                </a>

              </div>

              <div className="space-y-3">

                {mentors.map((mentor, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center"
                  >
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
                      Profile
                    </button>
                    </a>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}