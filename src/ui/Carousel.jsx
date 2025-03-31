
import { useState, useEffect } from "react";

export const Carousel = ({ images, autoPlay = true, interval = 3000, showDots = true, animation = "slide" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade":
        return "opacity-0 transition-opacity duration-1000";
      case "slide":
        return "translate-x-full transition-transform duration-1000";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${index === currentIndex ? "opacity-100" : "opacity-0"} ${getAnimationClass()}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {showDots && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};