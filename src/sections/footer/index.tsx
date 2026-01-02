const Footer = () => {
	return (
		<div className='flex flex-col justify-center items-center py-4 gap-3'>
			<p className='text-sm text-muted-foreground'>
				© {new Date().getFullYear()} Swaroop Thota. All rights reserved.
			</p>
		</div>
	)
}

export default Footer
