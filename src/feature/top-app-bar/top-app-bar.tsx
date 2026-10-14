"use client";

import { Search, X } from "lucide-react";
import BrandLogo from "../navbar/brand-logo";
import ProfileBadge from "./profile-badge";
import TopSearchBar from "./top-search-bar";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SideAppBar } from "@/feature/rubric-side-bar/side-app-bar";

export default function TopAppBar() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 640) setIsClicked(false);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="xs:px-[60px] flex w-full items-center justify-between px-2 pt-[24px]">
        <BrandLogo />

        <TopSearchBar className="max-sm:hidden" />

        <div className="xs:gap-10 flex items-center gap-4">
          {isClicked == false && (
            <Search
              className="sm:hidden"
              size={30}
              onClick={() => setIsClicked(!isClicked)}
            />
          )}
          {isClicked == true && (
            <X
              className="sm:hidden"
              size={30}
              onClick={() => setIsClicked(!isClicked)}
            />
          )}
          <SideAppBar />

          <ProfileBadge />
        </div>
      </nav>

      {isClicked && (
        <motion.div
          className="mt-2 w-full px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <TopSearchBar className="w-full" />
        </motion.div>
      )}
    </>
  );
}
