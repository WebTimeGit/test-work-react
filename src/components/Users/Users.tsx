import React  from 'react'
import styles from './Users.module.scss'
import Button from '../Button/Button';
import Image  from 'next/image';


const Users = () => {
	return (
		<section className={ styles.user }>
			<div className={ `container` }>
				<h2>our users</h2>
				<table className={styles.usersTable}>
					<thead>
					<tr>
						<th>photo</th>
						<th>name</th>
						<th>status</th>
						<th>registration</th>
						<th>age</th>
						<th>action</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Image src="/vercel.svg" alt="Vercel Logo" width={ 72 } height={ 16 }/>
							</td>
							<td>Mr. smith</td>
							<td>offline</td>
							<td>Toronto</td>
							<td>35 year</td>
							<td>
								<Button className={ styles.user_card__btn }>Chat</Button>
							</td>
						</tr>
					</tbody>
				</table>

				{/*				<div className={ styles.users_header }>
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

						<Button className={ styles.user_card__btn }>Chat</Button>
					</div>
				</div>*/ }
			</div>
		</section>
	)
}

export default Users;