"use client";

export default function SkillPassport() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-8 text-gray-800">

{/* ===== HEADER ===== */}
{/* <section className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4">
  <div>
    <h1 className="text-2xl font-semibold">Skill Passport</h1>
    <p className="text-gray-500 text-sm mt-1">
      Verified professional skill profile & performance insights
    </p>
  </div>
  <div className="flex items-center gap-3">
    <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm">
      Profile Verified
    </span>
  </div>
</section> */}

{/* ===== TOP METRICS ===== */}
{/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{[
  { t: "Confidence Score", v: "4.5 ★" },
  { t: "Verified Skills", v: "12" },
  { t: "Projects Built", v: "18" },
  { t: "Assessments Passed", v: "9" },
].map((m,i)=>(
  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <p className="text-sm text-gray-500">{m.t}</p>
    <h3 className="text-3xl font-semibold mt-2 text-red-500">{m.v}</h3>
  </div>
))}

</div> */}

{/* Upper Portion */}
<div className="grid md:grid-cols-3 gap-6">

    {/* Confidence Index */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-4">Recruiter Confidence Index</h2>

<h3 className="text-5xl font-bold text-green-600">4.5</h3>
<p className="text-gray-500 mt-2 text-sm">
Skill reliability based on real project validation & assessments.
</p>

<div className="mt-6 space-y-5">

{[
  ["Technical Depth","85%"],
  ["Project Quality","90%"],
  ["Consistency","88%"]
].map((p,i)=>(
  <div key={i}>
    <div className="flex justify-between text-sm text-gray-500 mb-2">
      <span>{p[0]}</span>
      <span>{p[1]}</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-full bg-red-500 rounded-full" style={{width:p[1]}} />
    </div>
  </div>
))}

</div>
</section>


{/* Skill Growth */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-5">Skill Growth Timeline</h2>

{[
   ["2022", "Web Basics & HTML/CSS Mastery"],
  ["2023", "JavaScript Foundations & DOM Projects"],
  ["2023", "API Integration & Async Programming"],
  ["2024", "React & UI Systems"],
  ["2024", "State Management & Component Architecture"],
  ["2024", "Responsive Design & UX Optimization"],
].map((t,i)=>(
  <div key={i} className="flex gap-4 mb-4">
    <div className="w-3 h-3 mt-2 bg-red-500 rounded-full"/>
    <div>
      <p className="text-sm font-medium">{t[1]}</p>
      <p className="text-xs text-gray-400">{t[0]}</p>
    </div>
  </div>
))}

</section>


{/* Skill Strength */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-8">Skill Strength Overview</h2>

<div className="space-y-6">

{[
  ["Frontend Development", "90%"],
  ["UI/UX Implementation", "85%"],
  ["Backend Basics", "65%"],
  ["Performance Optimization", "78%"],
].map((s,i)=>(
  <div key={i}>
    <div className="flex justify-between text-sm text-gray-500 mb-2">
      <span>{s[0]}</span>
      <span>{s[1]}</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-red-500 rounded-full"
        style={{ width: s[1] }}
      />
    </div>
  </div>
))}

</div>
</section>




</div>

     {/* Verified Skills */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-6">Verified Skills</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

{[
  "HTML","CSS","JavaScript","React",
  "Next.js","Tailwind","Python","Git"
].map((skill,i)=>(
  
  <div
    key={i}
    className="group bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md transition"
  >
    <div className="flex items-center justify-between">

      <span className="font-semibold text-gray-800">
        {skill}
      </span>

      <span className="w-2 h-2 bg-green-500 rounded-full"/>
    </div>

    <p className="text-sm text-gray-500 mt-3">
      Verified proficiency
    </p>

    <div className="mt-4 flex gap-1">
      {[1,2,3,4,5].map(n=>(
        <span 
          key={n}
          className="h-1 flex-1 rounded-full bg-red-500/80"
        />
      ))}
    </div>
  </div>
))}

</div>
</section>




{/* Project Impact */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-6">Skill Usage & Impact</h2>

<div className="grid md:grid-cols-3 gap-6">

{[
  {
    title: "React",
    value: "6 Production Apps",
    desc: "Real-world dashboards & portals",
    glow: "bg-blue-200"
  },
  {
    title: "Next.js",
    value: "4 Scalable Systems",
    desc: "SSR, performance & routing",
    glow: "bg-purple-200"
  },
  {
    title: "JavaScript",
    value: "1000+ Coding Hours",
    desc: "Logic, APIs & animations",
    glow: "bg-orange-200"
  },
].map((m,i)=>(
  <div
    key={i}
    className="relative bg-gray-50 rounded-2xl p-6 hover:shadow-md transition overflow-hidden group"
  >

    {/* floating glow */}
    <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${m.glow} rounded-full opacity-40 group-hover:scale-110 transition`} />

    <div className="relative z-10 space-y-2">

      <p className="text-sm text-gray-500 font-medium">
        {m.title}
      </p>

      <h3 className="text-2xl font-semibold text-gray-800">
        {m.value}
      </h3>

      <p className="text-sm text-gray-500">
        {m.desc}
      </p>

    </div>
  </div>
))}

</div>
</section>


{/* ===== INSIGHTS ROW ===== */}
<div className="grid md:grid-cols-2 gap-6">

<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-4">Improvement Areas</h2>
<ul className="space-y-2 text-sm text-gray-600">
  <li>• Advanced testing & CI/CD</li>
  <li>• Large scale architecture</li>
  <li>• Performance optimization</li>
</ul>
</section>

<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-4">Certifications</h2>

<div className="space-y-3 text-sm">
  <div className="flex justify-between">
    <span>IBM Frontend Program</span>
    <span className="text-gray-400">2024</span>
  </div>
  <div className="flex justify-between">
    <span>React Architecture</span>
    <span className="text-gray-400">2024</span>
  </div>
</div>
</section>

</div>

</div>
  );
}

/* ===== SMALL METRIC CARD ===== */
function Metric({ title, value }) {
  return (
    <div className="border rounded-2xl p-5">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}
