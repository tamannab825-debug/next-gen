"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, IdCardLanyard, StickyNote, UserStar, BriefcaseBusiness, ChartPie } from "lucide-react";

export default function CandidateLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* ========== SIDEBAR ========== */}
      <aside
        className={`
          fixed md:static z-40 w-64 h-screen bg-white border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 font-bold text-xl text-orange-600 border-b">
          NextGen
        </div>

        {/* Profile */}
        <div className=" m-2 flex justify-center">
          <button className="px-6 py-4 flex items-center gap-3 w-60 bg-gray-100 rounded-xl">
          <img
            src="/images/profile.jpg"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Franklin Jr</p>
            <p className="text-xs text-gray-500">Superadmin</p>
            </div>
          
        </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4 text-gray-400 space-y-1 overflow-y-auto">
          <SidebarLink title="Dashboard" href="/optional/dashboard" pathname={pathname} Icon={LayoutDashboard}/>
          <SidebarLink title="Analytics" href="/optional/analytics" pathname={pathname} Icon={ChartPie} />
          <SidebarLink title="Candidate" href="/optional/candidates" pathname={pathname} Icon={IdCardLanyard}/>
          <SidebarLink title="Profile" href="/optional/profile" pathname={pathname} Icon={StickyNote}/>
          <SidebarLink title="Company Admin" href="/optional/company-admin" pathname={pathname} Icon={UserStar} />
          <SidebarLink title="Jobs" href="/optional/jobs" pathname={pathname} Icon={ BriefcaseBusiness}/>
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
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <input
            placeholder="Search here"
            className="hidden md:block w-72 px-4 py-2 border border-gray-200 text-gray-300 rounded bg-gray-50 text-sm"
          />

          <div className="flex items-center gap-6">
            <span className="text-gray-500">🔔</span>
            <img
              src="images/photo"
              className="rounded-full w-9 h-9"
            />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto flex flex-col">
  
  <div className="flex-1">
    {children}
  </div>

  {/* FOOTER — appears only at bottom */}
  <footer className="bg-white  px-6 py-3 text-sm text-gray-500 text-center">
    © {new Date().getFullYear()} NextGen. All rights reserved.
  </footer>

</main>

      </div>
      
    </div>
    
  );
}

/* ========== COMPONENTS ========== */

function SidebarLink({ title, href, pathname, Icon }) {
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 hover:text-red-500  hover:transition-all hover:translate-x-2 text-xs font-medium
        
      `}
    >
      {Icon && <Icon className="w-5 h-5 text-gray-500 hover:text-red-500 me-2" />}
      {title}
    </Link>
  );
}

