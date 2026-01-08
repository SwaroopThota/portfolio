import Link from '@/components/custom/Link'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { config } from '@/config/config'
import { User } from 'lucide-react'

const HeroSection = () => {
	return (
		<section
			className='min-h-96 flex items-center justify-center'
			id='hero'
		>
			<TerminalUIWindow
				className='max-w-[90dvw] w-6xl mt-0'
				displayEmptyCommand
			>
				<TerminalUICommand
					command='whoami'
					output={
						<div className='flex flex-col gap-2'>
							<img
								src='/images/banner.png'
								alt='her-section-banner'
								className='block mx-auto'
							/>
							<div className='flex flex-col gap-1'>
								<span>
									<User className='inline size-4' />{' '}
									{config.fullName}
								</span>
								{config.heroSectionPoints.map((point, idx) => (
									<span key={idx}>⚡ {point}</span>
								))}
							</div>
						</div>
					}
				/>
				<TerminalUICommand
					command='ls'
					output={
						<div className='flex flex-row gap-3 items-baseline'>
							{config.sections.map((item, index) => (
								<Link
									key={index}
									href={`#${item}`}
								>
									{item}/
								</Link>
							))}
						</div>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default HeroSection
