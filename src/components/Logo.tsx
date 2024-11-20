import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentProps, FC } from 'react'

type LogoProps = {} & Omit<ComponentProps<typeof Link>, 'href'>

const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<Link
			href='#'
			className={cn('font-light text-3xl tracking-tight', className)}
		>
			SWAROOP THOTA
		</Link>
	)
}

export default Logo
