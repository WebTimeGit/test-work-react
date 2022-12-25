import {ReactNode} from 'react';


export interface ButtonProps {
	children: ReactNode | string;
	className?: string
	onClick?: () => void
	online?: boolean
}