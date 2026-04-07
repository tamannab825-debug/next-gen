"use client";

export default function MentorProfilePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-800">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-center">

          <img
            src="/images/person.png"
            alt="Mentor"
            className="w-28 h-28 rounded-full bg-gray-200"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              Sarah Lee
            </h1>

            <p className="text-red-500 font-medium text-md mt-1">
              UI/UX & Product Design Mentor
            </p>

            <p className="text-gray-600 mt-3 text-sm max-w-2xl">
              Helping designers build industry-ready portfolios, crack interviews,
              and grow confidence through structured mentorship.
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
              <span>⭐ 4.8 Rating</span>
              <span>8+ Years Experience</span>
              <span>120+ Mentees</span>
            </div>
          </div>

          <span className="px-5 py-2 rounded-full text-sm bg-green-100 text-green-700">
            Available Today
          </span>

        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 mt-4">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2 space-y-4">

          {/* ABOUT */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-3">About Mentor</h2>
            <p className="text-gray-600 leading-relaxed">
              Sarah is a product designer with experience working at early-stage
              startups and global tech companies. She has mentored junior designers
              transitioning into product roles and helped professionals improve
              portfolio storytelling.
            </p>
          </section>

          {/* EXPERTISE */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">Expertise Areas</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "UI/UX Design",
                "Portfolio Reviews",
                "Design Systems",
                "Product Thinking",
                "Interview Preparation",
                "Career Guidance",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="bg-red-50 rounded-xl px-4 py-3 text-sm text-gray-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* SESSION TYPES */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">Mentorship Sessions</h2>

            <div className="space-y-4">
              {[
                {
                  title: "Portfolio Review",
                  desc: "Detailed review with actionable improvement suggestions",
                  time: "45 mins",
                  price: "₹1,499",
                },
                {
                  title: "Mock Interview",
                  desc: "Real interview simulation with feedback",
                  time: "60 mins",
                  price: "₹1,999",
                },
                {
                  title: "Career Guidance",
                  desc: "Personalized roadmap & role clarity",
                  time: "30 mins",
                  price: "Free Intro Call",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-4 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {s.desc}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">{s.time}</p>
                    <p className="text-red-500 font-semibold">
                      {s.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* REVIEWS */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">Reviews</h2>

            <div className="space-y-4">
              {[
                "Very clear explanations and honest feedback.",
                "Helped me restructure my portfolio completely.",
                "Gained confidence before interviews.",
              ].map((r, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl p-4 text-sm text-gray-600 italic"
                >
                  “{r}”
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ================= RIGHT BOOKING CARD ================= */}
        <aside className="bg-white rounded-3xl p-6 shadow-sm h-fit sticky top-6">

          <h3 className="font-semibold text-lg mb-2">
            Book a Session
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Choose a session type and confirm your slot.
          </p>

          <div className="border rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-semibold text-red-500">
              ₹1,499
            </p>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">
            Book Session
          </button>

          <p className="text-xs text-gray-400 text-center mt-3">
            Secure payment · Cancel anytime
          </p>

        </aside>

      </div>
    </div>
  );
}