"use client";

import Image from "next/image";

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-green-100 p-6 space-y-4">

            <h2 className="text-blue-700  font-semibold text-3xl pt-1 px-2 ">
      Networking 
    </h2>
    <p className="text-blue-700 mt-1">
        Your network is your net worth — connect, collaborate, and grow together.
    </p>

      {/* ================= NETWORK STATS ================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat title="Connections" value="128" />
        <Stat title="Requests" value="5" />
        <Stat title="Profile Views" value="23" />
        <Stat title="Recommendations" value="7" />
      </section>

      {/* ================= SUGGESTED CONNECTIONS ================= */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg text-gray-600 font-semibold mb-4">Suggested Connections</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <UserCard name="Aman Verma" role="React Developer" mutual="12" />
          <UserCard name="Sneha Gupta" role="UI Designer" mutual="8" />
          <UserCard name="Rahul Singh" role="Backend Engineer" mutual="5" />
        </div>
      </section>

    <div className="grid grid-col-1 md:grid-cols-2 gap-6">
          {/* ================= PEOPLE YOU MAY KNOW ================= */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg text-gray-600 font-semibold mb-4">People You May Know</h2>

        <div className="space-y-3">
          <SimpleUser name="Neha Sharma" skill="Next.js" />
          <SimpleUser name="Karan Patel" skill="JavaScript" />
          <SimpleUser name="Anjali Mehta" skill="React" />
        </div>
      </section>

      {/* ================= ACTIVITY FEED ================= */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg text-gray-600 font-semibold mb-4">Network Activity</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>✔ Aman Verma endorsed you for <b>React</b></li>
          <li>✔ You connected with <b>Sneha Gupta</b></li>
          <li>✔ Recruiter from <b>TechCorp</b> viewed your profile</li>
        </ul>
      </section>
    </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* ================= COMMUNITIES ================= */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg text-gray-600 font-semibold mb-4">Skill Communities</h2>

        <div className="flex flex-wrap gap-3">
          <Tag label="React Developers" />
          <Tag label="Frontend Freshers" />
          <Tag label="Next.js Builders" />
          <Tag label="Hiring Network" />
        </div>
      </section>
     
     {/* ================= SKILL ENDORSEMENTS ================= */}
<section className="bg-white p-6 rounded-xl shadow">
  <h2 className="text-lg  text-gray-600 font-semibold mb-4">Skill Endorsements</h2>

  <div className="space-y-3">
    <SkillRow skill="React" count="18" />
    <SkillRow skill="Next.js" count="12" />
    <SkillRow skill="JavaScript" count="25" />
  </div>
</section>
     </div>
 
 {/* ================= RECRUITERS INTERESTED ================= */}
<section className="bg-white p-6 rounded-xl shadow">
  <h2 className="text-lg text-gray-600 font-semibold mb-4">
    Recruiters Interested in You
  </h2>

  <div className="space-y-4 grid grid-col-1 md:grid-cols-3 gap-6">
    <RecruiterCard
      company="TechCorp"
      role="Frontend Developer"
      recruiter="Hiring Manager"
    />
    <RecruiterCard
      company="StartupHub"
      role="React Intern"
      recruiter="Talent Lead"
    />
    <RecruiterCard
      company="StartupHub"
      role="React Intern"
      recruiter="Talent Lead"
    />
  </div>
</section>

      {/* ===== CALL TO ACTION ===== */}
<section className="bg-green-100 rounded-xl p-8 text-center space-y-4">
  <h2 className="text-2xl font-bold text-gray-800">
    Interested in working together?
  </h2>
  <p className="text-gray-600">
    Explore the profile or connect to discuss opportunities.
  </p>

  <div className="flex justify-center gap-4">
    <a
      href="/candidate/profile"
      className="px-6 py-2 bg-green-600 text-white rounded-lg
                 hover:bg-green-700 transition"
    >
      View Profile
    </a>
    <a
      href="#"
      className="px-6 py-2 border border-green-600 text-green-700 rounded-lg
                 hover:bg-green-200 transition"
    >
      Contact
    </a>
  </div>
</section>

    </div>

    
  );
}

/* ================= COMPONENTS ================= */

function Stat({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl transition-all duration-300 
                          hover:-translate-y-1 hover:shadow-lg shadow text-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
}

function UserCard({ name, role, mutual }) {
  return (
    <div className="border rounded-lg p-4 bg-green-100  border-green-400 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/48"
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-400">{name}</p>
          <p className="text-sm  text-gray-500">{role}</p>
          <p className="text-xs mt-2 text-gray-400">{mutual} mutual connections</p>
        </div>
      </div>

      <button className="px-3 py-2 text-sm bg-blue-600 mt-6 mb-2 w-80 text-white rounded-xl hover:bg-blue-700">
        Connect
      </button>
    </div>
  );
}



function SimpleUser({ name, skill }) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div>
        <p className="font-medium text-gray-600">{name}</p>
        <p className="text-xs text-gray-400">Skilled in {skill}</p>
      </div>
      <button className="text-blue-600 text-sm hover:underline">
        Connect
      </button>
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-full cursor-pointer hover:bg-blue-200">
      {label}
    </span>
  );
}
function SkillRow({ skill, count }) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <p className="font-medium text-gray-500">{skill}</p>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">{count} endorsements</span>
        <button className="text-blue-600 text-sm hover:underline">
          Endorse
        </button>
      </div>
    </div>
  );
}
function RecruiterCard({ company, role, recruiter }) {
  return (
    <div className="grid grid-cols-2 items-center justify-between border border-green-400 bg-green-100 rounded-lg p-4 hover:shadow transition">
      <div>
        <p className="font-semibold text-gray-500 mb-1">{company}</p>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-xs text-gray-400">{recruiter}</p>
      </div>
      <div className="grid justify-end">
        <button className=" text-sm px-3 py-2 w-40 bg-blue-600  text-white rounded hover:bg-blue-700">
        View Job
      </button>
      </div>
    </div>
  );
}
