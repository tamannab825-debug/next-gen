"use client"

export default function RectruiterDashboard(){

    return(
        <div className="min-h-screen bg-gray-100">
            
         <div className=" space-y-6">

            {/* Company Header */}
            <section className=" pt-6 px-6 rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="/images/company.jfif" alt="logo"  className="w-20 h-20 bg-white rounded-lg"  /> 
                <div>
                  <h1 className="text-3xl text-red-400 font-bold capitalize">
                    NextGen
                  </h1>
                  <p className="text-sm mt-3 text-red-300">
                    San Francisco, CA · Software & Design · ⭐ 4.4 (237 reviews)
                  </p>
                </div>
              </div>

              <button className="px-5 py-2 bg-red-500 text-white rounded-lg">
                Follow
              </button>
            </section>

            {/* Tabs */}
            <div className="flex gap-10 p-4 bg-white  border-b border-gray-300 text-gray-800 ">
              {["Overview", "Jobs", "Culture", "Mentorship", "Team"].map(tab => (
                <button
                  key={tab}
                  className=" border-b-2  border-transparent hover:border-gray-800"
                >
                  {tab}
                </button>
              ))}
            </div>

          <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
            <section className="bg-white p-6 -mt-6 rounded-xl">
              <h2 className="font-semibold text-gray-600 text-lg mb-2">About</h2>
              <p className="text-gray-600">
                We are a modern, skill-first company focused on building
                meaningful products and hiring through real-world trials.
              </p>
            </section>

            {/* Job Openings */}
            <section className="bg-white p-6 rounded-xl">
              <h2 className="font-semibold text-lg text-gray-600 mb-4">
                Current Job Openings
              </h2>

              {[
                { role: "UX Designer", salary: "$1,800/mo" },
                { role: "Software Engineer", salary: "$3,500/mo" },
                { role: "Marketing Specialist", salary: "$7,500/mo" },
              ].map(job => (
                <div
                  key={job.role}
                  className="flex justify-between items-center bg-gray-100  rounded-lg p-4 mb-3"
                >
                  <div className="">
                    <h3 className="font-semibold text-gray-400">{job.role}</h3>
                    <p className="text-sm text-gray-500">
                      Full-time · Trial Task
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-6">
                    <div className="text-red-600 font-semibold">
                    {job.salary}
                  </div>
                  <p className="text-sm text-gray-500">UI Design</p>
                   <button className="text-white-300 rounded  text-sm bg-red-500 hover:bg-red-700 px-3 py-1">Trial</button>
                  
                  
                  </div>
                  <div className="flex">
                    <button className="text-white-300 rounded mt-3 text-sm bg-red-500 hover:bg-red-700 px-2 py-1 me-3">Programming</button>
                    <button className="text-white-300 rounded mt-3 text-sm bg-gray-400 hover:bg-gray-500 px-3 py-1">Problem Solving</button>
                  </div>
                  </div>

                </div>
              ))}
            </section>

            {/* Featured Projects */}  
            <section className="bg-white p-6 rounded-xl">
              <h2 className="font-semibold text-gray-600 text-lg mb-4">
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {["Mobile App Redesign", "E-Commerce Campaign"].map(p => (
                  <div
                    key={p}
                    className="border bg-gray-100 rounded-lg p-4 hover:shadow"
                  >
                    <h3 className="font-semibold text-gray-500">{p}</h3>
                   <div className="">
                    <button className="text-white-300 rounded mt-3 text-sm bg-red-500 hover:bg-red-600 px-2 py-1 me-3">UI Design</button>
                    <button className="text-white-300 rounded mt-3 text-sm bg-gray-400 hover:bg-gray-500 px-3 py-1">Trial</button>
                   </div>
                   <div className="flex justify-end items-center mt-4 me-4 border-t border-gray-300">
                    <button className="text-white-300 rounded mt-2 text-sm bg-red-500 hover:bg-red-600 px-5 py-2">View More  </button>
                  </div>
                  </div>   
                ))}
                
              </div>
            </section>
              </div>

          

          {/* ========== RIGHT SIDEBAR ========== */}
          <aside className="space-y-6">

            {/* Life at Company */}
            <div className="bg-white p-5 -mt-6 rounded-xl">
              <div className="flex items-center gap-4">
                <img src="/images/3.jpg.jpeg" alt="growth"  className="w-20 h-24 bg-gray-200  rounded-lg"  /> 
                <div>
                  <h3 className="text-lg text-gray-500 mt-1 font-bold capitalize">
                    Transparent Progress
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">
                    Regular Updates
                  </p>
                  <div className="">
                     <button className="text-white-300 rounded mt-2 text-sm bg-red-400 hover:bg-red-500 px-2 py-1 me-3">proggraming</button>
                    <button className="text-white-300 rounded mt-2 text-sm bg-red-400 hover:bg-red-500 px-3 py-1">Feedback loops</button>
                  </div> 
                  
                </div>
              </div>
              <div className="flex justify-end items-center mt-4 me-4 border-t border-gray-300">
                    <button className="text-white-300 rounded mt-2 text-sm bg-red-500 hover:bg-red-600 px-5 py-2">View More  </button>
                  </div>
            </div>

            {/* Mentorship */}
            <div className="bg-white p-5 rounded-xl">
              <h3 className="font-semibold text-gray-600 mb-4">
                Mentorship Opportunities
              </h3>

              {["Sarah Lee", "Jake Roberts"].map(name => (
                <div key={name} className="flex gap-5 mb-5">
                  <img
                    src="/images/person.png"
                    className="rounded-full bg-gray-200 w-15 h-12"
                  />
                  <div>
                    <p className="font-medium text-gray-600">{name}</p>
                    <p className="text-xs text-gray-500">
                      Senior Mentor
                    </p>
                    <p className="text-sm text-gray-400">Prototyping, UI Design</p>

                  </div>
                </div>
              ))}
            </div>

            {/* Hiring Analytics */}
            <div className="bg-white p-5 rounded-xl">
              <h3 className="font-semibold text-gray-600 mb-2">Hiring Analytics</h3>
              <p className="text-sm text-gray-600">
                Applications → Assessments → Hired
              </p>
              <img src="/images/12.jpg.jpeg" alt="" className="h-30 bg-gray-100 rounded mt-3" />

               <div className="flex justify-end items-center mt-4 me-4 border-t border-gray-300">
                    <button className="text-white-300 rounded mt-2 text-sm bg-red-500 hover:bg-red-600 px-5 py-2">View Report  </button>
                  </div>
            </div>

          </aside>
          </main>

        </div>

        </div>
    )
}