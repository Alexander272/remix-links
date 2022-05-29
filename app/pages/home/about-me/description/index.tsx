import { FC } from 'react'
import cn from 'classnames'
import { useOutside } from '~/hooks/useOutside'

type Props = {
	description: string
}

export const Description: FC<Props> = ({ description }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleShowButton = () => setIsShow(prev => !prev)

	return (
		<div ref={ref} className='main__description'>
			<button
				onClick={handleShowButton}
				className={cn(
					{
						['description__button--active']: isShow,
					},
					'description__button'
				)}
			>
				Обо мне
			</button>
			{isShow && <article className='description__article'>{description}</article>}
		</div>
	)
}
