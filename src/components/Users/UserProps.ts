export type TypeUser = {
	photo: string
	name: string
	online: boolean
	registration: string
	age: number
}

export interface UserProps {
	users: TypeUser[] | []
}

