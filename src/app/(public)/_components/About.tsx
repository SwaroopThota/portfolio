import Link from 'next/link'
import React from 'react'
import SkillsTable from './SkillsTable'
import { Button } from '@/components/ui/button'
import { FileUser } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Stack from '@/components/Stack'
import HeadingLink from '@/components/HeadingLink'

export default function About() {
	return (
		<Stack
			gap={5}
			id='about'
		>
			<HeadingLink href='#about'>About</HeadingLink>
			<p>
				Hi, Im Swaroop, SDE@
				<Link
					className='underline-offset-2 hover:underline'
					href='https://www.verisk.com/insurance/life-insurance/'
					target='_blank'
				>
					Verisk
				</Link>
				. I love to solve coding questions and build websites from
				scratch. I really enjoy building websites and learning new
				technologies. I am eager and enthusiastic about collaborating
				with experienced developers to create significant and impactful
				projects.
			</p>
			<div className='flex gap-5'>
				<Button
					variant='default'
					asChild
				>
					<Link
						href='#'
						className='p-2'
					>
						<FileUser />
						<span className='hidden md:inline'>View </span>
						Resume
					</Link>
				</Button>
				<Button
					variant='default'
					asChild
				>
					<Link
						href='#'
						className='p-2'
					>
						<FaGithub />
						<span className='hidden md:inline'>View </span>
						Github
					</Link>
				</Button>
			</div>
			<SkillsTable />
		</Stack>
	)
}
