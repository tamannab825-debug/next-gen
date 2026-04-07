"use client";
import { BookOpenText, ListFilterPlus, CircleFadingPlus, ChartNoAxesCombined } from 'lucide-react';

export default function SkillDemandPage() {
  const skillDemand = [
    { skill: "React Developers", open: "420 profiles", growth: "+12%" },
    { skill: "UI/UX Designers", open: "310 profiles", growth: "+9%" },
    { skill: "Backend Engineers", open: "390 profiles", growth: "+15%" },
    { skill: "Product Managers", open: "180 profiles", growth: "+6%" },
    { skill: "Data Analysts", open: "220 profiles", growth: "+10%" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-8">

      {/* ===== OVERVIEW STATS ===== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "High Demand Skills", value: "25+", Icon:  BookOpenText , },
          { label: "Open Positions", value: "1,500+", Icon: ListFilterPlus, },
          { label: "Hiring Companies", value: "300+", Icon: CircleFadingPlus, },
          { label: "Avg Growth Rate", value: "11%", Icon:ChartNoAxesCombined, },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-7 shadow-sm text-center"
          >
              
            <div className="flex justify-between items-center">
                
                <div className="">
                    <p className="text-2xl font-semibold text-red-400">
              {item.value}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {item.label}
            </p>
                </div>

                <button className="rounded-xl p-3 bg-red-50">
                     {item.Icon && <item.Icon className='h-10 w-10 text-red-500'/>}
                </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ===== LEFT — SKILL LIST ===== */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">
            Most In-Demand Skills
          </h2>

          <div className="space-y-4">
            {skillDemand.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-100 rounded-xl p-4 hover:bg-red-50 hover:shadow transition"
              >
                {/* Skill */}
                <div>
                  <p className="font-medium text-gray-800">
                    {s.skill}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {s.open} actively hiring
                  </p>
                </div>

                {/* Growth + Action */}
                <div className="flex items-center gap-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
                    {s.growth} growth
                  </span>

                  <button className="text-sm border border-red-500 bg-white text-red-500 px-4 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition">
                    Add Job
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT — INSIGHTS ===== */}
        <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-2xl p-6 shadow-sm space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              Hiring Insights
            </h3>
            <p className="text-sm opacity-90 mt-1">
              Real-time hiring activity across platforms
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Interviews Scheduled</span>
              <span className="font-medium">240+</span>
            </div>
            <div className="flex justify-between">
              <span>Profiles Shortlisted</span>
              <span className="font-medium">68</span>
            </div>
            <div className="flex justify-between">
              <span>Confirmed Hires</span>
              <span className="font-medium">15</span>
            </div>
          </div>

          <div className="border-t border-white/20 pt-4">
            <p className="text-xs opacity-80 leading-relaxed">
              Candidates with these skills receive up to
              <span className="font-semibold"> 3× more interview calls</span>.
              Keep your portfolio and skills verified.
            </p>
          </div>

          <button className="w-full bg-white text-red-500 text-sm font-medium py-2 rounded-lg hover:bg-gray-100 transition">
            Improve My Profile
          </button>

        </div>

      </div>

    </div>
  );
}
