import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Order, OrderProduct } from '@/types/stores/orders';

interface OrderState {
  order: Order | null;
  addProduct: (product: OrderProduct) => void;
  createOrder: (order: Order) => void;
  removeProduct: (productId: string) => void;
  updateOrder: (order: Partial<Order>) => void;
  clearOrder: () => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      order: null,
      addProduct: (product) => set((state) => {
        if (!state.order) return { order: null };
        const updatedProducts = [...state.order.products, product];
        const updatedTotalPrice = updatedProducts.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return {
          order: {
            ...state.order,
            products: updatedProducts,
            totalPrice: updatedTotalPrice,
          },
        };
      }),
      createOrder: (order: Order) => set(() => ({ order })),
      removeProduct: (productId) => set((state) => {
        if (!state.order) return { order: null };
        const updatedProducts = state.order.products.filter((p) => p.product_id !== productId);
        const updatedTotalPrice = updatedProducts.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return {
          order: {
            ...state.order,
            products: updatedProducts,
            totalPrice: updatedTotalPrice,
          },
        };
      }),
      updateOrder: (order: Partial<Order>) => set((state) => ({
        order: state.order ? {
          ...state.order,
          ...order,
        } : null,
      })),
      clearOrder: () => set(() => ({
        order: null,
      })),
    }),
    {
      name: 'order-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
