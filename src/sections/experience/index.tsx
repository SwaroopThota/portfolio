import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/ui/terminal-ui'

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
						<div>
							<p>
								⚡ <span className='font-bold'>Company</span>:
								ABC Corp
							</p>
							<p>
								⚡ <span className='font-bold'>Role</span>:
								Software Engineer
							</p>
							<p>
								⚡ <span className='font-bold'>Duration</span>:
								Jan 2020 - Present
							</p>
							<p>
								⚡{' '}
								<span className='font-bold'>Technologies</span>:
								React, Node.js, MongoDB
							</p>
						</div>
					}
				/>
				<TerminalUICommand
					command='cat experience.md'
					output={
						<div>
							<p>
								⚡ <span className='font-bold'>Company</span>:
								ABC Corp
							</p>
							<p>
								⚡ <span className='font-bold'>Role</span>:
								Software Engineer
							</p>
							<p>
								⚡ <span className='font-bold'>Duration</span>:
								Jan 2020 - Present
							</p>
							<p>
								⚡{' '}
								<span className='font-bold'>Technologies</span>:
								React, Node.js, MongoDB
							</p>
						</div>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default ExperienceSection
