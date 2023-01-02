import styles          from './Button.module.scss'
import { ButtonProps } from './ButtonProps'
import { FC }          from 'react'


const Button: FC<ButtonProps> = ({ isDisabled, children, className, onClick }) => {
	return (
		<button
			disabled={ isDisabled }
			className={ `${ styles.button } ${ className ? className : 'default' }` }
			onClick={ onClick }
		>{ children }</button>
	)
}

export default Button