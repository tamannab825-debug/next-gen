"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How can I schedule a mentorship session?",
    answer:
      "Go to the Sessions page, select a mentor, and choose an available time slot.",
  },
  {
    question: "How do mentors upload learning resources?",
    answer:
      "Mentors can upload PDFs, videos, or tutorials from the Resources section.",
  },
  {
    question: "How can I join a mentorship program?",
    answer:
      "Browse the available programs and click the Join button on the program card.",
  },
  {
    question: "What should I do if a session is missed?",
    answer:
      "You can reschedule the session or contact your mentor through the platform.",
  },
];

export default function SupportPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen space-y-4">

      {/* ===== HEADER ===== */}
      <div className="">
        <h1 className="text-xl font-semibold text-gray-800">
          Support & Help
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Find answers, contact support, or report issues
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===== FAQ SECTION ===== */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-3 text-left"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {item.question}
                  </span>

                  <span className="text-red-500 text-lg">
                    {open === i ? "-" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="text-sm text-gray-500 px-3 pb-3">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== CONTACT SUPPORT ===== */}
        <div className="space-y-6">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Support
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              If you need help, reach out to our support team.
            </p>

            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                📧 support@mentorship.com
              </p>

              <p className="text-sm text-gray-700">
                ☎ +91 98765 43210
              </p>

              <p className="text-sm text-gray-700">
                🕒 Mon - Fri : 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* ===== REPORT ISSUE ===== */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Report an Issue
            </h3>

            <form className="space-y-3">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border text-gray-400 rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border text-gray-400 rounded-lg px-3 py-2 text-sm"
              />

              <textarea
                placeholder="Describe your issue..."
                rows="4"
                className="w-full border text-gray-400 rounded-lg px-3 py-2 text-sm"
              ></textarea>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                Submit Issue
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>
  );
}