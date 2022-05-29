import { FC } from 'react'
import { Description } from './description'
import { Social } from './social'
import { UserData } from '~/types/user'

type Props = {
	user: UserData
}

export const AboutMe: FC<Props> = ({ user }) => {
	return (
		<div className='main__about'>
			<div className='about__image-wrapper'>
				<img alt={user.name} src={user.avatar} width={190} height={190} className='about__image' />
			</div>
			<div className='about__head-wrapper'>
				<p className='about__head'>{user.name}</p>
			</div>
			{user.description && <Description description={user.description} />}
			{user.socials.map(l => (
				<Social key={l.id} link={l} />
			))}
		</div>
	)
}
