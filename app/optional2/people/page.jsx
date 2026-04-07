"use client";

export default function SuggestedPeoplePage() {
  const people = [
    { name: "Rohit Sharma", role: "Frontend Developer", mutual: 4 },
    { name: "Ananya Verma", role: "UI Designer", mutual: 2 },
    { name: "Amit Patel", role: "Backend Engineer", mutual: 5 },
    { name: "Neha Singh", role: "HR Recruiter", mutual: 3 },
    { name: "Kunal Mehta", role: "Product Manager", mutual: 1 },
    { name: "Sneha Kapoor", role: "Full Stack Developer", mutual: 6 },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-3 text-gray-800 space-y-8">


      {/* ================= FILTERS ================= */}
     {/* <section className="max-w-7xl mx-auto bg-white rounded-3xl p-4 shadow-sm">
  <div className="flex flex-col md:flex-row gap-4 md:items-center">

    
    <input
      type="text"
      placeholder="Search people..."
      className="flex-1 border  border-red-500 text-red-500 rounded-xl px-4 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-500"
    />

    <p className="text-red-500">Search People</p>

  </div>
</section>    */}

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mt-4 mx-auto grid lg:grid-cols-4 gap-6">

        {/* LEFT: PEOPLE GRID */}
        <section className="lg:col-span-3 grid sm:grid-cols-2 gap-6">

          {people.map((p, i) => (
            <div
  key={i}
  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition
             flex flex-col h-fit"
>
  <div className="flex items-center gap-4">
    <img
      src="/images/profile.jpg"
      alt={p.name}
      className="w-14 h-14 rounded-full bg-gray-200"
    />

    <div>
      <p className="font-semibold text-gray-800">
        {p.name}
      </p>
      <p className="text-sm text-gray-500">
        {p.role}
      </p>
    </div>
  </div>

  <p className="text-xs text-gray-400 mt-3">
    {p.mutual} mutual connections
  </p>

  {/* Buttons pinned to bottom */}
  <div className=" flex gap-3 pt-4">
    <button className="flex-1 border border-red-500 text-red-500 text-sm py-2 rounded-xl hover:bg-red-500 hover:text-white transition">
      Connect
    </button>

    <button className="flex-1 bg-gray-100 text-gray-600 text-sm py-2 rounded-xl hover:bg-gray-200 transition">
      View Profile
    </button>
  </div>
</div>
          ))}

        </section>

        {/* RIGHT: INSIGHTS */}
        <aside className="space-y-6">

          {/* Why Suggested */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">
              Why these people?
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Matching skills & interests</li>
              <li>• Similar career paths</li>
              <li>• Recruiters hiring frontend roles</li>
              <li>• Mutual connections</li>
            </ul>
          </div>

          {/* Networking Tip */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">
              Networking Tip
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Add a short personalized message when sending a connection request.
              It increases acceptance rate by over 60%.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">
              Your Network
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Connections</span>
                <span className="font-semibold text-red-500">128</span>
              </div>
              <div className="flex justify-between">
                <span>Profile Views</span>
                <span className="font-semibold text-red-500">42</span>
              </div>
              <div className="flex justify-between">
                <span>Recruiter Views</span>
                <span className="font-semibold text-red-500">16</span>
              </div>
            </div>
          </div>

        </aside>
      </div>

    </div>
  );
}