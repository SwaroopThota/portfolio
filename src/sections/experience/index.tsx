import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { config } from '@/config/config'

const ExperienceSection = () => {
	return (
		<section
			className='flex flex-col items-center justify-center'
			id='experience'
		>
			<TerminalUIWindow
				path='/experience'
				className='max-w-6xl not-lg:max-w-[90dvw]'
			>
				<TerminalUICommand
					command='cat experience.md'
					output={
						<div className='flex flex-col gap-4'>
							{config.experienceData.map((exp, index) => (
								<div
									className='flex flex-col gap-2'
									key={index}
								>
									<div className='flex flex-row justify-between my-2'>
										<span>
											<p className='text-xl font-bold'>
												{exp.company}
											</p>
											<p className='text-lg'>
												{exp.title}
											</p>
										</span>
										<span>{exp.duration}</span>
									</div>
									<ul className='flex flex-col gap-1'>
										{exp.points.map((point) =>
											Array.isArray(point.details) ? (
												<li key={point.label}>
													⚡{' '}
													<span className='font-bold'>
														{point.label}
													</span>
													:
													<ul className='ms-10 list-disc flex flex-col gap-1'>
														{point.details.map(
															(detail, idx) => (
																<li key={idx}>
																	<p>
																		{detail}
																	</p>
																</li>
															)
														)}
													</ul>
												</li>
											) : (
												<li key={point.label}>
													<p>
														⚡{' '}
														<span className='font-bold'>
															{point.label}
														</span>
														: {point.details}
													</p>
												</li>
											)
										)}
									</ul>
								</div>
							))}
						</div>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default ExperienceSection
