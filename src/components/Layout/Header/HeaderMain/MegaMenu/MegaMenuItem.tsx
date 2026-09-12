import Link from "next/link";

import type { IMegaMenuItem } from "../../../../../Types/Header/IMegaMenu";

interface MegaMenuItemProps {
  item: IMegaMenuItem;
}

const MegaMenuItem = ({ item }: MegaMenuItemProps) => {
  return (
    <li>
      <Link
        href={item.url}
        className="block py-1 text-[13px] leading-6 text-gray-500 transition-all duration-150 hover:translate-x-[-2px] hover:text-red-500"
      >
        {item.title}
      </Link>
    </li>
  );
};

export default MegaMenuItem;