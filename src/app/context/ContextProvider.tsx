import { FC, ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobals";

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const cookies = new Cookies();

	if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

	const memberData = localStorage.getItem("memberData")
		? JSON.parse(localStorage.getItem("memberData") as string)
		: null;

	const [authMember, setAuthMember] = useState<Member | null>(memberData);

	console.log(" ======================== verifiying ======================== ");

	return (
		<GlobalContext.Provider value={{ authMember, setAuthMember }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
