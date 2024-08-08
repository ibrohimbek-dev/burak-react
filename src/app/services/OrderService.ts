import axios from "axios";
import { serverApi } from "../../lib/config";
import { Order, OrderInquiry, OrderItemInput } from "../../lib/types/order";
import { CartItem } from "../../lib/types/search";

class OrderService {
	private readonly path: string;

	constructor() {
		this.path = serverApi;
	}

	public async createOrder(input: CartItem[]): Promise<Order> {
		try {
			const orderItems: OrderItemInput[] = input.map((cartItem: CartItem) => {
				return {
					productId: cartItem._id,
					itemQuantity: cartItem.quantity,
					itemPrice: cartItem.price,
				};
			});

			const url = `${this.path}/order/create`;

			const result = await axios.post(url, orderItems, {
				withCredentials: true,
			});
			console.log("result on createOrder =>", result);
			return result.data;
		} catch (error) {
			console.log("Error on createOrder =>", error);
			throw error;
		}
	}

	public async getMyOrders(input: OrderInquiry): Promise<Order[]> {
		try {
			// axios.defaults.withCredentials = true;

			const url = `${this.path}/order/all`;
			const query = `?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;

			const result = await axios.get(url + query, { withCredentials: true });

			console.log("result on getMyOrders =>", result);

			return result.data;
		} catch (error) {
			console.log("Error on getMyOrders =>", error);
			throw error;
		}
	}
}

export default OrderService;
