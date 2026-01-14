"use client"

import { useState } from "react"
import { Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    thumbnail: "/luxury-living-room-interior-design-video-thumbnail.jpg",
    title: "Modern Living Room Transformation",
    duration: "3:45",
  },
  {
    id: 2,
    thumbnail: "/kitchen-remodel-interior-design-video-thumbnail.jpg",
    title: "Kitchen Renovation Journey",
    duration: "5:20",
  },
  {
    id: 3,
    thumbnail: "/bedroom-makeover-interior-design-video-thumbnail.jpg",
    title: "Master Bedroom Makeover",
    duration: "4:15",
  },
  {
    id: 4,
    thumbnail: "/office-interior-design-project-video-thumbnail.jpg",
    title: "Corporate Office Design",
    duration: "6:30",
  },
  {
    id: 5,
    thumbnail: "/bathroom-spa-interior-design-video-thumbnail.jpg",
    title: "Spa-Inspired Bathroom",
    duration: "3:10",
  },
  {
    id: 6,
    thumbnail: "/dining-room-interior-design-transformation-video.jpg",
    title: "Elegant Dining Room Design",
    duration: "4:55",
  },
  {
    id: 7,
    thumbnail: "/kids-room-colorful-interior-design-video-thumbnail.jpg",
    title: "Playful Kids Room",
    duration: "3:30",
  },
  {
    id: 8,
    thumbnail: "/home-office-interior-design-video-thumbnail.jpg",
    title: "Home Office Setup",
    duration: "4:00",
  },
  {
    id: 9,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Balcony Garden Oasis",
    duration: "2:45",
  },
  {
    id: 10,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Walk-in Closet Design",
    duration: "5:00",
  },
]

export function VideoGallerySection() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Room sketch background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1200&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Video Gallery</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Watch our design stories
          </h2>
          <p className="mt-6 text-muted-foreground">
            Step inside our completed projects and see how we transform spaces into beautiful homes.
          </p>
        </div>

        {/* Video Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredVideo === video.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredVideo === video.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <Play className="h-6 w-6 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs font-medium">
                {video.duration}
              </div>

              {/* Title - always visible */}
              <div className="mt-3">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-none px-8 py-6 text-sm border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent group"
          >
            Show More Videos
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
