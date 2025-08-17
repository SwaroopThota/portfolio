import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

type LinkProps = ComponentProps<'a'>

const Link: FC<LinkProps> = ({ className, ...props }) => {
	return (
		<a
			className={cn(
				'inline-block text-foreground hover:text-primary hover:underline underline-offset-4',
				className
			)}
			{...props}
		/>
	)
}

export default Link
