// App.jsx
import React from "react";

const sections = [
  { title: "Dashboard / Overview", items: ["Total Employees: 250", "Active Projects: 12", "Pending Approvals: 5", "Recent Activity", "Quick Actions"] },
  { title: "User / Employee Management", items: ["Manage Users", "Add / Edit Employee", "Roles & Status", "Search Users"] },
  { title: "Roles & Permissions", items: ["Manage Roles", "Set Permissions", "Audit Trail"] },
  { title: "Company Profile & Settings", items: ["Company Info", "Contact Details", "Branding Settings"] },
  { title: "Project / Task Management", items: ["Manage Projects", "Assign Tasks", "Track Progress"] },
  { title: "Finance / Billing", items: ["Subscription Plan", "Invoices & Payments", "Billing History"] },
  { title: "Reports & Analytics", items: ["Activity Reports", "Project Stats", "Export Reports"] },
  { title: "Notifications & Communication", items: ["System Alerts", "Announcements", "Message Center"] },
  { title: "Security & Audit Logs", items: ["Login History", "Activity Logs", "Security Settings"] },
  { title: "Support & Help", items: ["Help Center", "Submit Ticket", "Contact Support"] },
];

export default function App() {
  return (
    <div className="min-h-screen bg-green-100 p-6">
      <h1 className="text-3xl text-blue-600 font-bold mb-6">Company Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg shadow p-4">
            <h2 className="font-semibold text-blue-400 mb-3">{section.title}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="mt-3 h-20 bg-green-200 rounded flex items-center justify-center text-green-400">
              Image/Graph
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
