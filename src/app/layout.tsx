import type { Metadata } from "next";
import Providers from "./Providers";
import SiteLayout from "../components/Layout/SiteLayout/SiteLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی دیجی کالا",
  description:
    "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان",
  icons: {
    icon: "/shop-next/assets/logo/fav.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="mx-auto min-h-screen max-w-full bg-white">
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
      </body>
    </html>
  );
}