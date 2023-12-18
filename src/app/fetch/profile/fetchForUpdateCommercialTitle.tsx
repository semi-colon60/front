import axios from 'axios'
import { requestsToProfile } from '../endpoints'

export default async function fetchForUpdateCommercialTitle(userid: number, commercialTitle: string){
	return axios
	.put(requestsToProfile.requestPutCommercialTitle + userid + '?commercialTitle=' + commercialTitle)
}
