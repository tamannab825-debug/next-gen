"use client";

export default function CandidateMainContent() {
  return (
    <div className="bg-[#f5f6fa] p-6 min-h-screen space-y-6">

{/* ===== WELCOME ===== */}
<h2 className="text-2xl font-semibold text-gray-800">
  Welcome back, Tamanna 👋
</h2>

{/* ================= TOP GRID ================= */}
<div className="grid lg:grid-cols-3 gap-6">

{/* ===== SKILLS RADIAL ===== */}
<div className="bg-white rounded-2xl p-6 shadow-sm text-center">
  <h3 className="font-semibold text-gray-600 mb-4">My Skills</h3>

  <div className="relative w-40 h-40 mx-auto rounded-full border-8 border-gray-200 flex items-center justify-center">
    <span className="text-3xl font-bold text-gray-800">62%</span>
  </div>

  <p className="text-sm text-gray-400 mt-4">Skill Level</p>

  <a href="/optional2/skills">
  <button className="mt-4 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600  text-white text-sm">
    View Details
  </button>
  </a>
</div>

{/* ===== AI COACH ===== */}
<div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
  <h3 className="font-semibold text-gray-600">AI Career Coach</h3>

  <div className="bg-gray-100 rounded-xl p-4">
    <p className="text-sm text-gray-500">Skill Gap Identified</p>
    <p className="font-semibold mt-1 text-gray-500">Learn Advanced Prototyping</p>

    <button className="mt-3 px-3 py-2 bg-red-100 hover:bg-red-600 hover:text-white text-red-400 rounded-lg text-sm">
      Continue Course
    </button>
  </div>

  <div className="flex justify-between text-sm text-gray-500 pt-2">
    <span>Suggested Role</span>

    
   
  </div>
   <div className="flex justify-end items-center mt-6 me-4 border-t border-gray-300">
     <a href="/optional2/AI-coach">
      <button className="text-white-300 rounded mt-2 text-sm bg-red-500 hover:bg-red-600  px-3 py-1">View More  </button>
     </a>
     </div>
</div>

{/* ===== NOTIFICATIONS ===== */}
<div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
  <h3 className="font-semibold text-gray-600">Notifications</h3>

 <div className="bg-gray-50 flex gap-4 rounded-2xl px-2 py-2">
  <img src="images/photo" alt="photo" className=" bg-white rounded-full" />
   <div className="">
    <p className="text-sm text-gray-600 "><span className="font-semibold text-gray-700 text-md">Sarah Colins</span> commented on your Mobile App UI project</p>
   <p className="xs text-gray-300 mt-1">10 mins ago</p>
   </div>
 </div>

  <div className="bg-gray-50 flex gap-4 rounded-2xl px-2 py-2">
  <img src="images/photo" alt="photo" className=" bg-white rounded-full" />
   <div className="">
    <p className="text-sm text-gray-600">Tech Discussions Networking Room starts in 10 min</p>
   <p className="xs text-gray-300 mt-1">10 mins ago</p>
   </div>
 </div>
<div className="border-t border-gray-300"></div>
  <a href="/optional2/notification">
  <button className="text-red-500   text-sm mt-2">View All</button>
  </a>
</div>

</div>

{/* ================= PORTFOLIO ================= */}
<div className="grid lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2 space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm">
  <div className="flex justify-between mb-4">
    <h3 className="font-semibold text-gray-600">Project Portfolio</h3>
   <a href="/optional2/project">
    <button className="text-red-500 text-sm">Add New Project +</button>
    </a>
  </div>

              <div className="grid md:grid-cols-3 gap-4">
                {["website Redesign", "Mobile App UI", "E-Commerce Campaign"].map(p => (
                  <div
                    key={p}
                    className="border bg-gray-100 rounded-lg p-4 hover:shadow"
                  >
                    <h3 className="font-semibold text-gray-500">{p}</h3>
                   <div className="">
                    <button className="text-red-400 rounded mt-3 text-sm bg-red-100 hover:bg-red-400 hover:text-white px-2 py-1 me-3">UI Design</button>
                    <button className="text-white rounded mt-3 text-sm bg-red-400 hover:bg-red-500 px-3 py-1">Trial</button>
                   </div>
                   <div className="flex justify-end items-center mt-6 me-4 border-t border-gray-300">
                    <button className="text-red-600 border rounded mt-2 text-sm bg-white hover:bg-red-600 hover:text-white px-3 py-1">View More  </button>
                  </div>
                  </div>   
                ))}
                
              </div>
           
</div>
  </div>

  {/* ================= NETWORK ROOMS ================= */}
<div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">

  <div className="flex justify-between items-center">
    <h3 className="font-semibold text-gray-600">
      Networking Rooms
    </h3>
    <span className="text-sm text-gray-400 cursor-pointer">
      Explore All
    </span>
  </div>

  {/* Visual cluster */}
  <div className="relative h-48 flex items-center justify-center">

    {/* Center bubble */}
    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center font-semibold text-red-500 shadow">
      24
    </div>

    {/* Orbit bubbles */}
    <div className="absolute top-4 left-8 w-12 h-12 bg-gray-100 text-red-300 rounded-full shadow flex items-center justify-center text-sm">
      8
    </div>

    <div className="absolute top-8 right-10 w-14 h-14 bg-gray-100 text-red-300 rounded-full shadow flex items-center justify-center text-sm">
      12
    </div>

    <div className="absolute bottom-6 left-10 w-12 h-12 bg-gray-100 text-red-300 rounded-full shadow flex items-center justify-center text-sm">
      6
    </div>

    <div className="absolute bottom-4 right-6 w-12 h-12 bg-gray-100 text-red-300 rounded-full shadow flex items-center justify-center text-sm">
      10
    </div>
  </div>

  {/* Labels */}
  <div className="grid grid-cols-2 gap-3 text-sm text-gray-500">

    <div className="flex justify-between">
      <span>Design</span>
      <span className="font-medium text-gray-800 me-3">24</span>
    </div>

    <div className="flex justify-between">
      <span>Frontend</span>
      <span className="font-medium text-gray-800 me-3">12</span>
    </div>

    <div className="flex justify-between">
      <span>Backend</span>
      <span className="font-medium text-gray-800 me-3">10</span>
    </div>

    <div className="flex justify-between">
      <span>AI / ML</span>
      <span className="font-medium text-gray-800 me-3">8</span>
    </div>

  </div>

</div>

</div>

{/* ================= BOTTOM GRID ================= */}
<div className="grid lg:grid-cols-3 gap-6">

{/* ===== NETWORK ===== */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-600 mb-4">Networking Rooms</h3>

  <img src="/images/12.jpg.jpeg" alt="" className="h-40  rounded-xl flex items-center justify-center text-gray-400"/>

  <a href="/optional2/networking">
  <button className="mt-4 text-red-500 text-sm">Explore All</button>
  </a>
</div>

{/* ===== ACTIVITY ===== */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-600 mb-4">Recent Activity</h3>

  <div className="space-y-3 text-sm text-gray-500">
    <p>• Applied to Frontend role</p>
    <p>• Updated portfolio</p>
    <p>• Recruiter viewed profile</p>
    <p>• Have 2 year of experience in Frontend Development</p>
  </div>
</div>

{/* ===== PROGRESS ===== */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-gray-600 mb-4">Weekly Progress</h3>

 <img src="/images/3.jpg.jpeg" alt="" className="h-42 w-full  rounded-xl flex items-center justify-center text-gray-400" />
</div>

</div>

    </div>
  );
}
