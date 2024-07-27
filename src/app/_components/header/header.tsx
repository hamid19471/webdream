"use client";
import Image from "next/image";
import { Navigation } from "./navigation/navigation";
import { MobileNav } from "./navigation/mobile-nav";
import { useState } from "react";
import { Button } from "../button";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <div className="hidden z-40 lg:flex container items-center justify-between gap-4">
        <Image
          src={"/images/logo.png"}
          alt="webdream Studio"
          width={120}
          height={120}
        />
        <Navigation />
        <div className="hidden lg:block">
          <Button
            variant="base"
            size="small"
            className="uppercase tracking-wide"
          >
            Free consultaion
          </Button>
        </div>
      </div>
      <div className="lg:hidden z-40 flex items-center container justify-between gap-2 px-4">
        <Image
          src={"/images/logo.png"}
          alt="webdream Studio"
          width={110}
          height={110}
        />
        <div>
          <Button
            variant="base"
            size="small"
            className="uppercase tracking-wide"
          >
            Free Consultation
          </Button>
        </div>
        <div
          className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`}
        >
          <div className={`${!open && "hidden translate-y-36 transition-all"}`}>
            <MobileNav setOpen={setOpen} />
          </div>
        </div>
        <div
          className="fixed bottom-0 right-0 mb-4 mr-4 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={"/images/menu-icon.svg"}
            alt=""
            width={30}
            height={30}
            className="bg-primary p-1 rounded-full"
          />
        </div>
      </div>
    </>
  );
};
