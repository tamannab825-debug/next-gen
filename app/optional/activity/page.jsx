"use client";

export default function RecentActivityPage() {
  const activities = [
    {
      company: "Elextra Studios",
      logo: "/images/company.jfif",
      message:
        "has invited you to an interview meeting scheduled for tomorrow.",
      time: "2 hours ago",
      type: "Interview",
      location:"Gurgaon",
    },
    {
      company: "Highspeed Design Team",
      logo: "/images/company.jfif",
      message:
        "has 2 new job positions available that match your profile.",
      time: "Yesterday", 
      type: "New Jobs",
      location: "Delhi"
    },
    {
      company: "TechNova Solutions",
      logo: "/images/company.jfif",
      message:
        "viewed your profile and saved it for future opportunities.",
      time: "2 days ago",
      type: "Profile View",
      location: "Gurgaon",
    },
    {
      company: "Kleon Studio",
      logo: "/images/company.jfif",
      message:
        "have 5 available jobs for you.",
      time: "2 days ago",
      type: "Jobs",
      location: "Noida",
    },
    {
      company: "TechNova Solutions",
      logo: "/images/company.jfif",
      message:
        "has invited you to an interview meeting scheduled for tomorrow.",
      time: "2 days ago",
      type: "Interview",
      location:"New Delhi"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
<div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">

  {/* LEFT CONTENT */}
  <div>
    <h1 className="text-2xl font-semibold text-gray-900">
      Recent Activity
    </h1>

    <p className="text-sm text-gray-500 mt-3 max-w-md">
      Track interview invitations, new job matches, and recruiter interactions
      happening around your profile in real time.
    </p>

    {/* META INFO */}
    <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="text-red-500">Live Updates</span>
      </div>

      <div className="text-green-500">
        Last updated: <span className="font-bold text-green-500">Today</span>
      </div>
    </div>
  </div>

  {/* RIGHT STATS */}
  <div className="flex gap-4">
    <div className="bg-red-50 rounded-xl px-4 py-3 text-center min-w-27">
      <p className="text-2xl font-semibold text-red-600">3</p>
      <p className="text-sm mt-2 text-red-400">New Alerts</p>
    </div>

    <div className="bg-green-50 rounded-xl px-4 py-3 text-center min-w-27">
      <p className="text-2xl font-semibold text-red-600">12</p>
      <p className="text-sm mt-2 text-red-400">This Week</p>
    </div>
  </div>
</div>


      {/* ACTIVITY LIST */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-xl  border-b border-gray-300 bg-gray-50 hover:bg-white hover:shadow transition"
          >
            {/* LEFT */}
            <div className="flex items-start gap-4">
              <img
                src={item.logo}
                alt={item.company}
                className="w-12 h-12 rounded-lg object-cover bg-gray-200"
              />

              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">
                    {item.company}
                  </span>{" "}
                  {item.message}
                </p>

                <div className="flex items-center gap-3 mt-2">

                    <span className="text-xs text-gray-400">
                    {item.time}
                  </span>
                  <button className="px-2 py-1 bg-white text-red-400 border rounded-xl text-xs">{item.location}</button>
                  
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <button className="px-5 py-2 text-sm rounded-xl border border-red-500  bg-red-500 text-white transition">
                {item.type}
              </button>
            </div>
          </div>
        ))}

        {/* VIEW ALL */}
        <div className="flex justify-center pt-4">
          <button className="px-6 py-2 rounded-xl bg-white text-red-500 hover:bg-red-500 hover:text-white border transition">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
}
