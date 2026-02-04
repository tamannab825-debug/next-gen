"use client"

export default function CandidateDashboard() {
    return(
       <div className="bg-green-50 px-1 min-h-screen">

        {/* top */}
        <div className="w-full h-14  pb-2  flex items-center justify-between px-6 ">

  {/* LEFT: GREETING */}
  <div>
    <h2 className="text-blue-700  font-semibold text-3xl pt-2 px-2 ">
      Heyy Tamanna 
    </h2>
    {/* <p className="text-blue-400 font-semibold px-2 text-shadow-sm">
      Good Morning
    </p> */}
  </div>

  {/* RIGHT: SEARCH + NOTIFICATION */}
  {/* <div className="flex items-center gap-6">

    <button className="px-5 py-3 bg-gray-100 text-gray-500 rounded-md text-sm">
      Search here
    </button>

    <button className="w-10 h-10 rounded-full border border-gray-400 text-gray-500 flex items-center justify-center">
      🔔
    </button>

  </div> */}

</div>
       
       {/* top status bar */}

       <div className="space-y-6 w-full bg-gray-100 rounded-xl px-2 p-2 m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* candidate status */}
            <div className="bg-white rounded-xl transition-all duration-300 hover:translate-y-2 hover:shadow-lg  p-5 shadow-sm">
                <p className="text-gray-500 text-sm">Candidate Status</p>
                <h3 className="text-lg font-bold text-gray-600">Open To Work</h3>
                <p className="text-sm text-gray-400 mt-1">Immediate Availibility</p>
            </div>

             <div className="bg-white rounded-xl transition-all duration-300 hover:translate-y-2 hover:shadow-lg  p-5 shadow-sm">
                <p className="text-gray-500 text-sm">Applications </p>
                <h3 className="text-lg font-bold text-gray-600">12</h3>
                <p className="text-sm text-gray-400 mt-1">3 in Interview stage</p>
            </div>

             <div className="bg-white rounded-xl transition-all duration-300 hover:translate-y-2 hover:shadow-lg  p-5 shadow-sm">
                <p className="text-gray-500 text-sm">Resume Score </p>
                <h3 className="text-lg font-bold text-gray-600">82%</h3>
                <p className="text-sm text-gray-400 mt-1">ATS Friendly</p>
            </div>

             <div className="bg-white rounded-xl transition-all duration-300 hover:translate-y-2 hover:shadow-lg  p-5 shadow-sm">
                <p className="text-gray-500 text-sm">Job Matches</p>
                <h3 className="text-lg font-bold text-gray-600">6</h3>
                <p className="text-sm text-gray-400 mt-1">Baased On Skills </p>
            </div>
        </div>
         

         {/* main grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         

         {/* left side */}
            <div className="space-y-6 ">
                {/* Application Staus */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg text-gray-700 font-semibold mb-4">
                        Application Status
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

                        <div className="bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-blue-300 p-4 ">
                            <p className="text-sm text-gray-500">Applied</p>
                            <p className="text-xl font-bold text-blue-600">12</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-blue-300 p-4 ">
                            <p className="text-sm text-gray-500">Shortlist</p>
                            <p className="text-xl font-bold text-blue-600">5</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg  border border-blue-300 p-4 ">
                            <p className="text-sm text-gray-500">Interview</p>
                            <p className="text-xl font-bold text-blue-600">3</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg  border border-blue-300 p-4 ">
                            <p className="text-sm text-gray-500">Offer</p>
                            <p className="text-xl font-bold text-blue-600">1</p>
                        </div>

                    </div>
                </div>

                {/* Recommended job */}
                <div className="rounded-xl shadow p-6 bg-white">
                    <h2 className="text-lg text-gray-700 font-semibold mb-4">
                        Recommended Job
                    </h2>

                    <div className="space-y-4">
                        <div className="rounded-xl transition-all duration-300 
                            hover:-translate-y-1 hover:shadow-lg p-4 border border-blue-300 bg-gray-50 flex justify-between items-center">
                            <div >
                                <h3 className="font-semibold text-blue-500 hover:text-blue-700">Frontend Developer</h3>
                                <p className="text-sm text-gray-500">
                                 Remote • React • Next.js
                                 </p>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-700 rounded-xl px-4 py-2 text-sm">Apply Now</button>
                        </div>

                        <div className="rounded-xl transition-all duration-300 
                          hover:-translate-y-1 hover:shadow-lg p-4 border border-blue-300 bg-gray-50 flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-blue-500 hover:text-blue-700">UI Engineer</h3>
                                <p className="text-sm text-gray-500">
                                 Tailwind • Javascript
                                 </p>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-700 rounded-xl px-4 py-2 text-sm">Apply Now</button>
                        </div>

                        <div className="rounded-xl transition-all duration-300 
                          hover:-translate-y-1 hover:shadow-lg p-4 border border-blue-300 bg-gray-50 flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-blue-500 hover:text-blue-700">Frontend Devloper</h3>
                                <p className="text-sm text-gray-500">
                                 Javascipt • React • Next.js
                                 </p>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-700 rounded-xl px-4 py-2 text-sm">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="space-y-6 grid grid-row">
                 <div className=" bg-white rounded-xl  shadow p-4">
                <h2 className="text-lg font-semibold mb-5 text-gray-600">Resume Score</h2>

             <p className="text-3xl fomnt-bold text-gray-700 mb-3">82%</p>   
            <div className="w-[80%] bg-gray-200 rounded-full h-3"> 
              <div className="bg-blue-700 h-3 rounded-full w-[82%]"></div>
            </div>

            <p className="text-sm mt-5 text-gray-700 ">
                Improve by adding more skills and experience
            </p>
            <p className="text-sm mt-5 text-gray-700">
                Strengthen your profile by adding industry-relevant skills and impactful project experience.
            </p>
             </div>

              {/* Candidate Overview */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg text-gray-500 font-semibold mb-7 mt-3">
              Candidate Overview
            </h2>

            <ul className="text-sm text-gray-600 space-y-2">
              <li className="mb-3"><strong>Experience:</strong> 0–1 Year</li>
              <li className="mb-3"><strong>Job Type:</strong> Full-time / Internship</li>
              <li className="mb-3"><strong>Work Mode:</strong> Remote / On-site</li>
              <li className="mb-3"><strong>Location:</strong> India</li>
              <li className="mb-3"><strong>Avilability:</strong> Immidiate</li>
            </ul>
          </div>
            </div>
         </div>
       </div>
       </div>
    )
}