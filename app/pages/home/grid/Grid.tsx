import { FC } from 'react'
import { Link } from '~/types/link'
import { GridItem } from './GridItem'

type Props = {
	links: Link[]
}

export const Grid: FC<Props> = ({ links }) => {
	return (
		<div className='main__grid'>
			{links.map(l => (
				<GridItem key={l.id} link={l} />
			))}
		</div>
	)
}
