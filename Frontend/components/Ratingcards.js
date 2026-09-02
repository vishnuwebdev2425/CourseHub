import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * Tailwind + Framer Motion "moving cards" rating/testimonial section.
 * Two marquee rows scroll in opposite directions and pause on hover.
 *
 * Setup:
 *  npm install framer-motion
 *  Add the @keyframes below to your global CSS (or keep the <style> tag
 *  in this file — both work, global is cleaner for reuse elsewhere).
 */

const testimonials = [
  {
    name: "Rohit Sharma",
    course: "Namaste React",
    instructor: "Akshay Saini",
    category: "Web Development",
    rating: 5,
    text: "The way the fundamentals are broken down made hooks and re-renders finally click for me. Worth every rupee.",
  },
  {
    name: "Ananya Iyer",
    course: "100xDevs Cohort",
    instructor: "Harkirat Singh",
    category: "Web Development",
    rating: 5,
    text: "Went from barely knowing JS to shipping a full-stack project in 3 months. The community support is unmatched.",
  },
  {
    name: "Vikram Desai",
    course: "Web Dev Bootcamp",
    instructor: "Apna College",
    category: "Web Development",
    rating: 4,
    text: "Great for absolute beginners — structured, paced well, and the DSA add-on was a nice bonus.",
  },
  {
    name: "Sneha Reddy",
    course: "Full Stack Mastery",
    instructor: "Tap Academy",
    category: "Web Development",
    rating: 4,
    text: "Solid placement support alongside the curriculum. Mock interviews helped me a lot.",
  },
  {
    name: "Arjun Mehta",
    course: "Complete ML Bootcamp",
    instructor: "Krish Naik",
    category: "AI / ML",
    rating: 5,
    text: "Explains the math behind ML without making it intimidating. My go-to whenever I get stuck.",
  },
  {
    name: "Priya Nair",
    course: "Deep Learning Deep Dive",
    instructor: "Akshay Saini",
    category: "AI / ML",
    rating: 5,
    text: "Loved the project-first approach — built 4 real models before the course even ended.",
  },
  {
    name: "Karan Malhotra",
    course: "AI/ML Career Track",
    instructor: "Tap Academy",
    category: "AI / ML",
    rating: 4,
    text: "Good mix of theory and hands-on labs. Would've liked more advanced NLP content though.",
  },
  {
    name: "Divya Krishnan",
    course: "Ethical Hacking Pro",
    instructor: "CyberSec Academy",
    category: "Cybersecurity",
    rating: 5,
    text: "Hands-on labs on real vulnerable machines — this is how security should be taught.",
  },
  {
    name: "Rahul Verma",
    course: "Grokking System Design",
    instructor: "System Design Guild",
    category: "System Design",
    rating: 5,
    text: "Cracked my SDE-2 interview mainly because of how this course structured scalability concepts.",
  },
  {
    name: "Meera Pillai",
    course: "AWS Solutions Architect",
    instructor: "Cloud Masters",
    category: "Cloud Computing",
    rating: 4,
    text: "Clear explanations of VPC and IAM — topics that usually confuse everyone starting out on AWS.",
  },
  {
    name: "Aditya Rao",
    course: "Premiere Pro to After Effects",
    instructor: "EditWell Studio",
    category: "Video Editing",
    rating: 5,
    text: "My reels went from amateur to actually watchable within a few weeks of this course.",
  },
  {
    name: "Ishita Bansal",
    course: "DevOps Zero to Hero",
    instructor: "CloudOps Academy",
    category: "DevOps",
    rating: 5,
    text: "Docker, Kubernetes and CI/CD finally make sense together instead of as separate scary topics.",
  },
];

const Star = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-4 w-4 ${filled ? "fill-[#A9782F]" : "fill-[#E4DCCB]"}`}
  >
    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
  </svg>
);

const RatingCard = ({ item }) => (
  <div className="mx-3 flex w-[320px] flex-shrink-0 flex-col gap-3 rounded-lg border border-[#E4DCCB] bg-[#FAF7F2] p-5 shadow-[0_4px_16px_-8px_rgba(27,42,34,0.15)]">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1B2A22] font-['Fraunces',serif] text-sm font-semibold text-[#FAF7F2]">
        {item.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-[#1B2A22]">
          {item.name}
        </p>
        <p className="truncate text-xs text-[#5C7A66]">
          {item.course} · {item.instructor}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < item.rating} />
      ))}
    </div>

    <p className="text-sm leading-relaxed text-[#1B2A22]/90">{item.text}</p>

    <span className="w-fit rounded-full bg-[#F3EEE3] px-2.5 py-1 text-[0.7rem] font-medium text-[#8C6526]">
      {item.category}
    </span>
  </div>
);

const RatingCards = () => {
  const row1 = testimonials.slice(0, 6);
  const row2 = testimonials.slice(6, 12);

  return (
    <section className="bg-[#F3EEE3] py-16">
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-2xl px-5 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A9782F]">
          Loved by learners
        </p>
        <h2 className="mt-2 font-['Fraunces',serif] text-3xl font-semibold text-[#1B2A22]">
          What our students say
        </h2>
        <p className="mt-2 text-sm text-[#5C7A66]">
          Real ratings from learners across Web Development, AI/ML,
          Cybersecurity, System Design, Cloud, Video Editing and DevOps.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        <div
          className="group overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex w-max group-hover:[animation-play-state:paused]"
            style={{ animation: "scroll-left 45s linear infinite" }}
          >
            {[...row1, ...row1].map((item, i) => (
              <RatingCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>

        <div
          className="group overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex w-max group-hover:[animation-play-state:paused]"
            style={{ animation: "scroll-right 50s linear infinite" }}
          >
            {[...row2, ...row2].map((item, i) => (
              <RatingCard key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingCards;
