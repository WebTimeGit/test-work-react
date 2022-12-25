import styles          from './Button.module.scss'
import { ButtonProps } from './ButtonProps';
import { FC }          from 'react';
const Button:FC<ButtonProps> = ({children, className, onClick}) => {
	return (
		<button
			className={`${styles.button} ${className ? className : 'default'}`}
			onClick={onClick}
		>{children}</button>
	)
}

export default Button