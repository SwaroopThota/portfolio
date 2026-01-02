import type { FC } from 'react'
import { ThemeProvider } from '@/components/theme/theme-provider'

type BackgroundWrapperProps = {
	children: React.ReactNode
	className?: string
}

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({
	children,
	className,
}) => {
	return (
		<ThemeProvider
			storageKey='theme'
			defaultTheme='dark'
		>
			<main
				className={`dark:bg-[#020617] bg-[#f8fafc] z-0 relative ${className}`}
			>
				<div
					className='fixed inset-0 z-0 pointer-events-none'
					style={{
						backgroundImage: `
        linear-gradient(to right, var(--background-grid-lines-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--background-grid-lines-color) 1px, transparent 1px)
      `,
						backgroundSize: '30px 30px',
						WebkitMaskImage:
							'radial-gradient(ellipse 60% 60% at 50% 50%, #000 50%, transparent 95%)',
						maskImage:
							'radial-gradient(ellipse 60% 60% at 50% 50%, #000 50%, transparent 95%)',
					}}
				/>
				{children}
			</main>
		</ThemeProvider>
	)
}

export default BackgroundWrapper
