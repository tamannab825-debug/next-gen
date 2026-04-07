"use client";

import { Trophy, ArrowUp, ArrowDown, Medal } from "lucide-react";

export default function LeaderboardPage() {
  const leaderboard = [
    { name: "Aman", score: 980, rank: 1, change: "up" },
    { name: "You", score: 920, rank: 2, change: "up" },
    { name: "Neha", score: 890, rank: 3, change: "down" },
    { name: "Rohit", score: 850, rank: 4, change: "same" },
    { name: "Priya", score: 820, rank: 5, change: "up" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">

      {/* ===== PAGE HEADER ===== */}
      <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Leaderboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            See how you rank against other candidates this week
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-red-50 px-5 py-3 rounded-xl text-center">
            <p className="text-xs text-gray-500">Your Rank</p>
            <p className="font-semibold text-red-600 text-lg">#2</p>
          </div>
          <div className="bg-green-50 px-5 py-3 rounded-xl text-center">
            <p className="text-xs text-gray-500">Your Score</p>
            <p className="font-semibold text-green-600 text-lg">920 pts</p>
          </div>
        </div>
      </div>

      {/* ===== TOP 3 PODIUM ===== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 2nd */}
        <div className="bg-linear-to-br from-red-100 to-red-50 rounded-xl p-3 text-center shadow-sm border-2 border-red-200">
          <Medal className="mx-auto text-red-500" size={36} />
          <p className="mt-3 text-md font-medium text-gray-800">You</p>
          <p className="text-xs text-gray-600">920 pts</p>
          <span className="inline-block mt-2 text-xs bg-red-100 text-red-400 border px-2 py-0.5 rounded-full">
            Rank #2
          </span>
        </div>

        {/* 1st */}
        <div className="bg-linear-to-br from-yellow-100 to-yellow-50 rounded-xl p-3 text-center shadow-md border-2 border-yellow-200">
          <Trophy className="mx-auto text-yellow-500" size={40} />
          <p className="mt-3 text-md font-semibold text-gray-800">Aman</p>
          <p className="text-xs text-gray-600">980 pts</p>
          <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-500 border px-2 py-0.5 rounded-full">
            🏆 Top Performer
          </span>
        </div>

        {/* 3rd */}
        <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-xl  p-3 text-center shadow-sm border-2 border-orange-200">
          <Medal className="mx-auto text-orange-500" size={36} />
          <p className="mt-3 text-md font-medium text-gray-800">Neha</p>
          <p className="text-xs text-gray-600">890 pts</p>
          <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-400 px-2 py-0.5 border rounded-full">
            Rank #3
          </span>
        </div>

      </section>

      {/* ===== FULL LEADERBOARD TABLE ===== */}
      <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-gray-800">
            Weekly Rankings
          </h3>
          <span className="text-xs text-gray-500">
            Frontend Track
          </span>
        </div>

        <ul className="space-y-3">
          {leaderboard.map((user, i) => (
            <li
              key={i}
              className={`flex items-center justify-between p-4 rounded-xl border transition
                ${
                  user.name === "You"
                    ? "border-red-200 bg-red-50"
                    : "border-gray-200 bg-white hover:border-red-200 hover:bg-red-50"
                }`}
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700">
                  {user.rank}
                </div>

                <div>
                  <p
                    className={`text-sm font-medium ${
                      user.name === "You"
                        ? "text-red-600"
                        : "text-gray-800"
                    }`}
                  >
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Frontend Track
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                <p className="text-sm font-semibold text-gray-800">
                  {user.score} pts
                </p>

                {user.change === "up" && (
                  <ArrowUp size={14} className="text-green-600" />
                )}
                {user.change === "down" && (
                  <ArrowDown size={14} className="text-red-500" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== MOTIVATION CARD ===== */}
      <section className="bg-red-50 rounded-2xl border-2 border-red-200 p-6">
        <h3 className="font-semibold text-red-600 mb-2">
          🚀 Boost Your Rank
        </h3>
        <p className="text-sm text-gray-600">
          Complete assignments on time, attend mentor sessions, and stay active
          weekly to climb the leaderboard faster.
        </p>
      </section>

    </div>
  );
}
