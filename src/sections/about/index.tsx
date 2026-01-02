import { FileUser } from 'lucide-react'
import Link from '@/components/custom/Link'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { config } from '@/config/config'

const AboutSection = () => {
	return (
		<section
			className='flex flex-col items-center justify-center'
			id='aboutMe'
		>
			<TerminalUIWindow
				path='/aboutMe'
				className='max-w-6xl not-lg:max-w-[90dvw]'
			>
				<TerminalUICommand
					command='cat aboutMe.txt'
					output={<p>{config.personalSummary}</p>}
				/>
				<TerminalUICommand
					command='cat skills.txt'
					output={
						<div className='text-nowrap'>
							{Object.entries(config.skills).map(
								([category, items]) => (
									<span
										className='flex'
										key={category}
									>
										⚡{' '}
										<p className='font-bold min-w-22'>
											{category}
										</p>
										: {items.join(', ')}
									</span>
								)
							)}
						</div>
					}
				/>
				<TerminalUICommand
					command='curl swaroop.dev/resume.pdf -o Resume.pdf'
					output={
						<Link
							className='text-primary'
							href={config.resumeLink}
							target='_blank'
						>
							[
							<FileUser className='inline-block size-3.5 mb-0.5 mr-0.5' />{' '}
							Resume.pdf]
						</Link>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default AboutSection
