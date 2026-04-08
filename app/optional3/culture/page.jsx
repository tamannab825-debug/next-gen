"use client";

export default function CompanyCulture() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-4 space-y-6">

      {/* HEADER */}
      <div className="flex gap-6 bg-white rounded-2xl p-4 border border-gray-100">
        <div className="flex items-center">
            <img src="/images/company.jfif" alt="" className="w-18 h-18" />
        </div>
        <section className="">
        <h1 className="text-xl font-semibold text-gray-800">
          Company Culture
        </h1>
        <p className="text-sm text-gray-500 mt-2 max-w-2xl">
          Discover how we work, grow, and build meaningful products together.
          Transparency, ownership, and continuous learning drive everything we do.
        </p>
      </section>
      </div>

      {/* CORE VALUES */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Ownership Mindset",
            desc: "Every team member takes responsibility and drives impact beyond their role.",
          },
          {
            title: "Transparent Communication",
            desc: "Open feedback loops, regular updates, and clear decision-making.",
          },
          {
            title: "Skill-First Hiring",
            desc: "We evaluate talent through real-world tasks, not resumes.",
          },
          {
            title: "Continuous Learning",
            desc: "Weekly mentorship sessions and peer learning culture.",
          },
          {
            title: "Outcome Over Hours",
            desc: "We measure results, not time spent online.",
          },
          {
            title: "Inclusive Collaboration",
            desc: "Designers, engineers, and marketers build together.",
          },
        ].map((value, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-sm transition"
          >
            <h3 className="font-semibold text-gray-800">
              {value.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {value.desc}
            </p>
          </div>
        ))}
      </section>

      {/* LIFE AT NEXTGEN */}
<section className="bg-white rounded-2xl p-6 border border-gray-100 space-y-8">

  {/* SECTION HEADER */}
  <div>
    <h2 className="text-lg font-semibold text-gray-800">
      Life at NextGen
    </h2>
    <p className="text-sm text-gray-500 mt-2 max-w-2xl">
     {` At NextGen, we believe culture is built through ownership, collaboration,
      and continuous growth. Here's what everyday life looks like inside our team.`}
    </p>
  </div>

  {/* HOW WE WORK + COLLABORATION */}
  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-semibold text-gray-800 mb-2">
        How We Work
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        We operate in focused 2-week sprints with clear deliverables.
        Every team member owns features end-to-end and presents progress
        during weekly demo sessions. We prioritize outcomes over hours.
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-semibold text-gray-800 mb-2">
        Collaboration Style
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Designers, developers, and marketers collaborate from ideation
        to launch. We encourage open feedback, async communication,
        and transparent roadmaps so everyone stays aligned.
      </p>
    </div>

  </div>

  {/* GROWTH + BENEFITS */}
  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white border border-gray-100 rounded-xl p-5">
      <h4 className="font-medium text-gray-800 mb-2">
        Mentorship & Learning
      </h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Senior-led mentorship</li>
        <li>• Skill-based challenges</li>
        <li>• Quarterly growth reviews</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-100 rounded-xl p-5">
      <h4 className="font-medium text-gray-800 mb-2">
        Flexibility
      </h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Hybrid work model</li>
        <li>• Flexible working hours</li>
        <li>• Result-oriented culture</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-100 rounded-xl p-5">
      <h4 className="font-medium text-gray-800 mb-2">
        Recognition
      </h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Monthly performance awards</li>
        <li>• Public appreciation sessions</li>
        <li>• Fast-track growth paths</li>
      </ul>
    </div>

  </div>

  {/* MOMENTS / GALLERY */}
  <div>
    <h3 className="font-semibold text-gray-800 mb-4">
      Moments from Our Journey
    </h3>

    <div className="grid md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <img
          src="/images/3.jpg.jpeg"
          className="rounded-xl h-40 w-full object-cover bg-gray-200"
          alt=""
        />
        <p className="text-xs text-gray-500">
          Sprint Demo Day – Team showcasing product updates
        </p>
      </div>

      <div className="space-y-2">
        <img
          src="/images/12.jpg.jpeg"
          className="rounded-xl h-40 w-full object-cover bg-gray-200"
          alt=""
        />
        <p className="text-xs text-gray-500">
          Monthly UI Challenge & peer review session
        </p>
      </div>

      <div className="space-y-2">
        <img
          src="/images/company.jfif"
          className="rounded-xl h-40 w-full object-cover bg-gray-200"
          alt=""
        />
        <p className="text-xs text-gray-500">
          Strategy workshop & roadmap planning
        </p>
      </div>
    </div>
  </div>

</section>

      {/* GROWTH & MENTORSHIP */}
      <section className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">
            Growth & Mentorship
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Monthly performance reviews</li>
            <li>• Dedicated senior mentors</li>
            <li>• Trial-based project ownership</li>
            <li>• Career progression roadmap</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-6">
          <h3 className="font-semibold text-red-600 mb-3">
            What We Look For
          </h3>
          <ul className="space-y-2 text-sm text-red-500">
            <li>• Strong problem-solving ability</li>
            <li>• Clear communication</li>
            <li>• Willingness to learn fast</li>
            <li>• Ownership mentality</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold text-gray-800">
            Want to be part of our culture?
          </h3>
          <p className="text-sm text-gray-500">
            Explore open roles and apply through real-world challenges.
          </p>
        </div>

       <a href="/optional3/jobs">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm">
          View Open Positions
        </button>
       </a>
      </section>

    </div>
  );
}