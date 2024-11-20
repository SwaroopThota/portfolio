import Link from 'next/link'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import Stack from './Stack'
import { Separator } from './ui/separator'

type HeadingLinkProps = {
	href?: string
} & PropsWithChildren &
	ComponentProps<'div'>

const HeadingLink: FC<HeadingLinkProps> = ({ children, href = '' }) => {
	return (
		<Stack
			className='mt-5 mb-3'
			gap={3}
		>
			<h1 className='text-4xl font-semibold relative group'>
				<Link
					className='block w-full'
					href={href}
				>
					{children}
				</Link>
				<span className='group-hover:opacity-100 opacity-0 transition-opacity absolute top-0 -left-6'>
					#
				</span>
			</h1>
			<Separator />
		</Stack>
	)
}

export default HeadingLink
