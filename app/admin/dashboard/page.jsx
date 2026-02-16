"use client";

import {
  Users,
  Briefcase,
  ShieldCheck,
  FileWarning,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-10">

      {/* ================= PLATFORM SUMMARY ================= */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6">
        <h2 className="text-md font-semibold text-gray-900 mb-5">
          Platform Summary
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Users", value: "2,840", icon: Users },
            { label: "Active Jobs", value: "186", icon: Briefcase },
            { label: "Verified Companies", value: "94", icon: ShieldCheck },
            { label: "Open Reports", value: "7", icon: FileWarning },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex  border-r border-gray-300 last:border-none items-center py-2 gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  <Icon size={35} />
                </div>
                <div>
                  <p className="text-md pb-1 text-gray-500">{item.label}</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {item.value}
                  </p>
                 
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="grid lg:grid-cols-3 gap-8">

        {/* ===== LEFT COLUMN ===== */}
        <div className="lg:col-span-2 space-y-8">

          {/* ================= RECENT ACTIVITY ================= */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-5">
              Recent Activity
            </h3>

            <div className="space-y-4">
              {[
                "New company registered and awaiting verification",
                "Frontend Developer job approved",
                "User reported a suspicious job post",
                "Company upgraded to Premium plan",
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-500" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= REPORTS & ALERTS ================= */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-5">
              Reports & Alerts
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-sm text-red-600 font-medium">
                  High Priority Reports
                </p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  3
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-600 font-medium">
                  Resolved This Week
                </p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  12
                </p>
              </div>
            </div>
          </div>

           {/* ================= SYSTEM STATUS ================= */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              System Status
            </h3>

            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <p className="text-sm text-gray-600">
                Platform operational • Last update 2 hrs ago
              </p>
            </div>

            <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
              <Clock size={14} />
              No security alerts detected
            </div>
          </div>

        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="space-y-8">

          {/* ================= PENDING ACTIONS ================= */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-5">
              Pending Actions
            </h3>

            <div className="space-y-3">
              {[
                "Verify new companies",
                "Approve job listings",
                "Review reported content",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50"
                >
                  <p className="text-sm text-gray-700">{item}</p>
                  <ArrowUpRight size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* ================= QUICK ACTIONS ================= */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-5">
              Quick Actions
            </h3>

            <div className="space-y-3">
              {[
                "Manage Users",
                "Moderate Jobs",
                "View Payments",
                "Company Verification",
              ].map((action, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-red-100 text-sm text-red-600 font-medium hover:bg-red-50 transition"
                >
                  {action}
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
          </div>

         

        </div>
      </section>

    </div>
  );
}
