import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, HelpCircle, Sparkles } from "lucide-react";

export const ReunionMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-r from-gold/5 to-transparent blur-3xl"
        animate={isInView ? { opacity: [0, 1, 0.5], x: [-100, 0, 0] } : {}}
        transition={{ duration: 2 }}
      />

      {/* Floating sparkles */}
      {isInView && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            delay: 0.5 + i * 0.4,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <Sparkles className="w-4 h-4 text-gold/30" />
        </motion.div>
      ))}

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Icon with pulse effect */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="p-4 rounded-full bg-secondary border border-gold/20"
            animate={isInView ? {
              boxShadow: [
                "0 0 0 0 hsl(45, 90%, 55%, 0.4)",
                "0 0 0 20px hsl(45, 90%, 55%, 0)",
              ]
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          >
            <Users className="w-8 h-8 text-gold" />
          </motion.div>
        </motion.div>

        {/* Title with wave animation */}
        <motion.h2
          variants={itemVariants}
          className="font-display text-3xl md:text-5xl text-center text-gradient-gold mb-12"
        >
          Together Again
        </motion.h2>

        {/* Message cards with 3D hover effect */}
        <div className="space-y-8">
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="card-glass p-8 rounded-2xl relative overflow-hidden group"
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              animate={isInView ? {
                borderColor: ["hsl(45, 90%, 55%, 0)", "hsl(45, 90%, 55%, 0.3)", "hsl(45, 90%, 55%, 0)"],
              } : {}}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
            <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed">
              Today is officially the anniversary of the day you were accidentally added
              to this very confusing world.

              <br /><br />

              No patch notes were released.
              No instruction manual was provided.
              And somehow, you’re still running on the latest version.

              <br /><br />

              Some people call it growing up.
              Others call it leveling up.
              Engineers call it “still in beta.”

              <br /><br />

              If you’re wondering why this page exists,
              or why it feels like something is hidden between the lines —
              good. That means you’re paying attention.

              <br /><br />

              Not everything important is loud.
              Not every message is meant to be obvious.
              Some things are just meant to be found… slowly.

              <br /><br />

              Whatever this year brings — bugs, breakthroughs, late nights, or quiet wins —
              just know this:

              <motion.span
                className="text-gold font-medium"
                animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                you’re doing better than you think.
              </motion.span>
            </p>

          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            className="card-glass p-8 rounded-2xl ml-auto max-w-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              animate={isInView ? {
                borderColor: ["hsl(45, 90%, 55%, 0)", "hsl(45, 90%, 55%, 0.3)", "hsl(45, 90%, 55%, 0)"],
              } : {}}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
            <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed">
              Another year, another version.
              But some messages don’t load on the main route.
              <motion.span
                className="text-gold font-medium"
                animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
              >
                {" "}Curiosity is required
              </motion.span>.
              Try navigating where logic says you shouldn’t. And find the hidden message.
            </p>

          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 pt-8"
          >
            <motion.div
              className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold/50"
              animate={isInView ? { scaleX: [0, 1] } : {}}
              transition={{ duration: 1, delay: 2 }}
            />
            <motion.div
              animate={isInView ? {
                scale: [1, 1.3, 1],
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HelpCircle className="w-6 h-6 text-gold" />
            </motion.div>
            <motion.div
              className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold/50"
              animate={isInView ? { scaleX: [0, 1] } : {}}
              transition={{ duration: 1, delay: 2 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
