"use client";

const stats = [
  { title: "Total Mentors", value: "42" },
  { title: "Active Mentees", value: "318" },
  { title: "Sessions Completed", value: "1,284" },
  { title: "Avg. Satisfaction", value: "4.7 ⭐" },
];

const mentors = [
  { name: "Sarah Johnson", sessions: 82, rating: 4.9 },
  { name: "Michael Lee", sessions: 75, rating: 4.8 },
  { name: "Emma Wilson", sessions: 69, rating: 4.7 },
];

const programs = [
  { name: "Frontend Developer Mentorship", success: "92%" },
  { name: "Backend Developer Mentorship", success: "87%" },
  { name: "Career Guidance Program", success: "90%" },
];

export default function MentorshipReports() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-5">

      {/* HEADER */}
      
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Mentorship Reports & Analytics
          </h1>
          <p className="text-gray-500 text-sm">
            Insights into mentor performance, program success and engagement
          </p>
       

        
      </div>

      {/* METRICS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border text-center rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
             <p className="text-2xl font-semibold text-red-500">
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm">{stat.title}</p>
           
          </div>
        ))}
      </div>

      
      {/* SESSION COMPLETION + SATISFACTION */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* SESSION COMPLETION */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between mb-5">
            <h3 className="font-semibold text-gray-700">
            Session Completion Rate
          </h3>

          <a href="/mentorship/session-completion" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
          </div>
          

          <div className="space-y-3 text-sm text-gray-600">
            <p>Total Scheduled Sessions: 1,420</p>
            <p>Completed Sessions: 1,284</p>
            <p>Cancelled Sessions: 136</p>

            <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
              <div className="bg-red-500 h-3 rounded-full w-[90%]" />
            </div>
          </div>
        </div>

        {/* MENTEE SATISFACTION */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 ">
            Mentee Satisfaction
          </h3>

          <div className="flex flex-col items-center justify-center h-32">
            <p className="text-4xl font-semibold text-red-500">4.7 ⭐</p>
            <p className="text-gray-600 text-sm mt-3">
              Average Rating from 800+ Reviews
            </p>
          </div>
        </div>

      </div>

      {/* PERFORMANCE + PROGRAM SUCCESS */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* MENTOR PERFORMANCE */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
         <div className="flex justify-between  mb-5">
           <h3 className="font-semibold text-gray-700">
            Mentor Performance
          </h3>

          <a href="/mentorship/mentor-performance" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>

         </div>
          <div className="space-y-4">
            {mentors.map((mentor, i) => (
               <div
                key={i}
                className="flex justify-between items-center border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="text-sm  font-medium text-gray-800">
                    {mentor.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Sessions: {mentor.sessions}
                  </p>
                </div>

                <span className="text-red-500 text-sm">
                  ⭐ {mentor.rating}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRAM SUCCESS */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
         <div className="flex justify-between mb-4">
           <h3 className="font-semibold text-gray-700">
            Program Success Rate
          </h3>

          <a href="/mentorship/program-success" >
                <button className="text-sm text-red-500 hover:underline">
                View All
              </button>
              </a>
         </div>

          <div className="space-y-4">
            {programs.map((program, i) => (
              <div key={i}>
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <span className="pb-1 text-gray-500">{program.name}</span>
                  <span>{program.success}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: program.success }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


      {/* GROWTH CHART */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Mentorship Growth
        </h3>

        <img src="/images/3.jpg.jpeg" alt="graph" className="h-48 w-full flex items-center justify-center" />
      </div>

     <div className="grid grid-cols-2 gap-6">
         {/* ACTIVE USERS */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Active Users
        </h3>

       <img src="/images/7.jpg.jpeg" alt="graph" className="h-40 w-full flex items-center justify-center text-gray-400" />
      </div>

      {/* INSIGHTS */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Key Insights
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>Frontend mentorship program has highest success rate.</li>
          <li>React related sessions increased by 34% this month.</li>
          <li>Mentor Sarah Johnson has highest mentee satisfaction.</li>
          <li>Weekend sessions show highest attendance rate.</li>
        </ul>
      </div>
     </div>

    </div>
  );
}