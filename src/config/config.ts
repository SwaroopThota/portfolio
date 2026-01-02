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
					label: 'Technologies',
					details:
						'ASP.NET, .NET Core, C#, React, Node.js, SQL server, PostgreSQL',
				},
				{
					label: 'Product Development - Upgrade Factory',
					details: [
						'Built and deployed a Python program to AWS that leverages LLM models to analyze code commits across client projects, generates reports, and emails results to product owners.',
						'Developed tools using Python for the upgrade process.',
						'Worked on the implementation of commit features in our Upgrade Tool for committing configurable assets, which reduced the asset migration process by 80%.',
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
					label: 'Technologies',
					details:
						'ASP.NET, .NET Core, C#, React, Node.js, SQL server, PostgreSQL',
				},
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
						'Resolved production-level issues and bugs. Optimized the encrypted entity retrieval process, reduced the retrieval time by 60%.',
					],
				},
			],
		},
	],
	socialMediaLinks: {
		github: 'https://github.com/SwaroopThota',
		linkedin: 'https://www.linkedin.com/in/SwaroopThota/',
		twitter: 'https://X.com/SwarropThota',
	},
}
