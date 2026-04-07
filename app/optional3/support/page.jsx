"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I post a new job?",
    answer: "Go to the Jobs section and click 'Create Job'. Fill in the job details and publish.",
  },
  {
    question: "How can I manage employee roles?",
    answer: "Navigate to Roles & Permissions page and update access levels for employees.",
  },
  {
    question: "How do I track candidate applications?",
    answer: "Use the Candidate Pipeline page to monitor application stages and progress.",
  },
];

const tickets = [
  {
    id: "SUP-1023",
    subject: "Unable to post job",
    status: "Open",
    date: "2 hours ago",
  },
  {
    id: "SUP-1021",
    subject: "Candidate profile not loading",
    status: "Pending",
    date: "Yesterday",
  },
  {
    id: "SUP-1018",
    subject: "Billing invoice request",
    status: "Resolved",
    date: "3 days ago",
  },
];

export default function SupportPage() {
  const [ticket, setTicket] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-5">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Support & Help Center
        </h1>
        <p className="text-sm text-gray-500">
          Get help, submit tickets, and find answers to common questions
        </p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Help Center</h3>
          <p className="text-sm text-gray-500 mb-4">
            Browse documentation and guides.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            Explore Guides
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Submit Ticket</h3>
          <p className="text-sm text-gray-500 mb-4">
            Report issues or request assistance.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            Create Ticket
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-2">Contact Support</h3>
          <p className="text-sm text-gray-500 mb-4">
            Speak with our support team directly.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
            Contact Us
          </button>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Submit Ticket Form */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">

        <h3 className="font-semibold text-gray-700 mb-4">
          Submit a Support Ticket
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            name="subject"
            placeholder="Ticket Subject"
            value={ticket.subject}
            onChange={handleChange}
            className="border border-red-300 text-red-500 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-400 outline-none"
          />

          <select className="border border-red-300 text-red-400 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-400 outline-none">
            <option>Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

        </div>

        <textarea
          name="message"
          placeholder="Describe your issue..."
          value={ticket.message}
          onChange={handleChange}
          className="mt-4 w-full border border-red-300 text-red-500 rounded-lg px-4 py-2 text-sm h-28 focus:ring-2 focus:ring-red-400 outline-none"
        />

        <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600">
          Submit Ticket
        </button>

      </div>

      {/* Recent Tickets */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">

        <h3 className="font-semibold text-gray-700 mb-4">
          Recent Support Tickets
        </h3>

        <div className="space-y-4">

          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3"
            >
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {ticket.subject}
                </p>
                <p className="text-xs text-gray-500">
                  {ticket.id} <span className="text-red-400">  • {ticket.date}</span>
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  ticket.status === "Resolved"
                    ? "bg-green-100 text-green-600"
                    : ticket.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {ticket.status}
              </span>
            </div>
          ))}

        </div>

      </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">

        <h3 className="font-semibold text-gray-700 mb-4">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <p className="font-medium text-gray-700">{faq.question}</p>
              <p className="text-sm text-gray-500 mt-1">{faq.answer}</p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}