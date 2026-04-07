"use client";

const billingStats = [
  { title: "Current Plan", value: "Pro Plan" },
  { title: "Monthly Cost", value: "$49" },
  { title: "Invoices Paid", value: "18" },
  { title: "Pending Payments", value: "1" },
];

const invoices = [
  { id: "#INV-1021", date: "12 Feb 2026", amount: "$49", status: "Paid" },
  { id: "#INV-1018", date: "12 Jan 2026", amount: "$49", status: "Paid" },
  { id: "#INV-1014", date: "12 Dec 2025", amount: "$49", status: "Paid" },
  { id: "#INV-1010", date: "12 Nov 2025", amount: "$49", status: "Pending" },
];

export default function CompanyBillingPage() {
  return (
    <div className="p-6 bg-[#f6f7fb] min-h-screen space-y-5">

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-700">
            Finance & Billing
          </h1>
          <p className="text-sm text-gray-500">
            Manage company subscriptions, invoices and payments
          </p>
        </div>

        <button className="bg-red-500 text-white px-5 py-3 rounded-lg text-sm hover:bg-red-600 transition">
          Upgrade Plan
        </button>
      </div>

      {/* BILLING STATS */}
      <section className="grid md:grid-cols-4 gap-6">
        {billingStats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4  rounded-2xl shadow-sm hover:shadow-md text-center transition"
          >
            <h2 className="text-xl font-semibold mt-1 text-red-500">
              {stat.value}
            </h2>
            <p className="text-sm text-gray-500">{stat.title}</p>
            
          </div>
        ))}
      </section>

      {/* CURRENT PLAN */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-600">Current Subscription</h2>
          <button className="text-red-500 text-sm font-medium">
            Manage Plan
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-red-300 rounded-xl p-5">
            <h3 className="text-red-500 font-medium">Pro Plan</h3>
            <p className="text-sm text-gray-400 mt-1">
              Suitable for growing companies
            </p>

            <p className="text-3xl font-semibold mt-4 text-red-500">
              $49 <span className="text-sm text-red-500">/month</span>
            </p>

            <ul className="text-sm text-gray-600 mt-4 space-y-1">
              <li><span className="text-red-600">✔</span> Unlimited job postings</li>
              <li><span className="text-red-600">✔</span> Candidate management</li>
              <li><span className="text-red-600">✔</span> Job trial analytics</li>
              <li><span className="text-red-600">✔</span> Company dashboard</li>
            </ul>

            <button className="mt-4 w-full border text-white bg-red-500 py-2 rounded-lg text-sm hover:bg-red-600  transition">
              Change Plan
            </button>
          </div>

          <div className="border border-red-300 rounded-xl p-5">
            <h3 className="text-red-500 font-medium">Billing Cycle</h3>
            <p className="text-sm text-gray-500 mt-1">
              Monthly billing active
            </p>

            <div className="mt-4 text-sm text-red-500 space-y-2">
              <p>Next Payment</p>
              <p className="font-medium text-gray-600">
                12 March 2026
              </p>
            </div>
          </div>

          <div className="border border-red-300 rounded-xl p-5">
            <h3 className="text-red-500 font-medium">Payment Method</h3>
            <p className="text-sm text-gray-600 mt-1">
              Default Payment
            </p>

            <div className="mt-4 text-sm text-red-500">
              <p>Visa **** 4821</p>
              <p className="text-xs text-gray-400 mt-1">
                Exp: 10 / 28
              </p>
            </div>

            <button className="mt-4 text-sm text-red-500 font-medium">
              Update Card
            </button>
          </div>

        </div>
      </section>

      {/* INVOICE TABLE */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-700 mb-2">
          Recent Invoices
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="text-red-500 border-b border-red-200">
              <tr>
                <th className="text-left py-3">Invoice ID</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Amount</th>
                <th className="text-left py-3">Status</th>
                <th className="text-right py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((inv, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">

                  <td className="py-3 font-medium text-gray-700">
                    {inv.id}
                  </td>

                  <td className="py-3 text-gray-600">
                    {inv.date}
                  </td>

                  <td className="py-3 text-red-500 font-medium">
                    {inv.amount}
                  </td>

                  <td className="py-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        inv.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>

                  <td className="py-3 text-right">
                    <button className="text-red-500 text-sm">
                      Download
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>

    </div>
  );
}