import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Infinity as InfinityIcon, Stars, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ClosingMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
      },
    }),
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Large animated background glow */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(45_90%_55%_/_0.1),_transparent_70%)]"
        animate={isInView ? {
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Floating elements */}
      {isInView && [...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${5 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            y: [0, -80, -160],
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {i % 3 === 0 ? (
            <Heart className="w-4 h-4 text-rose/40" fill="currentColor" />
          ) : i % 3 === 1 ? (
            <Stars className="w-4 h-4 text-gold/40" />
          ) : (
            <Sparkles className="w-3 h-3 text-gold/30" />
          )}
        </motion.div>
      ))}
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Decorative element with complex animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, type: "spring" }}
          className="flex justify-center mb-12"
        >
          <motion.div 
            className="relative cursor-pointer"
            animate={isInView ? {
              rotate: [0, 360],
            } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            onClick={()=>navigate("/random")}
          >
            <InfinityIcon className="w-20 h-20 text-gold" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-rose" fill="currentColor" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main message with staggered animation */}
        <motion.h2
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-display text-3xl md:text-5xl text-foreground mb-8"
        >
          To New Beginnings &{" "}
          <motion.span 
            className="text-gradient-gold inline-block cursor-pointer"
            animate={isInView ? {
              scale: [1, 1.05, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={()=>navigate("/random")}

          >
            Forever Bonds
          </motion.span>
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg md:text-xl text-foreground/80 font-body leading-relaxed"
        >
          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            No matter how much time has passed or how far life takes us, 
            you will always be my brother, my friend, and my family.
          </motion.p>
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            This birthday marks a{" "}
            <motion.span 
              className="text-gold font-medium hover:border-b border-gold cursor-pointer inline-block"
              animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            onClick={()=>navigate("/random")}

            >
              new chapter
            </motion.span>{" "}
            in our story — one where we stand side by side, just like we were always meant to.
          </motion.p>
          <motion.p 
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-gold font-display text-3xl pt-4"
          >
            <motion.span
              animate={isInView ? {
                textShadow: [
                  "0 0 10px hsl(45, 90%, 55%, 0.3)",
                  "0 0 30px hsl(45, 90%, 55%, 0.6)",
                  "0 0 10px hsl(45, 90%, 55%, 0.3)",
                ],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            onClick={()=>navigate("/random")}
            className="cursor-pointer"

            >
              Love you, My Bro.
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Signature with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 pt-8 border-t border-border/30 relative"
        >
          {/* Animated border line */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "60%" } : {}}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          
          <motion.p 
            className="text-muted-foreground italic font-body"
            animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          >
            Made with love, just for you
          </motion.p>
          <motion.p 
            className="text-gold font-display text-xl mt-2"
            animate={isInView ? { 
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 5px hsl(45, 90%, 55%, 0.3)",
                "0 0 15px hsl(45, 90%, 55%, 0.5)",
                "0 0 5px hsl(45, 90%, 55%, 0.3)",
              ],
            } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          >
            — Your Loving Brother
          </motion.p>
        </motion.div>

        {/* Final decorative elements - animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center gap-3 mt-12"
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.15 
              }}
              className={`rounded-full bg-gold ${i === 3 ? 'w-3 h-3' : 'w-2 h-2'}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
