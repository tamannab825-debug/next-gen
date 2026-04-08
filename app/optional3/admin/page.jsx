// App.jsx
import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Dashboard / Overview",
    link: "/optional3/dashboard",
    items: [
      "Total Employees: 250",
      "Active Projects: 12",
      "Pending Approvals: 5",
      "Recent Activity",
      "Quick Actions",
    ],
  },
  {
    title: "User / Employee Management",
    link: "/optional3/user-management",
    items: ["Manage Users", "Add / Edit Employee", "Roles & Status", "Search Users"],
  },
  {
    title: "Roles & Permissions",
    link: "/optional3/permission",
    items: ["Manage Roles", "Set Permissions", "Audit Trail"],
  },
  {
    title: "Company Profile & Settings",
    link: "/optional3/company",
    items: ["Company Info", "Contact Details", "Branding Settings"],
  },
  {
    title: "Project / Task Management",
    link: "/optional3/projects",
    items: ["Manage Projects", "Assign Tasks", "Track Progress"],
  },
  {
    title: "Finance / Billing",
    link: "/optional3/finance",
    items: ["Subscription Plan", "Invoices & Payments", "Billing History"],
  },
  {
    title: "Reports & Analytics",
    link: "/optional3/analytics",
    items: ["Activity Reports", "Project Stats", "Export Reports"],
  },
  {
    title: "Notifications & Communication",
    link: "/optional3/notification",
    items: ["System Alerts", "Announcements", "Message Center"],
  },
  {
    title: "Security & Audit Logs",
    link: "/optional3/security",
    items: ["Login History", "Activity Logs", "Security Settings"],
  },
  {
    title: "Support & Help",
    link: "/optional3/support",
    items: ["Help Center", "Submit Ticket", "Contact Support"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans text-gray-600">
      {/* <h1 className="text-3xl text-gray-900 font-bold mb-6">Company Admin Dashboard</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ===== MAIN SECTIONS ===== */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col justify-between"
            >
              <div>
               <h2 className="font-semibold text-gray-600 text-lg mb-3">
                 {section.title}
               </h2>


                <ul className="list-disc list-inside space-y-1 text-gray-500 mb-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

            <div className="mt-3 flex justify-between items-center">

  <Link href={section.link}>
    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
      View Details
    </button>
  </Link>

  <button className="border border-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-red-400 hover:border-none hover:text-white transition">
    Manage
  </button>

</div>

              <img src="/images/6.jpg.jpeg" alt="" className="mt-2 h-34 bg-gray-100 rounded-lg  flex items-center justify-center text-gray-400 text-sm" />
            </div>
          ))}
        </div>

        {/* ===== RIGHT-SIDE PANEL ===== */}
        <div className="flex flex-col gap-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
               Notifications
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>New application received</li>
              <li>Project deadline approaching</li>
              <li>Server maintenance scheduled</li>
              <li>New admin added</li>
            </ul>
           <Link href="/optional3/notification">
           <button className="mt-3 w-full bg-yellow-500 text-white py-1 rounded-lg text-sm hover:bg-yellow-600 transition">
              View All
            </button>
           </Link>
          </div>

          {/* Reports / Quick Stats */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              Reports & Stats
            </h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex justify-between items-center">
                <p>Monthly Active Users</p>
                <p className="font-semibold text-green-500">180</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Projects Completed</p>
                <p className="font-semibold text-green-500">12</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Pending Approvals</p>
                <p className="font-semibold text-red-500">5</p>
              </div>
            </div>
           <Link href="/optional3/full-report">
           <button className="mt-3 w-full bg-green-500 text-white py-1 rounded-lg text-sm hover:bg-green-600 transition">
              Export Reports
            </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
             Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Manage Users</li>
              <li>Assign Tasks</li>
              <li>View Analytics</li>
              <li>Settings</li>
            </ul>
           

            <Link href="/optional3/dashboard">
                 <button className="mt-3 w-full bg-purple-500 text-white py-1 rounded-lg text-sm hover:bg-purple-600 transition">
                 Go to Panel
                </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}