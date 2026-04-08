"use client";

const analyticsStats = [
  { title: "Active Trials", value: "18" },
  { title: "Candidates Working", value: "126" },
  { title: "Completed Tasks", value: "342" },
  { title: "Avg Performance", value: "82%" },
];

export default function CompanyJobTrialPage() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6">

{/* ================= TOP STATS ================= */}
{/* <div className="grid md:grid-cols-4 gap-6">

{[
  ["Active Trials","18"],
  ["Candidates Working","126"],
  ["Completed Tasks","342"],
  ["Avg Performance","82%"]
].map((s,i)=>(
<div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
  <p className="text-sm text-gray-400">{s[0]}</p>
  <h2 className="text-2xl font-semibold mt-2 text-gray-800">{s[1]}</h2>
</div>
))}

</div> */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  {analyticsStats.map((s, i) => (
    <div
      key={i}
      className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
    >
      {/* soft background shape */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full opacity-60 group-hover:scale-110 transition" />

      <div className="relative z-10">

        {/* title */}
        <p className="text-sm text-gray-500">{s.title}</p>

        {/* number */}
        <h3 className="text-3xl text-gray-800 font-semibold mt-2">
          {s.value}
        </h3>

        {/* trend row */}
        <div className="flex items-center justify-between mt-4">

          <span className="text-xs text-green-500 font-medium">
            ▲ 12% this month
          </span>

          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-red-500 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  ))}

</div>


{/* ================= ANALYTICS ROW ================= */}
<div className="grid lg:grid-cols-3 gap-6">

{/* Trial Success Rate */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Trial Success Rate</h3>
  <img src="/images/3.jpg.jpeg" alt="" className="h-56 w-full rounded-lg flex items-center justify-center text-gray-400" />
</div>

{/* Active Job Trials */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <div className="flex justify-between  mb-4">
    <h3 className="font-semibold text-gray-700">Active Job Trials</h3>
    <button className="px-2 py-1 bg-red-500 text-white text-sm hover:bg-red-600 rounded">View All</button>
  </div>

  {[
    ["Frontend Challenge","32 Candidates"],
    ["Dashboard UI Task","24 Candidates"],
    ["API Optimization Task","18 Candidates"],
    ["Bug Fixing Trial","21 Candidates"],
  ].map((t,i)=>(
    <div key={i} className="flex justify-between items-center py-4 border-b last:border-none">
      <span className="text-gray-700 text-sm">{t[0]}</span>
      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
        {t[1]}
      </span>
    </div>
  ))}
</div>


{/* Trial Volume */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Trial Submissions</h3>
  <img src="/images/12.jpg.jpeg" alt="" className="h-56 w-full rounded-lg flex items-center justify-center text-gray-400" />
</div>

</div>


{/* ================= ACTIVE TRIALS + SHORTLIST ================= */}
<div className="grid lg:grid-cols-2 gap-6">



{/* Skill Performance */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Skill Performance</h3>

  {[
    ["Frontend Tasks",78],
    ["API Handling",65],
    ["Problem Solving",84],
    ["UI Quality",90]
  ].map((s,i)=>(
    <div key={i} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{s[0]}</span>
        <span className="text-gray-800 font-medium">{s[1]}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-red-500 rounded-full" style={{width:`${s[1]}%`}} />
      </div>
    </div>
  ))}
</div>

{/* Top Performing Candidates */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
 <div className="flex justify-between mb-4">
   <h3 className="font-semibold text-gray-700 ">Top Performers</h3>
  <a href="/optional3/top-performer">
   <button className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 rounded text-sm">
    View All
   </button>
   </a>
 </div>

  {[
    ["Aman Sharma","92%"],
    ["Priya Mehta","90%"],
    ["Rohit Verma","88%"],
    ["Sneha Patel","86%"],
  ].map((c,i)=>(
    <div key={i} className="flex justify-between items-center py-4 border-b last:border-none">
      <span className="text-gray-700 text-sm">{c[0]}</span>
      <span className="text-red-500 font-medium">{c[1]}</span>
    </div>
  ))}
</div>

</div>


{/* ================= RECENT SUBMISSIONS ================= */}


    </div>
  );
}