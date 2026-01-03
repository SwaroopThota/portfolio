import Link from '@/components/custom/Link'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Globe } from 'lucide-react'
import { config } from '@/config/config'

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
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full my-2'>
							{config.projects.map((project) => (
								<Card
									key={project.title}
									className='p-6 flex flex-col gap-4 transition-colors duration-200 bg-transparent hover:border-primary'
								>
									<div className='flex flex-col gap-2'>
										<Link
											className='text-lg font-semibold flex items-center gap-1'
											href={project.githubUrl}
										>
											<Globe className='size-5' />
											{project.title}
										</Link>
										<p className='text-sm text-muted-foreground'>
											{project.description}
										</p>
									</div>
									<div className='flex flex-wrap gap-2'>
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className='px-2 py-1 text-xs sm:text-sm rounded-full bg-muted/90 hover:bg-muted/50 transition-colors'
											>
												{tech}
											</span>
										))}
									</div>
									<div className='flex flex-wrap justify-between mt-auto pt-2'>
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
