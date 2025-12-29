import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Heart } from "lucide-react";

const photos = [
  { id: 1, caption: "First memory together", placeholder: "Photo 1" },
  { id: 2, caption: "That unforgettable day", placeholder: "Photo 2" },
  { id: 3, caption: "Laughing till we cried", placeholder: "Photo 3" },
  { id: 4, caption: "Brothers forever", placeholder: "Photo 4" },
  { id: 5, caption: "Making new memories", placeholder: "Photo 5" },
  { id: 6, caption: "The bond that never breaks", placeholder: "Photo 6" },
];

export const PhotoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      rotateX: -30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 80,
      },
    },
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute right-0 top-1/4 w-1/2 h-96 bg-gradient-to-l from-gold/5 to-transparent blur-3xl"
        animate={isInView ? { 
          opacity: [0, 0.8, 0.4],
          scale: [0.8, 1, 1],
        } : {}}
        transition={{ duration: 2 }}
      />
      
      {/* Floating hearts */}
      {isInView && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [0, -50, -100],
            x: [0, (i % 2 === 0 ? 20 : -20), 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Heart className="w-4 h-4 text-rose/40" fill="currentColor" />
        </motion.div>
      ))}
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex justify-center mb-6"
            animate={isInView ? {
              rotateY: [0, 360],
            } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <motion.div 
              className="p-4 rounded-full bg-secondary border border-gold/20"
              animate={isInView ? {
                boxShadow: [
                  "0 0 0 0 hsl(45, 90%, 55%, 0.4)",
                  "0 0 0 15px hsl(45, 90%, 55%, 0)",
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <Camera className="w-8 h-8 text-gold" />
            </motion.div>
          </motion.div>
          <motion.h2 
            className="font-display text-3xl md:text-5xl text-gradient-gold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Memories
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Moments frozen in time, each one a treasure
          </motion.p>
        </motion.div>

        {/* Photo grid with staggered animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 10,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.4 }
              }}
              className="group relative perspective-1000"
            >
              <div className="card-glass rounded-2xl overflow-hidden aspect-[4/3] relative transform-gpu">
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: "-200%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Placeholder for photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 hsl(45, 90%, 55%, 0.2)",
                          "0 0 0 10px hsl(45, 90%, 55%, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Camera className="w-8 h-8 text-gold/50" />
                    </motion.div>
                    <p className="text-muted-foreground text-sm">{photo.placeholder}</p>
                    <p className="text-xs text-muted-foreground/50 mt-1">Click to add photo</p>
                  </motion.div>
                </div>

                {/* Overlay gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Caption */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-foreground font-display text-lg">{photo.caption}</p>
                </motion.div>

                {/* Decorative corners with animation */}
                <motion.div 
                  className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center text-muted-foreground/60 text-sm mt-12 italic"
        >
          Replace these placeholders with your actual photos to make this truly special
        </motion.p>
      </div>
    </section>
  );
};
