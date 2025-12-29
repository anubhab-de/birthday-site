import { FloatingParticles } from "@/components/FloatingParticles";
import { HeroSection } from "@/components/HeroSection";
import { ReunionMessage } from "@/components/ReunionMessage";
import { PhotoGallery } from "@/components/PhotoGallery";
import { BirthdayWishes } from "@/components/BirthdayWishes";
import { ClosingMessage } from "@/components/ClosingMessage";

const Index = () => {
  return (
    <main className="relative bg-background overflow-x-hidden">
      {/* SEO */}
      <title>Happy Birthday Brother | A Special Celebration</title>
      <meta name="description" content="A heartfelt birthday celebration website dedicated to my brother. Celebrating our reunion and the bond that will last forever." />
      
      {/* Floating particles background */}
      <FloatingParticles />
      
      {/* Main sections */}
      <HeroSection />
      <ReunionMessage />
      <PhotoGallery />
      <BirthdayWishes />
      <ClosingMessage />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground/50 text-sm border-t border-border/20">
        <p>Made with ❤️ for a very special person</p>
      </footer>
    </main>
  );
};

export default Index;
