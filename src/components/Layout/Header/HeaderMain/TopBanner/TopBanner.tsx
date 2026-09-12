import Image from "next/image";

import { getImagePath } from "../../../../../utils/imagePath";

const TopBanner = () => {
  return (
    <div
      id="topBanner"
      className="top-nav relative z-40 overflow-hidden bg-gray-200 transition-all duration-300"
    >
      <div className="block lg:hidden">
        <Image
          src={getImagePath("/assets/header/topnav.gif")}
          alt="header-top-banner"
          width={1200}
          height={80}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src={getImagePath("/assets/header/topnav.webp")}
          alt="header-top-banner"
          width={1920}
          height={80}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
};

export default TopBanner;
