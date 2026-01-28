import Image from "next/image";
import { TEASER_FEATURES } from "@/lib/brand";

export default function TeaserGrid() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {TEASER_FEATURES.map((feature, index) => (
          <div
            key={feature.title}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 motion-safe:animate-slide-up hover:shadow-xl transition-shadow duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
              <Image
                src={feature.icon}
                alt={feature.iconAlt}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
