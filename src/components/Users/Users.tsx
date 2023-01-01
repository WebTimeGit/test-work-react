import { FC }            from 'react'
import styles            from './Users.module.scss'
import Button            from '../Button/Button';
import Image             from 'next/image';
import { UserProps }     from './UserProps';
import { baseUrl }       from '../../api/api';


const Users: FC<UserProps> = ({ users }) => {


	return (
		<section className={ styles.user }>
			<div className={ `container` }>
				<h2>our users</h2>
				<table className={ styles.usersTable }>
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
								<tr key={ i }>
									<td>
										<Image src={ baseUrl + user.photo } alt={ user.name } width={ 60 } height={ 60 }/>
									</td>
									<td>{ user.name }</td>
									<td>{ user.online ? 'online' : 'offline' }</td>
									<td>{ user.registration }</td>
									<td>{ user.age }</td>
									<td>
										<Button className={ styles.user_card__btn } isDisabled={ !user.online }>
											<span>Chat</span>
											<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path className='message'
												      d="M22 9.5C22 4.25539 17.076 0 11 0C4.92397 0 0 4.25539 0 9.5C0 11.7172 0.878976 13.7554 2.35531 15.3757L0.392552 17.6867C-0.128006 18.1643 0.238945 19 0.964314 19H11.4694L11.4438 18.9915C17.3064 18.7868 22 14.6167 22 9.5Z"/>
												<path className='circle'
												      d="M5.52978 10.8048C6.25088 10.8048 6.83545 10.2206 6.83545 9.49999C6.83545 8.7794 6.25088 8.19524 5.52978 8.19524C4.80869 8.19524 4.22412 8.7794 4.22412 9.49999C4.22412 10.2206 4.80869 10.8048 5.52978 10.8048Z"/>
												<path className='circle'
												      d="M11 10.8048C11.7211 10.8048 12.3057 10.2206 12.3057 9.49999C12.3057 8.7794 11.7211 8.19524 11 8.19524C10.2789 8.19524 9.69434 8.7794 9.69434 9.49999C9.69434 10.2206 10.2789 10.8048 11 10.8048Z"/>
												<path className='circle'
												      d="M16.47 10.8048C17.1911 10.8048 17.7756 10.2206 17.7756 9.49999C17.7756 8.7794 17.1911 8.19524 16.47 8.19524C15.7489 8.19524 15.1643 8.7794 15.1643 9.49999C15.1643 10.2206 15.7489 10.8048 16.47 10.8048Z"/>
											</svg>
										</Button>
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