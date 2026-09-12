"use client";

import { useSelector } from "react-redux";
import { FaChevronUp } from "react-icons/fa";

import type { RootState } from "@/Redux/store";

const TopSection = () => {
  const logo = useSelector((state: RootState) => state.footer.logo);

  return (
    <div className="footer_first_section my-5">
      <div className="footer_logo">
        {logo?.desktopSrc ? (
          <img
            className="footer_logo"
            loading="lazy"
            src={`/${logo.desktopSrc}`}
            alt={logo.alt}
            title={logo.title}
          />
        ) : (
          <span className="text-red-500">Logo not found</span>
        )}
      </div>

      <div className="flex justify-center">
        <div className="backtoUp">
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="relative flex grow items-center justify-center text-gray-500"
          >
            <span className="ml-2 hidden text-sm text-neutral-400 lg:block">
              بازگشت به بالا
            </span>

            <span className="ml-2 block text-xs text-neutral-700 lg:hidden">
              رفتن به بالا
            </span>

            <FaChevronUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;