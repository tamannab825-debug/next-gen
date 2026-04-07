"use client";

const stats = [
  { title: "Total Sessions", value: "1,420" },
  { title: "Completed", value: "1,284" },
  { title: "Cancelled", value: "136" },
  { title: "Completion Rate", value: "90%" },
];

const topMentors = [
  { name: "Sarah Johnson", sessions: 120 },
  { name: "Michael Lee", sessions: 110 },
  { name: "Emma Wilson", sessions: 98 },
];

export default function SessionReports() {
  return (
    <div className="p-5 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
     
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Session Analytics
          </h1>
          <p className="text-sm text-gray-500">
            Detailed overview of session completion and engagement
          </p>
        

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-5 text-center rounded-xl shadow-sm">

            <h2 className="text-2xl font-semibold text-red-500">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
            
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* COMPLETION RATE */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Completion Overview
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex text-gray-500 justify-between">
              <span>Total Sessions</span>
              <span className="font-semibold">1,420</span>
            </div>

            <div className="flex text-gray-500 justify-between">
              <span>Completed</span>
              <span className="text-green-500 font-semibold">1,284</span>
            </div>

            <div className="flex text-gray-500 justify-between">
              <span>Cancelled</span>
              <span className="text-red-500 font-semibold">136</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-red-500 h-2 rounded-full w-[60%]" />
            </div>

          </div>
        </div>

        {/* QUICK INSIGHT */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Quick Insight
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>90% sessions completed successfully</li>
            <li>Highest drop on weekends</li>
            <li>Evening sessions perform best</li>
            <li>Frontend programs dominate</li>
          </ul>
        </div>

      </div>

      {/* ROW 3 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SESSION DISTRIBUTION */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Session Distribution
          </h3>

          <div className="space-y-4 text-sm">

            <div>
              <div className="flex justify-between text-gray-500 mb-1">
                <span>Frontend Bootcamp</span>
                <span>85%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-[85%] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-gray-500 mb-1">
                <span>Backend Program</span>
                <span>78%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-[78%] rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* TOP MENTORS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top Performing Mentors
          </h3>

          <div className="space-y-4">
            {topMentors.map((mentor, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-sm text-gray-700">
                  {mentor.name}
                </span>
                <span className="text-red-500 text-sm">
                  {mentor.sessions} sessions
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ROW 4 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* DAILY ACTIVITY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Daily Activity
          </h3>

          <img
            src="/images/3.jpg.jpeg"
            className="w-full h-40 rounded-lg"
          />
        </div>

        {/* SESSION LOG */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Sessions
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Sarah → Alex</span>
              <span className="text-green-500">Completed</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Michael → Ravi</span>
              <span className="text-red-500">Cancelled</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Emma → Ananya</span>
              <span className="text-green-500">Completed</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}