import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/stores/cart';

interface CardStore {
	items: CartItem[];
	totalQuantity: number;
	addItem: (item: CartItem) => void;
	removeItem: (id: number) => void;
	clearCart: () => void;
	addToCard: () => void;
	setQuantity: (id: number, quantity: number) => void;
}



export const useCartStore = create<CardStore>()(
	persist((set, get) => ({
		items: [],
		totalQuantity: 0,
		addItem: (item) => set((state) => {
			const existingItem = state.items.find((i) => i.ID === item.ID);
			let newItems;
			if (existingItem) {
				newItems = state.items.map((i) =>
					i.ID === item.ID ? { ...i, quantity: i.quantity + item.quantity } : i
				);
			} else {
				newItems = [...state.items, item];
			}
			return {
				items: newItems,
				totalQuantity: newItems.reduce((total, item) => total + item.quantity, 0),
			};
		}),
		removeItem: (ID) => set((state) => {
			const newItems = state.items.filter((item) => item.ID !== ID);
			return {
				items: newItems,
				totalQuantity: newItems.reduce((total, item) => total + item.quantity, 0),
			};
		}),
		clearCart: () => set({ items: [], totalQuantity: 0 }),
		addToCard: () => set((state) => ({ totalQuantity: state.totalQuantity + 1 })),
		setQuantity: (ID, quantity) => set((state) => {
			const newItems = state.items.map((item) =>
				item.ID === ID ? { ...item, quantity: Math.max(0, quantity) } : item).filter(item => item.quantity > 0);
			return {
				items: newItems,
				totalQuantity: newItems.length,
			};
		}),
	}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);


