"use client";

import { button } from "framer-motion/client";

const stats = [
  { title: "Application Sent", value: "945" , num:"1.4+", },
  { title: "Interview Scheduled", value: "342", num:"2.3+",  },
  { title: "Profile Viewed", value: "1,234k", num:"0.5+",  },
  { title: "Unread Message", value: "543", num:"1.2+",  },
];


const company = [
  {name:"Kleon Team", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Qerza", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Omah Ku Inc.", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Sakola", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Ziro Studios Inc.", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Kripton Studios", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Ventic", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
  {name:"Uena Foods", desc:"Desgin Team Agency", logo:"/images/company.jfif"},
]

const activities = [
    {
      title: "New user registered",
      time: "5 minutes ago",
      color: "bg-indigo-600",
    },
    {
      title: "Database backup completed",
      time: "30 minutes ago",
      color: "bg-green-500",
    },
    {
      title: "New order received",
      time: "1 hour ago",
      color: "bg-yellow-500",
    },
    {
      title: "Server restarted",
      time: "2 hours ago",
      color: "bg-red-500",
    },
  ];

 const jobs = [
    {
      title: "Web Designer",
      total: "240+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "Web Developer",
      total: "180+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    {
      title: "UI / UX Designer",
      total: "120+",
      img: "/images/company.jfif",
      location: "Medan, Sumatera ",
      amount: "$ 2,000 - $ 2,500",
    },
    
  ];

  const networkData = [
    {
      field: "Engineer",
      count: "1,245 vacancy",
      img: "/images/13.jpg.jpeg",
    },
    {
      field: "Designer",
      count: "3,560 vacancy",
      img: "/images/13.jpg.jpeg",
    },
    {
      field: "Programer",
      count: "1,120 vacancy",
      img: "/images/13.jpg.jpeg",
    },
  ];

export default function DashboardPage() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen   space-y-6">

      {/* ================= TOP SECTION ================= */}
      <div className="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
        
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div className="lg:w-1/2  space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
  {stats.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-xl p-5 shadow-sm"
    >

     <div className="flex justify-between items-center  ">
      <div className="">
      
      <div className="flex gap-3">
         <h2 className="text-2xl font-semibold text-gray-800">
        {item.value}
      </h2>
      <button className="bg-green-200 text-white border border-green-400 px-2  text-sm rounded-xl">{item.num}</button>
       </div>
      <p className="text-sm text-gray-400 mb-2">
        {item.title}
      </p>

     </div>

     <div className="flex ">
      <img src="/images/3.jpg.jpeg" alt="graph" className="bg-gray-300 h-15 rounded" />
     </div>
      
     </div>

      {/* <div className="mt-4 h-2 bg-gray-100 rounded-full" /> */}
    </div>

    
  ))}
</div>


          {/* vacany Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Vacancy Stats
              </h3>
             <div className="">
               <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Daily</button>
              <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">weekly</button>
              <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Monthly</button>
             </div>
            </div>

            <div className="mb-3 flex gap-4">
              <div className="flex gap-2">
                <button className="rounded-full w-2 h-2 bg-green-500" > .</button>
              <p className="text-gray-500 -mt-2">Apllication sent</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full w-2 h-2 bg-blue-500" > .</button>
              <p className="text-gray-500 -mt-2">Interview</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full w-2 h-2 bg-red-500" > .</button>
              <p className="text-gray-500 -mt-2">Rejected</p>
              </div>
            </div>

            <img src="/images/3.jpg.jpeg" alt="" className="h-60 w-full flex items-center justify-center  rounded-lg" />
          </div>
           
           {/* graph */}
           <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Chart
              </h3>
             <div className="">
               <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Daily</button>
              <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">weekly</button>
              <button className="rounded-xl  px-3 py-2 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-500 ">Monthly</button>
             </div>
            </div>

            <div className="mb-3 flex  gap-12">
              <div className="flex gap-2">
                <button className=" w-3 h-3 bg-red-500" > .</button>
              <p className="text-gray-700 text-sm -mt-1 ">Delivered</p>
              <p className="ms-3 text-gray-800 -mt-2">234</p>
              </div>

               <div className="flex gap-2">
                <button className=" w-3 h-3 bg-gray-500" > .</button>
              <p className="text-gray-700 text-sm -mt-1 ">Expense</p>
              <p className="ms-3 text-gray-800 -mt-2">$8354</p>
              </div>
              
            </div>

            <img src="/images/6.jpg.jpeg" alt="" className="h-80 flex items-center justify-center border border-dashed rounded-lg" />
          </div>

          {/* Company */}
        <div className="bg-white rounded p-6 shadow-sm">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Featured Companies
  </h3>

  <div className="grid grid-cols-2 gap-8">
    {company.map((item, i) => (
      <div key={i}>
        <div className="flex items-center gap-3">
          <img
            src={item.logo}
            alt={item.name}
            className="bg-gray-100 rounded-full w-14 h-14 object-contain"
          />

          <div>
            <h2 className="text-base font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-sm text-gray-400">
              {item.desc}
            </p>
          </div>
        </div>
        <div className=" border-t border-gray-200 mt-3"></div>
      </div>
    ))}
  </div>

  <div className="mt-5 w-30 mx-auto">
    <a href="/optional/company-list">
      <button className="my-4 border border-red-500 text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl">View More</button>
    </a>
  </div>
</div>

        </div>

        

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div className="lg:w-1/2 space-y-6">
          {/* Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/avatar.png"
              alt="Franklin Jr"
              width={66}
              height={66}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Franklin Jr
            </h3>
            <p className="text-sm text-red-500">Super Admin</p>
            <p className="text-sm text-gray-400 mt-3">Medan, Sumatera Utara - ID</p>
          </div>
        </div>

        {/* Update Button */}
        <a href="/optional/profile">
          <button className="px-4 py-3 text-sm rounded-md bg-red-500 text-white hover:bg-red-700 transition">
          Update Profile
        </button>
        </a>
      </div>

      {/* Skills + Chart Columns */}
      <div className="grid grid-cols-12 gap-6 items-center">
        
        {/* Skills Column */}
        <div className="col-span-12 lg:col-span-7">
           <div className=" bg-white rounded-xl  shadow p-4">
                <h2 className="text-lg font-semibold mb-5 text-gray-600">Skills</h2>

             <p className="text-md fomnt-bold text-gray-400 mb-1">Html</p>   
            <div className="w-[80%] bg-gray-200 rounded-full h-2 mb-5"> 
              <div className="bg-blue-700 h-2 rounded-full w-[82%]"></div>
            </div>

             <p className="text-md fomnt-bold text-gray-400 mb-1">Css</p>   
            <div className="w-[80%] bg-gray-200 rounded-full h-2 mb-5"> 
              <div className="bg-purple-400 h-2 rounded-full w-[52%]"></div>
            </div>

             <p className="text-md fomnt-bold text-gray-400 mb-1">HTML</p>   
            <div className="w-[80%] bg-gray-200 rounded-full h-2 mb-5"> 
              <div className="bg-blue-700 h-2 rounded-full w-[72%]"></div>
            </div>

           
             </div>
        </div>

        {/* Chart Column */}
        <div className="col-span-12 lg:col-span-5">
          <img src="/images/8.jpg.jpeg" alt="Chart goes here" className="h-56 rounded-lg  flex items-center justify-center text-sm text-gray-400" />
        </div>

      </div>
    </div>
      

      {/* Recent Activity */}
     <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Recent Activity
      </h3>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 h-full w-px bg-gray-200"></div>

        <div className="space-y-6">
          {activities.map((item, index) => (
            <div key={index} className="flex gap-4 relative">
              
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full ${item.color} mt-1 z-10`}
              ></div>

              {/* Content */}
              <div className="w-full">
                <h4 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-500 mb-1">
                  {item.time}
                </p>

               <div className="border boder-b border-dashed border-gray-300 mt-5 w-full"></div>
              </div>
               
            </div>
            
          ))}
         
        </div>
         
      </div>

      <div className="mt-5 w-30 mx-auto">
   <a href="/optional/activity">
    <button className="my-4 border border-red-500 text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl">View More</button></a>
  </div>
    </div>

    {/* job available for you */}

     <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
     <div className="flex justify-between  mb-5">
       <h3 className="text-lg font-semibold text-gray-800">
       Available Jobs 
      </h3>

      <a href="/optional/jobs">
        <button className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-sm text-white">
          View All
        </button>
      </a>
     </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 flex items-center gap-4 hover:shadow transition"
          >

            {/* Text */}
            <div className="m-3 mx-auto">
              <img
                src={job.img}
                alt={job.title}
                width={42}
                height={42}
                 className="w-22 h-22 rounded-lg bg-gray-100"
              />
              <h4 className="text-sm pt-2 font-semibold text-gray-800">
                {job.title}
              </h4>
              <p className="text-xs text-red-500 ps-4 pt-1">
                {job.total} Jobs
              </p>
              <p className="text-sm text-gray-500 pt-4">
                {job.location} 
              </p>
              <p className="text-sm text-gray-500 pt-1">
                {job.amount} 
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* Network */}
        <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
     <div className="flex justify-between mb-5">
       <h3 className="text-lg font-semibold text-gray-800 ">
        Network
      </h3>
      <a href="/optional/network">
        <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">
          Full View
        </button>
      </a>
     </div>

      {/* Boxes */}
      <div className="grid grid-cols-3 gap-4">
        {networkData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-22 h-22 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
              <img
                src={item.img}
                alt={item.field}
                
              />
            </div>

            {/* Count */}
            <h4 className="text-lg font-bold text-gray-800 pt-2">
              {item.field}
            </h4>

            {/* Label */}
            <p className="text-sm text-gray-500 pt-1">
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </div>


        </div>
      </div>

      

    </div>
  );
}
