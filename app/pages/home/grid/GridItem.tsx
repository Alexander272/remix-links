import { FC } from 'react'
import { AnimateBlock } from '~/components/UI/animate-block/AnimateBlock'
import { Link } from '~/types/link'

type Props = {
	link: Link
}

export const GridItem: FC<Props> = ({ link }) => {
	return (
		<a href={link.link} target='_blank' rel='noreferrer' className='grid__item'>
			<p className='grid__animate'>
				<span
					style={{
						backgroundImage: `linear-gradient(to right, ${link.gradient.from} 0%, ${link.gradient.to} 51%, ${link.gradient.from} 100%)`,
					}}
					className='grid__gradient'
				>
					{link.image && <img src={link.image.image} alt={link.title} width={link.image.width} />}
				</span>{' '}
				{link.isImportant && <AnimateBlock />}
			</p>
			<span className='grid__item-title'>{link.title}</span>
		</a>
	)
}
