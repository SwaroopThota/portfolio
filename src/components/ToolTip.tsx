import { PropsWithChildren } from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'

type ToolTipProps = {
	toolTip: string
} & PropsWithChildren

export default function ToolTip({ toolTip, children }: ToolTipProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{toolTip}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
