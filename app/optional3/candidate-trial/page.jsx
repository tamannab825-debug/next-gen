"use client";
import React from "react";

const skillScores = [
  { skill: "UI Quality", score: 90 },
  { skill: "Code Structure", score: 85 },
  { skill: "Problem Solving", score: 88 },
  { skill: "Performance Optimization", score: 80 },
];

export default function CandidateTrialDetailPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] p-4 space-y-4 text-gray-800">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col lg:flex-row justify-between gap-6">

        <div className="ms-3">
          <h1 className="text-xl font-semibold text-gray-800">
            Aman Sharma
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Frontend Developer · Dashboard UI Trial
          </p>

          <div className="flex gap-3 mt-4">
            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
              Submitted
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
              Completed in 5 Days
            </span>
          </div>
        </div>

        <div className="text-right me-4">
          <p className="text-3xl font-semibold text-red-500 mt-1">
            88%
          </p>
          
          <p className="text-sm text-gray-500">Overall Score</p>
        </div>
      </div>

      {/* ================= SUBMISSION INFO ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            Submission Overview
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Submitted On</span>
              <span className="text-gray-900 font-medium">
                24 Feb 2026
              </span>
            </div>

            <div className="flex justify-between">
              <span>Time Taken</span>
              <span className="text-gray-900 font-medium">
                4 Days 18 Hours
              </span>
            </div>

            <div className="flex justify-between">
              <span>GitHub Repository</span>
              <span className="text-red-500 font-medium cursor-pointer">
                View Code →
              </span>
            </div>

            <div className="flex justify-between">
              <span>Live Preview</span>
              <span className="text-red-500 font-medium cursor-pointer">
                View Demo →
              </span>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h3 className="font-semibold text-gray-900">
            Actions
          </h3>

          <button className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition">
            Move to Interview
          </button>

          <button className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
            Reject Candidate
          </button>

          <button className="w-full border border-gray-300 py-2 rounded-xl text-sm hover:bg-gray-50 transition">
            Add Internal Note
          </button>
        </div>
      </div>


         <div className="grid grid-cols-2 gap-6">
    
      {/* ================= SKILL BREAKDOWN ================= */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-6">
          Skill Performance Breakdown
        </h3>

        <div className="space-y-5">
          {skillScores.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">{item.skill}</span>
                <span className="text-gray-900 font-medium">
                  {item.score}%
                </span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-red-500 rounded-full transition-all"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= REVIEWER FEEDBACK ================= */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          Reviewer Feedback
        </h3>

        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-900">Strengths</p>
            <p>
              Clean UI implementation, proper component structure,
              responsive layout handled well.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Improvements</p>
            <p>
              API error handling could be improved. Minor performance
              optimizations needed in state management.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900">Final Recommendation</p>
            <p className="text-green-600 font-medium">
              Strongly Recommended for Interview
            </p>
          </div>
        </div>
      </div>
</div>

    </div>
  );
}