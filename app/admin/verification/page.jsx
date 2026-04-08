"use client";

import {  Search,  CheckCircle,  XCircle,  FileText,  Building2,  Clock,} from "lucide-react";
import { useState } from "react";

const companies = [
  {
    name: "TechNova Solutions",
    email: "hr@technova.com",
    industry: "SaaS",
    applied: "10 Feb 2025",
    status: "Pending",
  },
  {
    name: "FinEdge Pvt Ltd",
    email: "contact@finedge.in",
    industry: "FinTech",
    applied: "06 Feb 2025",
    status: "Approved",
  },
  {
    name: "Kleon Team",
    email: "contact@kleon.in",
    industry: "Marketing",
    applied: "06 Feb 2025",
    status: "Pending",
  },
  {
    name: "PixelCraft",
    email: "contact@pixel.in",
    industry: "Design Studio",
    applied: "06 Feb 2025",
    status: "Rejected",
  },
];

const Info = ({ label, value }) => (
  <div className="flex justify-between gap-4">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-800 text-right truncate">
      {value}
    </span>
  </div>
);

export default function CompanyVerification() {
  const [company, setCompany] = useState(companies[0]);
  

  return (
    <div className="space-y-8">


      {/* ================= SEARCH & FILTER ================= */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-xl w-full md:w-1/2">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search company or email"
              className="w-full text-sm outline-none"
            />
          </div>

          <select className="px-4 py-2 rounded-xl border text-sm">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-3 gap-8">

   <div className="lg:col-span-2 space-y-6">
         {/* ================= VERIFICATION QUEUE ================= */}
        <div className=" bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 grid grid-cols-12">
            <div className="col-span-5">Company</div>
            <div className="col-span-3">Industry</div>
            <div className="col-span-2">Applied</div>
            <div className="col-span-2">Status</div>
          </div>

          {companies.map((company, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-6 py-4 text-sm items-center border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
            >
              <div className="col-span-5">
                <p className="font-medium text-gray-900">
                  {company.name}
                </p>
                <p className="text-xs text-gray-500">{company.email}</p>
              </div>

              <div className="col-span-3 text-gray-700">
                {company.industry}
              </div>

              <div className="col-span-2 text-gray-600">
                {company.applied}
              </div>

             <div className="col-span-2">
  {company.status === "Approved" && (
    <span className="px-3 py-1 rounded-full text-xs bg-green-50 text-green-600">
      Approved
    </span>
  )}

  {company.status === "Pending" && (
    <span className="px-3 py-1 rounded-full text-xs bg-yellow-50 text-yellow-600">
      Pending
    </span>
  )}

  {company.status === "Rejected" && (
    <span className="px-3 py-1 rounded-full text-xs bg-red-50 text-red-600">
      Rejected
    </span>
  )}
</div>

            </div>
          ))}
       </div>
          
          {/* LEFT PANEL */}
<div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-6">

  {/* Header */}
  <div className="flex items-center gap-4">
    <div className="h-14 w-14 rounded-xl bg-linear-to-br from-indigo-100 to-indigo-200 
                    flex items-center justify-center text-lg font-bold text-indigo-700">
      {company.name?.charAt(0)}
    </div>

    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 leading-tight">
        {company.name}
      </h3>

      <div className="flex items-center gap-2 mt-1">
        <span
          className={`h-2 w-2 rounded-full
            ${
              company.status === "Approved"
                ? "bg-green-500"
                : company.status === "Pending"
                ? "bg-yellow-400"
                : "bg-red-500"
            }`}
        />
        <span
          className={`text-xs font-medium
            ${
              company.status === "Approved"
                ? "text-green-600"
                : company.status === "Pending"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
        >
          {company.status}
        </span>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-400" />

  {/* Company Info */}
  <div className="grid grid-cols-1 gap-3 text-sm">
    <Info label="Email :" value={company.email} />
    <Info label="Phone :" value={7805435056} />
    <Info label="Location :" value={"Gurgaon"} />
    
  </div>

  {/* Divider */}
  <div className="border-t border-gray-400" />

  {/* Actions */}
  <div className="space-y-3">
    <button className="w-full rounded-xl py-2.5 bg-green-500 text-white text-sm font-medium 
                       hover:bg-green-600 transition">
      Approve Company
    </button>

    <button className="w-full rounded-xl py-2.5 bg-red-500 text-white text-sm font-medium 
                       hover:bg-red-600 transition">
      Reject Company
    </button>

    <button className="w-full rounded-xl py-2.5 bg-gray-100 text-gray-700 text-sm font-medium 
                       hover:bg-gray-200 transition">
      Request Changes
    </button>
  </div>

  {/* Notes */}
  <div>
    <label className="text-xs font-semibold text-gray-500 uppercase">
      Admin Notes
    </label>
    <textarea
      rows={3}
      placeholder="Add internal remarks for this company..."
      className="mt-2 w-full rounded-xl border border-gray-200 p-3 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

</div>


        
   </div>

        {/* ================= COMPANY DETAILS PANEL ================= */}
        <div className="space-y-6">

          {/* ===== COMPANY SUMMARY ===== */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <Building2 size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  TechNova Solutions
                </p>
                <p className="text-xs text-gray-500">
                  SaaS • Gurgaon, India
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Website:</strong> www.technova.com</p>
              <p><strong>Company Size:</strong> 50–100 Employees</p>
              <p><strong>Contact:</strong> HR Manager</p>
            </div>
          </div>

          {/* ===== DOCUMENTS ===== */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Submitted Documents
            </h3>

            <div className="space-y-3">
              {[
                "Business Registration Certificate",
                "GST / Tax Identification",
                "Company Address Proof",
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-gray-400" />
                    <p className="text-sm text-gray-700">{doc}</p>
                  </div>
                  <button className="text-xs text-red-600 font-medium">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ===== ACTIONS ===== */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Verification Actions
            </h3>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-50 text-green-600 font-medium hover:bg-green-100 transition">
                <CheckCircle size={16} />
                Approve Company
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition">
                <XCircle size={16} />
                Reject Company
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm text-gray-600 hover:bg-gray-50 transition">
                <Clock size={16} />
                Request More Documents
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
