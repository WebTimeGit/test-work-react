import Banner from '../src/components/Banner/Banner'
import Users from '../src/components/Users/Users'
import React, { useEffect, useState } from 'react';
import endpoints from '../src/api/api';
import { DataProps } from '../src/interfaces';


export default function Home() {

	const [ data, setData ] = useState<DataProps | any>({})

	useEffect(() => {
		const getItems = async () => {
			const getData = await endpoints.getData()
			setData(getData.data)
		}

		getItems()

	}, [])

	return (
		<>
			<Banner banner={ data.video }/>
			<Users users={ data.users }/>
		</>
	)
}