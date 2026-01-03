import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Terminal } from 'lucide-react'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
// import { ModeToggle } from '../../components/theme/mode-toggle'
import Link from '../../components/custom/Link'
import { config } from '@/config/config'

const Header = () => {
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
					{config.socialMediaLinks.map((item) => (
						<NavigationMenuItem key={item.name}>
							<Link
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
								title={item.name}
							>
								<DynamicIcon
									name={item.icon as IconName}
									className='size-6'
								/>
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
