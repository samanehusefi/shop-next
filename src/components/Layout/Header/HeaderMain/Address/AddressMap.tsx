"use client";

import dynamic from "next/dynamic";

interface AddressMapProps {
  position: [number, number];
}

const AddressMap = dynamic(() => import("./AddressMapClient"), {
  ssr: false,
});

export default AddressMap;
