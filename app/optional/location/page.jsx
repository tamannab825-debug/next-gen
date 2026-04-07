"use client";

import { Building2 , MapPinPlusInside , BookMarked ,Handshake  } from 'lucide-react';

export default function TopLocationsPage() {
  const locations = [
    {
      city: "Bangalore",
      demand: "Very High",
      companies: 120,
      roles: ["Frontend Engineer", "Backend Engineer", "DevOps"],
    },
    {
      city: "Delhi NCR",
      demand: "High",
      companies: 96,
      roles: ["UI/UX Designer", "Product Manager", "QA Engineer"],
    },
    {
      city: "Mumbai",
      demand: "High",
      companies: 78,
      roles: ["Business Analyst", "Finance Tech", "Marketing Lead"],
    },
    {
      city: "Hyderabad",
      demand: "Medium",
      companies: 64,
      roles: ["Java Developer", "Cloud Engineer"],
    },
    {
      city: "Pune",
      demand: "Medium",
      companies: 14,
      roles: ["Java Developer", "Pythomn Devloper"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-400  space-y-8">


      {/* ===== QUICK INSIGHTS ===== */}
      <div className="bg-white rounded-xl shadow-lg p-6">
       <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
         {[
          { label: "Active Cities", value: "25+" , Icon: MapPinPlusInside ,  },
          { label: "Hiring Companies", value: "450+", Icon: Building2  },
          { label: "Open Roles", value: "1,200+", Icon: BookMarked, },
          { label: "Remote Friendly", value: "Yes" , Icon: Handshake,  },
        ].map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 space-y-2"
          >
            <div className="flex justify-between items-center">
                
                <div className="">
                    <p className="text-2xl font-semibold text-gray-600">
              {item.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {item.label}
            </p>
                </div>

                <button className="rounded-full bg-red-100 px-3 py-3">
                    {item.Icon && <item.Icon className="h-10 w-10 text-red-600" />}
                </button>
            </div>
          </div>
        ))}
       </div>
      </div>

      {/* ===== LOCATION GRID ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition space-y-5"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {loc.city}
                </h3>
                <p className="text-sm text-gray-500">
                  {loc.companies}+ hiring companies
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  loc.demand === "Very High"
                    ? "bg-red-400 text-white"
                    : loc.demand === "High"
                    ? "bg-orange-400 text-white"
                    : "bg-yellow-400 text-white"
                }`}
              >
                {loc.demand} Demand
              </span>
            </div>

            {/* Popular Roles */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Most Hired Roles
              </p>
              <div className="flex flex-wrap gap-2">
                {loc.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg border text-red-400"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              <button className="flex-1 text-sm border bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 hover:text-white transition">
                View Jobs
              </button>
              <button className="flex-1 text-sm bg-gray-100 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-200 transition">
                Companies
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
