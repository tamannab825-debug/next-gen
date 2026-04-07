"use client";

const stats = [
  { title: "Total Mentors", value: "42" },
  { title: "Active Mentors", value: "36" },
  { title: "Avg. Rating", value: "4.7 ⭐" },
  { title: "Sessions Conducted", value: "1,284" },
];

const mentors = [
  {
    name: "Sarah Johnson",
    sessions: 120,
    rating: 4.9,
    completion: "95%",
  },
  {
    name: "Michael Lee",
    sessions: 110,
    rating: 4.8,
    completion: "92%",
  },
  {
    name: "Emma Wilson",
    sessions: 98,
    rating: 4.7,
    completion: "90%",
  },
];

export default function MentorPerformancePage() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
    
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentor Performance Analytics
          </h1>
          <p className="text-sm text-gray-500">
            Track mentor engagement, ratings and session performance
          </p>
     

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl text-center shadow-sm">

            <h2 className="text-2xl font-semibold text-red-500 ">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
            
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* TOP PERFORMERS */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top Performing Mentors
          </h3>

          <div className="space-y-4">
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {mentor.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {mentor.sessions} sessions conducted
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-red-500 text-sm">
                    ⭐ {mentor.rating}
                  </p>
                  <p className="text-xs text-gray-500">
                    {mentor.completion} completion
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PERFORMANCE SCORE */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Performance Score
          </h3>

          <div className="flex flex-col items-center justify-center h-40">
            <p className="text-4xl font-semibold text-red-500">
              4.7 ⭐
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Based on 800+ reviews
            </p>
          </div>
        </div>

      </div>

      {/* ROW 3 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SESSION ACTIVITY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Session Activity
          </h3>

          <div className="space-y-4 text-sm">

            <div>
              <div className="flex justify-between text-gray-600 mb-1">
                <span>Sarah Johnson</span>
                <span>95%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-[95%] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-600 mb-1">
                <span>Michael Lee</span>
                <span>92%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-[92%] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-600 mb-1">
                <span>Emma Wilson</span>
                <span>90%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-[90%] rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* RATINGS DISTRIBUTION */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Ratings Distribution
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between text-red-500 font-semibold">
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
              <span>65%</span>
            </div>

            <div className="flex justify-between text-red-500 font-semibold">
              <span>⭐ ⭐ ⭐ ⭐</span>
              <span>25%</span>
            </div>

            <div className="flex justify-between text-red-500 font-semibold">
              <span>⭐ ⭐ ⭐</span>
              <span>10%</span>
            </div>

          </div>
        </div>

      </div>

      {/* ROW 4 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* LEADERBOARD */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Mentor Leaderboard
          </h3>

          <div className="space-y-3 text-gray-600 text-sm">

            <div className="flex justify-between">
              <span>🥇 Sarah Johnson</span>
              <span className="text-red-500">4.9</span>
            </div>

            <div className="flex justify-between">
              <span>🥈 Michael Lee</span>
              <span className="text-red-500">4.8</span>
            </div>

            <div className="flex justify-between">
              <span>🥉 Emma Wilson</span>
              <span className="text-red-500">4.7</span>
            </div>

          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Key Insights
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Top mentors maintain 90%+ completion rate</li>
            <li>Higher ratings correlate with session consistency</li>
            <li>Frontend mentors are most active</li>
            <li>Evening sessions yield better feedback</li>
          </ul>
        </div>

      </div>

    </div>
  );
}