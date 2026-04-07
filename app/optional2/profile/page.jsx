"use client";

export default function CandidateProfile() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-800 space-y-8">

{/* COVER IMAGE */}
      <div className="max-w-8xl bg-white mx-auto relative">
        <div className="h-56 md:h-64 rounded-b-xl overflow-hidden">
          <img
            src="/images/cover1.jpg"
            alt="Cover"
            
            className="object-cover  h-full w-full"
            
          />
        </div>
      </div>

      {/* PROFILE CARD (OVERLAPPING) */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md  flex flex-col md:flex-row items-center gap-6 -mt-16 relative z-10">
        
        {/* PROFILE IMAGE */}
        <img
          src="/images/profile.jpg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full  bg-red-50 "
        />

        {/* PROFILE INFO */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">
            Tamanna Bhardwaj
          </h1>

          <p className="text-red-600 font-medium">
            Frontend Developer | Job Seeker
          </p>

          <p className="text-gray-600 mt-2 max-w-xl">
            Frontend engineer focused on building scalable, responsive, and
            user-centric web applications using modern JavaScript frameworks.
          </p>
        </div>
      </div>

{/* ================= QUICK STATS ================= */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

           {[
           ["Projects","12+"],
           ["Experience","1 Year"],
           ["Skills","10+"],
           ["Certifications","3"]
            ].map((s,i)=>(
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm text-center">
             <h3 className="text-2xl font-semibold text-red-500">{s[1]}</h3>
             <p className="text-sm text-gray-500 mt-1">{s[0]}</p>
          </div>
         ))}

       </div>

{/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
         
         {/* About */}
        <section className="bg-white rounded-3xl p-6 shadow-sm">
         <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The candidate is a frontend developer with a strong foundation in
              web technologies and experience building responsive, accessible,
              and performance-optimized interfaces. Skilled in translating
              design requirements into functional UI components.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Interested in opportunities where technical skills, creativity,
              and problem-solving abilities can be applied to real-world
              software products and scalable platforms.
            </p>
        </section>
        
     
     {/* Project */}
    <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between  mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
              Projects
            </h2>
              <a href="/optional2/project">
      <button className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-sm text-white">View All</button>
      </a>
            </div>

          <div className="space-y-4">
           <div>
            <h3 className="font-semibold text-gray-800">
             Skill-Based Hiring Platform
            </h3>
          <p className="text-sm text-gray-500">
            Next.js • Tailwind CSS • Node.js
         </p>
         <p className="text-gray-600 mt-2">
        Developed a platform enabling recruiters to evaluate candidates based
        on verified skills, portfolios, and real-world assessments.
      </p>
     </div>

    <div>
      <h3 className="font-semibold text-gray-800">
        Portfolio Website
      </h3>
      <p className="text-sm text-gray-500">
        React • Responsive UI
      </p>
      <p className="text-gray-600 mt-2">
        Designed and implemented a personal portfolio website showcasing
        projects, skills, and professional experience.
      </p>
       </div>
      </div>
     </div>


    {/*Experience  */}
      <section className="bg-white rounded-3xl p-6 shadow-sm">
     <div className="flex justify-between mb-4">
      <h2 className="font-semibold ">Experience</h2>
      <a href="/optional2/experience">
      <button className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-sm text-white">View</button>
      </a>
     </div>

     <div className="border-l-2 border-red-500 pl-4 space-y-4">

     <div>
      <h3 className="font-semibold">Frontend Intern</h3>
      <p className="text-sm text-gray-500">2024</p>
      <p className="text-gray-600 text-sm mt-1">
       Built reusable UI components and optimized frontend performance.
     </p>
     </div>

     </div>
    </section>

    </div>

         {/* RIGHT */}
      <div className="space-y-6">

        {/* skills  */}
        <section className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="font-semibold mb-4">Skills</h2>

        {[
         ["HTML","95%"],
         ["CSS","92%"],
         ["JavaScript","90%"],
         ["React","88%"],
        
         ].map((s,i)=>(
       <div key={i} className="mb-4">
      <div className="flex justify-between text-sm mb-1 text-gray-500">
       <span>{s[0]}</span><span>{s[1]}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
      <div className="h-full bg-red-500 rounded-full" style={{width:s[1]}}/>
       </div>
      </div>
       ))}

     </section>
        
        {/* Profile Info */}
       <section className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="font-semibold mb-3">Profile Info</h2>

        <ul className="text-sm text-gray-600 space-y-2">
         <li><strong>Location:</strong> India</li>
         <li><strong>Work Mode:</strong> Remote / On-site</li>
         <li><strong>Availability:</strong> Immediate</li>
        <li><strong>Role:</strong> Frontend Developer</li>
        </ul>
       </section>
        
        {/* Certification */}
      <section className="bg-white rounded-3xl p-6 shadow-sm">
       <h2 className="font-semibold mb-3">Certifications</h2>
       <ul className="text-sm text-gray-600 space-y-2">
        <li>IBM Frontend Program</li>
        <li>React Architecture</li>
       </ul>
      </section>
        
        {/* Verification */}
       <section className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="font-semibold mb-3">Verification</h2>
        <p className="text-red-600 text-sm">
           ✔ Skills verified by assessments
        </p>
        </section>

        </div>

        </div>
     
         {/* ================= FEEDBACK & TESTIMONIALS ================= */}
<div className="max-w-7xl pb-5 mx-auto mt-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    Feedback & Recommendations
  </h2>
  <p className="text-gray-600 mb-8">
    What mentors, colleagues, and recruiters say about the candidate
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Feedback Card */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Project Mentor
          </p>
          <p className="text-sm text-gray-500">
            Senior Frontend Engineer
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Tamanna demonstrated strong frontend fundamentals and consistently
        delivered clean, reusable components. Her ability to understand
        requirements and convert them into functional UI was impressive.
      </p>
    </div>

    {/* Feedback Card */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Team Lead
          </p>
          <p className="text-sm text-gray-500">
            Product Development
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        A reliable team member with a positive attitude. She actively
        participated in discussions, took ownership of tasks, and delivered
        features on time.
      </p>
    </div>

    {/* Feedback Card */}
    <div className="bg-white rounded-xl  shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/person2.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">
            Recruiter
          </p>
          <p className="text-sm text-gray-500">
            Hiring Manager
          </p>
        </div>
      </div> 

      <p className="text-gray-600 text-sm leading-relaxed">
        The profile is well-structured and showcases relevant skills clearly.
        Strong potential for frontend development roles in fast-paced teams.
      </p>
    </div>

  </div>
</div>
    </div>
  );
}
