import {
  HiHome,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";
import { RiGooglePlayLine } from "react-icons/ri";
import Link from "next/link";

const FooterBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[10000] border-t border-gray-200 bg-white lg:hidden">
      <div className="flex h-16 items-center justify-around">
        <Link
          href="/"
          className="flex w-1/5 flex-col items-center justify-center gap-1 text-neutral-500"
        >
          <HiHome className="text-xl" />
          <span className="text-[10px]">خانه</span>
        </Link>

        <Link
          href="/categories"
          className="flex w-1/5 flex-col items-center justify-center gap-1 text-neutral-500"
        >
          <IoGridOutline className="text-xl" />
          <span className="text-[10px]">دسته‌بندی</span>
        </Link>

        <a
          href="https://www.digikala.com/checkout/cart/"
          target="_blank"
          rel="noreferrer"
          className="flex w-1/5 flex-col items-center justify-center gap-1 text-neutral-500"
        >
          <HiOutlineShoppingCart className="text-xl" />
          <span className="text-[10px]">سبد خرید</span>
        </a>

        <a
          href="https://www.digikala.com/magnet/feed/?activeTab=community"
          target="_blank"
          rel="noreferrer"
          className="flex w-1/5 flex-col items-center justify-center gap-1 text-neutral-500"
        >
          <RiGooglePlayLine className="text-lg" />
          <span className="text-[10px]">مگنت</span>
        </a>

        <a
          href="https://www.digikala.com/profile"
          target="_blank"
          rel="noreferrer"
          className="flex w-1/5 flex-col items-center justify-center gap-1 text-neutral-500"
        >
          <HiOutlineUser className="text-xl" />
          <span className="text-[10px]">دیجی‌کالای من</span>
        </a>
      </div>
    </nav>
  );
};

export default FooterBottomNav;