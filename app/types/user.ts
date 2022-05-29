import { Link, SocialLink } from "./link"

export type UserData = {
    name: string
    avatar: string
    description: string
    socials: SocialLink[]
    links: Link[]
}