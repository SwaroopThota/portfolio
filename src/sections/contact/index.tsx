import Link from '@/components/custom/Link'
import { Button } from '@/components/ui/button'
import {
	TerminalUICommand,
	TerminalUIWindow,
} from '@/components/custom/terminal-ui'
import { Send } from 'lucide-react'
import { config } from '@/config/config'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactSection = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const name = formData.get('name')
		const email = formData.get('email')
		const message = formData.get('message')
		console.log({ name, email, message })
	}

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
						<form
							onSubmit={handleSubmit}
							className='flex flex-col gap-2'
						>
							<span>
								--to={' '}
								<Link href='mailto:swaroopthota2001@gmail.com'>
									swaroopthota2001@gmail.com
								</Link>{' '}
								\
							</span>
							<div className='flex items-center gap-2'>
								<span className='text-nowrap'>--name=</span>
								<Input
									type='text'
									className='bg-transparent! border-muted ring-transparent!'
									required
								/>
								<span>\</span>
							</div>
							<div className='flex items-center gap-1'>
								<span className='text-nowrap'>--email=</span>
								<Input
									type='email'
									className='bg-transparent! border-muted ring-transparent!'
									required
								/>
								<span>\</span>
							</div>
							<div className='flex gap-1'>
								<span className='text-nowrap'>--message=</span>
								<Textarea
									className='border-muted ring-transparent! bg-transparent!'
									required
									minLength={10}
								/>
							</div>
							<div>
								<Button
									variant='plain'
									className='text-primary p-0'
									type='submit'
								>
									<span className='hover:underline underline-offset-4 flex gap-1'>
										[<Send /> Send ]
									</span>
								</Button>
							</div>
						</form>
					}
				/>
			</TerminalUIWindow>
		</section>
	)
}

export default ContactSection
