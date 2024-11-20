import { FC } from 'react'
import {
	ThemeProvider as NextThemeProvider,
	ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'

type ThemeProviderProps = {} & NextThemeProviderProps

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export default ThemeProvider
