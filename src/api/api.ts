import axios         from 'axios'
import { DataProps } from '../interfaces';



const apiInstance = axios.create({
	baseURL: 'https://tz.smart-ui.pro/',
})

const endpoints = {
	getData: () => apiInstance.get<any>('')
}

export default endpoints