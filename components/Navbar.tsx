"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur bg-[#0D1117]/80 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-cyan-400 text-lg">Landoh Clansy</Link>
        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "hover:text-cyan-400 transition",
                pathname === link.href && "text-cyan-400 font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
