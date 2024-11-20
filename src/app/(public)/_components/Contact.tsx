'use client'
import HeadingLink from '@/components/HeadingLink'
import Stack from '@/components/Stack'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SendHorizonal } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
	return (
		<Stack
			id='contact'
			gap={5}
		>
			<HeadingLink href='#contact'>Contact</HeadingLink>
			<form className='space-y-5'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<Input
						type='text'
						required
						minLength={3}
						placeholder='Name'
					/>
					<Input
						type='email'
						required
						placeholder='E-mail'
					/>
				</div>
				<Textarea
					required
					placeholder='Message'
					minLength={5}
					rows={5}
				/>
				<Button className='ml-auto flex gap-2'>
					<SendHorizonal /> Send
				</Button>
			</form>
			<p className='text-gray-600'>
				Or you can directly contact me at{' '}
				<Button
					asChild
					variant='link'
					className='p-0'
				>
					<Link href='mailto:swaroopthota2001@gmail.com'>
						Swaroopthota2001@gmail.com
					</Link>
				</Button>
			</p>
		</Stack>
	)
}
