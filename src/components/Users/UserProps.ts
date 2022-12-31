export type TypeUser = {
	age: number
	name: string
	online: boolean
	photo: string
	registration: string
}

export interface UserProps {
	users: TypeUser[]
}

