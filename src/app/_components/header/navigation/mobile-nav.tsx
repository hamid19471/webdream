"use client";
import { MainNav } from "@/data/main-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileNav: React.FC<Props> = ({ setOpen }) => {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      return setOpen(false);
    }
  }, [pathname, setOpen]);
  return (
    <>
      <div className="flex items-center justify-center gap-6 bg-base-800 border-base-500 rounded-full py-6 px-12">
        {MainNav.map((item) => {
          const isActive = item.href === pathname;
          return (
            <Link
              key={`mobile-nav-${item.title}`}
              href={item.href}
              className={`${isActive && "text-primary scale-110"}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
