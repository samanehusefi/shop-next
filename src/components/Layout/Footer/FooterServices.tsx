"use client";

import { useSelector } from "react-redux";

import type { RootState } from "@/Redux/store";
import { getImagePath } from "@/utils/imagePath";

const FooterServices = () => {
  const supports = useSelector(
    (state: RootState) => state.footer.supports,
  );

  const sortedSupports = [...supports].sort(
    (a, b) => Number(a.priority) - Number(b.priority),
  );

  return (
    <div className="footer-support w-full">
      {sortedSupports.map((support) => (
        <a
          key={support.id}
          href={support.url}
          className="footer-support-box"
        >
          <img
            src={getImagePath(support.src)}
            alt={support.alt}
            loading="lazy"
          />

          <p className="footer-support-text">
            {support.text}
          </p>
        </a>
      ))}
    </div>
  );
};

export default FooterServices;