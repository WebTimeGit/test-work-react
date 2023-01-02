import Banner        from '../src/components/Banner/Banner'
import Users         from '../src/components/Users/Users'
import { DataProps } from '../src/interfaces'
import { FC }        from 'react'
import endpoints     from '../src/api/api'


const Home: FC<DataProps> = ({ data }) => {
	return (
		<>
			<Banner banner={ data.video }/>
			<Users users={ data.users }/>
		</>
	)
}

export default Home

export async function getStaticProps() {
	try {
		const result = await endpoints.getData()
		const data = result.data
		return {
			props: {
				data
			}
		}
	}
	catch (error) {
		console.log(error)
	}
}