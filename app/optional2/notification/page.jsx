"use client";

export default function CandidateNotificationsPage() {
  const notifications = {
    interviews: [
      {
        company: "Elextra Studios",
        logo: "/images/company.jfif",
        message: "invited you to an interview meeting",
        time: "Tomorrow · 11:00 AM",
        action: "Respond",
      },
      {
        company: "Highspeed Design Team",
        logo: "/images/company.jfif",
        message: "scheduled a technical round interview",
        time: "Today · 6:00 PM",
        action: "View Details",
      },
    ],

    jobAlerts: [
      {
        title: "UI / UX Designer",
        company: "PixelCraft",
        location: "Gurgaon",
        time: "2 hours ago",
      },
      {
        title: "Frontend Developer",
        company: "TechNova",
        location: "Remote",
        time: "Today",
      },
    ],

    activity: [
      {
        name: "Sarah Collins",
        logo: "/images/profile.jpg",
        message: "commented on your Mobile App UI project",
        time: "10 mins ago",
      },
      {
        name: "FinEdge Recruiter",
        logo: "/images/company.jfif",
        message: "viewed your profile",
        time: "Yesterday",
      },
    ],

    system: [
      {
        message: "Your profile strength increased to 85%",
        time: "Today",
      },
      {
        message: "New skill assessment available for React",
        time: "2 days ago",
      },
    ],
  };

  return (
   <div className="min-h-screen bg-[#f5f7fb] p-4 sm:p-4 space-y-5">

  {/* HEADER */}
<div className="bg-white rounded-2xl p-4 shadow-sm">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    {/* LEFT */}
    <div>
      <h1 className="text-xl font-semibold text-gray-900">
        Notifications
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Interview invites, job alerts, and recruiter activity
      </p>

      {/* QUICK STATS */}
      <div className="flex gap-6 mt-4">
        <div>
          <p className="text-lg font-semibold text-red-500">12</p>
          <p className="text-xs text-gray-500">Unread</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">48</p>
          <p className="text-xs text-gray-500">This Week</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">3</p>
          <p className="text-xs text-gray-500">Interviews</p>
        </div>
      </div>
    </div>

    {/* RIGHT ACTIONS */}
    <div className="flex gap-3 flex-wrap">
      <button className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
        Mark all as read
      </button>

      <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"> 
        Notification Settings
      </button>
    </div>

  </div>
</div>

  {/* GRID LAYOUT */}
  <div className="grid lg:grid-cols-3 gap-6">

    {/* LEFT – MAIN FEED */}
    <div className="lg:col-span-2 space-y-6">

      {/* INTERVIEW INVITES */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Interview Invites
        </h2>

        <div className="space-y-4">
          {notifications.interviews.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow transition"
            >
              <div className="flex gap-4">
                <img src={item.logo} className="w-12 h-12 rounded-lg bg-white" />
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{item.company}</span>{" "}
                    {item.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.time}
                  </p>
                </div>
              </div>

              <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Activity & Engagement
        </h2>

        <div className="space-y-4">
          {notifications.activity.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow transition"
            >
              <img src={item.logo} className="w-10 h-10 rounded-full bg-white" />
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{item.name}</span>{" "}
                  {item.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>

    {/* RIGHT – SIDE FEED */}
    <div className="space-y-6">

      {/* JOB ALERTS */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Job Alerts
        </h2>

        <div className="space-y-3">
          {notifications.jobAlerts.map((job, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow transition"
            >
              <p className="text-sm font-semibold text-gray-800">
                {job.title}
              </p>
              <p className="text-xs text-gray-500">
                {job.company} • {job.location}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {job.time}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM UPDATES */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          System Updates
        </h2>

        <div className="space-y-3">
          {notifications.system.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700"
            >
              {item.message}
              <p className="text-xs text-gray-400 mt-1">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  </div>
</div>
  );
}