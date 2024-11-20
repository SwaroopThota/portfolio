import Logo from '@/components/Logo'
import Stack from '@/components/Stack'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Footer() {
	return (
		<footer>
			<Stack
				gap={3}
				className='py-5 justify-center items-center'
			>
				<Separator />
				<Logo />
				<p>
					&copy;{new Date().getFullYear()} Swaroop Thota. All rights
					reserved.
				</p>
				<div></div>
			</Stack>
		</footer>
	)
}

export default Footer
