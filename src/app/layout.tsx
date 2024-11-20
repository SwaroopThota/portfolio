import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemesProvider'

export const metadata: Metadata = {
	title: 'Swaroop Thota',
	description: 'Hello there! I am Swaroop. Nice to meet you!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
