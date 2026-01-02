import Link from '@/components/custom/Link'
import { Button } from '@/components/ui/button'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'

const ContactSection = () => {
	return (
		<section
			className='flex flex-col items-center justify-center'
			id='contactMe'
		>
			<TerminalUIWindow
				path='/contactMe'
				className='max-w-6xl not-lg:max-w-[90dvw]'
			>
				<TerminalUICommand
					command='ping socials'
					output={
						<div className='flex flex-col items-baseline'>
							<Link
								href='https://www.linkedin.com/in/swaroopthota/'
								target='_blank'
							>
								linkedin.com/in/SwaroopThota
							</Link>
							<Link
								href='https://github.com/swaroopthota'
								target='_blank'
							>
								github.com/SwaroopThota
							</Link>
						</div>
					}
				/>
				<TerminalUICommand
					command={
						<span>
							<span>
								message --to{' '}
								<Link href='mailto:swaroopthota2001@gmail.com'>
									swaroopthota2001@gmail.com
								</Link>{' '}
								\
							</span>
							<p>--name= ______________ \</p>
							<p>--email= ______________ \</p>
							<p>--message= ______________</p>
							<Button
								variant='plain'
								className='hover:text-primary p-0'
							>
								[ Send ]
							</Button>
						</span>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default ContactSection
