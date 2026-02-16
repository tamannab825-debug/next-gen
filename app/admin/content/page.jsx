"use client";

import { useState } from "react";

export default function ModerateContent() {
  const [status, setStatus] = useState("Pending");
  const [reason, setReason] = useState("");

  const content = {
    title: "Frontend Intern",
    type: "Job Post",
    submittedBy: "TechNova Solutions",
    submittedAt: "12 Feb 2025, 10:30 AM",
    body:
      "We are looking for a passionate frontend intern with knowledge of HTML, CSS, JavaScript, and React. Duration is 3 months.",
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT PANEL – OVERVIEW & ACTIONS */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-300  shadow-sm p-6 space-y-6">

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase">
              Content Overview
            </h3>
            <div className="mt-4 space-y-2 text-md">
              <p><b>Title:</b> {content.title}</p>
              <p><b>Type:</b> {content.type}</p>
              <p><b>Submitted by:</b> {content.submittedBy}</p>
              <p><b>Date:</b> {content.submittedAt}</p>
            </div>
          </div>

          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                ${
                  status === "Approved"
                    ? "bg-green-50 text-green-600"
                    : status === "Rejected"
                    ? "bg-red-50 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
            >
              {status}
            </span>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setStatus("Approved")}
              className="w-full rounded-xl py-2 bg-green-500 text-white text-md hover:bg-green-700 transition"
            >
              Approve
            </button>

            <button
              onClick={() => setStatus("Rejected")}
              className="w-full rounded-xl py-2 bg-red-500 text-white text-md hover:bg-red-700 transition"
            >
              Reject
            </button>

            <button className="w-full rounded-xl py-2 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition">
              Request Changes
            </button>
          </div>
        </div>

        {/* CENTER PANEL – CONTENT PREVIEW */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-gray-300  shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Content Preview
          </h2>

          <div className="border border-gray-300 rounded-xl p-5 bg-gray-50">
            <h4 className="font-semibold text-gray-600 mb-2">
              {content.title}
            </h4>
            <p className="text-md text-gray-700 leading-relaxed">
              {content.body}
            </p>
          </div>
        </div>

        {/* RIGHT PANEL – POLICY & REASON */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-300 shadow-sm p-6 space-y-6">

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase">
              Policy Check
            </h3>

            <div className="mt-4 space-y-2 text-md">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Spam / Misleading
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Hate / Abuse
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Adult / NSFW
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Copyright Violation
              </label>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-500">
              Rejection / Warning Reason
            </label>
            <textarea
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explain why this content is rejected or needs changes..."
              className="mt-2 w-full rounded-xl border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
