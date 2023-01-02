import axios         from 'axios'
import { DataProps } from '../interfaces'


export const baseUrl = 'https://tz.smart-ui.pro'

const apiInstance = axios.create({
	baseURL: baseUrl,
})

const endpoints = {
	getData: async () => await apiInstance.get<DataProps>('')
}

export default endpoints