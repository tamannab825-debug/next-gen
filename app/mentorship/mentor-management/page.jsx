"use client";

import { useState } from "react";

const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    expertise: "Frontend Development",
    rating: 4.8,
    mentees: 5,
    availability: "Available",
  },
  {
    id: 2,
    name: "Michael Lee",
    expertise: "Backend Development",
    rating: 4.6,
    mentees: 3,
    availability: "Busy",
  },
  {
    id: 3,
    name: "Emma Wilson",
    expertise: "UI/UX Design",
    rating: 4.9,
    mentees: 6,
    availability: "Available",
  },
  {
    id: 4,
    name: "Charu Parnwal",
    expertise: "UI/UX Design",
    rating: 4.3,
    mentees: 4,
    availability: "Busy",
  },
  {
    id: 5,
    name: "Happy Rao",
    expertise: "Data Analyst",
    rating: 4.5,
    mentees: 5,
    availability: "Available",
  },
];

export default function MentorsPage() {
  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-6 py-5 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentors Management
          </h1>
          <p className="text-gray-500 text-sm">
            Manage mentors, assignments, and performance
          </p>
        </div>

       <div className="flex gap-4 items-center">
        {/* Search */}
      <div className="">
        <input
          type="text"
          placeholder="Search mentors..."
          className="w-full md:w-80 px-4 py-2 bg-white border border-red-300 text-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        <div>
             <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
          + Add Mentor
        </button>
        </div>
       </div>
      </div>

      

      {/* Mentor List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition"
          >
            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">
              {mentor.name}
            </h2>

            {/* Expertise */}
            <p className="text-sm text-gray-500 mt-1">
              {mentor.expertise}
            </p>

            {/* Info */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>⭐ Rating: {mentor.rating}</p>
              <p>👨‍🎓 Mentees: {mentor.mentees}</p>
              <p>
                Status:{" "}
                <span
                  className={`font-medium ${
                    mentor.availability === "Available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {mentor.availability}
                </span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-5">
              <a href="/mentorship/profile">
                <button className="flex-1 border rounded-lg py-1 px-4 text-red-400 text-sm hover:bg-red-100">
                View Profile
              </button>
              </a>

              <button className="flex-1 border rounded-lg py-1 text-red-400 text-sm hover:bg-red-100">
                Edit
              </button>

              <button className="flex-1 border rounded-lg py-1 text-red-400 text-sm hover:bg-red-100">
                Assign
              </button>
            </div>

            <button className="w-full mt-3 text-red-500 text-sm hover:underline">
              Suspend Mentor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}