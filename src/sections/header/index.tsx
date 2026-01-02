import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Github, Linkedin, Terminal, Twitter } from 'lucide-react'
// import { ModeToggle } from '../../components/theme/mode-toggle'
import Link from '../../components/custom/Link'
import { config } from '@/config/config'

const Header = () => {
	const mediaItems = [
		{
			icon: <Github className='size-6' />,
			href: config.socialMediaLinks.github,
		},
		{
			icon: <Linkedin className='size-6' />,
			href: config.socialMediaLinks.linkedin,
		},
		{
			icon: <Twitter className='size-6' />,
			href: config.socialMediaLinks.twitter,
		},
	]

	return (
		<header className='flex m-3 p-5 justify-between items-center sticky z-50 top-5 rounded-full bg-transparent backdrop-blur-xl backdrop-opacity-90 border shadow-2xl'>
			<Link
				href='#'
				className='flex gap-1 lg:text-xl text-base font-semibold items-center'
			>
				<Terminal className='size-6' /> {config.name}
			</Link>
			<NavigationMenu>
				<NavigationMenuList className='gap-3 text-base font-light not-lg:hidden'>
					{config.sections.map((item, index) => (
						<NavigationMenuItem key={index}>
							<Link href={`#${item}`}>./{item}</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu>
				<NavigationMenuList className='gap-3 text-base font-light items-baseline '>
					{mediaItems.map((item, index) => (
						<NavigationMenuItem key={index}>
							<Link
								href={item.href}
								target='_blank'
								rel='noopener noreferrer'
							>
								{item.icon}
							</Link>
						</NavigationMenuItem>
					))}
					{/* <NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem> */}
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	)
}

export default Header
