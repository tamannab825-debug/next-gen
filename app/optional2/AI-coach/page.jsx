"use client";

  export default function CandidateAICoach() {
    return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-6 text-gray-800">

      {/* TOp Stats */}
     <div className="grid md:grid-cols-4 gap-6">

     {[
      { title: "Skill Level", value: "62%" },
      { title: "Growth This Month", value: "+14%" },
      { title: "Courses Active", value: "3" },
      { title: "AI Score", value: "780" },
     ].map((item,i)=>(
   <div key={i} className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">

    <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-full -translate-y-8 translate-x-8 opacity-40"/>

    <p className="text-sm text-gray-400">{item.title}</p>
    <h2 className="text-3xl font-semibold mt-2">{item.value}</h2>

    <div className="mt-4 h-1 bg-gray-200 rounded-full">
      <div className="h-full bg-red-500 w-[70%] rounded-full"/>
    </div>
    </div>
    ))}

    </div>


      {/* Analytics */}
    <div className="grid lg:grid-cols-3 gap-6">

      {/* Skill Health */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
       <h3 className="font-semibold mb-4 ">
       Overall Skill Health
     </h3>

    <div className="flex items-center justify-center h-48 relative">
     <div className="w-32 h-32 rounded-full border-10 border-gray-200 flex items-center justify-center">
      <span className="text-3xl font-semibold text-red-500">62%</span>
    </div>
   </div>

    <p className="text-sm text-gray-500 text-center mt-3">
      Performance trending upward
    </p>
    </div>


        {/* Skill Gaps */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">
       Skill Gaps Detected
    </h3>

    {[
      ["Advanced React Patterns","High"],
      ["API Optimization","Medium"],
      ["System Design Basics","Medium"],
      ["Testing & QA","Low"]
    ].map((s,i)=>(
    <div key={i} className="flex justify-between items-center py-3">

      <span className="text-sm text-gray-700">{s[0]}</span>

      <span className={`text-xs px-3 py-1 rounded-full 
       ${s[1]==="High" && "bg-red-100 text-red-600"}
       ${s[1]==="Medium" && "bg-yellow-100 text-yellow-600"}
       ${s[1]==="Low" && "bg-green-100 text-green-600"}`}>
      {s[1]}
     </span>

    </div>
     ))}
    </div>


      {/* Weekly Progress */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4 ">
       Weekly Progress
      </h3>

    <div className="space-y-4">
      {["Mon","Tue","Wed","Thu","Fri"].map((d,i)=>(
      <div key={i}>
       <p className="text-xs text-gray-400 mb-1">{d}</p>
        <div className="h-2 mt-2 bg-gray-200 rounded-full">
         <div className="h-full bg-red-500 rounded-full" style={{width:`${40+i*12}%`}}/>
       </div>
    </div>
    ))}
   </div>
   </div>

   </div>


      {/* Path + Recommended */}
    <div className="grid lg:grid-cols-2 gap-6">

        {/* Learning Path */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">
      AI Learning Path
      </h3>

     {[
     ["React Performance Optimization","In Progress"],
     ["Advanced API Handling","Next"],
     ["System Design Fundamentals","Upcoming"],
     ].map((p,i)=>(
     <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-none">

      <span className="text-sm">{p[0]}</span>

      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
       {p[1]}
      </span>

     </div>
     ))}
    </div>


     {/* Smart Recommendations */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">
       Smart Recommendations
     </h3>

    <div className="space-y-4">

    {[
    ["Practice React memoization","+8% performance"],
    ["Complete API caching lesson","Reduce latency"],
    ["Mock system design interview","Boost architecture"],
    ].map((r,i)=>(
    <div key={i} className="p-4 rounded-xl bg-linear-to-r from-red-50 to-white ">

      <p className="text-sm font-medium">{r[0]}</p>
      <p className="text-xs text-gray-400 mt-1">{r[1]}</p>

    </div>
    ))}

    </div>
    </div>

    </div>


    <div className="grid md:grid-cols-2 gap-6">
         {/* Activity Timeline  */}
    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h3 className="font-semibold mb-5">
       AI Coaching Activity
      </h3>

    <div className="space-y-5">

     {[
     "Completed React performance quiz",
     "Backend optimization course suggested",
     "Skill level increased to 62%",
     "Mock interview feedback generated"
     ].map((item,i)=>(
     <div key={i} className="flex gap-4 items-start">

     <div className="w-3 h-3 rounded-full bg-red-500 shadow-md mt-1"/>

       <p className="text-sm text-gray-600">{item}</p>

    </div>
    ))}

    </div>

    </div>

    {/* ================= AI STRENGTH INSIGHTS ================= */}
<div className="bg-white rounded-2xl px-6 pt-6 pb-2 shadow-sm">

  <div className="flex justify-between items-center mb-5">
    <h3 className="font-semibold text-gray-800">
      AI Strength Insights
    </h3>

    <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
      Improving
    </span>
  </div>

  {[
    { skill: "React Components", percent: 82 },
    { skill: "UI Responsiveness", percent: 76 },
    { skill: "API Integration", percent: 69 },
    { skill: "Problem Solving", percent: 88 },
  ].map((item, i) => (

    <div key={i} className="mb-5 last:mb-0">

      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <span>{item.skill}</span>
        <span className="font-medium">{item.percent}%</span>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-500 rounded-full transition-all"
          style={{ width: `${item.percent}%` }}
        />
      </div>

    </div>
  ))}

  <p className="text-xs text-gray-400 mt-4">
    Based on project performance, assessments & AI tracking
  </p>

</div>

    </div>

    </div>
  );
}
