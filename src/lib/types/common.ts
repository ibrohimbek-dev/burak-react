import { MouseEvent } from "react";
import { CartItem } from "./search";

export interface T {
	[key: string]: any;
}

export interface NavbarProps {
	cartItems: CartItem[];
	anchorEl: HTMLElement | null;
	onAdd: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	onDelete: (item: CartItem) => void;
	onDeleteAll: () => void;
	setSignUpOpen: (isOpen: boolean) => void;
	setLoginOpen: (isOpen: boolean) => void;
	handleLogoutClick: (e: MouseEvent<HTMLElement>) => void;
	handleCloseLogout: () => void;
	handleLogoutRequest: () => void;
}

export interface BasketProps {
	cartItems: CartItem[];
	onAdd: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	onDelete: (item: CartItem) => void;
	onDeleteAll: () => void;
}

export interface ProductsPageProps {
	onAdd: (item: CartItem) => void;
}

export interface AuthModalProps {
	signUpOpen: boolean;
	loginOpen: boolean;
	handleSignupClose: () => void;
	handleLoginClose: () => void;
}
