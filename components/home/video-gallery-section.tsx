"use client"

import { useState, useEffect } from "react"
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
		youtubeId: "m23oIOdAkQE",
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
		youtubeId: "DODn4TqAHaE",
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
		youtubeId: "SKYpjlBHkPM",
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
  {
    id: 11,
		youtubeId: "kXDUVDV6zus",
		title: "Walk-in Closet Ideas",
		duration: "5:00",
  }
]

function getYoutubeThumbnail(youtubeId: string): string {
	// Try max resolution first, fallbacks handled in onError
	return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
}

export function VideoGallerySection() {
	const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
	const [playingVideo, setPlayingVideo] = useState<string | null>(null)
	const [titles, setTitles] = useState<Record<string, string>>({})
	// Featured banner video (id: 3). Other videos will be shown in the grid.
	const bannerVideo = videos.find((v) => v.id === 3)
	const otherVideos = videos.filter((v) => v.id !== 3)

	useEffect(() => {
		let mounted = true
		;(async () => {
			const map: Record<string, string> = {}
			await Promise.all(
				videos.map(async (video) => {
					// try sessionStorage cache first
					const cacheKey = `yt-title-${video.youtubeId}`
					const cached =
						typeof sessionStorage !== "undefined" &&
						sessionStorage.getItem(cacheKey)
					if (cached) {
						map[video.youtubeId] = cached
						return
					}

					try {
						const res = await fetch(
							`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.youtubeId}&format=json`
						)
						if (!res.ok) throw new Error("oEmbed fetch failed")
						const json = await res.json()
						const t = (json.title as string) || video.title
						map[video.youtubeId] = t
						try {
							sessionStorage.setItem(cacheKey, t)
						} catch {
							/* ignore storage errors */
						}
					} catch {
						// fallback to local title
						map[video.youtubeId] = video.title
					}
				})
			)
			if (mounted) setTitles(map)
		})()

		return () => {
			mounted = false
		}
	}, [])

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
						Step inside our completed projects and see how we transform spaces into
						beautiful, functional homes that inspire.
					</p>
				</div>

				{/* Featured Banner (full width) */}
				{bannerVideo && (
					<div
						className="mb-8 w-full rounded-xl overflow-hidden relative cursor-pointer"
						onClick={() => setPlayingVideo(bannerVideo.youtubeId)}
					>
						<img
							src={getYoutubeThumbnail(bannerVideo.youtubeId)}
							alt={bannerVideo.title}
							loading="lazy"
							onError={(e) => {
								const img = e.currentTarget as HTMLImageElement
								if (img.src.includes("maxresdefault")) {
									img.src = `https://img.youtube.com/vi/${bannerVideo.youtubeId}/hqdefault.jpg`
								} else {
									img.src = "/placeholder.svg"
								}
							}}
							className="w-full h-[48vh] md:h-[60vh] object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#0d3d3d]/80 to-transparent" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-20 h-20 rounded-full bg-[#a57c00] flex items-center justify-center shadow-lg">
								<Play className="h-8 w-8 text-white" />
							</div>
						</div>
					</div>
				)}

				{/* Other videos: small items with title & duration */}
				<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
					{otherVideos.map((video, index) => (
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
									src={getYoutubeThumbnail(video.youtubeId)}
									alt={video.title}
									loading="lazy"
									onError={(e) => {
										const img = e.currentTarget as HTMLImageElement
										if (img.src.includes("maxresdefault")) {
											img.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
										} else {
											img.src = "/placeholder.svg"
										}
									}}
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
									{titles[video.youtubeId] ?? video.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				{/* Show More Button */}
				<div className="mt-16 text-center">
					<Button
						asChild
						className="rounded-full px-8 py-3 text-sm font-semibold bg-[#0d3d3d] text-white hover:bg-[#1a5a5a] transition-all duration-300 group shadow-lg hover:shadow-xl"
					>
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
