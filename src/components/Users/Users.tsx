import { FC }        from 'react'
import styles        from './Users.module.scss'
import Button        from '../Button/Button';
import Image         from 'next/image';
import { UserProps } from './UserProps';
import { baseUrl }   from '../../api/api';


const Users:FC<UserProps> = ({users}) => {

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

					{
						users?.map((user, i) => {
							return (
								<tr key={i}>
									<td>
										<Image src={baseUrl+user.photo} alt={user.name} width={ 60 } height={ 60 }/>
									</td>
									<td>{user.name}</td>
									<td>{user.online ? 'online' : 'offline'}</td>
									<td>{user.registration}</td>
									<td>{user.age}</td>
									<td>
										<Button className={ styles.user_card__btn } online={user.online} >Chat</Button>
									</td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default Users;