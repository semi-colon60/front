import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForUpdateEmail(userid: number, email: string){
	return axios.put(requestsToProfile.requestPutEmail + userid + '?email=' + email)
		// .then(response => response.status);
}
