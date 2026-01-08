import {
	ChevronRight,
	ChevronsUpDown,
	Minus,
	SquareTerminal,
	X,
} from 'lucide-react'
import { Activity, type FC, type ReactNode } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type TerminalUICommandProps = {
	command?: ReactNode
	output?: ReactNode
	hide?: boolean
}

const TerminalUICommand: FC<TerminalUICommandProps> = ({
	command,
	output,
	hide = false,
}) => {
	return (
		<Activity mode={hide ? 'hidden' : 'visible'}>
			<div className='flex flex-col gap-2 text-sm max-w-full overflow-x-auto'>
				<Activity mode={command ? 'visible' : 'hidden'}>
					<span className='text-nowrap'>
						<span className='text-primary'>
							<ChevronRight className='size-4 inline' />
							<span className='not-lg:hidden'>swaroop@dev:~</span>
							${' '}
						</span>
						{command}
					</span>
				</Activity>
				{output && <div className='mb-2'>{output}</div>}
			</div>
		</Activity>
	)
}

type TerminalUIWindowProps = {
	children?: ReactNode
	path?: string
	className?: string
	displayEmptyCommand?: boolean
}

const TerminalUIWindow: FC<TerminalUIWindowProps> = ({
	children,
	path = '',
	className,
	displayEmptyCommand = false,
}) => {
	return (
		<Card
			className={cn(
				'bg-card/10 backdrop-blur-xl backdrop-opacity-50 w-full m-5 border-2 shadow-lg',
				className
			)}
		>
			<CardHeader>
				<div className='flex gap-2 items-center'>
					<div className='flex gap-1 me-2'>
						<a
							href={`#${path.replace('/', '')}`}
							className='size-4 bg-red-500 rounded-full flex justify-center items-center text-transparent hover:text-black transition-all duration-400 cursor-pointer text-sm'
						>
							<X strokeWidth={3} />
						</a>
						<a
							href={`#${path.replace('/', '')}`}
							className='size-4 bg-yellow-300 rounded-full flex justify-center items-center text-transparent hover:text-black transition-all duration-400 cursor-pointer text-sm'
						>
							<Minus strokeWidth={3} />
						</a>
						<a
							href={`#${path.replace('/', '')}`}
							className='size-4 bg-green-500 rounded-full flex justify-center items-center text-transparent hover:text-black transition-all duration-400 cursor-pointer text-sm'
						>
							<ChevronsUpDown
								strokeWidth={3}
								className='rotate-45'
							/>
						</a>
					</div>
					<SquareTerminal />
					<p className='text-lg'>
						{'~'}
						{path}
					</p>
				</div>
			</CardHeader>
			<CardContent className='flex flex-col gap-3'>
				{children}

				<TerminalUICommand
					command={
						<span className='inline-block w-[.3rem] h-[1.15rem] bg-primary animate-caret-blink relative top-1'></span>
					}
					hide={!displayEmptyCommand}
				/>
			</CardContent>
		</Card>
	)
}

export { TerminalUIWindow, TerminalUICommand }
