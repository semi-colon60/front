import axios from "axios";
import { requestsToUserMaterialListPage } from "../endpoints";

const fetchTotalsForUserMaterialsPage = async (commercialId: number) => {
	return (await axios.get(requestsToUserMaterialListPage.requestGetTotals + commercialId)
		.then(res => res.data));
}

export default fetchTotalsForUserMaterialsPage;