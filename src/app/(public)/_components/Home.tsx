import { Button } from '@/components/ui/button'
import HomePageGuy from './HomePageGuy'
import Link from 'next/link'
import { ArrowDown, Hand } from 'lucide-react'
import ToolTip from '@/components/ToolTip'

export default function Home() {
	return (
		<section
			id='home'
			className='flex flex-col justify-center items-center min-h-[90vh] gap-3 text-balance'
		>
			<h1 className='text-4xl font-semibold'>Hello There!</h1>
			<HomePageGuy />
			<h1 className='text-4xl font-semibold text-center'>
				I am <ToolTip toolTip='Thota Jyothi Swaroop'>Swaroop</ToolTip>.
				Nice to meet you!
			</h1>
			<h2 className='text-gray-600 tracking-tight text-2xl'>
				Web Dev | DSA | SDE@
				<Link
					href='#'
					className='hover:underline underline-offset-4'
				>
					Verisk
				</Link>
			</h2>
			<div className='flex gap-5'>
				<Button
					variant='default'
					asChild
				>
					<Link href='#about'>
						Know More <ArrowDown className='animate-bounce' />
					</Link>
				</Button>
				<Button
					variant='outline'
					asChild
				>
					<Link href='#contact'>
						<Hand className='animate-wiggle' />
						Say Hello
					</Link>
				</Button>
			</div>
		</section>
	)
}
