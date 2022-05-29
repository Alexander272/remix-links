import { Circles } from '~/components/UI/circles/Circles'
import { UserData } from '~/types/user'
import { AboutMe } from './about-me'
import { Grid } from './grid/Grid'

const mockUser: UserData = {
	name: 'TestUser',
	avatar: 'https://redlinks.space/_next/image?url=https%3A%2F%2Fredlinks.space%2Favatar.jpeg&w=384&q=100',
	description:
		'<p>Меня зовут Максим, я уже 9 лет занимаюсь веб-разработкой. На данный момент являюсь основателем двух крутых проектов htmllessons.ru и еще одного глобального проекта. Первый, был моей дипломной работой в колледже.</p><p>Как и все, начинал с изучения верстки html, css, js. Затем появилась потребность в изучении Laravel для разработки образовательного проекта.</p><p>Через время я ушел от PHP и перешел на Javascript, так как появилась задача по разработке крупного проекта.</p><p>Основная миссия – создавать крутые продукты, которые будут помогать людям и менять мир. Буду рад, если Вы меня поддержите и подпишитесь на мой канал. Спасибо 😊</p>',
	socials: [
		{
			id: '1',
			link: '',
			image: '/icon/mail.svg',
			title: 'email',
		},
	],
	links: [
		{
			id: '2',
			link: '',
			image: {
				image: 'https://redlinks.space/icons/vs-code.svg',
				width: '80',
			},
			gradient: {
				to: '#2179c1',
				from: '#3EA6EA',
			},
			title: 'VS Code',
			isImportant: false,
		},
		{
			id: '1',
			link: '',
			image: {
				image: 'https://redlinks.space/icons/vs-code.svg',
				width: '80',
			},
			gradient: {
				to: '#2179c1',
				from: '#3EA6EA',
			},
			title: 'VS Code',
			isImportant: true,
		},
		{
			id: '3',
			link: '',
			image: {
				image: 'https://redlinks.space/icons/vs-code.svg',
				width: '80',
			},
			gradient: {
				to: '#2179c1',
				from: '#3EA6EA',
			},
			title: 'VS Code',
			isImportant: true,
		},
		{
			id: '4',
			link: '',
			image: {
				image: 'https://redlinks.space/icons/vs-code.svg',
				width: '80',
			},
			gradient: {
				to: '#2179c1',
				from: '#3EA6EA',
			},
			title: 'VS Code',
			isImportant: true,
		},
	],
}

export const Home = () => {
	return (
		<main className='main'>
			<div className='main__container'>
				<AboutMe user={mockUser} />
				<Grid links={mockUser.links} />
			</div>

			<Circles />
		</main>
	)
}
