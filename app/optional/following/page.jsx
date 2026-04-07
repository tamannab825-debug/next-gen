"use client";

export default function CompanyFollowingPage() {
  const following = [
    {
      name: "Elextra Studios",
      type: "Design Agency",
      img: "/images/company.jfif",
      reason: "High UI/UX hiring activity",
      location: "Bangalore",
      followedSince: "2 weeks ago",
      tags: ["UI/UX", "Hiring"],
    },
    {
      name: "Highspeed Design Team",
      type: "Product Company",
      img: "/images/company.jfif",
      reason: "Potential collaboration & talent pool",
      location: "Delhi NCR",
      followedSince: "5 days ago",
      tags: ["Frontend", "Design"],
    },
    {
      name: "Rahul Sharma",
      type: "Candidate • Frontend Developer",
      img: "/images/profile.jpg",
      reason: "Strong React & Next.js profile",
      location: "Bangalore",
      followedSince: "Yesterday",
      tags: ["React", "Next.js"],
    },
    {
      name: "Happy Rao",
      type: "Candidate • Data Analyst",
      img: "/images/profile.jpg",
      reason: "Strong MySql & PowerBI ",
      location: "Gurgaon",
      followedSince: "1 month",
      tags: ["MySql", "PowerBI"],
    },
    {
      name: "kleon team",
      type: "Desiging",
      img: "/images/company.jfif",
      reason: "Potential collaboration & talent pool ",
      location: "Pune",
      followedSince: "2 month",
      tags: ["Frontend", "Designing"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 sm:p-6 space-y-6">

       {/* HEADER */}
      <div className="px-2 sm:px-4 py-2 flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Following
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Companies and candidates you are tracking for hiring, insights, and collaboration
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


      {/* FOLLOWING LIST */}
      <div className="bg-white rounded-2xl shadow-sm divide-y">

        {following.map((item, i) => (
          <div
            key={i}
            className="p-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between hover:bg-gray-50 transition"
          >

            {/* LEFT */}
            <div className="flex gap-4 items-start">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-xl bg-gray-200"
              />

              <div className="space-y-1">
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.type}
                </p>

                <p className="text-xs pt-1 text-gray-500">
                  {item.reason}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full border text-red-500 bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3">
              <p className="text-xs text-gray-400">
                Followed {item.followedSince}
              </p>

              <div className="flex gap-2">
                <button className="text-sm px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
                  View
                </button>

                <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                  Message
                </button>

                <button className="text-sm px-3 py-1 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                  Unfollow
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
