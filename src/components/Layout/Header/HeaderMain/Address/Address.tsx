"use client";

import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import AddressModal from "./AddressModal";

const Address = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-4xl bg-orange-100 px-4 py-3 text-sm font-medium text-orange-500"
      >
        <GrLocation
          className="shrink-0 text-orange-500"
          size={19}
        />
        انتخاب آدرس
      </button>

      <AddressModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Address;