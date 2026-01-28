import ComingSoonHero from "@/components/ComingSoonHero";
import TeaserGrid from "@/components/TeaserGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col noise-bg bg-gradient-to-br from-amber-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Ambient blob animation */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl motion-safe:animate-blob -z-10" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl motion-safe:animate-blob [animation-delay:2s] -z-10" />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <ComingSoonHero />
        <TeaserGrid />
      </div>
      
      <Footer />
    </main>
  );
}
