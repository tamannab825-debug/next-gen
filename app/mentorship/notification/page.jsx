"use client";

const stats = [
  { title: "Total Notifications", value: "148" },
  { title: "Unread", value: "23" },
  { title: "Session Alerts", value: "54" },
  { title: "Task Updates", value: "39" },
];

const notifications = [
  {
    type: "session",
    message: "Upcoming session with Sarah Johnson tomorrow at 4 PM",
    time: "2 hours ago",
  },
  {
    type: "task",
    message: "John Carter submitted the Portfolio Website task",
    time: "5 hours ago",
  },
  {
    type: "program",
    message: "Frontend Mentorship Program schedule updated",
    time: "Yesterday",
  },
];

const alerts = [
  "Session starting in 30 minutes",
  "New mentor assigned to Backend Program",
  "Task deadline approaching for API Integration",
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Notifications Center
          </h1>
          <p className="text-gray-500 text-sm">
            Stay updated with mentorship activities
          </p>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Mark All as Read
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border text-center rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >

             <p className="text-2xl font-semibold text-red-500 mt-1">
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm">{stat.title}</p>
           
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* NOTIFICATION FEED */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-5">
            Recent Notifications
          </h3>

          <div className="space-y-4">
            {notifications.map((n, i) => (
              <div
                key={i}
                className="flex justify-between items-start border-b pb-3"
              >
                <div>
                  <p className="text-sm text-gray-700">
                    {n.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {n.time}
                  </p>
                </div>

                <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
                  {n.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IMPORTANT ALERTS */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-5">
            Important Alerts
          </h3>

          <ul className="space-y-3">
            {alerts.map((alert, i) => (
              <li
                key={i}
                className="border-l-4 border-red-500 bg-gray-50 p-3 text-sm text-gray-600"
              >
                {alert}
              </li>
            ))}
          </ul>
        </div>

      </div>

     <div className="grid lg:grid-cols-2 gap-6">
       {/* ACTIVITY TIMELINE */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Activity Timeline
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>Session scheduled between Emma Wilson and John Carter</li>
          <li>Task "Authentication System" reviewed by mentor</li>
          <li>Backend Mentorship Program updated</li>
          <li>New mentee joined the Frontend Program</li>
        </ul>
      </div>

      {/* NOTIFICATION SETTINGS */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Notification Settings
        </h3>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Session Reminders</span>
            <span className="text-red-500">Enabled</span>
          </div>

          <div className="flex justify-between">
            <span>Task Submission Alerts</span>
            <span className="text-red-500">Enabled</span>
          </div>

          <div className="flex justify-between">
            <span>Program Updates</span>
            <span className="text-red-500">Enabled</span>
          </div>
        </div>
      </div>
     </div>

    </div>
  );
}