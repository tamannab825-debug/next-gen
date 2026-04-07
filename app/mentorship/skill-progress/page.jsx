"use client";

const stats = [
  { title: "Total Skills", value: "26" },
  { title: "Advanced Level", value: "8" },
  { title: "Intermediate", value: "12" },
  { title: "Beginner", value: "6" },
];

const skills = [
  { name: "React", progress: 35 },
  { name: "JavaScript", progress: 75 },
  { name: "Node.js", progress: 60 },
  { name: "System Design", progress: 40 },
];

const categories = [
  { name: "Frontend", value: "80%" },
  { name: "Backend", value: "65%" },
  { name: "Database", value: "55%" },
  { name: "System Design", value: "40%" },
];

export default function SkillsProgressPage() {
  return (
    <div className="p-6 bg-[#f5f6fa] text-gray-600 min-h-screen space-y-4">

      {/* HEADER */}
      
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Skills Progress Analytics
          </h1>
          <p className="text-sm text-gray-500">
            Track skill development, category strength and growth trends
          </p>
        

       
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-4 text-center rounded-xl shadow-sm">

             <h2 className="text-2xl font-semibold text-red-500 ">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500">{item.title}</p>
           
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* OVERALL PROGRESS */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Overall Skill Progress
          </h3>

          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOP SKILL */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top Skill
          </h3>

          <div className="flex flex-col justify-center items-center h-40">
            <p className="text-3xl font-semibold text-red-500">
              React
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Highest proficiency level
            </p>
          </div>
        </div>

      </div>

      {/* ROW 3 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* CATEGORY BREAKDOWN */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Category Breakdown
          </h3>

          <div className="space-y-4">
            {categories.map((cat, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{cat.name}</span>
                  <span>{cat.value}</span>
                </div>

                <div className="bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: cat.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SKILL LEVEL DISTRIBUTION */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Skill Level Distribution
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Advanced</span>
              <span className="text-green-500">30%</span>
            </div>

            <div className="flex justify-between">
              <span>Intermediate</span>
              <span className="text-yellow-500">50%</span>
            </div>

            <div className="flex justify-between">
              <span>Beginner</span>
              <span className="text-red-500">20%</span>
            </div>
          </div>
        </div>

      </div>

      {/* ROW 4 */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SKILL GROWTH */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Skill Growth Trend
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
            <li>Frontend skills are strongest across mentees</li>
            <li>System Design shows lowest progress</li>
            <li>React and JS dominate skill growth</li>
            <li>Backend skills improving steadily</li>
          </ul>
        </div>

      </div>

    </div>
  );
}