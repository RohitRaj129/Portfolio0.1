interface SocialLink {
  href: string;
  label: string;
}

export default function SystemFooter() {
  const socialLinks: SocialLink[] = [
    { href: "https://github.com/RohitRaj129", label: "[GITHUB]" },
    {
      href: "https://www.linkedin.com/in/rohit-raj-6ba7772b8/",
      label: "[LINKEDIN]",
    },
    { href: "mailto:rohitraj129848@gmail.com", label: "[MAIL]" },
  ];

  return (
    <footer className="w-full border-t border-primary/20 bg-background-dark/95 py-6 mt-8 mb-17">
      <div className="max-w-300 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <span className="material-symbols-outlined text-base">copyright</span>
          <span>2026</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-muted hover:text-primary transition-colors text-sm font-mono cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* System Status */}
        <p className="text-xs text-gray-600 font-mono">
          Made by Rohit Raj with ❤️
        </p>
      </div>
    </footer>
  );
}
