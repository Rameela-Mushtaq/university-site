"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cardData = [
  { id: 1, image: "/images/card1.png", bg: "bg-blue-500" },
  { id: 2, image: "/images/card2.png", bg: "bg-gray-500" },
  { id: 3, image: "/images/card3.png", bg: "bg-red-500" },
];

const AnimatedCards = () => {
  const [cards, setCards] = useState(cardData);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true); // Start rotation
      setTimeout(() => {
        setIsRotating(false); // After delay, move behind
        setCards((prevCards) => {
          const [first, ...rest] = prevCards;
          return [...rest, first]; // Move first card to end
        });
      }, 8000); // Delay before moving behind (1 sec)
    }, 3000); // Total cycle time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-96 flex items-center justify-center">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`absolute w-72 h-96 rounded-xl shadow-lg flex items-end p-4 text-white ${card.bg}`}
          initial={{ rotate: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{
            rotate: index === 0 ? 40 : 0, // Rotate only the first card
            x: index === 0 ? 50 : -index * 10, // Move the first card slightly down
            scale: index === 0 ? 0.8 : 1, // Shrink when going behind
            opacity: index === 0 ? 0 : 1, // Fade out as it goes behind
            zIndex: cards.length - index, // Maintain proper stacking
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={card.image}
            alt={`Card ${card.id}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedCards;
