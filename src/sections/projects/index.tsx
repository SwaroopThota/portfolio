import Link from '@/components/custom/Link'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
	title: string
	description: string
	technologies: string[]
	githubUrl: string
	liveUrl?: string
	image?: string
}

const projects: Project[] = [
	{
		title: 'Portfolio Website',
		description:
			'A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features a terminal-like UI and dark mode support.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
		githubUrl: 'https://github.com/user/portfolio-website',
		liveUrl: 'https://yourportfolio.com',
	},
	{
		title: 'Project Manager',
		description:
			'A full-stack project management application with real-time updates, task tracking, and team collaboration features.',
		technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC'],
		githubUrl: 'https://github.com/user/project-manager',
		liveUrl: 'https://project-manager.demo.com',
	},
]

const ProjectsSection = () => {
	return (
		<section
			className='flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4'
			id='projects'
		>
			<TerminalUIWindow
				path='/projects'
				className='w-full not-lg:max-w-[90dvw]'
			>
				<TerminalUICommand
					command='ls projects/ --format=github'
					output={
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
							{projects.map((project, index) => (
								<Card
									key={index}
									className='p-4 flex flex-col gap-4 transition-colors duration-200 bg-transparent hover:border-primary'
								>
									<div className='flex flex-col gap-2'>
										<h3 className='text-lg font-semibold'>
											<Link
												href={project.githubUrl}
												className='hover:text-blue-500 transition-colors'
											>
												{project.title}
											</Link>
										</h3>
										<p className='text-sm text-muted-foreground'>
											{project.description}
										</p>
									</div>
									<div className='flex flex-wrap gap-2'>
										{project.technologies.map(
											(tech, techIndex) => (
												<span
													key={techIndex}
													className='px-2 py-1 text-xs sm:text-sm rounded-full bg-muted/90 hover:bg-muted/50 transition-colors'
												>
													{tech}
												</span>
											)
										)}
									</div>
									<div className='flex flex-wrap gap-3 mt-auto pt-4'>
										<Button
											size='sm'
											variant='outline'
											asChild
										>
											<Link
												href={project.githubUrl}
												className='flex items-center'
											>
												<Github className='size-4' />
												<span className='hidden sm:inline'>
													View Code
												</span>
												<span className='sm:hidden'>
													Code
												</span>
											</Link>
										</Button>
										{project.liveUrl && (
											<Button
												size='sm'
												variant='default'
												asChild
											>
												<Link
													href={project.liveUrl}
													className='flex items-center hover:text-primary-foreground'
												>
													<ExternalLink className='size-4' />
													<span className='hidden sm:inline'>
														View Site
													</span>
													<span className='sm:hidden'>
														Site
													</span>
												</Link>
											</Button>
										)}
									</div>
								</Card>
							))}
						</div>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default ProjectsSection
