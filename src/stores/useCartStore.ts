import { Product } from '@/types/products';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/stores/cart';

interface CartStore {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;  // 新增：实时总价
  discount: number;    // 新增：优惠券折扣
  couponCode: string | null; // 当前优惠券代码
  addItem: (item: CartItem) => void;
  removeItem: (product_id: string) => void;
  clearCart: () => void;
  setQuantity: (product_id: string, quantity: number) => void;
  applyCoupon: (couponCode: string, discount: number) => void; // 新增：应用优惠券
  removeCoupon: () => void;                                    // 新增：移除优惠券
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalQuantity: 0,
      totalPrice: 0,   // 初始化总价
      discount: 0,     // 初始化折扣
      couponCode: null, // 没有优惠券时为null

      // 添加商品
      addItem: (item) => set((state) => {
        // 首先过滤掉 `null` 值
        let validItems = state.items.filter((i) => i !== null);

        // 检查购物车中是否已经有该商品
        const existingItem = validItems.find((i) => i.product_id === item.product_id);

        let newItems;
        if (existingItem) {
          // 如果商品已存在，更新数量
          newItems = validItems.map((i) =>
            i.product_id === item.product_id ? { ...i, quantity: i.quantity + item.quantity } : i
          );
        } else {
          // 如果商品不存在，添加新商品
          newItems = [...validItems, item];
        }

        // 计算总价
        const totalPrice = newItems.reduce((total, item) => total + item.price * item.quantity, 0);

        return {
          items: newItems,
          totalQuantity: newItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice: totalPrice - get().discount,  // 实时更新总价（考虑折扣）
        };
      }),


      // 移除商品
      removeItem: (pid) => set((state) => {
        const newItems = state.items.filter((item) => item.product_id !== pid);
        const totalPrice = newItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return {
          items: newItems,
          totalQuantity: newItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice: totalPrice - get().discount,  // 实时更新总价（考虑折扣）
        };
      }),

      // 清空购物车
      clearCart: () => set({ items: [], totalQuantity: 0, totalPrice: 0, discount: 0, couponCode: null }),

      // 设置商品数量
      setQuantity: (pid, quantity) => set((state) => {
        // 过滤掉 `null` 值
        let validItems = state.items.filter((i) => i !== null);

        const newItems = validItems
          .map((item) =>
            item.product_id === pid ? { ...item, quantity: Math.max(0, quantity) } : item
          )
          .filter((item) => item.quantity > 0);

        const totalPrice = newItems.reduce((total, item) => total + item.price * item.quantity, 0);

        return {
          items: newItems,
          totalQuantity: newItems.reduce((total, item) => total + item.quantity, 0),
          totalPrice: totalPrice - get().discount,  // 实时更新总价（考虑折扣）
        };
      }),



      // 应用优惠券
      applyCoupon: (couponCode, discount) => {
        const totalPrice = get().items.reduce((total, item) => total + item.price * item.quantity, 0);
        set({
          couponCode: couponCode,
          discount: discount,
          totalPrice: totalPrice - discount,  // 应用优惠券后的价格
        });
      },

      // 移除优惠券
      removeCoupon: () => {
        const totalPrice = get().items.reduce((total, item) => total + item.price * item.quantity, 0);
        set({
          couponCode: null,
          discount: 0,
          totalPrice,  // 移除优惠券，恢复原价
        });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
