import { FileUser } from 'lucide-react'
import Link from '@/components/Link'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/ui/terminal-ui'

const skills = {
	Languages: ['Java', 'JavaScript/TypeScript', 'Python'],
	'Front-end': ['React.js', 'Next.js'],
	'Back-end': ['Node.js', 'ASP.Net Core'],
	Databases: ['Postgres', 'SQL Server', 'MongoDB'],
	DevOps: ['Docker', 'Github Actions', 'AWS', 'Jenkins'],
}

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
					output={
						<p>
							Hi, I'm Swaroop. I am a passionate developer with
							experience in building web applications. I really
							enjoy building things from scratch, solving coding
							questions and learning new technologies. I am eager
							and enthusiastic about collaborating with
							experienced developers to create significant and
							impactful projects.
						</p>
					}
				/>
				<TerminalUICommand
					command='cat skills.txt'
					output={
						<div className='text-nowrap'>
							{Object.entries(skills).map(([category, items]) => (
								<p key={category}>
									⚡{' '}
									<span className='font-bold'>
										{category}
									</span>
									: {items.join(', ')}
								</p>
							))}
						</div>
					}
				/>
				<TerminalUICommand
					command='curl swaroop.dev/resume.pdf -o Resume.pdf'
					output={
						<Link
							className='text-primary'
							href='/resume.pdf'
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
