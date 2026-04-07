"use client";

export default function MentorshipMarketplace() {
  return (
    <div className="min-h-screen space-y-4 bg-gray-100 px-6 py-4">

      {/* PAGE INTRO */}
<section className="bg-white rounded-3xl border border-gray-100 p-4">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* LEFT CONTENT */}
    <div>
     
      <h1 className="text-xl font-semibold text-gray-900 ">
        Mentorship Marketplace
      </h1>

      <p className="text-sm text-gray-600 mt-2 max-w-xl leading-relaxed">
        Connect with verified industry professionals for personalized mentorship,
        portfolio feedback, and interview preparation.
      </p>

       <span className="inline-block text-xs font-medium text-red-500 mt-3 bg-red-50 px-3 py-1 rounded-full">
        Career Guidance · 1:1 Sessions
      </span>

    </div>

    {/* RIGHT STATS */}
    <div className="flex gap-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-red-500">120+</p>
        <p className="text-xs text-gray-500">Mentors</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-red-500">4.8★</p>
        <p className="text-xs text-gray-500">Avg Rating</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-red-500">Free</p>
        <p className="text-xs text-gray-500">Intro Calls</p>
      </div>
    </div>

  </div>
</section>

          
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2 space-y-8">

          

          {/* MENTORS LIST */}
          <section className="space-y-6">
            {[
              {
                name: "Sarah Lee",
                expertise: "UI/UX & Product Design",
                experience: "8+ years",
                slots: "3 slots available",
                price: "₹1,499 / session",
                rating: "4.8",
                Availability:"Available Today",
              },
              {
                name: "Jake Roberts",
                expertise: "Frontend & React",
                experience: "6+ years",
                slots: "Free intro call",
                price: "Free",
                rating: "4.6",
                Availability:"Not Available Today",
              },
              {
                name: "Happy Rao",
                expertise: "Data  Analytics",
                experience: "2+ years",
                slots: "Free intro call",
                price: "Free",
                rating: "4.3",
                Availability:"Available Today",
              },
            ].map((mentor, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex justify-between gap-6">

                  {/* LEFT INFO */}
                  <div className="flex gap-5">
                    <img
                      src="/images/person.png"
                      alt="mentor"
                      className="w-14 h-14 rounded-full bg-gray-200"
                    />

                   <a href="/optional2/mentor">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {mentor.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {mentor.expertise}
                      </p>

                      <div className="flex gap-4 mt-2 text-xs text-gray-500">
                        <span className="text-red-500">{mentor.experience}</span>
                        <span>⭐ {mentor.rating}</span>
                      </div>

                      <p className="mt-2 text-sm text-gray-600">
                        {mentor.slots}
                      </p>
                    </div>
                    </a>
                  </div>

                 {/* RIGHT ACTION */}
                <div className="text-right space-y-2">

                 {/* Price */}
                <p className="text-red-500 font-medium text-lg">
                {mentor.price}
               </p>

                {/* Book Button */}
               <button
                 className={`mt-3 px-4 py-2 rounded-lg text-sm
                   ${
                  mentor.Availability === "Available Today"
                   ? "bg-red-500 text-white hover:bg-red-600"
                   : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }
                 `}
                disabled={mentor.Availability !== "Available Today"}
                >
                Book Session
               </button>

              {/* Availability (below button) */}
               <span
               className={`block mt-1 text-xs font-medium
               ${
               mentor.Availability === "Available Today"
                ? "text-green-600"
                : "text-red-500"
              }
             `}
             >
              {mentor.Availability}
            </span>

            </div>

               
                </div>

                {/* REVIEWS */}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600 italic">
                    “Very clear explanations and practical advice.”
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-6">

          {/* BOOKING INFO */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-semibold text-gray-800 mb-3">
              How Booking Works
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Choose a mentor</li>
              <li>• Select available slot</li>
              <li>• Pay & confirm session</li>
              <li>• Join via video call</li>
            </ul>
          </div>

          {/* COMMISSION */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              Platform Fee
            </h3>
            <p className="text-sm text-gray-600">
              A small platform commission is included to support
              mentor quality checks and secure payments.
            </p>
          </div>

          {/* TRUST */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              Safe & Verified
            </h3>
            <p className="text-sm text-gray-600">
              All mentors are manually verified based on experience
              and user reviews.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
