import type { FC } from 'react'
import Header from '@/sections/header'
import BackgroundWrapper from '@/components/BackgroundWrapper'
import Footer from '@/sections/footer'
import HeroSection from '@/sections/hero'
import AboutSection from '@/sections/about'
import ExperienceSection from '@/sections/experience'
import ProjectsSection from './sections/projects'
import ContactSection from './sections/contact'

const App: FC = () => {
	return (
		<BackgroundWrapper className='text-foreground flex flex-col gap-5'>
			<Header />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</BackgroundWrapper>
	)
}

export default App
