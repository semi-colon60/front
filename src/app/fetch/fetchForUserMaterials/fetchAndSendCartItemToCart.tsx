import axios from "axios"
import { requestsToUserMaterialListPage } from "@/app/fetch/endpoints"
import CartItemDTO from "@/app/modules/CartItemDTO";

const fetchAndSendCartItemToCart = async (cartItem: CartItemDTO) => {
	return axios.post(requestsToUserMaterialListPage.requestPostToCart, cartItem)
		.then(response => response.data);
}

export default fetchAndSendCartItemToCart;