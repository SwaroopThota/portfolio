export const config = {
	name: 'Swaroop',
	fullName: 'Jyothi Swaroop Thota',
	heroSectionPoints: [
		'Full-stack Web Developer',
		'Senior SDE @Verisk',
		'System Design Enthusiast',
	],
	sections: ['aboutMe', 'experience', 'projects', 'contactMe'],
	personalSummary:
		"Hello, I'm Swaroop. I am a passionate developer with experience in building beautiful web applications and robust backend systems. I really enjoy building things from scratch and love problem-solving. I am always enthusiastic about learning new things and collaborate with experienced devs to create something significant and impactful.",
	skills: {
		'Front-end': ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'],
		'Back-end': ['Node.js', 'ASP.Net Core'],
		Languages: ['JavaScript/TypeScript', 'C#', 'Java', 'Python'],
		Databases: ['Postgres', 'SQL Server', 'MongoDB'],
		DevOps: ['Docker', 'Github Actions', 'AWS', 'Jenkins'],
	},
	resumeLink: '/resources/resume.pdf',
	experienceData: [
		{
			company: 'FAST (Verisk)',
			title: 'Senior Software Engineer',
			duration: 'Jan 2025 - Present',
			points: [
				{
					label: 'Product Development - Upgrade Factory',
					details: [
						'Designed and implemented a feature in Upgrade Tool for committing configurable assets and worked on improving the tool performance, which reduced the asset migration process by 80% and eventually reducing the asset migration process from days to hours.',
						'Built and deployed a python program to AWS, which leverages LLM models to analyze code commits across client projects, generates a report, and emails them to product owners.',
					],
				},
			],
		},
		{
			company: 'FAST (Verisk)',
			title: 'Software Dev Engineer - 1',
			duration: 'Aug 2023 - Mar 2025',
			points: [
				{
					label: 'Product Development - Platform Team',
					details: [
						'Contributed to serverless batch processing using the AWS infrastructure (Event bridge, Step functions, and Lambdas), which improved batch performance by 20% and substantially reduced batch failures.',
						'Contributed to implementing a Role-based Authorization for our REST application.',
					],
				},
				{
					label: "Sammon's Financial Group - Client support team",
					details: [
						'Interacted with Client, resolved production-level issues and bugs. Designed and implemented a new encrypted entity retrieval process, which reduced the retrieval time by 60%.',
					],
				},
			],
		},
	],
	socialMediaLinks: [
		{
			name: 'GitHub',
			link: 'https://github.com/SwaroopThota',
			icon: 'github',
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/SwaroopThota',
			icon: 'linkedin',
		},
		{
			name: 'X (Twitter)',
			link: 'https://X.com/SwaroopThota',
			icon: 'twitter',
		},
		{
			name: 'Email',
			link: 'mailto:swaroopthota2001@gmail.com',
			icon: 'mail',
		},
	],
	projects: [
		{
			title: 'ChatsApp',
			description:
				'Chatsapp is a real-time web-based chat application enabling instant messaging between users.',
			technologies: ['React', 'Firebase', 'MUI'],
			githubUrl: 'https://github.com/SwaroopThota/chatsapp',
			liveUrl: 'https://chats4pp.web.app/',
		},
		{
			title: 'Task Management System',
			description:
				'A Task Management System built using MERN stack with user authentication and user roles. Users can log in, assign tasks to team members, and change the task status assigned to them.',
			technologies: ['React', 'Express', 'MongoDB', 'JWT', 'MUI'],
			githubUrl: 'https://github.com/swaroopthota/Task-Managment-System',
		},
		{
			title: 'Spotify Clone',
			description:
				'A Spotify clone built using React and Spotify API. Users can log in with their spotify accounts, create, manage playlists, listen to music tracks and much more.',
			technologies: ['React', 'Bootstrap', 'Spotify API'],
			githubUrl: 'https://github.com/SwaroopThota/spotify-clone',
			liveUrl: 'https://spotify-clone-369.netlify.app/',
		},
		{
			title: 'Monthly Expense Tracker',
			description:
				'A web application to track monthly expenses, built using React and Firebase. Users can login with their Google accounts and add, edit, and delete expenses, and view expense reports.',
			technologies: ['React', 'Firebase', 'MUI'],
			githubUrl:
				'https://github.com/SwaroopThota/monthly-expense-tracker',
			liveUrl: 'https://monthly-xpense-tracker.netlify.app/',
		},
	],
}
