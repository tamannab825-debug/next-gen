"use client";

const stats = [
  { title: "Total Programs", value: "24" },
  { title: "Active Programs", value: "12" },
  { title: "Completed Programs", value: "8" },
  { title: "Avg. Success Rate", value: "89%" },
];

const programs = [
  {
    name: "Frontend Bootcamp",
    success: "92%",
    completion: "85%",
    dropout: "15%",
  },
  {
    name: "Backend Program",
    success: "87%",
    completion: "80%",
    dropout: "20%",
  },
  {
    name: "Career Guidance",
    success: "90%",
    completion: "82%",
    dropout: "18%",
  },
];

export default function ProgramSuccessPage() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* HEADER */}
     
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Program Success Analytics
          </h1>
          <p className="text-sm text-gray-500">
            Analyze program performance, completion rates and engagement
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

        {/* SUCCESS OVERVIEW */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Overall Success Rate
          </h3>

          <div className="space-y-4 text-gray-600 text-sm">

            <div className="flex justify-between">
              <span>Total Enrollments</span>
              <span>2,840</span>
            </div>

            <div className="flex justify-between">
              <span>Successful Completions</span>
              <span className="text-green-500">2,520</span>
            </div>

            <div className="flex justify-between">
              <span>Dropouts</span>
              <span className="text-red-500">320</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-red-500 h-2 rounded-full w-[89%]" />
            </div>

          </div>
        </div>

        {/* TOP PROGRAM */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top Program
          </h3>

          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-800">
              Frontend Bootcamp
            </p>

            <p className="text-2xl text-red-500 font-semibold">
              92%
            </p>

            <p className="text-xs text-gray-500">
              Highest success rate among all programs
            </p>
          </div>
        </div>

      </div>

      {/* ROW 3 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* PROGRAM SUCCESS LIST */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Program-wise Success
          </h3>

          <div className="space-y-5">
            {programs.map((p, i) => (
              <div key={i}>
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <span>{p.name}</span>
                  <span>{p.success}</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: p.success }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPLETION VS DROPOUT */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Completion vs Dropout
          </h3>

          <div className="space-y-4 text-gray-600 text-sm">

            <div>
              <div className="flex justify-between  mb-1">
                <span>Completion</span>
                <span className="text-green-500">85%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-green-500 h-2 w-[85%] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Dropout</span>
                <span className="text-red-500">15%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-[15%] rounded-full" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ROW 4 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SUCCESS TREND */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Success Trend
          </h3>

          <img
            src="/images/3.jpg.jpeg"
            className="w-full h-40 rounded-lg"
          />
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Key Insights
          </h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Frontend Bootcamp leads in success rate</li>
            <li>Dropout rate decreased by 12% this quarter</li>
            <li>Mentor engagement improves completion rate</li>
            <li>Shorter programs show higher success ratio</li>
          </ul>
        </div>

      </div>

    </div>
  );
}