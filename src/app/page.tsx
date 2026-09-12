"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/Redux/store";

import Amazing from "@/components/Home/Amazing/Amazing";
import BottomBanner from "@/components/Home/Banners/BottomBanner/BottomBanner";
import HeroBanner from "@/components/Home/Banners/HeroBanner/HeroBanner";
import MiddleBanner from "@/components/Home/Banners/MiddleBanner/MiddleBanner";
import TopBanner from "@/components/Home/Banners/TopBanner/TopBanner";
import Brands from "@/components/Home/Brands/Brands";
import Categories from "@/components/Home/Categories/Categories";
import CircleBadge from "@/components/Home/CircleBadge/CircleBadge";
import Products from "@/components/Home/Products/Products";
import Slider from "@/components/Home/Slider/Slider";

import { getSlider } from "@/Redux/Home/Slider/action";
import { getCircleBadge } from "@/Redux/Home/CircleBadge/action";
import { getAmazing } from "@/Redux/Home/Amazing/action";
import { getCategoriesAction } from "@/Redux/Home/Categories/action";
import { getProducts } from "@/Redux/Home/Products/action";
import { getBrands } from "@/Redux/Home/Brands/action";
import { getBanners } from "@/Redux/Home/Banner/action";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSlider());
    dispatch(getCircleBadge());
    dispatch(getAmazing());
    dispatch(getCategoriesAction());
    dispatch(getProducts());
    dispatch(getBrands());
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <div className="mx-auto min-h-screen w-full">
      <Slider />
      <CircleBadge />
      <Amazing />
      <HeroBanner />
      <Categories />
      <TopBanner />
      <Products />
      <MiddleBanner />
      <Brands />
      <BottomBanner />
    </div>
  );
}
