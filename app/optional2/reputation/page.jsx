"use client";

export default function CandidateReputation() {
  return (
    <section className="space-y-4 p-4">

      

     {/* TOP STATS */}
{/* TOP STATS */}
<section className="grid sm:grid-cols-2 gap-6">

  {/* REPUTATION SCORE */}
  <div className="bg-white rounded-2xl border border-gray-100 p-4 relative">

    <div className="flex items-center justify-between">
      <p className="text-xs text-red-500">Reputation Score</p>
      <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">
        Level 4 ⭐
      </span>
    </div>

    <h2 className="text-3xl font-semibold text-gray-800 mt-2">
      1,240
    </h2>

    <p className="text-xs text-green-600 mt-1">
      ▲ +120 points this month
    </p>

    {/* FOOTER */}
    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-400">
      <p className="text-[11px] text-gray-400">
        Updated today
      </p>

      <button className="text-xs text-red-500 hover:underline">
        View history
      </button>
    </div>

  </div>


  {/* VISIBILITY */}
  <div className="bg-white rounded-2xl border border-gray-100 p-4 relative">
    

    <p className="text-xs text-gray-500"> 👁 Visibility Status</p>

    <h3 className="text-lg font-medium text-gray-800 mt-2">
     High Visibility
    </h3>

    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
      Your profile ranks higher due to strong activity, mentorship,
      and verified skills.
    </p>

    {/* SIGNAL + REACH */}
    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-400">
      
      <div className="flex gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <span className="w-2 h-2 rounded-full bg-green-300" />
      </div>

      <button className="text-xs text-red-500 hover:underline">
        Improve visibility
      </button>
    </div>

  </div>

</section>



     {/* POINTS BREAKDOWN */}
<section className="bg-white rounded-2xl border border-gray-100 p-6">
  <div className="flex justify-between items-center mb-3">
    <h3 className="text-md font-semibold text-gray-800">
      Points Breakdown
    </h3>
    <span className="text-xs text-gray-500">
      Last 30 days
    </span>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {[
      {
        title: "Verified Skills",
        pts: 320,
        count: "8 skills verified",
        hint: "Assessments passed",
        badge: "Top Skill",
        color: "blue",
      },
      {
        title: "Helpful Posts",
        pts: 210,
        count: "24 posts",
        hint: "Community upvotes",
        badge: "Contributor",
        color: "green",
      },
      {
        title: "Completed Challenges",
        pts: 280,
        count: "6 challenges",
        hint: "On-time completion",
        badge: "Consistent",
        color: "purple",
      },
      {
        title: "Portfolio Uploads",
        pts: 180,
        count: "4 projects",
        hint: "Approved by reviewers",
        badge: "Showcase",
        color: "yellow",
      },
      {
        title: "Mentorship Contributions",
        pts: 250,
        count: "12 sessions",
        hint: "Peer mentorship",
        badge: "Mentor",
        color: "red",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="rounded-xl border border-gray-300 bg-gray-50 p-5 hover:bg-white hover:shadow-sm transition"
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-800">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {item.hint}
            </p>
          </div>

          <span
            className={`text-xs px-2 py-0.5 rounded-full border
              ${
                item.color === "blue" && "bg-blue-50 text-blue-500"
              }
              ${
                item.color === "green" && "bg-green-50 text-green-500"
              }
              ${
                item.color === "purple" && "bg-purple-50 text-purple-500"
              }
              ${
                item.color === "yellow" && "bg-yellow-50 text-yellow-500"
              }
              ${
                item.color === "red" && "bg-red-50 text-red-500"
              }
            `}
          >
            {item.badge}
          </span>
        </div>

        {/* MAIN NUMBER */}
        <div className="mt-4">
          <p className="text-2xl font-semibold text-gray-800">
            +{item.pts}
            <span className="text-sm font-normal text-gray-400 ml-1">
              pts
            </span>
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-3 flex justify-between text-xs text-gray-500">
          <span className="bg-white px-2 py-1">{item.count}</span>
          <span className="text-gray-400 bg-white px-2 py-1">
            Earned recently
          </span>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* ACTIVITY + BENEFITS */}
      <section className="grid lg:grid-cols-2 gap-6">

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>

          <div className="space-y-3">
            {[
              "React skill verified",
              "Portfolio project approved",
              "Completed UI challenge",
              "Helped peers in discussion",
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-700">{item}</span>
                <span className="text-green-600">+40 pts</span>
              </div>
            ))}
          </div>
        </div>

        {/* WHY IT MATTERS */}
        <div className="bg-red-50 rounded-2xl p-6">
          <h3 className="text-md font-semibold text-red-600 mb-3">
            Why Reputation Matters
          </h3>

          <ul className="space-y-2 text-sm text-red-500">
            <li>• Higher ranking in searches</li>
            <li>• Priority mentorship access</li>
            <li>• Stronger recruiter trust</li>
            <li>• Better recommendations</li>
          </ul>
        </div>

      </section>

    </section>
  );
}
