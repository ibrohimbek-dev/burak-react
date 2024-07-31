import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

// SAVOL2 => Class'lar ichida ham hook'larni ishlata olamizmi?

class MemberService {
	private readonly path: string;

	constructor() {
		this.path = serverApi;
	}

	public async getTopUsers(): Promise<Member[]> {
		try {
			const url = this.path + "/member/top-users";

			const result = await axios.get(url);			

			return result.data;
		} catch (error) {
			console.log("Error on getTopUsers =>", error);
			throw error;
		}
	}
}

export default MemberService;
