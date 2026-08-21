export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs tracking-[0.3em] text-ice/80 uppercase">
          About
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-snowlight">
          A little about me
        </h2>
        <p className="mt-6 font-body text-mute leading-relaxed">
          I'm Rupantar Borphukan, an Electronics and Instrumentation Engineering
          graduate from NIT Silchar with experience across software development,
          data management, Consulting, and electronics. I enjoy building
          practical solutions that combine technology, problem-solving, and
          thoughtful design. My experience spans React, Python, IoT, sensors,
          and modern development tools.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-snowlight">
              Background
            </h3>
            <p className="mt-3 font-body text-sm text-mute leading-relaxed">
              My background spans frontend development, data management,
              automation, and electronics systems, with experience at NwN and CDAC CINE. I work with technologies such as React,
              Python, MERN, IoT, and sensor systems. A few years building web
              products end to end from design systems to shipping features used
              by real people, mostly with React.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-snowlight">
              Education
            </h3>
            <p className="mt-3 font-body text-sm text-mute leading-relaxed">
              <span className="text-snowlight">
                B.Tech, Electronics and Instrumentation Engineering
              </span>
              <br />
              NIT Silchar, 2021 – 2025
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-lg font-semibold text-snowlight">
            Projects
          </h3>
          <p className="mt-3 font-body text-sm text-mute leading-relaxed">
            A few things I've shipped recently — take a look!
          </p>
          <a
            href="#projects"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm text-snowlight hover:bg-white/5 transition-colors"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
