"use client";

export default function BookSessionPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 text-gray-800">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-5">

          <img
            src="/images/person.png"
            alt="Mentor"
            className="w-16 h-16 rounded-full bg-gray-200"
          />

          <div className="flex-1">
            <h1 className="text-xl font-semibold">
              Book Session with Sarah Lee
            </h1>
            <p className="text-sm text-gray-500">
              UI/UX & Product Design Mentor · ⭐ 4.8
            </p>
          </div>

          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Available Today
          </span>
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 mt-4">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 space-y-4">

          {/* SESSION TYPE */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">
              Select Session Type
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Portfolio Review",
                  time: "45 mins",
                  price: "₹1,499",
                  desc: "Detailed feedback with improvement roadmap",
                },
                {
                  title: "Mock Interview",
                  time: "60 mins",
                  price: "₹1,999",
                  desc: "Interview simulation & confidence building",
                },
                {
                  title: "Career Guidance",
                  time: "30 mins",
                  price: "Free",
                  desc: "Intro call & career clarity",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-4 flex justify-between items-center hover:bg-gray-100 transition cursor-pointer"
                >
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {s.desc}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400">{s.time}</p>
                    <p className="text-red-500 font-semibold">
                      {s.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DATE & TIME */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">
              Choose Date & Time
            </h2>

            {/* Date */}
            <div className="flex gap-3 mb-4 flex-wrap">
              {["Today", "Tomorrow", "Mon", "Tue", "Wed"].map((d, i) => (
                <button
                  key={i}
                  className="px-4 py-2 text-sm rounded-xl border bg-gray-50 hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition"
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Time */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {[
                "10:00 AM",
                "11:30 AM",
                "1:00 PM",
                "3:00 PM",
                "5:00 PM",
              ].map((t, i) => (
                <button
                  key={i}
                  className="border rounded-xl py-2 text-sm hover:bg-red-500 hover:text-white transition"
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          {/* NOTES */}
          <section className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold mb-3">
              Add Notes (Optional)
            </h2>

            <textarea
              placeholder="Share goals, questions, or expectations for the session..."
              className="w-full border rounded-xl p-4 text-sm focus:outline-none hover:border-3 hover:border-red-500 resize-none"
              rows={4}
            />
          </section>

        </div>

        {/* ================= RIGHT SUMMARY ================= */}
        <aside className="bg-white rounded-3xl p-6 shadow-sm h-fit sticky top-6">

          <h3 className="font-semibold mb-4">
            Booking Summary
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Mentor</span>
              <span>Sarah Lee</span>
            </div>

            <div className="flex justify-between">
              <span>Session</span>
              <span>Portfolio Review</span>
            </div>

            <div className="flex justify-between">
              <span>Duration</span>
              <span>45 mins</span>
            </div>

            <div className="flex justify-between border-t pt-3 mt-3">
              <span className="font-medium">Total</span>
              <span className="font-semibold text-red-500">
                ₹1,499
              </span>
            </div>
          </div>

          <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">
            Confirm & Pay
          </button>

          <p className="text-xs text-gray-400 text-center mt-3">
            Secure payment · Cancel up to 12 hrs before session
          </p>

        </aside>

      </div>
    </div>
  );
}