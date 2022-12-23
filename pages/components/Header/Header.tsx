import styles      from './Header.module.scss'
import SwitchTheme from '../SwitchTheme/SwithTheme'


const Header = () => {


	return (
		<header className={ `header ${ styles.header }` }>
			<div className={ `container ${ styles.content }` }>
				<h2>React app typescript + next.js for seo</h2>

				<SwitchTheme/>
			</div>
		</header>
	)
}

export default Header