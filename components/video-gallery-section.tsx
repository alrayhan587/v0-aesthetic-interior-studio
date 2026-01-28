"use client"

import { useState } from "react"
import { Play, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    youtubeId: "kxzxIEPv7QY",
    title: "Interior Design Tour",
    duration: "3:45",
    thumbnail: "/video-thumbnails/interior-design-tour.jpg",
  },
  {
    id: 2,
    youtubeId: "EY2WkvPZdtk",
    title: "Modern Home Transformation",
    duration: "5:20",
    thumbnail: "/video-thumbnails/modern-home-transformation.jpg",
  },
  {
    id: 3,
    youtubeId: "28dgBImwocI",
    title: "Living Room Design Ideas",
    duration: "4:15",
    thumbnail: "/video-thumbnails/living-room-design.jpg",
  },
  {
    id: 4,
    youtubeId: "FZn7HVQtl5c",
    title: "Kitchen Renovation Project",
    duration: "6:30",
    thumbnail: "/video-thumbnails/kitchen-renovation.jpg",
  },
  {
    id: 5,
    youtubeId: "kxzxIEPv7QY",
    title: "Bedroom Makeover",
    duration: "3:10",
    thumbnail: "/video-thumbnails/bedroom-makeover.jpg",
  },
  {
    id: 6,
    youtubeId: "EY2WkvPZdtk",
    title: "Office Space Design",
    duration: "4:55",
    thumbnail: "/video-thumbnails/office-space-design.jpg",
  },
  {
    id: 7,
    youtubeId: "28dgBImwocI",
    title: "Bathroom Renovation",
    duration: "3:30",
    thumbnail: "/video-thumbnails/bathroom-renovation.jpg",
  },
  {
    id: 8,
    youtubeId: "FZn7HVQtl5c",
    title: "Dining Room Transformation",
    duration: "4:00",
    thumbnail: "/video-thumbnails/dining-room-transformation.jpg",
  },
  {
    id: 9,
    youtubeId: "kxzxIEPv7QY",
    title: "Balcony Garden Design",
    duration: "2:45",
    thumbnail: "/video-thumbnails/balcony-garden-design.jpg",
  },
  {
    id: 10,
    youtubeId: "EY2WkvPZdtk",
    title: "Walk-in Closet Ideas",
    duration: "5:00",
    thumbnail: "/video-thumbnails/closet-ideas.jpg",
  },
]

function getYoutubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function getThumbnail(thumbnail: string): string {
  return thumbnail;
}

export function VideoGallerySection() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Room sketch background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/architectural-interior-design-blueprint-sketch-flo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block px-4 py-2 bg-[#a57c00]/10 text-[#a57c00] rounded-full text-sm uppercase tracking-widest font-semibold">
            Visual Stories
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-[#0d3d3d] text-balance font-light">
            Watch our design stories
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Step inside our completed projects and see how we transform spaces into beautiful, functional homes that inspire.
          </p>
        </div>

        {/* Video Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setPlayingVideo(video.youtubeId)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden bg-muted rounded-lg">
                <img
                  src={getThumbnail(video.thumbnail) || "/placeholder.svg"}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredVideo === video.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#0d3d3d]/80 via-[#0d3d3d]/40 to-transparent flex flex-col items-center justify-center transition-all duration-300 ${
                  hoveredVideo === video.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#a57c00] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Play className="h-7 w-7 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 bg-[#0d3d3d]/95 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wide">
                {video.duration}
              </div>

              {/* Title */}
              <div className="mt-4 px-1">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-[#a57c00] transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-16 text-center">
          <Button asChild className="rounded-full px-8 py-3 text-sm font-semibold bg-[#0d3d3d] text-white hover:bg-[#1a5a5a] transition-all duration-300 group shadow-lg hover:shadow-xl">
            <a
              href="https://www.youtube.com/@AestheticInteriorofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore All Videos
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#a57c00] transition-colors"
            onClick={() => setPlayingVideo(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
