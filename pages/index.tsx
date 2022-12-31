import Banner        from '../src/components/Banner/Banner'
import Users         from '../src/components/Users/Users'
import { DataProps } from '../src/interfaces';
import { FC }        from 'react';



const Home:FC<DataProps | any> = ({data}) => {
	return (
		<>
			<Banner banner={ data.video }/>
			<Users users={ data.users }/>
		</>
	)
}

export default Home

export async function getStaticProps() {
	const res = await fetch('https://tz.smart-ui.pro/');
	const response = await res.json()
	return {
		props:{
			data:response,
		}
	}
}