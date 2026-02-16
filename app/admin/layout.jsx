"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileWarning,
  ShieldCheck,
  CreditCard,
  Briefcase,
} from "lucide-react";
import { title } from "process";



const sidebarLinks = [
  { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Manage Users", href: "/admin/users", icon: Users },
  { title: "Company Verification", href: "/admin/verification", icon: ShieldCheck },
  { title: "Content Moderation", href: "/admin/content", icon: Briefcase },
  { title: "Reports", href: "/admin/reports", icon: FileWarning },
  { title: "Payments", href: "/admin/payment", icon: CreditCard },
];

export default function AdminLayout({ children }) {
   const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-[#f5f6fa] text-gray-800">

      {/* ===== SIDEBAR ===== */}
      <aside
      className={`
          fixed md:static z-40 w-64 h-screen bg-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `} >
        <h1 className="text-xl px-6 pt-5 font-semibold text-red-500 mb-4">
          Admin Panel
        </h1>

        <nav className="space-y-2">
          {sidebarLinks.map((link, i) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={i}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition
                  ${
                    active
                      ? "bg-red-50 text-red-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <Icon size={18} />
                {link.title}
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* ===== MAIN AREA ===== */}
      <div className="flex-1 flex flex-col">

        {/* ===== TOP HEADER ===== */}
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
          <h2 className="font-semibold text-gray-900">
            Admin Pannel
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Super Admin</span>
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </header>

        {/* ===== PAGE CONTENT ===== */}
        <main className="flex-1 p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
