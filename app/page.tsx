import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRightCircle, Code, Zap } from "lucide-react";
import HeroBackground from "./components/HeroBackground";
import CatEyes2 from "./components/CatEyes2";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-lg
                opacity-0 hover:opacity-100 transition-opacity duration-700"
        />
        {/* Background Image */}
        <HeroBackground />
        {/* Soft white gradient for readability on top of image */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/80 to-transparent
                z-10 md:hidden dark:hidden"
        ></div>

        <div className="text-center px-6 max-w-3xl bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-xl z-20 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-neutral-900 dark:text-primaryText">
            Building&nbsp;
            <span className="text-ctaRed">pixel-perfect&nbsp;front-ends </span>
            <br className="hidden md:block" />
            at ⚡ speed
          </h1>
          {/* <p className="text-lg md:text-xl mb-8 text-neutral-800 dark:text-primaryText">
            4½ years of turning coffee&nbsp;☕ into{" "}
            <span className="font-semibold">blazing-fast UIs</span>. Next.js,
            React, Angular—name the framework, I’ll make it sing. Need web
            vitals in the green and users who say “wow” and engineers who still
            smile? <br className="hidden sm:block" />
            <span className="text-highlightGreen font-semibold">
              I’m your guy.
            </span>
          </p> */}
          <p className="text-lg md:text-xl mb-8 text-neutral-800 dark:text-primaryText">
            4½ years turning coffee&nbsp;☕ into code that loads before you can
            blink. React, Next.js, Angular — name the framework and I’ll make it
            sing while Core Web Vitals stay green. Want users saying “wow” and
            engineers still smiling?
            <span className="text-highlightGreen font-semibold">
              {" "}
              I’m your guy.
            </span>
          </p>
          {/* <p className="text-lg md:text-xl mb-8 text-neutral-800 dark:text-primaryText">
  4½ years shipping code that loads before you can blink.  
  React, Next.js, Angular—whatever gets the job done (and the KPIs grinning).  
  Need a UI that feels like magic and a dev who keeps the team smiling?  
  <span className="text-highlightGreen font-semibold">Let’s make it happen.</span>
</p> */}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ctaRed text-white px-7 py-3 rounded-md
               font-semibold hover:scale-105 active:scale-100 transition-transform"
          >
            Get to know me <ArrowRightCircle className="w-5 h-5" />
          </a>
        </div>
        <CatEyes2 />
      </section>

      {/* ABOUT & CONTACT SECTION */}
      <section
        id="contact"
        className="
    px-4 py-16
    bg-gray-100     dark:bg-backgroundDark   /* light = soft grey */
    text-neutral-900 dark:text-primaryText   /* auto text colour */
  "
      >
        <div
          className="absolute -top-8 left-0 right-0 h-8 
                  bg-gradient-to-b from-white/0 to-gray-100 
                  dark:from-transparent dark:to-transparent pointer-events-none"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: Profile Info */}
          <div className="flex flex-col items-start">
            <div className="group [perspective:1000px] mb-6 w-full aspect-[3/4]">
              <div
                className="relative h-full w-full overflow-hidden rounded-lg shadow-lg border
               transition-transform duration-500 ease-out
               group-hover:rotate-x-3 group-hover:-rotate-y-3 group-hover:scale-105"
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Aman's profile"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">Aman Singh Rajput</h2>
            <p className="text-lg mb-4">
              Front-end lead with 4.5 yrs turning Figma dreams into{" "}
              <span className="font-semibold">sub-200 ms</span> realities. I’ve
              shipped Next.js & Angular apps that manage{" "}
              <span className="font-semibold">10,000-plus SKUs</span>, embedded
              AI chat assistants, and kept Core Web Vitals in the green. Need
              pixel-perfect UIs, ruthless performance tuning, or a dev who can
              mentor while shipping?
              <span className="text-ctaRed font-semibold">
                I’ve got you covered.
              </span>
            </p>

            <a
              href="/Aman_Singh_CV.pdf" // <- points to the PDF you just uploaded
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accentBlue text-white px-4 py-2 rounded-md 
             hover:bg-blue-600 transition-colors"
            >
              Download Résumé
            </a>
          </div>

          {/* RIGHT: Contact & Skills */}
          {/* RIGHT: Contact | Skills | Superpowers */}
          <div
            className="
   p-8 rounded-xl space-y-10 h-full
   shadow-lg shadow-black/10            
   bg-white text-neutral-900             
   dark:bg-[#0f1117] dark:text-primaryText 
 "
          >
            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-ctaRed" /> Quick Contact
              </h3>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-highlightGreen" />
                <span>+91 97706 10436</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-highlightGreen" />
                <span>rajput.aman900@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-highlightGreen" />
                <span>Hyderabad • IST (+5:30)</span>
              </div>
            </div>
            {/* Work History · top of card */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-ctaRed" />
                Companies I’ve Worked For
              </h3>

              {[
                { name: "ShyftLabs", period: "Nov 2022 – Present", icon: "💼" },
                {
                  name: "Accenture",
                  period: "Jul 2021 – Mar 2022",
                  icon: "🏢",
                },
                { name: "Wipro", period: "Sep 2020 – Jul 2021", icon: "🏢" },
              ].map(({ name, period, icon }) => (
                <div
                  key={name}
                  className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 dark:bg-[#1d222a] dark:hover:bg-[#242b33]
                 px-3 py-2 rounded-md hover:bg-[#242b33] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="font-medium">{name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{period}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-ctaRed dark:text-ctaRed" />{" "}
                Primary Stack
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Next.js 13+",
                  "React (Vite)",
                  "Angular 17/18",
                  "TypeScript",
                  "Tailwind / SCSS",
                  "Reactflow",
                  "Redux / Zustand",
                  "Jest & Cypress",
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-1">
                    <span
                      className="h-2 w-2 rounded-full
               bg-highlightGreen dark:bg-highlightGreen
               bg-opacity-80"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-ctaRed" /> Superpowers
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm leading-6">
                <li>AI-driven UI (chat assistants, node canvases)</li>
                <li>Clean-code & accessibility evangelist</li>
                <li>Mentor + team lead who still ships features</li>
              </ul>
            </div>
            {/* Highlight Projects */}
            {/* Company Projects (plain) */}
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Code className="w-5 h-5 text-ctaRed dark:text-ctaRed" />{" "}
                Company Projects
              </h3>
              <ul className="list-disc list-inside text-sm leading-6 space-y-1">
                <li>Data Weaver · ETL Canvas (ShyftLabs)</li>
                <li>Carter AI Assistant (ShyftLabs)</li>
                <li>Price Force Dashboard (ShyftLabs)</li>
                <li>Shopi – Angular SSR Storefront (ShyftLabs)</li>
              </ul>
            </div>

            {/* Personal Projects (clickable) */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Code className="w-5 h-5 text-ctaRed dark:text-ctaRed" />{" "}
                Personal Projects
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  [
                    "Portfolio Site (this)",
                    "https://github.com/github-AmanSinghRajput",
                  ],
                  ["Gmail Clone", "https://github.com/github-AmanSinghRajput"],
                  [
                    "LinkedIn Clone",
                    "https://github.com/github-AmanSinghRajput",
                  ],
                  [
                    "Expense Tracker",
                    "https://github.com/github-AmanSinghRajput",
                  ],
                ].map(([name, url]) => (
                  <li key={name} className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 fill-highlightGreen shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.4.5.5 5.4.5 12S5.4 23.5 12 23.5 23.5 18.6 23.5 12 18.6.5 12 .5Z" />
                    </svg>
                    <a
                      href={url}
                      target="_blank"
                      className="hover:text-ctaRed transition-colors"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-[#0b0e12] text-center text-primaryText">
        © {new Date().getFullYear()} Aman Singh Rajput. Built with Next.js &amp;
        TailwindCSS.
      </footer>
    </main>
  );
}
