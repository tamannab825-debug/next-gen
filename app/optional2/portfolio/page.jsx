"use client";

export default function CandidatePortfolio() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 space-y-8 text-gray-800">

{/* ================= HEADER ================= */}
{/* <section className="bg-white rounded-3xl p-6 shadow-sm">
  <h1 className="text-2xl font-semibold">Portfolio</h1>
  <p className="text-gray-500 text-sm mt-1">
    Real-world projects showcasing frontend expertise and problem solving
  </p>
</section> */}

{/* ================= FEATURED PROJECT ================= */}
<section className="bg-white rounded-3xl p-6 shadow-sm grid md:grid-cols-2 gap-6 items-center">

{/* IMAGE WRAPPER */}
<div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100">
  <img
    src="/images/profile.jpg"
    alt="project preview"
    className="w-full h-full object-cover"
  />
</div>

{/* CONTENT */}
<div>
  <h2 className="text-xl font-semibold text-gray-800">
    Skill-Based Hiring Platform
  </h2>

  <p className="text-gray-500 text-sm mt-1">
    Next.js • Tailwind CSS • API Integration
  </p>

  <p className="text-gray-600 mt-4 leading-relaxed">
    A modern hiring platform enabling recruiters to evaluate candidates based on verified skills,
    portfolios, and real-world assessments. Focused on scalability, performance, and UX.
  </p>

  <div className="flex gap-3 mt-5">
    <button className="px-5 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition">
      Live Demo
    </button>
    <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">
      GitHub
    </button>
  </div>
</div>

</section>


{/* ================= PROJECT GRID ================= */}
<section className="grid md:grid-cols-3 gap-6">

{[
  {
    title: "Portfolio Website",
    tech: "React • Tailwind",
    desc: "Personal portfolio showcasing skills and projects."
  },
  {
    title: "Job Dashboard UI",
    tech: "Next.js • Charts",
    desc: "Recruiter dashboard with analytics layout."
  },
  {
    title: "Task Manager App",
    tech: "JavaScript",
    desc: "CRUD based productivity web app."
  },
].map((p,i)=>(
  <div
    key={i}
    className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
  >
    <img
      src="https://via.placeholder.com/350x180"
      className="rounded-xl mb-4"
    />

    <h3 className="font-semibold">{p.title}</h3>

    <p className="text-sm text-gray-500 mt-1">{p.tech}</p>

    <p className="text-gray-600 text-sm mt-3">
      {p.desc}
    </p>

    <div className="flex gap-3 mt-4">
      <span className="text-red-500 text-sm cursor-pointer">
        View
      </span>
      <span className="text-gray-500 text-sm cursor-pointer">
        Code
      </span>
    </div>
  </div>
))}

</section>

{/* ================= SKILLS INSIGHT + IMPACT ================= */}
<div className="grid lg:grid-cols-3 gap-6">

{/* ===== LEFT — SKILL DOMAINS ===== */}
<section className="lg:col-span-2 space-y-6">
<div className="bg-white rounded-3xl p-6 shadow-sm">
    <h2 className="font-semibold mb-6">Core Expertise</h2>

<div className="grid sm:grid-cols-2 gap-5">

{[
  {
    title: "Frontend Engineering",
    desc: "Modern UI systems, reusable components, performance focus",
    level: "Expert"
  },
  {
    title: "UI/UX Implementation",
    desc: "Responsive layouts, accessibility & design consistency",
    level: "Advanced"
  },
  {
    title: "JavaScript Architecture",
    desc: "State handling, APIs, async logic & modular code",
    level: "Advanced"
  },
  {
    title: "Next.js Systems",
    desc: "Routing, SSR, scalability & optimization",
    level: "Strong"
  },
].map((skill,i)=>(

  <div
    key={i}
    className="bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md transition space-y-3"
  >

    <div className="flex justify-between items-center">
      <p className="font-semibold">{skill.title}</p>

      <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
        {skill.level}
      </span>
    </div>

    <p className="text-sm text-gray-500 leading-relaxed">
      {skill.desc}
    </p>

  </div>

))}

</div>
</div>
{/* ===== LEFT ADDITION — KEY CONTRIBUTIONS ===== */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-6">Key Contributions</h2>

<div className="space-y-5">

{[
  {
    title: "Built scalable component system",
    desc: "Created reusable UI architecture used across multiple projects, improving development speed and consistency."
  },
  {
    title: "Improved performance & load time",
    desc: "Optimized images, layouts, and rendering flow resulting in smoother UX and faster page loads."
  },
 
].map((item,i)=>(

  <div
    key={i}
    className="bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md transition"
  >

    <p className="font-semibold text-gray-800">
      {item.title}
    </p>

    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
      {item.desc}
    </p>

  </div>

))}

</div>
</section>


</section>


{/* ===== RIGHT — REAL IMPACT ===== */}
<section className="bg-white rounded-3xl p-6 shadow-sm">
<h2 className="font-semibold mb-6">Professional Impact</h2>

<div className="space-y-6">

{[
  {
    metric: "12+",
    label: "Projects Delivered",
    note: "Real-world applications & dashboards"
  },
  {
    metric: "5+",
    label: "Production Apps",
    note: "Live systems with real users"
  },
  {
    metric: "1000+",
    label: "Coding Hours",
    note: "Hands-on frontend engineering"
  },
  {
    metric: "90%",
    label: "UI Performance Score",
    note: "Optimized layouts & loading"
  },
].map((item,i)=>(

  <div
    key={i}
    className="relative bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-md transition overflow-hidden"
  >

    <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-200 rounded-full opacity-30" />

    <div className="relative z-10">
      <p className="text-2xl font-semibold text-red-500">
        {item.metric}
      </p>

      <p className="font-medium mt-1">
        {item.label}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        {item.note}
      </p>
    </div>

  </div>

))}

</div>
</section>

</div>


    </div>
  );
}
