import { Banner }              from '../components/Banner/BannerProps';
import { TypeUser } from '../components/Users/UserProps';

type TypeData = {
	users: TypeUser[]
	video: Banner
}


export type DataProps = {
	data:TypeData
}