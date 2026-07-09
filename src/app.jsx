import React from "react";

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Marmik <span className="text-green-400">Korat</span>
        </h1>

        <p className="text-lg text-slate-300 max-w-2xl">
          Operations Leader with 10+ years of experience in solar manufacturing,
          driving efficiency, scalability, and operational excellence.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="px-5 py-2 bg-green-500 rounded-xl hover:bg-green-600 transition"
            onClick={() => window.open("mailto:marmikkorat1995@gmail.com")}>
            Contact Me
          </button>

          <button className="px-5 py-2 border border-slate-700 rounded-xl hover:bg-slate-800 transition"
            onClick={() => window.open("https://www.linkedin.com/in/marmik-korat-25472a234")}>
            LinkedIn
          </button>

          <button className="px-5 py-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition"
            onClick={() => window.open("/Marmik Korat Resume.pdf")}>
            Download Resume
          </button>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>

        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold">Manager • ACME Solar</h3>
            <p className="text-slate-400">Sep 2025 – Present</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold">Associate Manager • Adani Solar</h3>
            <p className="text-slate-400">Apr 2024 – Sep 2025</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Operations Management",
            "Lean Manufacturing",
            "Project Management",
            "Quality Management",
            "Process Improvement",
            "Resource Optimization"
          ].map(skill => (
            <div key={skill}
              className="bg-white/5 p-4 rounded-xl border border-white/10 text-center hover:bg-green-500/20 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold">Daily MIS Dashboard</h3>
          <p className="text-slate-400">Production analytics dashboard</p>

          <img src="/MIS Dashboard.jpg"
            className="mt-4 rounded-xl border border-slate-700" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">Let’s Connect</h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 bg-green-500 rounded-xl"
            onClick={() => window.open("mailto:marmikkorat1995@gmail.com")}>
            Email
          </button>

          <button className="px-5 py-2 border border-slate-700 rounded-xl"
            onClick={() => window.open("https://www.linkedin.com/in/marmik-korat-25472a234")}>
            LinkedIn
          </button>
        </div>
      </section>

    </div>
  );
}
