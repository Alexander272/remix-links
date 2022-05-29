export type SocialLink = {
	id: string
    link: string
	image: string
	title: string
	linkTitle?: string
}

export type Link = {
	id: string
	link: string
	image?: Image
	text?: Text
	gradient: Gradient
	title: string
	isImportant: boolean
}

type Image = {
	image: string
	width: string
}

type Text = {
	title: string
}

type Gradient = {
	to: string
	from: string
}