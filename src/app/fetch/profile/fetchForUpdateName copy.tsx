import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForUpdateSurname(userid: number, surname: string){
	return axios
	.put(requestsToProfile.requestPutSurname + userid + '?surname=' + surname)
}
