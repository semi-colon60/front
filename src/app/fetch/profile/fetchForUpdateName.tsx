import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForUpdateName(userid: number, name: string){
	return axios
	.put(requestsToProfile.requestPutName + userid + '?name=' + name)
	// .then(response => response.data);
}
