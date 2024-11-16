import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/stores/cart';
import { getUserCartList, updateCartItem, createCartItem, deleteCartItem, deleteCartItemOne } from '@/apis/cart';
import item from '@/components/Common/Category/item';
interface CartStore {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;  // 新增：实时总价
  price: number;       // 新增：原总价
  discount: number;    // 新增：优惠券折扣
  couponCode: string | null; // 当前优惠券代码
  addItem: (item: CartItem) => void;
  removeItem: (product_id: string) => void;
  clearCart: () => void;
  clearCartItem: () => void;
  setQuantity: (product_id: string, quantity: number) => void;
  setSkuValue: (product_id: string, size: string) => void;
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
        // 首先过滤掉 `null` 值
        let validItems = get().items.filter((i) => i !== null);
        // 检查购物车中是否已经有该商品
        const existingItem = validItems.find((i) => i.product_id === item.product_id);
        let newItems;
        if (existingItem) {
          // 如果商品已存在，更新数量
          newItems = validItems.map((i) =>
            i.product_id === item.product_id ? { ...i, quantity: i.quantity + item.quantity } : i
          );
          setImmediate(async () => {
            await get().updateCart(item);
          });
        } else {
          // 如果商品不存在，添加新商品
          newItems = [...validItems, item];
          setImmediate(async () => {
            await get().createCart(item);
          });
        }
        set({
          items: newItems,
        })
        get().totalPriceOptions()
      },


      // 移除商品
      removeItem: (pid) => {
        const validItems = get().items.filter((i) => i.product_id === pid);
        if (validItems.length > 0) {
          const newItems = get().items.filter((item) => item.product_id !== pid);
          set({
            items: newItems,
          });
          get().totalPriceOptions()
        }
      },
      // 清空购物车
      clearCart: () => {
        set({ items: [], totalQuantity: 0, totalPrice: 0, discount: 0, couponCode: null });
      },

      clearCartItem: () => {
        const data = get
        get().deleteCart()
        get().clearCart()
      },

      // 设置商品数量
      setQuantity: (pid, quantity) => {
        // 过滤掉 `null` 值
        let validItems = get().items.filter((i) => i !== null);
        const newItems = validItems
          .map((item) =>
            item.product_id === pid ? { ...item, quantity: Math.max(0, quantity) } : item
          )
          .filter((item) => item.quantity > 0);

        const upitem = validItems.find((i) => i.product_id === pid)
        if (upitem) {
          setImmediate(async () => {
            await get().updateCart({ ...upitem, quantity: quantity });
          });
        }
        set({
          items: newItems,
        })
        get().totalPriceOptions()
      },

      setSkuValue: (pid, size) => {
        // 过滤掉 `null` 值
        let validItems = get().items.filter((i) => i !== null);

        const newItems = validItems
          .map((item) =>
            item.product_id === pid ? { ...item, size: size } : item
          )
          .filter((item) => item.quantity > 0);

        const upitem = validItems.find((i) => i.product_id === pid)
        if (upitem) {
          setImmediate(async () => {
            await get().updateCart(upitem);
          });
        }
        set({
          items: newItems,
        })
        get().totalPriceOptions()
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
        const totalPrice = get().items.reduce((total, item) => total + item.price * item.quantity, 0)
        const totalQuantity = get().items.reduce((total, item) => total + item.quantity, 0)
        const price = get().items.reduce((total, item) => total + item.old_price * item.quantity, 0);
        const total = parseFloat(totalPrice.toFixed(2))
        const p = parseFloat(price.toFixed(2))
        set({
          totalPrice: total,
          totalQuantity,
          price: p,
        })
      },
      fetchCartItems: async () => {
        const response = await getUserCartList();
        const data: CartItem[] = response.data;
        if (data?.length) {
          set({ items: data });
          get().totalPriceOptions()
        } else {
          set({ items: [] })
        }

      },
      updateCart: async (item: CartItem) => {
        const response = await updateCartItem(item);
      },
      deleteCart: async () => {
        const response = await deleteCartItem();
      },
      deleteCartOne: async (item: CartItem) => {
        const response = await deleteCartItemOne(item);
      },
      createCart: async (item: CartItem) => {
        const response = await createCartItem(item);
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
