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
  },
  {
    id: 2,
    youtubeId: "EY2WkvPZdtk",
    title: "Modern Home Transformation",
    duration: "5:20",
  },
  {
    id: 3,
    youtubeId: "28dgBImwocI",
    title: "Living Room Design Ideas",
    duration: "4:15",
  },
  {
    id: 4,
    youtubeId: "FZn7HVQtl5c",
    title: "Kitchen Renovation Project",
    duration: "6:30",
  },
  {
    id: 5,
    youtubeId: "kxzxIEPv7QY",
    title: "Bedroom Makeover",
    duration: "3:10",
  },
  {
    id: 6,
    youtubeId: "EY2WkvPZdtk",
    title: "Office Space Design",
    duration: "4:55",
  },
  {
    id: 7,
    youtubeId: "28dgBImwocI",
    title: "Bathroom Renovation",
    duration: "3:30",
  },
  {
    id: 8,
    youtubeId: "FZn7HVQtl5c",
    title: "Dining Room Transformation",
    duration: "4:00",
  },
  {
    id: 9,
    youtubeId: "kxzxIEPv7QY",
    title: "Balcony Garden Design",
    duration: "2:45",
  },
  {
    id: 10,
    youtubeId: "EY2WkvPZdtk",
    title: "Walk-in Closet Ideas",
    duration: "5:00",
  },
]

export function VideoGallerySection() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const getYoutubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

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
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-[#a57c00]">
            Video Gallery
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-[#0d3d3d] text-balance">
            Watch our design stories
          </h2>
          <p className="mt-6 text-muted-foreground">
            Step inside our completed projects and see how we transform spaces
            into beautiful homes.
          </p>
        </div>

        {/* Video Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setPlayingVideo(video.youtubeId)}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={getYoutubeThumbnail(video.youtubeId) || "/placeholder.svg"}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredVideo === video.id ? "scale-110" : "scale-100"
                    }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-[#0d3d3d]/60 flex flex-col items-center justify-center transition-opacity duration-300 ${hoveredVideo === video.id ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#a57c00] flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <Play className="h-6 w-6 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#0d3d3d]/90 rounded text-white text-xs font-medium">
                {video.duration}
              </div>

              {/* Title */}
              <div className="mt-3">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-[#a57c00] transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 text-center">
          <Button asChild className="rounded-full px-8 py-6 text-sm bg-[#0d3d3d] text-white hover:bg-[#1a5a5a] group">
            <a
              href="https://www.youtube.com/@AestheticInteriorofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show More Videos
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
