"use client";
import { MainNav } from "@/data/main-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-8 text-white">
      {MainNav.map((item) => {
        const isActive = item.href === pathname;
        return (
          <Link
            key={`nav-${item.title}`}
            href={item.href}
            className={`hover:text-primary hover:scale-110 transition-all duration-300 tracking-wider ${
              isActive && "text-primary scale-110"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
