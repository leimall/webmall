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
        const shippingFee = updatedTotalPrice < 69 ? 10 : 0;
        return {
          order: {
            ...state.order,
            products: updatedProducts,
            totalPrice: updatedTotalPrice,
            shippingFee,
            grandTotal: updatedTotalPrice + shippingFee,
          },
        };
      }),
      createOrder: (order: Order) => {
        const totalPrice = order.products.reduce((acc, p) => acc + p.price * p.quantity, 0);
        const shippingFee = totalPrice < 69 ? 10 : 0;
        const grandTotal = totalPrice + shippingFee;
        set(() => ({
          order: {
            ...order,
            totalPrice,
            shippingFee,
            grandTotal,
          },
        }));
      },
      removeProduct: (productId) => set((state) => {
        if (!state.order) return { order: null };
        const updatedProducts = state.order.products.filter((p) => p.product_id !== productId);
        const updatedTotalPrice = updatedProducts.reduce((acc, p) => acc + p.price * p.quantity, 0);
        const shippingFee = updatedTotalPrice < 69 ? 10 : 0;
        return {
          order: {
            ...state.order,
            products: updatedProducts,
            totalPrice: updatedTotalPrice,
            shippingFee,
            grandTotal: updatedTotalPrice + shippingFee,
          },
        };
      }),
      updateOrder: (order: Partial<Order>) => set((state) => {
        if (!state.order) return { order: null };
        const updatedOrder = {
          ...state.order,
          ...order,
        };
        const totalPrice = updatedOrder.products.reduce((acc, p) => acc + p.price * p.quantity, 0);
        const shippingFee = totalPrice < 169 ? 10 : 0;
        return {
          order: {
            ...updatedOrder,
            totalPrice,
            shippingFee,
            grandTotal: totalPrice + shippingFee,
          },
        };
      }),
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