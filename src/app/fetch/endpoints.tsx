const url = 'http://localhost:5017/api';

export const requestsToApi = {
	requestReviewOrder: url + '/ReviewOrder/Orders',
	requestEmailLogin: url + '/Login/LoginEmail/',
    requestUsernameLogin: url + '/Login/LoginUsername/',
	requestAdminAddUser: url + '/Admin/AddUser',
	requestAddMaterialMainGroup: url + '/AddMaterial/MainGroups',
	requestAddMaterialSubGroup: url + '/AddMaterial/SubGroups',
	requestAddMaterial: url + '/AddMaterial/AddMaterial',
	requestCartItems: url + '/Cart/Cart',
	requestAccountInformation: url + '/Profile/Profile/'
}

export const requestsToUserMaterialListPage = {
	requestGetMaterials: url + '/MaterialsPage/Materials',
	// takes id of main group
	requestGetMaterialsByMainGroup: url + '/MaterialsPage/Materials/MainGroup/',
	// takes id of sub group
	requestGetMaterialsBySubGroup: url + '/MaterialsPage/Materials/SubGroup/',
	requestPostToCart: url + '/MaterialsPage/Cart/AddToCart',
	// takes id of commercialid
	requestGetTotals: url + '/MaterialsPage/Cart/GetCartTotalValues/',
	requestGetAllMainGroups: url + '/MaterialsPage/MainGroups',
	// takes id of main group
    requestUsernameLogin: url + '/Login/LoginUsername/',
	requestAdminAddUser: url + '/Admin/AddUser',
	requestAddMaterialMainGroup: url + '/AddMaterial/MainGroups',
	requestAddMaterialSubGroup: url + '/AddMaterial/SubGroups',
	requestAddMaterial: url + '/AddMaterial/AddMaterial',
	requestGetSubGroupsByMainGroupId: url + '/MaterialsPage/SubGroups/'
}

export const requestsToProfile = {
	requestAccountInformation: 	url + '/Profile/',
	requestPutName: 			url + '/Profile/UpdateName/',
	requestPutSurname: 			url + '/Profile/UpdateSurname/',
	requestPutUsername: 		url + '/Profile/UpdateUsername/',
	requestPutCommercialTitle: 	url + '/Profile/UpdateCommercialTitle/',
	requestPutPhone: 			url + '/Profile/UpdatePhone/',
	requestPutEmail: 			url + '/Profile/UpdateEmail/',

}