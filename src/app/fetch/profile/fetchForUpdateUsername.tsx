import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForUpdateUsername(userid: number, username: string){
	return axios
	.put(requestsToProfile.requestPutUsername + userid + '?username=' + username)
}
