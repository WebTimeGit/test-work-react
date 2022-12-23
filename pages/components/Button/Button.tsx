import styles          from './Button.module.scss'
import { ButtonProps } from './ButtonProps';
const Button = ({children, className, onClick}:ButtonProps) => {
	return (
		<button
			className={`${styles.button} ${className ? className : 'default'}`}
			onClick={onClick}
		>{children}</button>
	)
}

export default Button