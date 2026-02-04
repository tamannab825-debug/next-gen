"use client";
import { useState } from "react";

const companyStats = [ 
    { title: "Active Jobs", value: "128" }, 
    { title: "Employees", value: "2,450+" },
     { title: "Hiring This Month", value: "34" }, 
     { title: "Company Rating", value: "4.6★" },
     ];
     
     const departments = [
    { name: "Engineering", jobs: 42 },
    { name: "Design", jobs: 18 }, 
    { name: "Marketing", jobs: 21 }, 
    { name: "HR & Talent", jobs: 12 }, 
    { name: "Product", jobs: 19 },
    { name: "Sales", jobs: 16 },
     ];
         
 const companies = [
     { name: "TechNova", industry: "IT Services", size: "1200+" },
     {name: "PixelCraft", industry: "Design Studio", size: "320+" },
     { name: "FinEdge", industry: "Fintech", size: "860+" }, 
     { name: "Kleon Team", industry: "Marketing", size: "240+" },
     { name: "Sakola", industry: "Fintech", size: "160+" },
     { name: "MarketHub", industry: "Marketing", size: "540+" },
     ];

export default function CompanyPage() {
  const [search, setSearch] = useState("");   

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-6 text-gray-800">


{/* ===== HEADER ===== */}
<div className="bg-white rounded-2xl p-4  shadow-sm flex flex-col lg:flex-row justify-between gap-4">
  <div>
    <h1 className="text-2xl font-semibold">Companies & Hiring Partners</h1>
    <p className="text-sm text-gray-500">
      Discover companies, teams and open roles
    </p>
  </div>

  <div className="flex w-full lg:w-96 bg-gray-50  rounded-xl overflow-hidden">
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search companies..."
      className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
    />
    <button className="bg-red-500 text-white px-5 hover:bg-red-600 text-sm">
      Search
    </button>
  </div>
</div>

{/* ===== PAGE GRID ===== */}
<div className="grid lg:grid-cols-3 gap-6">

{/* ================= LEFT SIDE (BIG) ================= */}
<div className="lg:col-span-2 space-y-6">

  {/* STATS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {companyStats.map((s, i) => (
      <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <p className="text-sm text-gray-500">{s.title}</p>
        <h3 className="text-2xl font-semibold mt-1">{s.value}</h3>
        <div className="mt-3 h-1 bg-gray-100 rounded-full">
          <div className="w-3/4 h-full bg-red-400 rounded-full" />
        </div>
      </div>
    ))}
  </div>

    {/* COMPANIES */}
  <div>
    <h2 className="font-semibold mb-4">Featured Companies</h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {companies.map((c, i) => (
        <div key={i}
         className="bg-white  text-center rounded-xl p-5 text- shadow-sm hover:shadow-md">
         <img src="images/photo" alt="" className="w-12 h-12 bg-gray-200  rounded-lg mx-auto mb-3 text-center" />

          <div className="">
            <h4 className="font-semibold">{c.name}</h4>
          <p className="text-sm text-gray-500">{c.industry}</p>
          <p className="text-xs text-gray-400">{c.size} employees</p>
          </div>

          <button className="mt-3 w-full text-sm border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white">
            Explore Jobs
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* DEPARTMENTS */}
  <div className="bg-white rounded-xl p-6  shadow-sm">
    <h2 className="font-semibold mb-4">Hiring Departments</h2>

    <div className="grid sm:grid-cols-2 gap-4">
      {departments.map((d, i) => (
        <div key={i} className="bg-gray-50 p-4 rounded-xl flex justify-between hover:bg-gray-100">
          <div>
            <p className="font-medium">{d.name}</p>
            <p className="text-xs text-gray-500">{d.jobs} open roles</p>
          </div>
          <span className="text-red-500 font-bold">→</span>
        </div>
      ))}
    </div>
  </div>



</div>

{/* ================= RIGHT SIDE ================= */}
<div className="space-y-6">

       {/* Recent hiring  */}
  <div className="bg-white rounded-xl p-5  shadow-sm">
  <h3 className="font-semibold text-gray-800 mb-4">
    Recent Hiring Activity
  </h3>

  <div className="space-y-3 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-500">Frontend Dev hired</span>
      <span className="text-green-500 font-medium">Today</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">UI Designer shortlisted</span>
      <span className="text-orange-500 font-medium">Yesterday</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Backend interview done</span>
      <span className="text-blue-500 font-medium">2 days ago</span>
    </div>
  </div>
</div>


 {/* Top Hiring */}
  <div className="bg-white rounded-xl p-5  shadow-sm">
   <h3 className="font-semibold text-gray-800 mb-4">
    Top Hiring Locations
  </h3>

  {[
    { city: "Bangalore", percent: "70%" },
    { city: "Delhi NCR", percent: "55%" },
    { city: "Mumbai", percent: "48%" },
  ].map((loc, i) => (
    <div key={i} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{loc.city}</span>
        <span className="text-gray-500">{loc.percent}</span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-400 rounded-full"
          style={{ width: loc.percent }}
        />
      </div>
    </div>
  ))}
</div>


  {/* GROWTH */}
  <div className="bg-white rounded-xl p-6  shadow-sm">
    <h3 className="font-semibold">Company Growth</h3>
    <p className="text-sm text-gray-500 mt-1">+18% this quarter</p>
    <div className="mt-4 h-2 bg-gray-200 rounded-full">
      <div className="w-[70%] bg-red-500 h-full rounded-full" />
    </div>
  </div>

  {/* POPULAR ROLES */}
  <div className="bg-white rounded-xl p-6  shadow-sm">
    <h3 className="font-semibold">Most Hired Roles</h3>
    <ul className="mt-3 text-sm text-gray-600 space-y-2">
      <li>Frontend Developer</li>
      <li>UI/UX Designer</li>
      <li>Backend Engineer</li>
      <li>Product Manager</li>

    </ul>
  </div>

  {/* ACTIVITY */}
  <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-xl p-6 shadow-sm">
    <h3 className="font-semibold text-lg">Hiring Activity</h3>
    <p className="text-sm opacity-90 mt-2">340 applications this month</p>
    <p className="mt-4 text-sm">✔ 68 interviews<br/>✔ 21 hires</p>
  </div>
  
</div>

 
</div>
{/* CTA */}
  <div className="bg-white rounded-xl p-6 w-full shadow-sm text-center">
    <h3 className="font-semibold">Post a Job</h3>
    <p className="text-sm text-gray-500 mt-1">
      Reach top talent instantly
    </p>
    <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
      Post Now
    </button>
  </div>

        </div>
  )
}