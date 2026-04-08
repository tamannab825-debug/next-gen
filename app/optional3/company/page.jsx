"use client";

export default function CompanyPage() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-7 text-gray-800">

      {/* ================= COMPANY HERO ================= */}
<section className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row justify-between gap-6 items-center">

  <div className="space-y-4">

    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        TechNova Solutions
      </h1>
      <p className="text-gray-500 mt-1">
        Building scalable digital products & hiring top engineering talent
      </p>
    </div>

    {/* tags */}
    <div className="flex gap-3 flex-wrap">
      <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">SaaS</span>
      <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">FinTech</span>
      <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">Remote First</span>
      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">120+ Employees</span>
    </div>

  

    {/* actions */}
    <div className="flex gap-4 pt-3">
      <a href="/optional3/job-list">
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600 transition">
        View Open Jobs
      </button>
      </a>
      <button className="border border-gray-200 px-5 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
        Company Profile
      </button>
    </div>

  </div>

  {/* logo + trust info */}
  <img src="/images/company.jfif" alt="" className="w-50 h-50 rounded-2xl flex flex-col items-center justify-center" />

</section>


      {/* ================= ABOUT + VALUES ================= */}
      <section className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="font-semibold mb-3 text-gray-900">
            About the Company
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            TechNova Solutions focuses on building high performance web platforms
            for global clients. Our hiring is based on real-world skills instead of
            resumes, enabling engineers to prove their expertise through challenges.
          </p>

          <p className="text-gray-600 leadin-relaxed pt-2 text-sm">
            We believe hiring should focus on real skills, not just resumes. That’s why our
            recruitment process is powered by real-world projects, AI-driven evaluations,
            and performance-based trials — allowing candidates to showcase their true potential
            while helping us identify top talent faster and more accurately.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-4 text-gray-900">What We Value</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="text-red-600">Practical Skills</li>
            <li>Product Thinking</li>
            <li>Continuous Learning</li>
            <li>Team Collaboration</li>
          </ul>
        </div>

      </section>

      {/* ================= ACTIVE HIRING + INSIGHTS ================= */}
<section className="grid lg:grid-cols-3 gap-6">

  {/* ===== LEFT : OPEN ROLES ===== */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:col-span-2">

    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-gray-900">Open Job Positions</h3>
      <a href="/optional3/jobs">
      <span className="text-sm text-red-500 font-medium cursor-pointer">
        View All →
      </span></a>
    </div>

    <div className="space-y-4">

      {[
        ["Frontend Developer","Remote • Full Time","12 Applicants"],
        ["Backend Engineer","Hybrid • Full Time","9 Applicants"],
        ["Product Designer","Remote • Contract","7 Applicants"],
      
      ].map((job,i)=>(

        <div 
          key={i}
          className="flex justify-between items-center bg-gray-50 rounded-xl px-5 py-4 hover:bg-red-50 transition"
        >
          <div>
            <p className="font-medium text-gray-800">{job[0]}</p>
            <p className="text-xs text-gray-500 mt-1">{job[1]}</p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-red-500">{job[2]}</p>
            <p className="text-xs text-gray-400">Skill trial required</p>
          </div>
        </div>

      ))}

    </div>
  </div>


  {/* ===== RIGHT : HIRING STATS ===== */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

    <h3 className="font-semibold text-gray-900 mb-5">
      Hiring Insights
    </h3>

    <div className="space-y-4">

      {[
        ["Active Roles", "6"],
        ["Candidates in Trials", "48"],
        ["Shortlisted", "14"],
        ["Hires This Month", "5"]
      ].map((stat,i)=>(

        <div key={i} className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-600">{stat[0]}</p>
          <p className="font-semibold text-red-500">{stat[1]}</p>
        </div>

      ))}

    </div>

  </div>

</section>


      {/* ================= HIRING EXPERIENCE ================= */}
      <section className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-6 lg:col-span-2 shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-3 text-gray-900">Candidate Experience</h3>
          <p className="text-sm text-gray-600">
            Candidates complete real projects, receive AI feedback, and move quickly
            through transparent hiring stages.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-3 text-gray-900">Company Benefits</h3>
          <p className="text-sm text-gray-600">
            Faster hiring, higher skill accuracy, reduced interview bias, and better
            long-term retention.
          </p>
        </div>
      </section>

   



    </div>
  );
}