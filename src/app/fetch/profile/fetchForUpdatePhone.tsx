import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForUpdatePhone(userid: number, phone: string){
	// console.log('(fetchForUpdatePhone) userid: %s', userid);
	// console.log('(fetchForUpdatePhone) phone: %s', phone);
	return axios.put(requestsToProfile.requestPutPhone + userid + '?phone=' + phone)
		// .then(response => response.status);

	// return axios({
	// 	method: 'put',
	// 	url: requestsToProfile.requestPostPhone + userid,
	// 	data: phone  
	// }).then(response => response.status);
}
