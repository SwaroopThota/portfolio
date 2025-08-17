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
			defaultTheme='system'
		>
			<main
				className={`min-h-screen w-full dark:bg-[#020617] bg-[#f8fafc] z-0 relative ${className}`}
			>
				<div
					className='absolute inset-0 z-[-1]'
					style={{
						backgroundImage: `
			linear-gradient(to right, var(--background-grid-lines-color) 1px, transparent 1px),
			linear-gradient(to bottom, var(--background-grid-lines-color) 1px, transparent 1px)
		`,
						backgroundSize: '20px 30px',
						WebkitMaskImage:
							'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)',
						maskImage:
							'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)',
					}}
				/>
				{children}
			</main>
		</ThemeProvider>
	)
}

export default BackgroundWrapper
