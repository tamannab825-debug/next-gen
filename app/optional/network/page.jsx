"use client";

import { Contact , CalendarDays , ScanSearch ,  Dock } from 'lucide-react';

export default function CompanyNetworkPage() {
  const networkData = [
    {
      field: "Engineer",
      count: "1,245 Vacancies",
      img: "/images/13.jpg.jpeg",
      desc: "All engineering job openings",
    },
    {
      field: "Designer",
      count: "3,560 Vacancies",
      img: "/images/13.jpg.jpeg",
      desc: "UI/UX & Visual design roles",
    },
    {
      field: "Programmer",
      count: "1,120 Vacancies",
      img: "/images/13.jpg.jpeg",
      desc: "Programming & development jobs",
    },
    {
      field: "Data Analyst",
      count: "1,110 Vacancies",
      img: "/images/13.jpg.jpeg",
      desc: "Data Analyst jobs",
    },
    {
      field: "Data Science",
      count: "2,410 Vacancies",
      img: "/images/13.jpg.jpeg",
      desc: "Data Science jobs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8 font-sans text-gray-800">


      {/* NETWORK CARDS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {networkData.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* TOP ROW */}
            <div className="flex items-center justify-between">
             <div className="">
                 <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.field}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {item.desc}
                </p>
              </div>

              {/* COUNT */}
            <div className="mt-4">
              <p className="text-xl text-red-600">
                {item.count}
              </p>
              <p className="text-xs text-gray-500 mt-1">Active listings</p>
            </div>
             </div>

              <div className="w-24  rounded-xl bg-gray-200 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.field}
                  className="object-cover rounded"
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition">
                View Jobs
              </button>
              <button className="flex-1 border border-gray-300 text-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                Candidates
              </button>
            </div>                                
          </div>
        ))}
      </section>

      {/* INSIGHT STATISTICS */}
<section className="bg-white rounded-2xl p-6 shadow-sm">
  <h2 className="text-lg font-semibold text-gray-900 mb-6">
    Vacancy Insights
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        label: "Total Vacancies",
        value: "5,925",
        Icon: Contact,
      },
      {
        label: "New This Week",
        value: "420",
        Icon:  CalendarDays,
      },
      {
        label: "Avg. Views",
        value: "1.2K",
        Icon: ScanSearch ,
      },
      {
        label: "Applications Sent",
        value: "3,048",
        Icon:  Dock,
      },
    ].map((stat, i) => (
      <div
        key={i}
        className="relative bg-yellow-50 rounded-xl p-5 hover:bg-red-50 hover:transition-all hover:-translate-y-1 hover:shadow-md transition"
      >

        <div className="flex justify-between items-center">
          
          <div className="">
            {/* Content */}
        <p className="text-sm text-gray-700 ">
          {stat.label}
        </p>

        <p className="text-xl  text-red-400 mt-2">
          {stat.value}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Updated recently
        </p>
          </div>

          <div className="">
              {stat.Icon && <stat.Icon className=" h-10 w-10 text-red-400" />}

          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* OPTIONAL FILTERS / SEARCH (FOR LATER) */}
      {/* You can add search + industry filters here if required */}

    </div>
  );
}
