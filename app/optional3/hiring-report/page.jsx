"use client";

export default function HiringAnalyticsReport() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">

      {/* PAGE HEADER */}
      <section className="bg-white rounded-2xl p-4 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Hiring Analytics Report
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track candidate flow, hiring efficiency, and performance insights
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border border-red-300 text-red-300 rounded-lg hover:bg-red-100 hover:text-red-400 hover:border-red-400">
            Export PDF
          </button>
          <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
            Last 30 Days
          </button>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Applications", value: "1,248", trend: "+12%" },
          { label: "Assessments Completed", value: "642", trend: "+8%" },
          { label: "Interviews Scheduled", value: "214", trend: "+5%" },
          { label: "Candidates Hired", value: "38", trend: "+3%" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4  border border-gray-100"
          >
            <p className="text-xs text-gray-500">{item.label}</p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-1">
              {item.value}
            </h2>
            <p className="text-xs text-green-600 mt-1">
              ▲ {item.trend} this period
            </p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-6">
        {/* PIPELINE FUNNEL */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-semibold text-gray-800">
            Hiring Funnel
          </h3>
          <span className="text-xs text-gray-500">
            Conversion overview
          </span>
        </div>

        <div className="space-y-4">
          {[
            { stage: "Applications Received", count: "1,248", percent: "100%" },
            { stage: "Assessments Completed", count: "642", percent: "51%" },
            { stage: "Interviewed", count: "214", percent: "17%" },
            { stage: "Offers Made", count: "62", percent: "5%" },
            { stage: "Hired", count: "38", percent: "3%" },
          ].map((step, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{step.stage}</span>
                <span className="text-gray-800 font-medium">
                  {step.count} · {step.percent}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-red-500 rounded-full"
                  style={{ width: step.percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLE PERFORMANCE */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">
          Role-wise Performance
        </h3>

        <div className="space-y-4">
          {[
            {
              role: "Software Engineer",
              applications: 520,
              hired: 18,
            },
            {
              role: "UX Designer",
              applications: 310,
              hired: 11,
            },
            {
              role: "Marketing Specialist",
              applications: 418,
              hired: 9,
            },
          ].map((role, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 rounded-xl p-4"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {role.role}
                </p>
                <p className="text-xs text-gray-500">
                  {role.applications} applications
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-red-500">
                  {role.hired} hired
                </p>
                <p className="text-xs text-gray-400">
                  Conversion {(role.hired / role.applications * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* INSIGHTS */}
      <section className="grid lg:grid-cols-2 gap-6">

        {/* INSIGHTS */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">
            Key Insights
          </h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Most drop-offs happen after assessments</li>
            <li>• UX Designer roles convert faster</li>
            <li>• Trial-based hiring improves offer acceptance</li>
            <li>• Shorter interview cycles lead to higher success</li>
          </ul>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="bg-red-50 rounded-2xl p-6">
          <h3 className="font-semibold text-red-600 mb-3">
            Recommendations
          </h3>

          <ul className="space-y-2 text-sm text-red-500">
            <li>• Simplify assessment tasks</li>
            <li>• Auto-screen low-fit candidates</li>
            <li>• Prioritize high-performing job roles</li>
            <li>• Introduce faster interview scheduling</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
