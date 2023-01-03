import styles          from './Button.module.scss'
import { ButtonProps } from './ButtonProps'
import { FC }          from 'react'


const Button: FC<ButtonProps> = ({ label, isDisabled, children, className, onClick }) => {
	return (
		<button
			disabled={ isDisabled }
			className={ `${ styles.button } ${ className ? className : 'default' }` }
			onClick={ onClick }
			aria-label={label}
		>{ children }</button>
	)
}

export default Button