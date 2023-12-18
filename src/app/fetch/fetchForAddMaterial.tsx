import axios from 'axios'
import { requestsToApi } from './endpoints'
import Material from '../modules/Material'

export async function fetchForMainGroupsAddMaterial() {
	return axios.get(requestsToApi.requestAddMaterialMainGroup)
		.then(response => response.data)
}

export async function fetchForSubGroupsAddMaterial(value:number) {
	return axios.get(requestsToApi.requestAddMaterialSubGroup + "/" + value)
		.then(response => response.data)
}

export async function fetchForAddMaterial(material:Material) {
	try {
        const response = await axios.post(requestsToApi.requestAddMaterial, material);
        return response.data; // Assuming you want to return the response data on success
    } catch (error) {
        console.error('Error in fetchForAddMaterial:', error);
        throw error; // Rethrow the error to be handled by the calling code
    }
}