"use client";

import { useState } from "react";

export default function HandleReports() {
  const [status, setStatus] = useState("Under Review");

  const report = {
    id: "REP-1023",
    type: "Job Post",
    reportedAt: "14 Feb 2025 · 4:10 PM",
    priority: "High",
    reason: "Scam / Fake Job",
    contentOwner: "TechNova Solutions",
    content:
      "We are offering a guaranteed placement after paying a registration fee. Limited slots available!",
    reportsCount: 6,
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] px-8 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Report Review
        </h1>
        <p className="text-sm text-gray-500">
          Moderate user-reported content and take action
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 min-h-[75vh]">

        {/* LEFT — CASE SUMMARY */}
        <aside className="col-span-12 lg:col-span-3 bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
          <div className="space-y-6">

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Case ID
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {report.id}
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <Info label="Type" value={report.type} />
              <Info label="Reported At" value={report.reportedAt} />
              <Info label="Priority">
                <span className="font-semibold text-red-600">
                  {report.priority}
                </span>
              </Info>
            </div>

            <div>
              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                ${
                  status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="pt-6 border-t space-y-2">
            <button
              onClick={() => setStatus("Resolved")}
              className="w-full rounded-lg py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Remove Content
            </button>

            <button className="w-full rounded-lg py-2.5 text-sm font-medium bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
              Warn Company
            </button>

            <button
              onClick={() => setStatus("Resolved")}
              className="w-full rounded-lg py-2.5 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Dismiss Report
            </button>
          </div>
        </aside>

        {/* CENTER — CONTENT */}
        <main className="col-span-12 lg:col-span-6 bg-white rounded-xl border border-gray-200 p-7 flex flex-col">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Reported Content
          </h2>

          <div className="flex-1 rounded-lg bg-gray-50 border border-gray-200 p-6 space-y-4">
            <p className="text-sm text-gray-500">
              Posted by{" "}
              <span className="font-medium text-gray-900">
                {report.contentOwner}
              </span>
            </p>

            <p className="text-sm text-gray-900 leading-relaxed">
              {report.content}
            </p>

            <div className="flex items-center justify-between pt-4 text-xs">
              <span className="text-red-600 font-medium">
                {report.reportsCount} reports
              </span>
              <span className="text-gray-400">
                User-generated
              </span>
            </div>
          </div>
        </main>

        {/* RIGHT — INVESTIGATION */}
        <aside className="col-span-12 lg:col-span-3 bg-white rounded-xl border border-gray-200 p-6 space-y-6">

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Report Reason
            </p>
            <p className="mt-2 text-sm font-medium text-gray-900">
              {report.reason}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Policy Evaluation
            </p>

            <div className="mt-3 space-y-2 text-sm">
              <PolicyCheck label="Scam / Fraud" checked />
              <PolicyCheck label="Spam" />
              <PolicyCheck label="Misleading Information" />
              <PolicyCheck label="Hate / Abuse" />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-gray-400">
              Internal Notes
            </label>
            <textarea
              rows={4}
              placeholder="Required for audit trail..."
              className="mt-2 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </aside>

      </div>
    </div>
  );
}

/* Helpers */
const Info = ({ label, value, children }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-900">
      {value || children}
    </span>
  </div>
);

const PolicyCheck = ({ label, checked }) => (
  <label className="flex items-center gap-2 text-gray-700">
    <input
      type="checkbox"
      defaultChecked={checked}
      className="accent-indigo-600"
    />
    <span>{label}</span>
  </label>
);
