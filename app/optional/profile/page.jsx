"use client";

export default function MyProfilePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ================= COVER ================= */}
        <div className="relative bg-white rounded-xl shadow-sm ">
          <img src="/images/cover1.jpg" alt="cover" className="h-80 " />

          <div className="absolute left-6 -bottom-10 bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
            <img
              src="/images/profile.jpg"
              className="w-20 h-20 rounded-xl"
            />
            <div>
              <h3 className="font-semibold">Franklin Jr</h3>
              <p className="text-sm text-gray-500">UI / UX Designer</p>
            </div>
          </div>
         
           {/* Stats */}
          <div className="absolute right-6 bottom-6 flex gap-3">
            <a href="/optional/following">
              <StatBox value="245" label="Following" />
            </a>
           <a href="/optional/followers">
             <StatBox value="872" label="Followers" />
           </a>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
              Update Profile
            </button>
          </div>
        </div>
        

        <div className="h-8" />

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

           {/* ===== SKILLS (LEFT – TALL) ===== */}
          <div className="bg-white rounded-xl p-6 shadow-sm lg:row-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Skills</h3>

            <div className="flex justify-center mb-6">
              <div
                className="w-40 h-40 rounded-full border-28
                border-blue-500 border-t-pink-400 border-r-purple-500"
              />
            </div>

            <SkillBar label="HTML"  value="90%" />
            <SkillBar label="CSS" value="68%" />
            <SkillBar label="JavaScript" value="85%" />
          </div>
          {/* ===== ABOUT + SOCIAL (SAME HEIGHT ROW) ===== */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

            {/* ABOUT */}
            <div className="bg-white rounded-xl p-6 shadow-sm h-full">
              <h3 className="font-semibold mb-3 text-gray-800">About Me</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <ContactItem label="Phone" value="1234567890" />
                <ContactItem label="Email" value="demo@email.com" />
              </div>
            </div>

            {/* SOCIAL */}
            <div className="bg-white rounded-xl p-6 shadow-sm h-full">
              <h3 className="font-semibold text-gray-800 mb-4">Social</h3>
              <button className="bg-gray-100 text-gray-700 px-2 py-2 mb-1 rounded w-full text-sm text-left">/franklin.jr</button>
              <button className="bg-blue-100 text-gray-700 px-2 py-2 mb-1 rounded w-full text-sm text-left">/franklin.jr</button>
              <button className="bg-red-100 text-gray-700 px-2 py-2 mb-1 rounded w-full text-sm text-left">/franklin.jr</button>
              <button className="bg-pink-100 text-gray-700 px-2 py-2 mb-1 rounded w-full text-sm text-left">/franklin.jr</button>
            </div>

          </div>

          {/* ===== UPLOAD CV (BELOW ABOUT + SOCIAL) ===== */}
          <div className="bg-gray-600 text-white rounded-xl p-6 shadow-sm lg:col-start-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-2">
              Upload Your Curriculum Vitae
            </h3>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatBox({ value, label }) {
  return (
    <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-center">
      <p className="text-sm font-semibold text-gray-800">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}


function SkillBar({ label, value }) {
  return (
    <div className="mb-7">
      <div className="flex justify-between text-gray-800 text-sm mb-2">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div className="h-2 bg-blue-500 rounded" style={{ width: value }} />
      </div>
    </div>
  );
}

function ContactItem({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-sm text-gray-400">{value}</p>
    </div>
  );
}