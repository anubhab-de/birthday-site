import { motion } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_90%_55%_/_0.08),_transparent_50%)]" />

      {/* Animated decorative lines */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />

      {/* Floating stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Star className="w-4 h-4 text-gold/40" fill="currentColor" />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        {/* Sparkle icon with pulse */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px hsl(45, 90%, 55%, 0.3)",
                "0 0 40px hsl(45, 90%, 55%, 0.6)",
                "0 0 20px hsl(45, 90%, 55%, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className=" rounded-full bg-secondary/50"
          >
            <img
              src="./sparkle.png"
              alt="Sparkle icon"
              className="rounded-full  w-20 h-20 text-gold"
            />
          </motion.div>
        </motion.div>

        {/* Pre-title with typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gold/80 text-lg md:text-xl font-body tracking-[0.3em] uppercase mb-4"
        >
          <AnimatedText text="Celebrating a Special Day" />
        </motion.p>

        {/* Main title with letter animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-gold mb-6"
        >
          <AnimatedText text="Happy Birthday" />
        </motion.h1>

        {/* Name with special animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <motion.h2
            className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-8"
            animate={{
              textShadow: [
                "0 0 20px hsl(45, 90%, 55%, 0)",
                "0 0 30px hsl(45, 90%, 55%, 0.5)",
                "0 0 20px hsl(45, 90%, 55%, 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
          >
            <span className="text-gradient-gold">Anubhab</span>
          </motion.h2>

          {/* Decorative underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 2.2 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto font-body font-light"
        >
          To the future engineer who inspires me every day
        </motion.p>

        {/* Animated hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="mt-12 flex justify-center gap-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <Heart
                className={`w-6 h-6 ${i === 1 ? 'text-gold w-8 h-8' : 'text-rose'}`}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-[2px] h-12 bg-gradient-to-b from-gold/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
