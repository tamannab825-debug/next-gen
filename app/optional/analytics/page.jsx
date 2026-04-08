"use client";
import { useState } from "react";

const analyticsStats = [
  { title: "Total Applications", value: "8,420" },
  { title: "Interviews Scheduled", value: "1,280" },
  { title: "Offers Made", value: "420" },
  { title: "Successful Hires", value: "310" },
];

const departments = [
  { name: "Engineering", percent: "75%" },
  { name: "Design", percent: "48%" },
  { name: "Marketing", percent: "62%" },
  { name: "Product", percent: "55%" },
];

const topCompanies = [
  { name: "TechNova", hires: 82 },
  { name: "PixelCraft", hires: 46 },
  { name: "FinEdge", hires: 64 },
  { name: "MarketHub", hires: 38 },
];

export default function AnalyticsPage() {
  const [filter, setFilter] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-5 space-y-6 text-gray-800">

{/* ===== HEADER ===== */}
{/* <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col lg:flex-row justify-between gap-4">
  <div>
    <h1 className="text-2xl font-semibold">Hiring Analytics</h1>
    <p className="text-sm text-gray-500">
      Track recruitment performance and growth
    </p>
  </div>

  <div className="flex w-full lg:w-80 bg-gray-50 rounded-xl overflow-hidden">
    <input
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search department..."
      className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
    />
    <button className="bg-red-500 text-white px-5 hover:bg-red-600 text-sm">
      Filter
    </button>
  </div>
</div> */}

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
        <h3 className="text-3xl font-semibold mt-2">
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

          {/* ===== PAGE GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-6">

           {/* vacany Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Vacancy Stats
              </h3>
             <div className="">
               <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Daily</button>
              <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">weekly</button>
              <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Monthly</button>
             </div>
            </div>

            <div className="mb-3 flex gap-4">
              <div className="flex gap-2">
                <button className="rounded-full w-2 h-2 bg-green-500" > .</button>
              <p className="text-gray-500 -mt-2">Apllication sent</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full w-2 h-2 bg-blue-500" > .</button>
              <p className="text-gray-500 -mt-2">Interview</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full w-2 h-2 bg-red-500" > .</button>
              <p className="text-gray-500 -mt-2">Rejected</p>
              </div>
            </div>

            <img src="/images/3.jpg.jpeg" alt="" className="h-60 w-full flex items-center justify-center rounded-lg" />
          </div>

           {/* Left side */}
           <div className="space-y-6">
             {/* TODAY */}
           <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-3">Today’s Activity</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✔ 32 new applications</li>
            <li>✔ 8 interviews scheduled</li>
            <li>✔ 3 offers sent</li>
        </ul>
       </div>

           {/* LOCATIONS */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
         <div className="flex justify-between  mb-3">
          <h3 className="font-semibold">Top Locations</h3>
          <a href="/optional/location">
            <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">View</button>
          </a>
         </div>

          {["Bangalore", "Delhi NCR", "Mumbai"].map((c, i) => (
          <div key={i} className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">{c}</span>
          <span className="text-gray-400">High</span>
        </div>
        ))}
       </div>
      </div>
     </div>


              {/* graph */}
       <div className="bg-white rounded-xl p-6 shadow-sm">
         <div className="flex justify-between items-center mb-4">
           <h3 className="text-lg font-semibold text-gray-800">
             Chart
           </h3>
           <div className="">
            <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Daily</button>
           <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">weekly</button>
           <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Monthly</button>
          </div>
       </div>

        <div className="mb-3 flex  gap-12">
          <div className="flex gap-2">
            <button className=" w-3 h-3 bg-red-500" > .</button>
          <p className="text-gray-700 text-sm -mt-1 ">Delivered</p>
          <p className="ms-3 text-gray-800 -mt-2">234</p>
          </div>

        <div className="flex gap-2">
          <button className=" w-3 h-3 bg-gray-500" > .</button>
         <p className="text-gray-700 text-sm -mt-1 ">Expense</p>
         <p className="ms-3 text-gray-800 -mt-2">$8354</p>
         </div>
        </div>

         <img src="/images/6.jpg.jpeg" alt="" className="h-80 w-full flex items-center justify-center rounded-lg" />
       </div>

{/* ===== PAGE GRID ===== */}
<div className="grid lg:grid-cols-3 gap-6">

{/* ================= LEFT SIDE ================= */}
<div className="lg:col-span-2 space-y-6">
  
{/* DEPARTMENT GRAPH */}
<div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2">
  <h2 className="font-semibold mb-4">Department Contribution</h2>

  <div className="space-y-6">
    {departments.map((d, i) => (
      <div key={i}>
        <div className="flex justify-between text-sm mb-2">
          <span>{d.name}</span>
          <span className="text-gray-500">{d.percent}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full"
            style={{ width: d.percent }}
          />
        </div>
      </div>
    ))}
  </div>
</div>

{/* TOP COMPANIES */}
<div className="bg-white rounded-xl p-6 shadow-sm">
  <div className="flex justify-between mb-4">
    <h2 className="font-semibold ">Top Hiring Companies</h2>
    <a href="">
      <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">
        View All
      </button>
    </a>
  </div>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
    {topCompanies.map((c, i) => (
      <div key={i} className="text-center bg-gray-50 p-4 rounded-xl">
        <h4 className="font-semibold">{c.name}</h4>
        <p className="text-sm text-gray-500">{c.hires} hires</p>
      </div>
    ))}
  </div>
</div>

</div>

{/* ================= RIGHT SIDE ================= */}
<div className="space-y-6">

    {/* BEST ROLE */}
<div className="bg-white rounded-xl p-5 shadow-sm">
  <h3 className="font-semibold mb-3">Top Role</h3>
  <p className="text-sm text-gray-600">Frontend Developer</p>
  <p className="text-red-500 font-semibold mt-1">92 hires</p>
</div>

{/* GROWTH */}
<div className="bg-white rounded-xl p-5 shadow-sm">
  <h3 className="font-semibold">Monthly Growth</h3>
  <p className="text-sm text-gray-500 mt-1">+24%</p>
  <div className="mt-3 h-2 bg-gray-200 rounded-full">
    <div className="w-[75%] h-full bg-red-500 rounded-full" />
  </div>
</div>

{/* INSIGHTS */}
<div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-lg">Smart Insights</h3>
  <p className="text-sm mt-3 opacity-90">
    Engineering and Marketing teams are leading hiring growth this quarter.
  </p>

  <ul className="mt-4 space-y-2 text-sm">
    <li>✔ Highest demand roles increased</li>
    <li>✔ Interview success rate improving</li>
    <li>✔ Faster hiring cycles</li>
  </ul>
</div>



</div>

</div>
</div>
  );
}