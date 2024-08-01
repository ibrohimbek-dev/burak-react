import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";

class ProductService {
	private readonly path: string;

	constructor() {
		this.path = serverApi;
	}

	public async getAllProducts(input: ProductInquiry): Promise<Product[]> {
		try {
			let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;

			if (input.productCollection) {
				url += `&productCollection=${input.productCollection}`;
			}

			if (input.search) {
				url += `&search=${input.search}`;
			}

			const result = await axios.get(url);

			return result.data;
		} catch (err) {
			throw err;
		}
	}
}

export default ProductService;
