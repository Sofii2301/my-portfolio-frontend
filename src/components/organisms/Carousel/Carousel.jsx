import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import './carousel.css';

const SkillsCarousel = ({ children }) => {
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
    if (emblaApi) {
      emblaApi.plugins().autoScroll?.play();
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  );
};

export default SkillsCarousel;
