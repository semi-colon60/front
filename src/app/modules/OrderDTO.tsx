import CommercialId from "./CommercialId";
import Order from "./Order";

export default interface OrderDTO {
	_order: Order;
	_commercialId: CommercialId;
}