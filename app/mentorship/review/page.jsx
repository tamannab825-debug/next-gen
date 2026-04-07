"use client";

const stats = [
  { title: "Total Reviews", value: "842" },
  { title: "Average Rating", value: "4.6 ⭐" },
  { title: "Mentors Rated", value: "36" },
  { title: "Sessions Reviewed", value: "512" },
];

const mentors = [
  { name: "Sarah Johnson", rating: 4.9, sessions: 82 },
  { name: "Michael Lee", rating: 4.8, sessions: 75 },
  { name: "Emma Wilson", rating: 4.7, sessions: 68 },
];

const reviews = [
  {
    mentee: "John Carter",
    mentor: "Sarah Johnson",
    review: "The session was extremely helpful and cleared my React doubts.",
    rating: 5,
  },
  {
    mentee: "Lisa Brown",
    mentor: "Michael Lee",
    review: "Great guidance on backend architecture and APIs.",
    rating: 4,
  },
];

const feedback = [
  {
    mentee: "David Smith",
    message: "Mentorship helped me improve my coding confidence.",
  },
  {
    mentee: "Emma Wilson",
    message: "The sessions are very interactive and practical.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-5">

      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Reviews & Ratings
        </h1>
        <p className="text-gray-500 text-sm">
          Feedback shared between mentors and mentees
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-red-200 text-center rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-500 text-sm">{s.title}</p>
            <p className="text-2xl font-semibold text-red-500 mt-1">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* MENTOR RATINGS */}
      <div className="bg-white rounded-xl border px-6 py-4 shadow-sm">
       <div className="flex justify-between mb-3">
         <h3 className="font-semibold text-gray-700">
          Top Rated Mentors
        </h3>

        <a href="/mentorship/top-mentor" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
       </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 hover:shadow-sm transition"
            >
              <p className="font-medium text-gray-800">{mentor.name}</p>

              <p className="text-sm text-gray-500 mt-1">
                Sessions: {mentor.sessions}
              </p>

              <p className="text-red-500 text-sm mt-2">
                ⭐ {mentor.rating} Rating
              </p>

              <a href="/mentorship/profile">
                <button className="mt-3 text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                View Profile
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* SESSION REVIEWS */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* REVIEW CARDS */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
         <div className="flex justify-between  mb-5">
           <h3 className="font-semibold text-gray-700">
            Session Reviews
          </h3>

           <a href="/mentorship/session-review">
                 <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
         </div>

          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-red-400 font-medium">
                    {r.mentee} → {r.mentor}
                  </p>

                  <span className="text-red-500 text-sm">
                    {"⭐".repeat(r.rating)}
                  </span>
                </div>

                <p className="text-sm text-gray-600">{r.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEEDBACK FEED */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between  mb-5">
            <h3 className="font-semibold text-gray-700">
            Mentee Feedback
          </h3>

           <a href="/mentorship/mentee-feedback">
                 <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
          </div>

          <div className="space-y-4">
            {feedback.map((f, i) => (
              <div
                key={i}
                className="border-l-4 border-red-500 bg-gray-50 p-4"
              >
                <p className="text-sm text-gray-600">
                  {f.message}
                </p>

                <p className="text-xs text-red-400 mt-2">
                  — {f.mentee}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RATING DISTRIBUTION */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-semibold text-gray-700">
            Rating Distribution
          </h3>

          <select className="border rounded text-gray-500 px-2 py-1 text-sm">
            <option>Last 30 Days</option>
            <option>Last 6 Months</option>
          </select>
        </div>

        <img src="/images/6.jpg.jpeg" alt="chart" className="h-40 w-full flex items-center justify-center text-gray-400" />
      </div>

    </div>
  );
}