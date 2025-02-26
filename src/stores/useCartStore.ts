import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/stores/cart';
import { getUserCartList, updateCartItem, createCartItem, deleteCartItem, deleteCartItemOne } from '@/apis/cart';
import type { pid } from 'process';
import { getUniqueId } from '@/utils/unique';
interface CartStore {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;  // 新增：实时总价
  price: number;       // 新增：原总价
  discount: number;    // 新增：优惠券折扣
  couponCode: string | null; // 当前优惠券代码
  addItem: (item: CartItem) => void;
  removeItem: (unique_id: string) => void;
  clearCart: () => void;
  clearCartItem: () => void;
  setQuantity: (unique_id: string, quantity: number) => void;
  setSkuValue: (unique_id: string, size: string) => void;
  applyCoupon: (couponCode: string, discount: number) => void; // 新增：应用优惠券
  removeCoupon: () => void;                                  // 新增：移除优惠券
  totalPriceOptions: () => void;
  fetchCartItems: () => Promise<void>;
  updateCart: (item: CartItem) => Promise<void>;
  deleteCart: () => Promise<void>;
  deleteCartOne: (item: CartItem) => Promise<void>;
  createCart: (item: CartItem) => Promise<void>;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalQuantity: 0,
      totalPrice: 0,   // 初始化总价
      price: 0,        // 初始化原总价
      discount: 0,     // 初始化折扣
      couponCode: null, // 没有优惠券时为null

      // 添加商品
      addItem: (item) => {
        const validItems = get().items.filter(Boolean);
        const existingIndex = validItems.findIndex(i => i.unique_id === item.unique_id );

        let newItems = [...validItems];
        if (existingIndex > -1) {
          newItems[existingIndex].quantity += item.quantity;
          setImmediate(() => get().updateCart(newItems[existingIndex]));
        } else {
          newItems.push(item);
          setImmediate(() => get().createCart(item));
        }

        set({ items: newItems });
        get().totalPriceOptions();
      },
 
      // 移除商品
      removeItem: (unid) => {
        const newItems = get().items.filter(item => !(item.unique_id === unid ));
        set({ items: newItems });
        get().totalPriceOptions();
      },
      // 清空购物车
      clearCart: () => {
        set({ items: [], totalQuantity: 0, totalPrice: 0, discount: 0, couponCode: null });
      },

      clearCartItem: () => {
        get().deleteCart()
        get().clearCart()
      },

      // 设置商品数量
      setQuantity: (unid, quantity) => {
        let validItems = get().items.filter(i => i !== null);
        const newItems = validItems.map(item =>
          (item.unique_id === unid) ? { ...item, quantity: Math.max(0, quantity) } : item
        ).filter(item => item.quantity > 0);
        // 更新后端
        const upitem = validItems.find(i => i.unique_id === unid);
        if (upitem) {
          setImmediate(async () => {
            await get().updateCart({ ...upitem, quantity });
          });
        }
        set({ items: newItems });
        get().totalPriceOptions();
      },

      setSkuValue: (unid, size) => {
        const items = get().items.map(i => ({...i})); // 深拷贝
        const index = items.findIndex(i => i.unique_id === unid);
        if (index === -1) return;
        items[index].size = size;
        set({ items });
        setImmediate(() => get().updateCart(items[index]));
        get().totalPriceOptions();
      },

      // 应用优惠券
      applyCoupon: (couponCode, discount) => {
        set({
          couponCode: couponCode,
          discount: discount,
        });
        get().totalPriceOptions()
      },

      // 移除优惠券
      removeCoupon: () => {
        set({
          couponCode: null,
          discount: 0,
        });
        get().totalPriceOptions()
      },
      totalPriceOptions: () => {
        const { items, discount } = get();
        const baseTotal = items.reduce((t, i) => t + i.price * i.quantity, 0);
        set({
          totalPrice: parseFloat((baseTotal * (1 - discount)).toFixed(2)),
          price: parseFloat(baseTotal.toFixed(2)),
          totalQuantity: items.reduce((t, i) => t + i.quantity, 0)
        });
        // const totalPrice = get().items.reduce((total, item) => total + item.price * item.quantity, 0)
        // const totalQuantity = get().items.reduce((total, item) => total + item.quantity, 0)
        // const price = get().items.reduce((total, item) => total + item.old_price * item.quantity, 0);
        // const total = parseFloat(totalPrice.toFixed(2))
        // const p = parseFloat(price.toFixed(2))
        // set({
        //   totalPrice: total,
        //   totalQuantity,
        //   price: p,
        // })
      },
      fetchCartItems: async () => {
        const response = await getUserCartList();
        const data: CartItem[] = response.data;
        if (data?.length) {
          const itemsValid = data.map(item => ({
            ...item,
            unique_id: getUniqueId(item.product_id, item.size)
          })); 
          set({ items: itemsValid });
          get().totalPriceOptions()
        } else {
          set({ items: [] })
        }
      },
      updateCart: async (item: CartItem) => {
         await updateCartItem(item);
      },
      deleteCart: async () => {
        await deleteCartItem();
      },
      deleteCartOne: async (item: CartItem) => {
        await deleteCartItemOne(item);
      },
      createCart: async (item: CartItem) => {
        await createCartItem(item);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
