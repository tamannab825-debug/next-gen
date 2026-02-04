
"use client";

export default function CompanyDashboard() {
  return (
    <div className="p-6 space-y-4 bg-green-100 min-h-screen">

      {/* ===== PAGE TITLE ===== */}
      
        <h1 className="text-2xl font-bold text-gray-600">
          Company Dashboard
        </h1>
        <p className="text-gray-600 text-sm">
          Overview of your hiring activity
        </p>
      

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard title="Active Jobs" value="12" desc="Role Currently Open" icons="/images/job.png" />
        <StatCard title="Applicants" value="248" desc="Total Candidates Apllied" icons="/images/applicant.png" />
        <StatCard title="Interviews" value="18" desc="Schedulded this week" icons="/images/interview.png"  />
        <StatCard title="Hires" value="5" desc="Sucessfully onboarded" icons="/images/hire.png" />
      </div>

      {/* ===== HIRING PIPELINE ===== */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Hiring Pipeline
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <PipelineCard title="Applied" value="180" />
          <PipelineCard title="Shortlisted" value="60" />
          <PipelineCard title="Interviewed" value="25" />
          <PipelineCard title="Offered" value="8" />
          <PipelineCard title="Hired" value="5" />
        </div>
      </section>

      {/* ===== MAIN GRID ===== */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Recent Jobs */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Job Posts
          </h2>

          <JobCard title="Frontend Developer" applicants="45" />
          <JobCard title="Backend Developer" applicants="30" />
          <JobCard title="UI/UX Designer" applicants="22" />
        </section>


         {/* ===== RECENT APPLICANTS ===== */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Applicants
        </h2>

        <ApplicantRow name="Tamanna Bhardwaj" role="Frontend Developer" status="Interview" />
        <ApplicantRow name="Aman Singh" role="Backend Developer" status="Shortlisted" />
        <ApplicantRow name="Neha Sharma" role="UI Designer" status="Applied" />
      </section>


      
       
      </div>

       {/* Interviews */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Interviews Today
          </h2>

          <InterviewItem
            time="10:30 AM"
            candidate="Tamanna Bhardwaj"
            role="Frontend Developer"
          />
          <InterviewItem
            time="2:00 PM"
            candidate="Rahul Verma"
            role="UI Designer"
          />
        </section>

    </div>
  );
}

/* ===== COMPONENTS ===== */

function StatCard({ title, value, desc, icons, tittle }) {
  return (
   
      <div className="bg-white flex flex-row rounded-xl border border-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow p-4">
      <div className="h-30">
        <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h3 className="text-2xl font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 ">{value}</h3>
      <p className="text-sm text-gray-500 mb-2 ">{desc}</p>
      </div>

      <div className="flex">
      <img src={icons} alt={tittle} className="h-25" />
    </div>
    </div>
    
    
  );
} 

function PipelineCard({ title, value }) {
  return (
    <div className="bg-green-100 rounded-lg border border-green-300 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-center">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h4 className="text-2xl font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 ">{value}</h4>
    </div>
  );
}

function JobCard({ title, applicants }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-3   transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h4 className="font-semibold text-gray-700">{title}</h4>
      <p className="text-sm text-blue-500">
        {applicants} Applicants • Open
      </p>
    </div>
  );
}

function InterviewItem({ time, candidate, role }) {
  return (
    <div className="border-b last:border-none pb-5 mb-3">
      <p className="text-sm text-blue-600">
        <span className="font-medium">{time}</span> — {candidate}
      </p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
}

function ApplicantRow({ name, role, status }) {
  return (
    <div className="flex justify-between items-center border-b last:border-none py-3">
      <div>
        <p className="font-medium text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <span className="text-sm text-blue-600 font-medium">{status}</span>
    </div>
  );
}
