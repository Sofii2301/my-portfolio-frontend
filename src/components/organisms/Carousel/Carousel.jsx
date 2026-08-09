import { useEffect, Children } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import './carousel.css';

const Carousel = ({ children, minItems = 12 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 2,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  useEffect(() => {
    if (emblaApi && emblaApi.slideNodes().length > 1) {
      emblaApi.plugins().autoScroll?.play();
    }
  }, [emblaApi]);

  const items = Children.toArray(children);
  const repeated = items.length > 0
    ? Array.from({ length: Math.ceil(minItems / items.length) }, () => items).flat()
    : [];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {repeated}
      </div>
    </div>
  );
};

export default Carousel;