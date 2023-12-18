import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForAccountInformation(userid: number){
	return axios.get(requestsToProfile.requestAccountInformation + userid)
		.then(response => response.data);
}
