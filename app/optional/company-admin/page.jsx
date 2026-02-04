"use client";
import { useState } from "react";
const analyticsStats = [
  { title: "Total Applications", value: "8,420" },
  { title: "Interviews Scheduled", value: "1,280" },
  { title: "Offers Made", value: "420" },
  { title: "Successful Hires", value: "310" },
];

export default function CompanyAdminDashboard() {

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-8">


{/* STATS – MODERN ANALYTICS STYLE */}
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

{/* ================= CENTER AREA ================= */}
<div className="grid lg:grid-cols-10 gap-6">

{/* BIG GRAPH ZONE */}
<div className="lg:col-span-6 space-y-6">
  <div className="bg-white rounded-3xl p-6 shadow-sm">
    <h2 className="font-semibold text-gray-800 mb-4">Hiring Momentum</h2>

  
<img src="/images/3.jpg.jpeg" alt="" className="h-96 w-full border border-dashed rounded-xl flex items-center justify-center" />
  </div>


{/* ================= PERFORMANCE INSIGHTS ================= */}
<div className="grid md:grid-cols-3 gap-6">

{[
  { title: "Application Growth", value: "+24%", desc: "vs last month" },
  { title: "Interview Success Rate", value: "68%", desc: "conversion" },
  { title: "Offer Acceptance", value: "74%", desc: "positive trend" },
].map((item,i)=>(
  <div
    key={i}
    className="bg-white rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-md transition"
  >
    <p className="text-sm text-gray-500">{item.title}</p>

    <h3 className="text-3xl font-semibold text-gray-800 mt-2">
      {item.value}
    </h3>

    <p className="text-xs text-green-500 mt-1">
      ▲ {item.desc}
    </p>

    {/* <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="w-4/5 h-full bg-red-500 rounded-full" />
    </div> */}
  </div>
))}

</div>

  

</div>



<div className="lg:col-span-4 space-y-6">
    {/* LIVE ACTIVITY FEED */}
<div className=" bg-white rounded-3xl p-6 shadow-sm">
  <h2 className="font-semibold text-gray-800 mb-4">Live Updates</h2>

  <div className="space-y-4 text-sm text-gray-600">
    <p>📩 12 new applications received</p>
    <p>📅 Interview scheduled with Ankit</p>
    <p>✅ Offer accepted (UI Designer)</p>
    <p>⚠ Approval pending (Backend role)</p>
  </div>
</div>

{/* ================= HIRING SPEED ================= */}
<div className="bg-white rounded-3xl p-6 shadow-sm">

<h2 className="font-semibold text-gray-800 mb-5">Hiring Speed</h2>

{[
  { stage: "Application Review", p: "80%" },
  { stage: "Interview Process", p: "65%" },
  { stage: "Offer Release", p: "45%" },
].map((s,i)=>(
  <div key={i} className="mb-4">
    <div className="flex justify-between space-y-3 text-sm text-gray-400 mb-1">
      <span>{s.stage}</span>
      <span className="text-gray-500">{s.p}</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-full bg-red-500 rounded-full" style={{width:s.p}} />
    </div>
  </div>
))}

</div>

{/* ================= APPROVAL QUEUE ================= */}
<div className="bg-white rounded-3xl p-6 shadow-sm">

<h2 className="font-semibold text-gray-800 mb-4">Pending Approvals</h2>

<div className="space-y-3 text-sm text-gray-600">
  <p>⏳ Backend Developer – Interview Result</p>
  <p>⏳ UI Designer – Salary Approval</p>
  <p>⏳ Product Manager – Final Offer</p>
</div>

</div>


</div>


</div>

{/* ================= PERFORMANCE SNAPSHOT ================= */}
<div className="bg-white rounded-3xl p-6 shadow-sm">

<h2 className="font-semibold text-gray-800 mb-6">Performance Snapshot</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  {[
    { label: "Fastest Hire", value: "4 Days", sub: "UI Designer" },
    { label: "Most Applied Role", value: "Frontend Dev", sub: "1,240 applicants" },
    { label: "Interview Success", value: "68%", sub: "Above average" },
    { label: "Offer Acceptance", value: "76%", sub: "Strong conversion" },
  ].map((item,i)=>(
    <div key={i} className="border rounded-2xl p-5 hover:shadow-sm transition">

      <p className="text-sm text-gray-500">{item.label}</p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-2">
        {item.value}
      </h3>

      <p className="text-xs text-gray-400 mt-1">{item.sub}</p>

      <div className="mt-4 h-1 bg-gray-200 rounded-full">
        <div className="w-3/4 h-full bg-red-500 rounded-full"/>
      </div>

    </div>
  ))}

</div>
</div>




</div>
  );
}
