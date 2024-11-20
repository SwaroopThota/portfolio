import { cn } from '@/lib/utils'
import { ComponentProps, FC, PropsWithChildren } from 'react'

type StackProps = {
	gap?: number
} & PropsWithChildren &
	ComponentProps<'div'>

const Stack: FC<StackProps> = ({ className, children, gap = 2, ...rest }) => {
	return (
		<div
			className={cn(`flex flex-col gap-${gap}`, className)}
			{...rest}
		>
			{children}
		</div>
	)
}

export default Stack
