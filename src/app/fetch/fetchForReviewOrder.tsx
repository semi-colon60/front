import axios from 'axios'
import { requestsToApi } from './endpoints'

export default async function fetchForReviewOrder(){
	return axios.get(requestsToApi.requestReviewOrder)
		.then(response => response.data);
}
