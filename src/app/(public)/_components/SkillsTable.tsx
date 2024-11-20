import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
	FaBootstrap,
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJava,
	FaJs,
	FaNodeJs,
	FaPython,
	FaReact,
} from 'react-icons/fa6'
import {
	SiCsharp,
	SiDocker,
	SiDotnet,
	SiExpress,
	SiFirebase,
	SiMongodb,
	SiMui,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'
import { TbBrandNextjs, TbSql } from 'react-icons/tb'

const SkillsTable = () => {
	const skills = [
		{
			skillName: 'Problem-Solving',
			sections: [
				{
					sectionName: 'Languages I Speak',
					items: ['Java', 'Python', 'C#'],
					itemIcons: [
						<FaJava key='' />,
						<FaPython key='' />,
						<SiCsharp key='' />,
					],
				},
			],
		},
		{
			skillName: 'Front-End Development',
			sections: [
				{
					sectionName: 'Languages I Speak',
					items: ['HTML', 'CSS', 'Javascript', 'TypeScript'],
					itemIcons: [
						<FaHtml5 key='' />,
						<FaCss3 key='' />,
						<FaJs key='' />,
						<SiTypescript key='' />,
					],
				},
				{
					sectionName: 'Frameworks I Use',
					items: ['React', 'Bootstrap', 'TailwindCSS', 'Material UI'],
					itemIcons: [
						<FaReact key='' />,
						<FaBootstrap key='' />,
						<SiTailwindcss key='' />,
						<SiMui key='' />,
					],
				},
			],
		},
		{
			skillName: 'Back-End Development',
			sections: [
				{
					sectionName: 'Languages I Speak',
					items: ['Javascript / Node.js', 'TypeScript', 'C#'],
					itemIcons: [
						<FaNodeJs key='' />,
						<SiTypescript key='' />,
						<SiCsharp key='' />,
					],
				},
				{
					sectionName: 'Frameworks I Use',
					items: ['Express.js', 'Next.js', 'Asp.NET'],
					itemIcons: [
						<SiExpress key='' />,
						<TbBrandNextjs key='' />,
						<SiDotnet key='' />,
					],
				},
				{
					sectionName: 'Databases I Use',
					items: ['SQL', 'MongoDB', 'Firebase'],
					itemIcons: [
						<TbSql key='' />,
						<SiMongodb key='' />,
						<SiFirebase key='' />,
					],
				},
				{
					sectionName: 'Tools I use',
					items: ['Git', 'Docker'],
					itemIcons: [<FaGithub key='' />, <SiDocker key='' />],
				},
			],
		},
	]
	return (
		<ScrollArea>
			<div className='flex gap-5 justify-between overflow-auto shadow-lg min-w-max'>
				{skills.map(({ skillName, sections }) => (
					<Card
						className='flex-1 flex flex-col transition-colors duration-500 hover:bg-muted cursor-pointer'
						key={skillName}
					>
						<CardHeader>
							<CardTitle className='text-xl'>
								{skillName}
							</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3'>
							{sections.map(
								({ sectionName, items, itemIcons }) => (
									<div key={sectionName}>
										<p className='text-lg'>{sectionName}</p>
										<Separator className='my-1 bg-white' />
										{items.map((item, index) => (
											<div
												className='flex gap-5 items-center'
												key={item}
											>
												{itemIcons[index]}
												{item}
											</div>
										))}
									</div>
								)
							)}
						</CardContent>
					</Card>
				))}
			</div>
		</ScrollArea>
	)
}

export default SkillsTable
