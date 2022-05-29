import type { FC } from 'react'
import { SocialLink } from '~/types/link'

type Props = {
	link: SocialLink
}

export const Social: FC<Props> = ({ link }) => {
	return (
		<div className='main__social'>
			<a
				href={link.link}
				target='_blank'
				rel='noreferrer'
				title={link.linkTitle ? link.linkTitle : link.link}
				className='social__link'
			>
				<span className='social__icon'>
					<img alt={link.title} src={link.image} width={18} height={18} />
				</span>
				<span className='social__text'>{link.title}</span>
			</a>
		</div>
	)
}
