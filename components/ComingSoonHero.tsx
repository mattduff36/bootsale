import Image from "next/image";
import { BRAND } from "@/lib/brand";

export default function ComingSoonHero() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16 motion-safe:animate-fade-in">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/brand/logo.png"
            alt={BRAND.name}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Brand name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-brown dark:text-amber-100 mb-6">
        {BRAND.name}
      </h1>

      {/* Tagline */}
      <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 px-4 text-balance">
        {BRAND.tagline}
      </p>

      {/* Launch status badge */}
      <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="w-2 h-2 bg-brand-green rounded-full motion-safe:animate-pulse" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {BRAND.launchStatus}
        </span>
      </div>

      {/* Launch detail */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 px-4">
        {BRAND.launchDetail}
      </p>
    </div>
  );
}
