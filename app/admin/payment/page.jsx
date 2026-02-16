"use client";

import {  TrendingUp,  ArrowUpRight, CreditCard, AlertCircle, RefreshCcw, Download } from "lucide-react";


const transactions = [
  {
    id: "TXN-1045",
    user: "TechNova Solutions",
    plan: "Premium Company",
    amount: "₹4,999",
    status: "Success",
    date: "14 Feb 2025",
  },
  {
    id: "TXN-1046",
    user: "Rahul Sharma",
    plan: "Job Boost",
    amount: "₹799",
    status: "Pending",
    date: "14 Feb 2025",
  },
  {
    id: "TXN-1047",
    user: "InnovateX Pvt Ltd",
    plan: "Annual Plan",
    amount: "₹24,999",
    status: "Failed",
    date: "13 Feb 2025",
  },
];

export default function PaymentManagement() {
  return (
    <div className="space-y-10">

      {/* ===== PAGE HEADER ===== */}
      {/* <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Payment Management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Monitor transactions, subscriptions, and refunds
        </p>
      </div> */}

   <section className="bg-white rounded-3xl border border-gray-100 px-8 py-6">
  <h2 className="text-md font-semibold text-gray-900">
    Payment Summary
  </h2>

  <div className="grid grid-cols-2 lg:grid-cols-4">
    {[
      {
        label: "Total Revenue",
        value: "₹4,82,500",
        icon: TrendingUp,
      },
      {
        label: "This Month",
        value: "₹96,200",
        icon: ArrowUpRight,
      },
      {
        label: "Active Subscriptions",
        value: "116",
        icon: CreditCard,
      },
      {
        label: "Failed Payments",
        value: "3",
        icon: AlertCircle,
      },
    ].map((item, i, arr) => {
      const Icon = item.icon;
      return (
        <div
          key={i}
          className={`flex items-center gap-4 px-6 py-4
            ${i !== arr.length - 1 ? "border-r border-gray-200" : ""}`}
        >
          {/* Icon */}
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center
              ${
                item.label === "Failed Payments"
                  ? "bg-red-50 text-red-500"
                  : "bg-green-100 text-green-600"
              }`}
          >
            <Icon size={20} />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs text-gray-500 tracking-wide">
              {item.label}
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-0.5">
              {item.value}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>



      {/* ===== MAIN GRID ===== */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* ===== TRANSACTIONS ===== */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-gray-900">
              Recent Transactions
            </h2>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
              <Download size={16} />
              Export
            </button>
          </div>

          <div className="space-y-4">
            {transactions.map((txn, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 hover:bg-gray-50 transition"
              >
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    {txn.user}
                  </p>
                  <p className="text-xs text-gray-500">
                    {txn.plan} • {txn.date}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <p className="text-sm font-semibold text-gray-900">
                    {txn.amount}
                  </p>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        txn.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : txn.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT PANEL ===== */}
        <div className="space-y-8">

          {/* SUBSCRIPTIONS */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="font-semibold text-gray-900 mb-4">
              Subscription Overview
            </h2>

            <div className="space-y-3 text-sm">
              <Row label="Active Premium Companies" value="84" />
              <Row label="Trial Users" value="32" />
              <Row label="Expiring This Week" value="6" />
            </div>
          </div>

          {/* REFUNDS */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="font-semibold text-gray-900 mb-4">
              Refund Requests
            </h2>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <RefreshCcw size={18} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  InnovateX Pvt Ltd
                </p>
                <p className="text-xs text-gray-500">
                  Requested refund for failed payment
                </p>

                <button className="mt-3 text-sm font-medium text-red-600 hover:underline">
                  Review Request
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Helper */
const Row = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-500">{label}</span>
    <span className=" text-gray-200">{value}</span>
  </div>
);
