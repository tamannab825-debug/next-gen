"use client";
import Link from "next/link";
import { useState } from "react";

export default function CandidateLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* ========== SIDEBAR ========== */}
      <aside
        className={`
          fixed md:static z-40 w-64 h-full bg-gray-100 border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 font-bold text-xl text-gray-500 border-b">
          NextGen
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-2 text-gray-600">
          <SidebarLink title="Dashboard" />
          <SidebarLink title="Profile" />
          <SidebarLink title="Portfolio" />
          <SidebarLink title="Skill Passport" />
          <SidebarLink title="Networking" />
          
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* ========== MAIN AREA ========== */}
      <div className="flex flex-col flex-1">

        {/* TOP BAR */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          
          {/* Mobile menu */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          {/* Search */}
          <input
            placeholder="Search..."
            className="hidden md:block w-72 px-4 py-2 border rounded bg-green-50 text-gray-400 text-sm"
          />

          {/* Right icons */}
          <div className="flex items-center gap-6">
            <span className="text-gray-500">🔔</span>
            <img
              src="https://via.placeholder.com/36"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
       

     
      </div>


    </div>

    
  );
}

/* ========== COMPONENT ========== */
function SidebarLink({ title }) {
  return (
    <div className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      {title}
    </div>
  );
}
