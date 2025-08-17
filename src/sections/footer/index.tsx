import { Heart } from 'lucide-react'

const Footer = () => {
	return (
		<div className='flex flex-col justify-center items-center py-4 gap-3'>
			<p>
				Made with{' '}
				<Heart
					color='red'
					fill='red'
					size={20}
					className='inline-block'
				/>{' '}
				by Swaroop.
			</p>
			<p className='text-sm text-muted-foreground'>
				© {new Date().getFullYear()} Swaroop Thota. All rights reserved.
			</p>
		</div>
	)
}

export default Footer
