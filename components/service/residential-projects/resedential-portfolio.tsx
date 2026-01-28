'use client'

import { Portfolio } from '@/components/service/portfolio/portfolio'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
	{
		id: 1,
		title: 'Contemporary Living Space',
		category: 'Living Room',
		location: 'Dhaka, Bangladesh',
		year: '2024',
		area: '450 sq ft',
		image: '/images/info1.jpg',
		description: 'A harmonious blend of modern aesthetics with comfortable living',
	},
	{
		id: 2,
		title: 'Luxury Entertainment Zone',
		category: 'Living Room',
		location: 'Delhi, India',
		year: '2024',
		area: '520 sq ft',
		image: '/images/info2.jpg',
		description: 'Premium entertainment space with state-of-the-art design',
	},
	{
		id: 3,
		title: 'Modern Textured Lounge',
		category: 'Living Room',
		location: 'Bangalore, India',
		year: '2023',
		area: '480 sq ft',
		image: '/images/info3.jpg',
		description: 'Rich textures meet contemporary comfort',
	},
	{
		id: 4,
		title: 'Elegant Crockery Display',
		category: 'Kitchen',
		location: 'Pune, India',
		year: '2024',
		area: '180 sq ft',
		image: '/images/info6.jpg',
		description: 'Sophisticated storage meets artistic presentation',
	},
	{
		id: 5,
		title: 'Grand Dining Experience',
		category: 'Dining Room',
		location: 'Chennai, India',
		year: '2024',
		area: '320 sq ft',
		image: '/images/info7.jpg',
		description: 'Where family gatherings become memorable moments',
	},
	{
		id: 6,
		title: 'Sophisticated Dining Suite',
		category: 'Dining Room',
		location: 'Hyderabad, India',
		year: '2023',
		area: '280 sq ft',
		image: '/images/info8.jpg',
		description: 'Elegance in every detail, comfort in every seat',
	},
	{
		id: 7,
		title: 'Open Living Concept',
		category: 'Dining Room',
		location: 'Kolkata, India',
		year: '2024',
		area: '600 sq ft',
		image: '/images/info11.jpg',
		description: 'Seamless flow between dining and living spaces',
	},
	{
		id: 8,
		title: 'Premium Family Lounge',
		category: 'Living Room',
		location: 'Ahmedabad, India',
		year: '2024',
		area: '550 sq ft',
		image: '/images/info12.jpg',
		description: 'Designed for comfort, built for memories',
	},
	{
		id: 9,
		title: 'Executive Living Area',
		category: 'Living Room',
		location: 'Jaipur, India',
		year: '2023',
		area: '500 sq ft',
		image: '/images/info13.jpg',
		description: 'Sophisticated living for the discerning homeowner',
	},
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
	const cardRef = useRef<HTMLDivElement>(null)
	const isInView = useInView(cardRef, { once: false, margin: '-20%' })

	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [100, -100])
	const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
	const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2])
	const rotate = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]
	)

	const springY = useSpring(y, { stiffness: 100, damping: 30 })
	const springScale = useSpring(scale, { stiffness: 100, damping: 30 })
	const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 })

	const isEven = index % 2 === 0

	return (
		<motion.div
			ref={cardRef}
			style={{ opacity, scale: springScale }}
			className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center py-16 lg:py-24 w-full overflow-hidden`}
		>
			{/* Image Container */}
			<motion.div
				style={{ y: springY, rotateZ: springRotate }}
				className="relative w-full lg:w-3/5 aspect-[4/3] overflow-hidden group rounded-lg flex-shrink-0"
			>
				<motion.div style={{ scale: imageScale }} className="absolute inset-0">
					<Image
						src={project.image || '/placeholder.svg'}
						alt={project.title}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 60vw"
					/>
				</motion.div>

				{/* ...rest of image code... */}
			</motion.div>

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, x: isEven ? 50 : -50 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.8, delay: 0.2 }}
				className={`w-full lg:w-2/5 ${isEven ? 'lg:pl-8' : 'lg:pr-8 lg:text-right'} flex-shrink-0 overflow-hidden`}
			>
				{/* ...content... */}
			</motion.div>
		</motion.div>
	)
}

export function ResidentialPortfolio() {
	return (
		<Portfolio
			projects={projects}
			portfolioTitle='Completed'
			portfolioSubtitle='Projects'
			portfolioDescription='Explore our collection of meticulously crafted residential interiors, each telling a unique story of elegance and innovation.'
		/>
	)
}
