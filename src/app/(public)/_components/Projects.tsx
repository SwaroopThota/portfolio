import HeadingLink from '@/components/HeadingLink'
import Stack from '@/components/Stack'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Globe } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'

export default function Projects() {
	const projects = [
		{
			projectName: 'ChatsApp',
			description:
				'A realtime web-based chat app build using React, MUI and Firebase.',
			githubUrl: 'https://github.com/SwaroopThota/chatsapp',
			siteUrl: 'https://chats4pp.web.app/',
		},
		{
			projectName: 'Spotify-clone',
			description:
				"A music streaming website inspired by Spotify built using React and Spotify's API.",
			githubUrl: 'https://github.com/SwaroopThota/spotify-clone',
			siteUrl: 'https://spotify-clone-369.netlify.app/',
		},
		{
			projectName: 'TaskFlow',
			description:
				'A Task Management System built using MERN stack with authentication and authorization.',
			githubUrl: 'https://github.com/SwaroopThota/Task-Managment-System',
		},
		{
			projectName: 'Monthly expense tracker',
			description:
				'An expense tracker website built using React and Firebase',
			githubUrl:
				'https://github.com/SwaroopThota/monthly-expense-tracker',
			siteUrl: 'https://monthly-xpense-tracker.netlify.app/',
		},
		{
			projectName: 'Twitter bot',
			description:
				"A Twitter bot, built using only javascript and Twitter's API, that posts a random picture everyday with a random quote on the Internet printed on it.",
			githubUrl: 'https://github.com/SwaroopThota/twitter-bot',
		},
		{
			projectName: 'ChatsApp',
			description:
				'A realtime web-based chat app build using React, MUI and Firebase.',
			githubUrl: 'https://github.com/SwaroopThota/chatsapp',
			siteUrl: 'https://chats4pp.web.app/',
		},
	]
	return (
		<Stack
			id='projects'
			gap={5}
		>
			<HeadingLink href='#projects'>Projects</HeadingLink>
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-center gap-x-5 gap-y-10'>
				{projects.map((project, key) => (
					<Card key={key}>
						<CardHeader className='sm:min-h-36'>
							<CardTitle>{project.projectName}</CardTitle>
							<CardDescription>
								{project.description}
							</CardDescription>
						</CardHeader>
						<CardFooter>
							<div className='flex flex-col md:flex-row md:justify-between gap-3'>
								<Button
									variant='outline'
									asChild
								>
									<Link
										href={project.githubUrl}
										className='p-2 w-full'
										target='_blank'
									>
										<FaGithub />
										View on Github
									</Link>
								</Button>
								{project.siteUrl && (
									<Button
										variant='outline'
										asChild
									>
										<Link
											href={project.siteUrl}
											className='p-2 w-full'
											target='_blank'
										>
											<Globe />
											View site
										</Link>
									</Button>
								)}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
			<Button
				variant='secondary'
				className='block mx-auto'
			>
				<Link
					href='https://github.com/SwaroopThota?tab=repositories'
					target='_blank'
					className='flex items-center justify-center w-min gap-2 mx-auto'
				>
					<FaGithub />
					See more...
				</Link>
			</Button>
		</Stack>
	)
}
