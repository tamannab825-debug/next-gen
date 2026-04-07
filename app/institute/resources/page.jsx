"use client";

import { useState } from "react";

const resources = [
  {
    title: "React Introduction Slides",
    type: "PDF",
    size: "2.4 MB",
    date: "12 Mar 2026",
  },
  {
    title: "UI Design Toolkit",
    type: "ZIP",
    size: "8.1 MB",
    date: "10 Mar 2026",
  },
  {
    title: "Node.js Backend Guide",
    type: "DOC",
    size: "1.7 MB",
    date: "08 Mar 2026",
  },
  {
    title: "Data Science Dataset",
    type: "CSV",
    size: "4.5 MB",
    date: "05 Mar 2026",
  },
  {
    title: "Figma Wireframe Kit",
    type: "FIG",
    size: "6.2 MB",
    date: "01 Mar 2026",
  },
];

export default function InstituteResources() {

  const [search, setSearch] = useState("");

  const filtered = resources.filter((file) =>
    file.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-[#f5f6fa] min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Learning Resources
          </h1>

          <p className="text-sm text-gray-500">
            Manage documents, materials, and resources for students
          </p>
        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border bg-white text-red-400 rounded-lg px-3 py-2 text-sm w-64 focus:border-red-500 focus:border-3 focus:ring-red-500 focus:outline-none"
          />

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
            + Upload Resource
          </button>

        </div>

      </div>


      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">

            {filtered.map((file, i) => (

              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition cursor-pointer"
              >

                <div className="text-4xl mb-3">
                  📄
                </div>

                <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                  {file.title}
                </h3>

                <div className="text-xs text-gray-500 space-y-1">

                  <p><span className="text-red-400">Type: </span>{file.type}</p>
                  <p><span className="text-red-400">Size:</span> {file.size}</p>
                  <p><span className="text-red-400">Uploaded: </span>{file.date}</p>

                </div>

                <div className="flex justify-between mt-4 text-xs">

                  <button className="text-red-500 hover:underline">
                    Download
                  </button>

                  <button className="text-gray-500 hover:underline">
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">


          {/* RESOURCE STATS */}
          <div className="bg-white rounded-xl shadow-sm p-5">

            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Resource Stats
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Total Files</span>
                <span className="font-medium text-red-500">{resources.length}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">PDF Files</span>
                <span className="font-medium text-red-500">2</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Total Storage</span>
                <span className="font-medium text-red-500">22 MB</span>
              </div>

            </div>

          </div>


          {/* RECENT UPLOADS */}
          <div className="bg-white rounded-xl shadow-sm p-5">

            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Recent Uploads
            </h3>

            <div className="space-y-3 text-sm">

              {resources.slice(0,3).map((file,i)=>(
                <div key={i} className="flex justify-between">

                  <span className="text-gray-600 truncate w-32">
                    {file.title}
                  </span>

                  <span className="text-red-500">
                    {file.type}
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* QUICK ACTION */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">

            <h3 className="text-sm font-semibold text-red-600 mb-2">
              Upload New Resource
            </h3>

            <p className="text-xs text-gray-500 mb-3">
              Add new study material for students and mentors.
            </p>

            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-600 transition">
              Upload File
            </button>

          </div>


        </div>


      </div>

    </div>
  );
}