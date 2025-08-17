import Link from '@/components/Link'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/ui/terminal-ui'
import { User } from 'lucide-react'

const HeroSection = () => {
	return (
		<section
			className='min-h-[80vh] flex items-center justify-center'
			id='hero'
		>
			<TerminalUIWindow className='max-w-[90dvw] w-6xl mt-0'>
				<TerminalUICommand
					command='whoami'
					output={
						<div className='flex flex-col gap-2'>
							<img
								src='/images/banner.png'
								alt='banner'
								className='block mx-auto'
							/>
							<div className='flex flex-col gap-1'>
								<span>
									<User className='inline size-4' /> Thota
									Jyothi Swaroop
								</span>
								<span>⚡ Full-stack Web Developer</span>
								<span>⚡ System Design Enthusiast</span>
								<span>⚡ SDE-2</span>
							</div>
						</div>
					}
				/>
				<TerminalUICommand
					command='ls'
					output={
						<div className='flex flex-row gap-3 items-baseline'>
							<Link href='#aboutMe'>aboutMe/</Link>
							<Link href='#myProjects'>projects/</Link>
							<Link href='#myExperience'>experience/</Link>
							<Link href='#contactMe'>contactMe/</Link>
						</div>
					}
				/>
				<TerminalUICommand
					command={
						<span className='inline-block w-[.3rem] h-[1.15rem] bg-primary animate-caret-blink relative top-1'></span>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default HeroSection
