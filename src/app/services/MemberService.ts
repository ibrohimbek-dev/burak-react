import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

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
      console.log("Error on userLogout =>", err)
			throw err;
		}
	}
}

export default MemberService;
