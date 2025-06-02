import { useRef, useEffect, useState } from "react";

export default function useCarousel({ autoScroll = true, interval = 3000 }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll) return;
    const container = containerRef.current;

    const autoScrollInterval = setInterval(() => {
      if (container) {
        container.scrollLeft += 1;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    }, interval / 500); // Adjusted to smoothness

    return () => clearInterval(autoScrollInterval);
  }, [autoScroll, interval]);

  // Mouse / touch handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchEnd = () => setIsDragging(false);

  return {
    containerRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
