"use client";

import { desc } from "framer-motion/client";

const mentor = {
  name: "Sarah Johnson",
  role: "Frontend Development Mentor",
  email: "sarah.johnson@example.com",
  phone: "+91 9876543210",
  students: 48,
  programs: 5,
  rating: "4.8",
  about:
    "Experienced frontend developer with 6+ years of industry experience. Passionate about teaching React, UI/UX, and modern web technologies.",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    skills: ["React", "JavaScript", "Tailwind", "UI/UX", "Next.js"],
};

const assignedStudents = [
  { name: "Ravi Kumar", course: "Web Development" },
  { name: "Ananya Sharma", course: "UI/UX Design" },
];

const programs = [
  { title: "React Bootcamp", status: "Active" },
  { title: "Advanced UI Design", status: "Ongoing" },
];

export default function MentorProfilePage() {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
      <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-6">
          <img
            src="/images/profile.jpg"
            alt="mentor"
            className="w-25 h-25 rounded-full object-cover"
          />

          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {mentor.name}
            </h1>
            <p className="text-sm text-gray-500">{mentor.role}</p>
            <p className="text-xs text-gray-400 mt-2">
              {mentor.email} 
            </p>
            <p className="text-xs text-gray-400 mt-1">• {mentor.phone}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-4 py-3 rounded-lg text-sm hover:bg-red-600">
            Edit Profile
          </button>
          <button className="border px-4 py-3 text-gray-500 rounded-lg text-sm hover:bg-gray-100">
            Message
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Students Assigned</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {mentor.students}
          </h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Active Programs</p>
          <h2 className="text-2xl font-semibold text-red-500">
            {mentor.programs}
          </h2>
        </div>

        <div className="bg-white p-5 text-center rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Rating</p>
          <h2 className="text-2xl font-semibold text-red-500">
            ⭐ {mentor.rating}
          </h2>
        </div>

         <div className="bg-white rounded-xl p-5 text-center shadow-sm">
          <p className="text-sm text-gray-500">New This Month</p>
           <h2 className="text-2xl font-bold text-red-500 ">6</h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              About Mentor
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {mentor.about}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
                {mentor.desc}
            </p>
          </div>

          {/* SKILLS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {mentor.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* STUDENTS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Assigned Students
            </h3>

            {assignedStudents.map((student, i) => (
              <div key={i} className="flex justify-between py-2 border-b">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {student.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {student.course}
                  </p>
                </div>

                <button className="text-xs text-red-500 hover:underline">
                  View
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* PROGRAMS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Programs
            </h3>

            {programs.map((program, i) => (
              <div key={i} className="flex justify-between py-2 border-b">
                <p className="text-sm text-gray-700">
                  {program.title}
                </p>

                <span className="text-xs text-green-500">
                  {program.status}
                </span>
              </div>
            ))}
          </div>

          {/* QUICK ACTION */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm mb-2 hover:bg-red-600">
              Assign New Student
            </button>

            <button className="w-full border text-gray-400 py-2 rounded-lg text-sm hover:bg-gray-200 hover:text-gray-800">
              Add Program
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}