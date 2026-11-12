"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-12 lg:py-20 -mt-16 lg:-mt-28 flex flex-col items-center justify-center min-h-screen text-center">
      <div className="container lg:max-w-7xl mx-auto px-6 lg:px-16 2xl:px-0">
        <h1 className="text-4xl font-medium">404 - Không tìm thấy trang</h1>
        <p className="mt-4">
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn yêu cầu.
        </p>
        <div className="pt-8">
          <Link
            href="/"
            className="relative group inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 pl-3 pr-4 py-2 text-[15px] text-primary bg-[linear-gradient(90deg,#3b6bff,#2e96ff_65%,#acb7ff)] overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[rgba(32,33,36,.18)] before:pointer-events-none hover:shadow-[0_1px_2px_0_rgba(60,64,67,.3),_0_1px_3px_1px_rgba(60,64,67,.3)] hover:before:opacity-100"
          >
            <span className="relative z-1 flex items-center gap-2">
              <ArrowLeft className="w-[18px] h-[18px] text-primary" />
              Quay về trang chủ
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
