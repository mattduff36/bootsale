import ComingSoonHero from "@/components/ComingSoonHero";

export default function Home() {
  return (
    <main className="min-h-screen min-h-[100svh] flex items-center justify-center noise-bg bg-gradient-to-br from-amber-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Ambient blob animation */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl motion-safe:animate-blob -z-10" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl motion-safe:animate-blob [animation-delay:2s] -z-10" />

      <ComingSoonHero />
    </main>
  );
}
