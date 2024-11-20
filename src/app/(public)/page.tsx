import Navbar from './_components/Navbar'
import Home from './_components/Home'
import About from './_components/About'
import Projects from './_components/Projects'
import Contact from './_components/Contact'
import Stack from '@/components/Stack'
import Footer from './_components/Footer'

export default function Page() {
	return (
		<div className='container'>
			<Navbar />
			<Stack gap={5}>
				<Home />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</Stack>
		</div>
	)
}
