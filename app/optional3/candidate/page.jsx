"use client";

export default function CompanyCandidateReview() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6">

{/* ================= ROW 1 : PIPELINE + AI INSIGHT ================= */}
<div className="grid lg:grid-cols-3 gap-6">

{/* Hiring Pipeline */}
<div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2">
  <h3 className="font-semibold text-gray-700 mb-4">Candidate Pipeline</h3>

  <div className="grid grid-cols-4 gap-4">

    {[
      ["Applied",132],
      ["Trial",64],
      ["Shortlisted",28],
      ["Hired",9]
    ].map((p,i)=>(
      <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow transition">
        <p className="text-sm text-gray-400">{p[0]}</p>
        <h2 className="text-2xl font-semibold text-red-500 mt-2">{p[1]}</h2>
      </div>
    ))}

  </div>

 <img src="/images/3.jpg.jpeg" alt="" className="h-48 w-full mt-6 rounded-lg flex items-center justify-center text-gray-400" />
</div>

{/* AI Hiring Suggestions */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">AI Hiring Insights</h3>

  <div className="space-y-4">

    <div className="bg-gray-50 p-4 rounded-xl">
      <p className="text-sm font-medium text-gray-800">
        3 candidates ready for hire
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Based on trial performance & consistency
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-xl">
      <p className="text-sm font-medium text-gray-800">
        Frontend skills strongest this week
      </p>
      <p className="text-xs text-gray-400 mt-1">
        24% improvement across trials
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-xl">
      <p className="text-sm font-medium text-gray-800">
        5 candidates falling behind
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Low task completion rate
      </p>
    </div>

  </div>
</div>

</div>


{/* ================= ROW 2 : LIVE TRIALS + PERFORMANCE ================= */}
<div className="grid lg:grid-cols-2 gap-6">

{/* Live Trial Board */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Live Job Trials</h3>

  {[
    ["Aman Sharma","Frontend UI Task","72% Done"],
    ["Neha Gupta","API Build","55% Done"],
    ["Rohit Verma","Bug Fix Sprint","80% Done"],
    ["Sneha Patel","Testing Flow","65% Done"],
  ].map((t,i)=>(
    <div key={i} className="py-4 border-b last:border-none">

      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-500 font-medium">{t[0]}</span>
        <span className="text-xs text-gray-500">{t[2]}</span>
      </div>

      <p className="text-xs text-gray-400 mb-2">{t[1]}</p>

      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-red-500 rounded-full"
          style={{ width: t[2] }}
        />
      </div>
    </div>
  ))}
</div>

{/* Skill Comparison */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Top Candidate Skills</h3>

  <img src="/images/7.jpg.jpeg" alt="" className=" w-full  rounded-lg flex items-center justify-center text-gray-400" />

  <div className="grid grid-cols-3 gap-4 mt-4 text-center">
    <div className="text-sm text-gray-500">Frontend</div>
    <div className="text-sm text-gray-500">Backend</div>
    <div className="text-sm text-gray-500">Problem Solving</div>
  </div>
</div>

</div>


{/* ================= ROW 3 : DECISION CENTER ================= */}
<div className="grid lg:grid-cols-3 gap-6">

{/* Ready to Hire */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Ready to Hire</h3>

  {["Priya Mehta","Karan Singh","Riya Kapoor"].map((c,i)=>(
    <div key={i} className="flex justify-between py-3 border-b last:border-none">
      <span className="text-sm text-gray-500">{c}</span>
      <button className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
        Hire
      </button>
    </div>
  ))}
</div>

{/* Needs Review */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold mb-4 text-gray-700">Needs Review</h3>

  {["Mohit Jain","Pooja Verma","Rahul Das"].map((c,i)=>(
    <div key={i} className="flex justify-between py-3 border-b last:border-none">
      <span className="text-sm text-gray-500">{c}</span>
      <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
        Review
      </span>
    </div>
  ))}
</div>

{/* Rejected */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-700 mb-4">Not Selected</h3>

  {["Aakash Roy","Simran Kaur"].map((c,i)=>(
    <div key={i} className="flex justify-between py-3 border-b last:border-none">
      <span className="text-sm text-gray-500">{c}</span>
      <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
        Rejected
      </span>
    </div>
  ))}
</div>

</div>

    </div>
  );
}
