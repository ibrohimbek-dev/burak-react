import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasktet = () => {
	const cartJson: string | null = localStorage.getItem("cartData");
	const currentCart = cartJson ? JSON.parse(cartJson) : [];

	const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  const onAdd = (input: CartItem) => {
    // SAVOL => Nega biz 'any' type'ini ishlatyapmiz? Alternative bormi?
		const exist: any = cartItems.find((item: CartItem) => {
			return item._id === input._id;
		});

		if (exist) {
			const cartUpdate = cartItems.map((item: CartItem) => {
				return item._id === input._id
					? { ...exist, quantity: exist.quantity + 1 }
					: item;
			});

			setCartItems(cartUpdate);
			localStorage.setItem("cartData", JSON.stringify(cartUpdate));
		} else {
			const cartUpdate = [...cartItems, { ...input }];
			setCartItems(cartUpdate);
			localStorage.setItem("cartData", JSON.stringify(cartUpdate));
		}
	};

	const onRemove = (input: CartItem) => {
		const exist: any = cartItems.find((item: CartItem) => {
			return item._id === input._id;
		});

		if (exist.quantity === 1) {
			const cartUpdate = cartItems.filter((item: CartItem) => {
				return item._id !== input._id;
			});

			console.log("cartUpdate on filter =>", cartUpdate);

			setCartItems(cartUpdate);
			localStorage.setItem("cartData", JSON.stringify(cartUpdate));
		} else {
			const cartUpdate = cartItems.map((item: CartItem) => {
				return item._id === input._id
					? { ...exist, quantity: exist.quantity - 1 }
					: item;
			});

			console.log("cartUpdate on map =>", cartUpdate);

			setCartItems(cartUpdate);
			localStorage.setItem("cartData", JSON.stringify(cartUpdate));
		}
	};

	const onDelete = (input: CartItem) => {
		const cartUpdate = cartItems.filter((item: CartItem) => {
			return item._id !== input._id;
		});

		console.log("cartUpdate on delete =>", cartUpdate);

		setCartItems(cartUpdate);
		localStorage.setItem("cartData", JSON.stringify(cartUpdate));
	};

	const onDeleteAll = () => {
		setCartItems([]);
		localStorage.removeItem("cartData");
	};
	return {
		cartItems,
		onAdd,
		onRemove,
		onDelete,
		onDeleteAll,
	};
};

export default useBasktet;
