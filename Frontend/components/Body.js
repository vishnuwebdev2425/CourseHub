import { motion } from "framer-motion";
import RatingCards from "./Ratingcards";
/**
 * Body — premium redesign of the homepage skeleton.
 * Same ink / paper / brass design system as Header, Footer and RatingCards.
 * Needs: framer-motion (already installed).
 *
 * NOTE: fixed the import filename casing below (RatingCards, not Ratingcards) —
 * this matters on case-sensitive filesystems (Linux servers, most CI/CD,
 * Vercel/Netlify builds) even though Windows/Mac won't complain locally.
 * Make sure your actual file is named RatingCards.jsx to match.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { value: "40K+", label: "Students Enrolled" },
  { value: "120+", label: "Expert-Led Courses" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "85%", label: "Career Growth Reported" },
];

const categories = [
  {
    title: "Web Development",
    desc: "HTML, CSS, JS, React and full-stack projects from scratch to deployment.",
    href: "https://en.wikipedia.org/wiki/Web_development",
    icon: (
      <path
        d="M8 5L2 12l6 7M16 5l6 7-6 7M14 3l-4 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Artificial Intelligence",
    desc: "Machine learning, deep learning and real-world model building.",
    href: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    icon: (
      <path
        d="M9 3h6v3.06a6 6 0 013 5.19V15a3 3 0 01-3 3h-.5l-1 3h-3l-1-3H9a3 3 0 01-3-3v-3.75a6 6 0 013-5.19V3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "DevOps",
    desc: "CI/CD pipelines, Docker, Kubernetes and cloud-native deployment.",
    href: "https://en.wikipedia.org/wiki/DevOps",
    icon: (
      <path
        d="M12 4a8 8 0 018 8M20 12a8 8 0 01-8 8M4 12a8 8 0 018-8M4 12a8 8 0 008 8M8 4l-2 2M22 8l-2 2M2 16l2 2M16 22l2-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Data Science",
    desc: "Statistics, Python, and data visualization for real business insight.",
    href: "https://en.wikipedia.org/wiki/Data_science",
    icon: (
      <path
        d="M4 20V10M10 20V4M16 20v-7M22 20V8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Automation Testing",
    desc: "Selenium, test frameworks and quality pipelines used in production.",
    href: "https://en.wikipedia.org/wiki/Test_automation",
    icon: (
      <path
        d="M9 12l2 2 4-4M12 3a9 9 0 100 18 9 9 0 000-18z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Cyber Security",
    desc: "Ethical hacking, network defense and hands-on vulnerability labs.",
    href: "https://en.wikipedia.org/wiki/Computer_security",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "DSA",
    desc: "Data structures and algorithms to crack technical interviews.",
    href: "https://en.wikipedia.org/wiki/Data_structure",
    icon: (
      <path
        d="M12 3v6M12 21v-6M4.2 7.5L9 10.2M15 13.8l4.8 2.7M4.2 16.5L9 13.8M15 10.2l4.8-2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "System Design",
    desc: "Scalable architecture, load balancing and distributed systems.",
    href: "https://en.wikipedia.org/wiki/Systems_design",
    icon: (
      <path
        d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const whyChooseUs = [
  {
    title: "Industry Expert Instructors",
    desc: "Learn from people currently working in the field, not just teaching from slides.",
  },
  {
    title: "Hands-On Projects",
    desc: "Every course ends with something real for your portfolio, not just certificates.",
  },
  {
    title: "Lifetime Access",
    desc: "Pay once, revisit any course anytime — including future content updates.",
  },
  {
    title: "Placement Assistance",
    desc: "Mock interviews, resume reviews and referrals for job-ready learners.",
  },
  {
    title: "Active Community",
    desc: "Get unstuck fast with peer support and instructor-moderated forums.",
  },
  {
    title: "Verified Certification",
    desc: "Shareable certificates recognized by hiring partners on completion.",
  },
];

const CategoryIcon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#A9782F"
    strokeWidth="1.6"
    className="h-7 w-7"
  >
    {children}
  </svg>
);

const Body = () => {
  return (
    <div className="bg-[#FAF7F2]">
      {/* HERO */}
      <section className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-5 py-16 sm:px-8 md:flex-row md:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block rounded-full bg-[#F3EEE3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#A9782F]">
            Learn from people who've shipped
          </span>

          <h1 className="mt-5 font-['Fraunces',serif] text-4xl font-semibold leading-tight text-[#1B2A22] sm:text-5xl">
            Learn. Practise. Grow. Succeed.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-[#1B2A22]/70 md:mx-0">
            Career-focused courses in web development, AI/ML, cybersecurity,
            cloud and more — built around real projects, not just theory.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <button className="rounded-[3px] bg-[#1B2A22] px-7 py-3 text-sm font-semibold text-[#FAF7F2] transition-colors hover:bg-[#2a3d31]">
              Register Now
            </button>
            <button className="rounded-[3px] border-[1.5px] border-[#1B2A22] px-7 py-3 text-sm font-semibold text-[#1B2A22] transition-colors hover:bg-[#1B2A22] hover:text-[#FAF7F2]">
              Browse Courses
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-['Fraunces',serif] text-2xl font-semibold text-[#1B2A22]">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[#5C7A66]">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex-1"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-[#A9782F]/10 blur-2xl" />
          <img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1769710902/progress-removebg-preview_aqoj6y.png"
            alt="Student progress illustration"
            className="mx-auto w-full max-w-md"
          />
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A9782F]">
            What we teach
          </p>
          <h2 className="mt-2 font-['Fraunces',serif] text-3xl font-semibold text-[#1B2A22]">
            Master In-Demand Technology With Us
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-3 rounded-lg border border-[#E4DCCB] bg-white p-6 shadow-[0_4px_16px_-10px_rgba(27,42,34,0.15)] transition-shadow hover:shadow-[0_10px_24px_-12px_rgba(27,42,34,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F3EEE3]">
                <CategoryIcon>{cat.icon}</CategoryIcon>
              </div>
              <h3 className="font-['Fraunces',serif] text-lg font-semibold text-[#1B2A22]">
                {cat.title}
              </h3>
              <p className="flex-1 text-sm text-[#1B2A22]/65">{cat.desc}</p>
              <a
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#A9782F] hover:text-[#8C6526]"
              >
                Get More Info
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F3EEE3] py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center font-['Fraunces',serif] text-3xl font-semibold text-[#1B2A22]"
          >
            Why Choose Us
          </motion.h2>

          <div className="mt-12 flex flex-col items-center gap-12 md:flex-row">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              src="https://res.cloudinary.com/djcslopvv/image/upload/v1764480352/U-removebg-preview_q7pf73.png"
              alt="Why Choose Us"
              className="w-full max-w-[280px] flex-shrink-0"
            />

            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                >
                  <h3 className="font-semibold text-[#1B2A22]">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-[#1B2A22]/65">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RATINGS */}
      <RatingCards />

      {/* CTA BANNER */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 rounded-xl bg-[#1B2A22] px-8 py-10 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h3 className="font-['Fraunces',serif] text-2xl font-semibold text-[#FAF7F2]">
              Ready to start learning?
            </h3>
            <p className="mt-1 text-sm text-[#FAF7F2]/70">
              Join thousands of learners already building real skills with us.
            </p>
          </div>
          <button className="flex-shrink-0 rounded-[3px] bg-[#A9782F] px-7 py-3 text-sm font-semibold text-[#1B2A22] transition-colors hover:bg-[#c48f3a]">
            Register Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Body;
