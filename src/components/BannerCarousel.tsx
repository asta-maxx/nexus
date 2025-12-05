import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Banner {
    id: number;
    image: string;
    title?: string;
    description?: string;
    link?: string;
}

interface BannerCarouselProps {
    banners: Banner[];
    autoPlayInterval?: number;
}

function BannerCarousel({ banners, autoPlayInterval = 5000 }: BannerCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, [banners.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }, [banners.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    useEffect(() => {
        if (!isAutoPlaying || banners.length <= 1) return;

        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isAutoPlaying, autoPlayInterval, goToNext, banners.length]);

    if (banners.length === 0) return null;

    return (
        <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-900 group">
            {/* Main carousel */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner) => (
                    <div
                        key={banner.id}
                        className="w-full flex-shrink-0 relative aspect-[16/9]"
                    >
                        <img
                            src={banner.image}
                            alt={banner.title || 'Banner'}
                            className="w-full h-full object-cover object-center"
                        />

                        {/* Overlay with text */}
                        {(banner.title || banner.description) && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end pointer-events-none">
                                <div className="p-6 md:p-10 text-white">
                                    {banner.title && (
                                        <h3 className="text-xl md:text-3xl font-bold mb-2">{banner.title}</h3>
                                    )}
                                    {banner.description && (
                                        <p className="text-sm md:text-lg text-white/90 max-w-2xl">{banner.description}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Clickable overlay */}
                        {banner.link && (
                            <a
                                href={banner.link}
                                target={banner.link.startsWith('http') ? '_blank' : '_self'}
                                rel={banner.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="absolute inset-0 z-10"
                                aria-label={banner.title || 'View banner'}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            {banners.length > 1 && (
                <>
                    <button
                        onClick={() => { goToPrev(); setIsAutoPlaying(false); }}
                        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                    </button>
                    <button
                        onClick={() => { goToNext(); setIsAutoPlaying(false); }}
                        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                    </button>
                </>
            )}

            {/* Dots indicator */}
            {banners.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default BannerCarousel;
