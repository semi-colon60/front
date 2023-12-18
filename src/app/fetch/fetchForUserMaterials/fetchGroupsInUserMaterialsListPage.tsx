import axios from "axios"
import { requestsToUserMaterialListPage } from "../endpoints"

const fetchGroupsInUserMaterialsListPage = async (mainGroupId?: number) => {
	if (!mainGroupId)
		return (await axios.get(requestsToUserMaterialListPage.requestGetAllMainGroups)
			.then(res => res.data));
	// else if (props.mainGroup)
	return (await axios.get(requestsToUserMaterialListPage.requestGetSubGroupsByMainGroupId + mainGroupId)
		.then(res => res.data));
}

export default fetchGroupsInUserMaterialsListPage;
