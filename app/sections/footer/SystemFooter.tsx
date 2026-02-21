interface SocialLink {
  href: string;
  label: string;
}

export default function SystemFooter() {
  const socialLinks: SocialLink[] = [
    { href: "#", label: "[GITHUB]" },
    { href: "#", label: "[LINKEDIN]" },
    { href: "#", label: "[MAIL]" },
  ];

  return (
    <footer className="w-full border-t border-primary/20 bg-background-dark/95 py-6 mt-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <span className="material-symbols-outlined text-base">copyright</span>
          <span>2023 SYSTEM INC.</span>
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
          SYSTEM INTEGRITY: 100%
        </p>
      </div>
    </footer>
  );
}
