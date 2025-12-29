import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gift, Star, Cake, Rocket, GraduationCap, Heart, Sparkles } from "lucide-react";
import { Confetti } from "./Confetti";

const wishes = [
  { icon: Star, text: "May all your dreams come true", color: "text-yellow-400" },
  { icon: Rocket, text: "Keep reaching for the stars", color: "text-blue-400" },
  { icon: GraduationCap, text: "Success in your engineering journey", color: "text-green-400" },
  { icon: Heart, text: "Endless happiness and love", color: "text-rose" },
];

export const BirthdayWishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showConfetti, setShowConfetti] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const wishVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_90%_55%_/_0.05),_transparent_60%)]"
        animate={isInView ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Floating sparkles */}
      {isInView && [...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Sparkles className="w-4 h-4 text-gold/40" />
        </motion.div>
      ))}
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <motion.div 
              className="p-5 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30"
              animate={isInView ? {
                boxShadow: [
                  "0 0 20px hsl(45, 90%, 55%, 0.3)",
                  "0 0 40px hsl(45, 90%, 55%, 0.6)",
                  "0 0 20px hsl(45, 90%, 55%, 0.3)",
                ],
                rotate: [0, 5, -5, 0],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cake className="w-10 h-10 text-gold" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="font-display text-3xl md:text-5xl text-gradient-gold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Birthday Wishes
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From your sibling, with all my heart
          </motion.p>
        </motion.div>

        {/* Wishes grid with staggered animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              variants={wishVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="card-glass p-6 rounded-2xl flex items-center gap-4 group cursor-pointer relative overflow-hidden"
            >
              {/* Animated background shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-12"
                initial={{ x: "-200%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                className="p-3 rounded-full bg-gold/10 relative z-10"
                animate={isInView ? {
                  rotate: [0, 10, -10, 0],
                } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <wish.icon className={`w-6 h-6 ${wish.color}`} />
              </motion.div>
              <p className="text-foreground/90 font-body text-lg relative z-10">{wish.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive birthday button with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            onClick={() => setShowConfetti(true)}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 50px hsl(45, 90%, 55%, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px hsl(45, 90%, 55%, 0.3)",
                "0 0 40px hsl(45, 90%, 55%, 0.5)",
                "0 0 20px hsl(45, 90%, 55%, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative group px-10 py-5 bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-display text-xl rounded-full overflow-hidden"
          >
            {/* Multiple shimmer effects */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            
            <span className="relative flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Gift className="w-6 h-6" />
              </motion.span>
              Click to Celebrate!
            </span>
          </motion.button>
          
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mt-8"
            >
              <motion.p
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 10px hsl(45, 90%, 55%, 0.5)",
                    "0 0 20px hsl(45, 90%, 55%, 0.8)",
                    "0 0 10px hsl(45, 90%, 55%, 0.5)",
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-gold text-2xl font-display"
              >
                🎉 Happy Birthday Anubhab! 🎉
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground mt-2"
              >
                Wishing you the most amazing year ahead!
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
