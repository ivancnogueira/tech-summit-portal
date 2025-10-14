import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkingFlipGalleryProps {
  images: Array<{ title: string; url: string }>;
}

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

// flip down
const flipAnimationTop = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' }
];
const flipAnimationBottom = [
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(0)' }
];

// flip up
const flipAnimationTopReverse = [
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationBottomReverse = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' }
];

export default function WorkingFlipGallery({ images }: WorkingFlipGalleryProps) {
  const containerRef = useRef(null);
  const uniteRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  // initialise first image once
  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = containerRef.current.querySelectorAll('.unite');
    defineFirstImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defineFirstImg = () => {
    uniteRef.current.forEach(setActiveImage);
    setImageTitle();
  };

  const setActiveImage = (el, imageIndex = currentIndex) => {
    if (images[imageIndex] && images[imageIndex].url) {
      el.style.backgroundImage = `url('${images[imageIndex].url}')`;
    }
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery || !images[currentIndex]) return;
    gallery.setAttribute('data-title', images[currentIndex].title);
    gallery.style.setProperty('--title-y', '0');
    gallery.style.setProperty('--title-opacity', 1);
  };

  const updateGallery = (nextIndex, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery || !images[nextIndex]) return;

    // determine direction animation arrays
    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse
      ? flipAnimationBottomReverse
      : flipAnimationBottom;

    gallery.querySelector('.overlay-top').animate(topAnim, flipTiming);
    gallery.querySelector('.overlay-bottom').animate(bottomAnim, flipTiming);

    // hide title
    gallery.style.setProperty('--title-y', '-1rem');
    gallery.style.setProperty('--title-opacity', 0);
    gallery.setAttribute('data-title', '');

    // update images with slight delay so animation looks continuous
    uniteRef.current.forEach((el, idx) => {
      const delay =
        (isReverse && (idx !== 1 && idx !== 2)) ||
        (!isReverse && (idx === 1 || idx === 2))
          ? FLIP_SPEED - 200
          : 0;

      setTimeout(() => setActiveImage(el, nextIndex), delay);
    });

    // reveal new title roughly half‑way through animation
    setTimeout(() => {
      setImageTitle();
    }, FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment) => {
    const inc = Number(increment);
    const newIndex = (currentIndex + inc + images.length) % images.length;
    const isReverse = inc < 0;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, isReverse);
  };

  // Autoplay effect
  useEffect(() => {
    if (images.length <= 1) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        // Use the same logic as manual navigation
        const inc = 1;
        const newIndex = (currentIndex + inc + images.length) % images.length;
        const isReverse = inc < 0;
        setCurrentIndex(newIndex);
        updateGallery(newIndex, isReverse);
      }, 3000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [images.length, currentIndex]);

  if (images.length === 0) {
    return <div>Nenhuma imagem disponível</div>;
  }

  return (
    <div className='flex items-center justify-center font-sans'>
      <div className='relative'>
        {/* flip gallery */}
        <div
          id='flip-gallery'
          ref={containerRef}
          className='relative w-[320px] h-[480px] md:w-[400px] md:h-[600px] text-center'
          style={{ perspective: '800px' }}
        >
          <div className='top unite bg-cover bg-no-repeat'></div>
          <div className='bottom unite bg-cover bg-no-repeat'></div>
          <div className='overlay-top unite bg-cover bg-no-repeat'></div>
          <div className='overlay-bottom unite bg-cover bg-no-repeat'></div>
        </div>

        {/* navigation */}
        <div className='absolute top-full right-0 mt-2 flex gap-2'>
          <button
            type='button'
            onClick={() => updateIndex(-1)}
            title='Previous'
            className='text-foreground opacity-75 hover:opacity-100 hover:scale-125 transition'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type='button'
            onClick={() => updateIndex(1)}
            title='Next'
            className='text-foreground opacity-75 hover:opacity-100 hover:scale-125 transition'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* component-scoped styles that Tailwind cannot express */}
      <style>{`
        #flip-gallery::after {
          content: '';
          position: absolute;
          background-color: black;
          width: 100%;
          height: 4px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        #flip-gallery::before {
          content: attr(data-title);
          color: hsl(var(--foreground) / 0.75);
          font-size: 0.75rem;
          left: -0.5rem;
          position: absolute;
          top: calc(100% + 1rem);
          line-height: 2;
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        }

        #flip-gallery > * {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          background-size: 320px 480px;
        }

        @media (min-width: 600px) {
          #flip-gallery > * {
            background-size: 400px 600px;
          }
        }

        .top,
        .overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top;
        }

        .bottom,
        .overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom;
        }
      `}</style>
    </div>
  );
}
