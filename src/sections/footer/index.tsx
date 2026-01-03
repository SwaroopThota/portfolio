import { Heart } from 'lucide-react'

const Footer = () => {
	return (
		<div className='flex flex-col justify-center items-center py-4 gap-3'>
			<span className='flex gap-1 items-center text-sm'>
				<span>Made with</span>
				<Heart className='text-red-500 fill-red-500 size-5' />
				<span>by Swaroop.</span>
			</span>
			<div className='flex items-center gap-2'>
				<p className='text-sm text-muted-foreground'>
					© {new Date().getFullYear()} Swaroop Thota. All rights
					reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer
