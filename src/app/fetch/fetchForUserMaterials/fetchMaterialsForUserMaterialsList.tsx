import axios from 'axios'
import { requestsToUserMaterialListPage } from '../endpoints'

const fetchMaterialsForUserMaterialsList = async (mainGroupId?: number, subGroupId?: number) => {
	if (mainGroupId && subGroupId)
		return (await axios.get(requestsToUserMaterialListPage.requestGetMaterialsBySubGroup + subGroupId)
		.then(res => res.data));
	else if (mainGroupId)
		return (await axios.get(requestsToUserMaterialListPage.requestGetMaterialsByMainGroup + mainGroupId)
			.then(res => res.data));
	else
		return (await axios.get(requestsToUserMaterialListPage.requestGetMaterials)
			.then(res => res.data));
}

export default fetchMaterialsForUserMaterialsList;
