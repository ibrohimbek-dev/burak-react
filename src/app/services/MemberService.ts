import axios from "axios";
import { serverApi } from "../../lib/config";
import {
	LoginInput,
	Member,
	MemberInput,
	MemberUpdateInput,
} from "../../lib/types/member";

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

	public async getRestaurant(): Promise<Member> {
		try {
			const url = this.path + "/member/restaurant";
			const result = await axios.get(url);

			const restaurant: Member = result.data;
			return restaurant;
		} catch (error) {
			throw error;
		}
	}

	public async userSignUp(input: MemberInput): Promise<Member> {
		try {
			const url = this.path + "/member/signup";
			const result = await axios.post(url, input, { withCredentials: true });

			const member: Member = result.data.member;
			localStorage.setItem("memberData", JSON.stringify(member));

			return member;
		} catch (err) {
			throw err;
		}
	}

	public async userLogin(input: LoginInput): Promise<Member> {
		try {
			const url = this.path + "/member/login";
			const result = await axios.post(url, input, { withCredentials: true });

			const member: Member = result.data.member;

			localStorage.setItem("memberData", JSON.stringify(member));

			return member;
		} catch (err) {
			throw err;
		}
	}

	public async userLogout(): Promise<void> {
		try {
			const url = this.path + "/member/logout";
			const result = await axios.post(url, {}, { withCredentials: true });

			console.log("userLogout =>", result);

			localStorage.removeItem("memberData");
		} catch (err) {
			console.log("Error on userLogout =>", err);
			throw err;
		}
	}

	// Later uncomment this line below!
	public async updateMember(input: MemberUpdateInput): Promise<Member> {
		try {
			// SAVOL => Nega shu qismida 'yoki empty string' mantig'ini qo'yib ketyapmiz?

			const formData = new FormData();
			formData.append("memberNick", input.memberNick || "");
			formData.append("memberPhone", input.memberPhone || "");
			formData.append("memberAddress", input.memberAddress || "");
			formData.append("memberDesc", input.memberDesc || "");

			formData.append("memberImage", input.memberImage || "");

			// SAVOL => url to'g'ridan - to'g'ri qo'yildi? this.path emas?
			const result = await axios(`${this.path}/member/update`, {
				method: "POST",
				data: formData,
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const member: Member = result.data;
			localStorage.setItem("memberData", JSON.stringify(member));
			return member;
		} catch (error) {
			console.log("Error on updateMember =>", error);
			throw error;
		}
	}
}

export default MemberService;
