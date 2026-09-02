import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Footer — matches the Header's ink / paper / brass design system.
 * Uses the same Tailwind arbitrary-value colors so no config changes needed.
 * Needs: react-router-dom, framer-motion (already installed for Header).
 */

const linkColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Courses", to: "/courses" },
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Web Development", to: "/courses?category=web-development" },
      { label: "AI / ML", to: "/courses?category=ai-ml" },
      { label: "Cybersecurity", to: "/courses?category=cybersecurity" },
      { label: "System Design", to: "/courses?category=system-design" },
      { label: "Cloud Computing", to: "/courses?category=cloud" },
      { label: "DevOps", to: "/courses?category=devops" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
];

const socials = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    path: "M23 4.98c-.85.38-1.76.64-2.72.75a4.75 4.75 0 0 0 2.08-2.62c-.92.54-1.94.93-3.02 1.15a4.74 4.74 0 0 0-8.08 4.32A13.44 13.44 0 0 1 1.64 3.66a4.74 4.74 0 0 0 1.47 6.33c-.77-.02-1.5-.24-2.14-.58v.06c0 2.3 1.64 4.22 3.8 4.66-.4.11-.82.17-1.25.17-.3 0-.6-.03-.89-.08a4.75 4.75 0 0 0 4.43 3.3A9.52 9.52 0 0 1 0 19.55 13.4 13.4 0 0 0 7.29 21.7c8.75 0 13.53-7.25 13.53-13.53 0-.21 0-.42-.01-.62A9.67 9.67 0 0 0 23 4.98z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM.5 8.75h4.96V23H.5V8.75zM8.7 8.75h4.76v1.95h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.95 3.31 5.95 7.62V23h-4.96v-6.32c0-1.51-.03-3.45-2.1-3.45-2.1 0-2.42 1.64-2.42 3.34V23H8.7V8.75z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.9.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="border-t border-[#E4DCCB] bg-[#1B2A22] text-[#FAF7F2]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="18"
                  width="6"
                  height="10"
                  rx="1"
                  fill="#A9782F"
                />
                <rect
                  x="12"
                  y="11"
                  width="6"
                  height="17"
                  rx="1"
                  fill="#A9782F"
                />
                <rect
                  x="22"
                  y="4"
                  width="6"
                  height="24"
                  rx="1"
                  fill="#FAF7F2"
                />
              </svg>
              <span className="font-['Fraunces',serif] text-xl font-semibold tracking-tight">
                Cursus
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#FAF7F2]/70">
              Learn from instructors who've actually shipped. Courses in web
              development, AI/ML, cybersecurity, cloud and more — taught by
              people who work in the field.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-xs overflow-hidden rounded-[3px] border border-[#FAF7F2]/25"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-3 py-2.5 text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-[#A9782F] px-4 text-sm font-semibold text-[#1B2A22] transition-colors hover:bg-[#c48f3a]"
              >
                Join
              </button>
            </form>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A9782F]">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#FAF7F2]/70 transition-colors hover:text-[#FAF7F2]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#FAF7F2]/15 pt-6 sm:flex-row">
          <p className="text-xs text-[#FAF7F2]/50">
            © {new Date().getFullYear()} Cursus. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#FAF7F2]/60 transition-colors hover:text-[#A9782F]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
