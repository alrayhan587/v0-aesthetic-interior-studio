"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const services = [
	{
		id: 1,
		title: "Residential",
		description: "Complete home design from living rooms to bedrooms.",
		image: "/modern-residential-living-room-interior-design.jpg",
	},
	{
		id: 2,
		title: "Kitchen",
		description: "Custom modular kitchens and storage solutions.",
		image: "/luxury-modular-kitchen-interior-with-island.jpg",
	},
	{
		id: 3,
		title: "Commercial",
		description: "Professional environments for productivity.",
		image: "/modern-corporate-office-interior-design.jpg",
	},
	{
		id: 4,
		title: "Renovation",
		description: "Transform existing spaces with modern updates.",
		image: "/home-renovation-before-after-modern-update.jpg",
	},
	{
		id: 5,
		title: "Furniture",
		description: "Bespoke pieces designed for your needs.",
		image: "/custom-bespoke-furniture-wooden-craftsmanship.jpg",
	},
	{
		id: 6,
		title: "Consultation",
		description: "Expert guidance on colors and materials.",
		image: "/interior-design-color-palette-material-samples.jpg",
	},
]

export function ServicesSection() {
	const [activeService, setActiveService] = useState<number | null>(null)
	const [backgroundImage, setBackgroundImage] = useState(services[0].image)

	const handleServiceHover = (service: (typeof services)[0]) => {
		setActiveService(service.id)
		setBackgroundImage(service.image)
	}

	return (
		<section
			id="services"
			className="py-20 lg:py-32 relative overflow-hidden min-h-[500px]"
		>
			{/* Dynamic Background Image */}
			<div className="absolute inset-0 transition-all duration-700">
				<img
					src={backgroundImage || "/placeholder.svg"}
					alt="Service background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-[#000000]/60" />
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-2xl mx-auto mb-12">
					<span className="text-sm uppercase tracking-widest text-[#a57c00]">
						Our Services
					</span>
					<h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-white text-balance">
						Interior solutions for every space
					</h2>
				</div>

				<div className="flex items-stretch justify-center border-t border-b border-white/20">
					{services.map((service, index) => (
						<div key={service.id} className="flex items-stretch">
							{/* Service Item */}
							<div
								className={`relative px-4 lg:px-6 py-8 cursor-pointer transition-all duration-500 flex flex-col justify-center min-w-[160px] lg:min-w-[120px] min-h-[180px] lg:min-h-[200px] ${
									activeService === service.id
										? "bg-white/10"
										: ""
								}`}
								onMouseEnter={() => handleServiceHover(service)}
								onMouseLeave={() => setActiveService(null)}
							>
								{/* Title - smaller text */}
								<h3
									className={`font-serif text-sm lg:text-base transition-all duration-300 ${
										activeService === service.id
											? "text-[#a57c00]"
											: "text-white/80 hover:text-white"
									}`}
								>
									{service.title}
								</h3>

								{/* Expanded Content */}
								<div
									className={`overflow-hidden transition-all duration-500 ${
										activeService === service.id
											? "max-h-[150px] opacity-100 mt-3"
											: "max-h-0 opacity-0"
									}`}
								>
									<p className="text-white/70 text-xs leading-relaxed mb-3">
										{service.description}
									</p>
									<button className="flex items-center gap-1 text-[#a57c00] hover:text-[#c99a00] transition-colors text-xs group">
										Read More
										<ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
									</button>
								</div>

								{/* Active Indicator */}
								<div
									className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#a57c00] transition-all duration-300 ${
										activeService === service.id
											? "opacity-100"
											: "opacity-0"
									}`}
								/>
							</div>

							{/* Divider */}
							{index < services.length - 1 && (
								<div className="w-px bg-white/20 self-stretch" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
