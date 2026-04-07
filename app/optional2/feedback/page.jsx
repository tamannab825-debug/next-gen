"use client";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-800 space-y-6">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-5 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-xl font-semibold">
              Feedback & Recommendations
            </h1>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              Professional feedback from mentors, team leads, and recruiters
              highlighting work ethic, technical skills, and collaboration.
            </p>
          </div>

          <div className="flex gap-6 items-center text-center">
            {[
              ["Total Feedback", "3"],
              ["Mentors", "1"],
              ["Recruiters", "1"],
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-red-500 ">{s[1]}</p>
                <p className="text-sm text-gray-500">{s[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED FEEDBACK ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-5 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Featured Recommendation
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src="/images/person2.jpg"
            alt="Mentor"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <p className="font-semibold text-gray-800">
              Project Mentor
            </p>
            <p className="text-sm text-red-500">
              Senior Frontend Engineer
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Tamanna demonstrated strong frontend fundamentals and consistently
              delivered clean, reusable components. She showed excellent
              problem-solving skills and the ability to translate complex
              requirements into intuitive user interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ALL FEEDBACK ================= */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">
          All Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card */}
          <FeedbackCard
            name="Project Mentor"
            role="Senior Frontend Engineer"
            text="Consistently delivered high-quality UI components with great attention to detail and performance."
          />

          <FeedbackCard
            name="Team Lead"
            role="Product Development"
            text="A reliable team member with a positive attitude. Took ownership of tasks and delivered features on time."
          />

          <FeedbackCard
            name="Recruiter"
            role="Hiring Manager"
            text="The profile is well-structured and clearly showcases relevant skills. Strong potential for frontend roles."
          />

        </div>
      </section>

      {/* ================= SKILLS MENTIONED ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Skills Highlighted in Feedback
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Frontend Development",
            "UI Implementation",
            "React",
            "Responsive Design",
            "Clean Code",
            "Team Collaboration",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm bg-red-100 rounded-full text-red-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto bg-linear-to-r text-center from-red-500 to-red-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-semibold">
          Want to add a recommendation?
        </h2>
        <p className="text-red-100 mt-2 ">
          Feedback from mentors or recruiters strengthens profile credibility
          and increases recruiter trust.
        </p>

        <button className="mt-5 bg-white text-red-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          Request Feedback
        </button>
      </section>

    </div>
  );
}

/* ================= COMPONENT ================= */
function FeedbackCard({ name, role, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-red-500">{role}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}