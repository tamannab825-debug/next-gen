"use client";

import { useState } from "react";

const ALL_TRIALS = [
  { id: 1, title: "React UI Challenge", level: "Intermediate" },
  { id: 2, title: "JavaScript Logic Test", level: "Beginner" },
  { id: 3, title: "Next.js Routing Task", level: "Intermediate" },
  { id: 4, title: "CSS Layout Assignment", level: "Beginner" },
  { id: 5, title: "API Integration Test", level: "Advanced" },
   { id: 6, title: "System Design Basics", level: "Advanced" },
];

export default function JobTrialsPage() {
  const [cards, setCards] = useState(3);
  const [unlocked, setUnlocked] = useState(0);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (cards === 0 || !query.trim()) return;
    setCards((c) => c - 1);
    setUnlocked((u) => Math.min(u + 1, ALL_TRIALS.length));
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ===== HEADER ===== */}
        <section className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Skill-Based Job Trials
            </h1>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              Discover and unlock real-world skill challenges. Each search uses
              one card to reveal a new trial.
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Search Cards</p>
            <p className="text-3xl font-bold text-blue-600">{cards}</p>
            <p className="text-xs text-gray-400 mt-1">
              1 card = 1 unlocked trial
            </p>
          </div>
        </section>

        {/* ===== SEARCH ===== */}
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Search React, JavaScript, UI, API..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={cards === 0}
              className="
                w-full md:max-w-md
                border border-gray-500 rounded  px-4 py-4
                text-gray-700 placeholder-gray-400
                focus:ring-2 focus:ring-blue-500 focus:outline-none
                disabled:bg-gray-100 bg-green-100 
              "
            />

            <div className="w-full md:w-auto md:ml-auto">
              <button
                onClick={handleSearch}
                disabled={cards === 0}
                className="
                  w-full md:w-auto
                  px-6 py-4 rounded-lg
                  bg-blue-600 text-white font-medium
                  hover:bg-blue-700 transition
                  disabled:bg-gray-400 disabled:cursor-not-allowed
                "
              >
                Search Trial
              </button>
            </div>
          </div>

          {cards === 0 && (
            <p className="text-sm text-red-500 mt-3">
              No cards left. Purchase more cards to continue unlocking trials.
            </p>
          )}
        </section>

        {/* ===== TRIALS ===== */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Available Trials
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ALL_TRIALS.slice(0, unlocked).map((trial) => (
              <TrialCard key={trial.id} trial={trial} />
            ))}

            {ALL_TRIALS.slice(unlocked).map((trial) => (
              <LockedTrialCard key={trial.id} />
            ))}
          </div>
        </section>

        {/* ===== BUY CARDS ===== */}
        <section className="bg-white p-8 rounded-2xl shadow-sm text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Need More Search Cards?
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Unlock more trials by purchasing additional search cards.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Buy 5 Cards
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy 10 Cards
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function TrialCard({ trial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
      <h3 className="font-semibold text-gray-800">{trial.title}</h3>
      <p className="text-sm text-gray-500 mt-1">
        Difficulty: {trial.level}
      </p>

      <button className="mt-5 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Start Trial
      </button>
    </div>
  );
}

function LockedTrialCard() {
  return (
    <div className="bg-linear-to-br from-green-400 to-blue-300
     p-8 rounded-xl flex flex-col items-center justify-center transition-all  duration-300 hover:-translate-y-1 hover:shadow-lg text-green-800 text-sm">
      🔒 Locked Trial
      <span className="text-xs mt-2">
        Use a search card to unlock
      </span>
    </div>
  );
}
