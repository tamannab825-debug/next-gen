
"use client";

export default function CompanyFollowersPage() {
   const followers = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      img: "/images/profile.jpg",
      activity: "Applied for React Developer role",
      experience: "3.2 yrs",
      location: "Bangalore",
      skills: ["React", "Next.js", "Tailwind"],
      status: "active",
      time: "2h ago",
    },
    {
      name: "Ananya Verma",
      role: "UI / UX Designer",
      img: "/images/profile.jpg",
      activity: "Viewed company profile",
      experience: "2 yrs",
      location: "Delhi NCR",
      skills: ["Figma", "UX Research"],
      status: "new",
      time: "Today",
    },
    {
      name: "Mohit Singh",
      role: "Backend Engineer",
      img: "/images/profile.jpg",
      activity: "Saved 2 job openings",
      experience: "4.5 yrs",
      location: "Mumbai",
      skills: ["Node.js", "MongoDB"],
      status: "active",
      time: "Yesterday",
    },
    {
      name: "Happy Rao",
      role: "Data Analyst",
      img: "/images/profile.jpg",
      activity: "Applied for Data Analyst Position",
      experience: "Fresher",
      location: "Gurgaon",
      skills: ["Mysql" , "PowerBI"],
      status: "active",
      time: "Yesterday",
    },
     {
      name: "Prashant Sharma",
      role: "Frontend Developer",
      img: "/images/profile.jpg",
      activity: "Viewed company profile",
      experience: "Fresher",
      location: "Gurgaon",
      skills: ["Next.js" ,"React"],
      status: "active",
      time: "5h ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 sm:p-5 space-y-5">

      {/* HEADER */}
      <div className="px-2 sm:px-4 py-2 flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Followers & Interested Candidates
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Candidates engaging with your company and job postings
          </p>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-red-500">
              1,284
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Followers
            </p>
          </div>
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-red-500">
              368
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Active This Week
            </p>
          </div>
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-red-500">
              1,223
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Following
            </p>
          </div>
        </div>
      </div>

      {/* FOLLOWER LIST */}
      <div className="bg-white rounded-xl shadow-sm divide-y">

        {followers.map((f, i) => (
          <div
            key={i}
            className="py-4 sm:py-5 px-4 sm:px-6 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between hover:bg-gray-50 transition"
          >

            {/* LEFT */}
            <div className="flex gap-4">
              <img
                src={f.img}
                alt={f.name}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-200"
              />

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    {f.name}
                  </h4>

                  {f.status === "new" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-600">
                      New
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-gray-600">
                  {f.role} • {f.experience}
                </p>

                <p className="text-xs text-gray-500 pt-1">
                  {f.activity}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {f.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full border bg-white text-red-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row md:flex-col justify-between md:items-end gap-3">
              <p className="text-xs sm:text-sm text-gray-400">
                {f.time}
              </p>

              <div className="flex flex-wrap gap-2">
                <button className="text-xs sm:text-sm px-3 py-1 rounded-lg border text-gray-500 border-gray-300 hover:bg-gray-100 transition">
                  View Profile
                </button>

                <button className="text-xs sm:text-sm px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                  Invite
                </button>
              </div>

              <button className="text-xs sm:text-sm text-gray-500 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                Message
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

