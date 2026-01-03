import Link from '@/components/custom/Link'
import { Button } from '@/components/ui/button'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { Send } from 'lucide-react'
import { config } from '@/config/config'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

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
					command='ping swaroop.dev/socials'
					output={
						<div className='flex flex-col items-baseline min-w-120'>
							{config.socialMediaLinks.map((social) => (
								<Link
									href={social.link}
									key={social.name}
								>
									<span className='flex gap-3 items-center mb-2'>
										<DynamicIcon
											name={social.icon as IconName}
											className='size-5'
										/>{' '}
										{social.name}: {social.link}
									</span>
								</Link>
							))}
						</div>
					}
				/>
				<TerminalUICommand
					command={<span>message \</span>}
					output={
						<div className='min-w-100 flex flex-col items-baseline'>
							<span>
								--to={' '}
								<Link href='mailto:swaroopthota2001@gmail.com'>
									swaroopthota2001@gmail.com
								</Link>{' '}
								\
							</span>
							<span>--name= ______________ \</span>
							<span>--email= ______________ \</span>
							<span>--message= _______________</span>
							<span> __________________________</span>
							<span> __________________________</span>
							<span> __________________________</span>
							<Button
								variant='plain'
								className='text-primary p-0'
							>
								<span className='hover:underline underline-offset-4 flex gap-1'>
									[<Send /> Send ]
								</span>
							</Button>
						</div>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default ContactSection
