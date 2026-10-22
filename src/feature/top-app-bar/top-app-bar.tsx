"use client";

import { Search, X } from "lucide-react";
import BrandLogo from "../navbar/brand-logo";
import ProfileBadge from "./profile-badge";
import TopSearchBar from "./top-search-bar";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SideAppBar } from "@/feature/rubric-side-bar/side-app-bar";
import { useSearchParam } from "@/hooks/use-search-param";

export default function TopAppBar() {
  const [isClicked, setIsClicked] = useState(false);

  const { value: searchValue, setValue: setSearchValue } = useSearchParam();

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
      <nav className="bg-foreground xs:px-[60px] sticky top-0 z-100 flex w-full items-center justify-between px-2 pt-[24px] pb-[10px]">
        <BrandLogo />

        <TopSearchBar
          className="max-sm:hidden"
          value={searchValue}
          onChange={setSearchValue}
        />

        <div className="flex items-center gap-4 sm:gap-10">
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
          <TopSearchBar
            className="w-full"
            value={searchValue}
            onChange={setSearchValue}
          />
        </motion.div>
      )}
    </>
  );
}
