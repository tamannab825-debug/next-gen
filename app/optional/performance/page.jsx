"use client";
import { CalendarDays , BookSearch, ChartSpline, Handshake, AppWindow, UserPen, MessagesSquare, BookCheck} from 'lucide-react';

export default function PerformanceAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-gray-500 p-6 space-y-6">


      {/* ================= PERFORMANCE SNAPSHOT ================= */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-3">
          Performance Snapshot
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Fastest Hire", value: "4 Days", sub: "UI Designer", Icon: CalendarDays},
            { label: "Most Applied Role", value: "Frontend Dev", sub: "1,240 applicants", Icon: BookSearch },
            { label: "Interview Success", value: "68%", sub: "Above industry avg", Icon:ChartSpline  },
            { label: "Offer Acceptance", value: "76%", sub: "Strong conversion",Icon:Handshake },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 hover:transition-all transition"
            >
             <div className="flex justify-between items-center ">
               
                <div>
                     <p className="text-sm text-gray-500">{item.label}</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {item.value}
              </h3>

              <p className="text-xs text-gray-400 mt-1">{item.sub}</p>

                </div>
                <button className="bg-red-50 rounded-full p-5">
                     {item.Icon && <item.Icon className='h-12 w-12 text-red-500'/>}
                </button>
             </div>
              <div className="mt-4 h-1 bg-gray-200 rounded-full">
                <div className="w-3/4 h-full bg-red-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ROLE PERFORMANCE ================= */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-5">
          Role-wise Hiring Performance
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-500">
                <th className="py-3">Role</th>
                <th>Applicants</th>
                <th>Interviews</th>
                <th>Offers</th>
                <th>Avg Hire Time</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {[
                { role: "Frontend Developer", a: 1240, i: 320, o: 48, t: "6 Days" },
                { role: "UI / UX Designer", a: 860, i: 210, o: 34, t: "4 Days" },
                { role: "Backend Engineer", a: 980, i: 260, o: 41, t: "7 Days" },
                { role: "Data Analyst", a: 620, i: 150, o: 22, t: "5 Days" },
              ].map((r, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="py-4 font-medium text-gray-800">
                    {r.role}
                  </td>
                  <td>{r.a}</td>
                  <td>{r.i}</td>
                  <td>{r.o}</td>
                  <td className="text-red-500 font-medium">{r.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= HIRING FUNNEL ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Funnel */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-6">
            Hiring Funnel Overview
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { stage: "Applications Received", value: "3,920", Icon:AppWindow },
              { stage: "Profiles Shortlisted", value: "1,180", Icon:UserPen },
              { stage: "Interviews Conducted", value: "720", Icon:MessagesSquare },
              { stage: "Offers Released", value: "145", Icon:BookCheck },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-gray-100 border border-gray-300 rounded-2xl p-5 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                   
                    <div>
                        <p className="text-sm text-gray-500">{f.stage}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-2">
                  {f.value}
                </p>
                    </div>

                     <div>
                      {f.Icon && <f.Icon className='w-10 h-10 me-5' />}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insight */}
        <div className="bg-linear-to-br from-red-500 to-pink-500 text-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">
            Hiring Insight
          </h3>
          <p className="text-sm opacity-90 mt-2">
            Your strongest conversion happens between interview and offer stage.
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            <li>✔ Interview success rate improved by 12%</li>
            <li>✔ Faster hiring for design roles</li>
            <li>✔ High candidate engagement this quarter</li>
          </ul>
        </div>

      </div>

    </div>
  );
}