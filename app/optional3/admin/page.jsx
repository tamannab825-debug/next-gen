// App.jsx
import React from "react";


const sections = [
  {
    title: "Dashboard / Overview",
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
    items: ["Manage Users", "Add / Edit Employee", "Roles & Status", "Search Users"],
  },
  {
    title: "Roles & Permissions",
    items: ["Manage Roles", "Set Permissions", "Audit Trail"],
  },
  {
    title: "Company Profile & Settings",
    items: ["Company Info", "Contact Details", "Branding Settings"],
  },
  {
    title: "Project / Task Management",
    items: ["Manage Projects", "Assign Tasks", "Track Progress"],
  },
  {
    title: "Finance / Billing",
    items: ["Subscription Plan", "Invoices & Payments", "Billing History"],
  },
  {
    title: "Reports & Analytics",
    items: ["Activity Reports", "Project Stats", "Export Reports"],
  },
  {
    title: "Notifications & Communication",
    items: ["System Alerts", "Announcements", "Message Center"],
  },
  {
    title: "Security & Audit Logs",
    items: ["Login History", "Activity Logs", "Security Settings"],
  },
  {
    title: "Support & Help",
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
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                  View Details
                </button>
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
            <button className="mt-3 bg-yellow-500 text-white py-1 rounded-lg text-sm hover:bg-yellow-600 transition">
              View All
            </button>
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
            <button className="mt-3 bg-green-500 text-white py-1 rounded-lg text-sm hover:bg-green-600 transition">
              Export Reports
            </button>
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
            <button className="mt-3 bg-purple-500 text-white py-1 rounded-lg text-sm hover:bg-purple-600 transition">
              Go to Panel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
