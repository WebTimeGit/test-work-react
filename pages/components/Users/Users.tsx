import React  from 'react'
import styles from './Users.module.scss'


const Users = () => {
	return (
		<section className={ styles.user }>
			<div className={ `container` }>
				<h2>our users</h2>
				<div className={ styles.users_header }>
					<div className={ styles.cel }>photo</div>
					<div className={ styles.cell }>name</div>
					<div className={ styles.cell }>status</div>
					<div className={ styles.cell }>registration</div>
					<div className={ styles.cell }>age</div>
					<div className={ styles.cell }>action</div>
				</div>

				<div className={ styles.user_card }>
					<div className={ `${ styles.cell } ${ styles.user_card__photo }` }>image</div>
					<div className={ `${ styles.cell } ${ styles.user_card__name }` }>Mr. smith</div>
					<div className={ `${ styles.cell } ${ styles.user_card__status }` }>offline</div>
					<div className={ `${ styles.cell } ${ styles.user_card__registration }` }>Toronto</div>
					<div className={ `${ styles.cell } ${ styles.user_card__age }` }>35 year</div>
					<div className={ `${ styles.cell } ${ styles.user_card__action }` }>
						<button className={ styles.user_card__btn }>Chat</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Users;