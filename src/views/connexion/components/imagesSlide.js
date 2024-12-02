import { useEffect, useState } from "react"
import React from "react"
import { icons } from '../../calendrier-employe/datas/icons'

const images = [
    {
        url: "images/Kiyotaka.jpg",
        title: "Sauvegardez vos moments,",
        description: "Creez des souvenirs"
    },
    {
        url: "images/Demon_Slayer.jpg",
        title: "Partagez votre histoire,",
        description: "Inspirez les autres"
    },
    {
        url: "images/Tanjiro.png",
        title: "Une experience magique,",
        description: "Tous les jours"
    }
]

export default function ImagesSlide() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative h-full w-1/2 overflow-hidden rounded-xl">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute object-cover h-full w-full transform transition-all duration-500 ease-in-out ${index === currentIndex ? "translate-x-0" : "translate-x-full"
                        }`}
                    style={{
                        zIndex: index === currentIndex ? 10 : 0,
                    }}
                >
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    >
                        <div className="flex h-full flex-col items-center justify-center bg-purple-900/50 px-8 text-center">
                            <div className="relative top-1/4">
                                <h2 className="text-4xl font-bold text-white">{image.title}</h2>
                                <p className="text-2xl text-white">{image.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-8 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-white/50"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black/20 p-2 text-white transition-all hover:bg-black/40"
                aria-label="Previous slide"
            >
                {icons.arrowLeft}
                
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black/20 p-2 text-white transition-all hover:bg-black/40"
                aria-label="Next slide"
            >
                {icons.arrowRight}
            </button>
        </div>
    )
}

