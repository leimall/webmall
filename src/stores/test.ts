import create from 'zustand'
import { persist } from 'zustand/middleware'
import {getUserCartList} from '@/apis/cart'

// 定义商品类型
interface CartItem {
  id: number
  user_id: string 
  product_id: string
  quantity: number
  stock: number
  price: number
  main_mig: string
  title: string
}

// Zustand 状态管理接口
interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  fetchCartItems: () => Promise<void>
}

// 创建购物车状态管理
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({
        items: [...state.items, item],
      })),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.product_id !== productId),
      })),
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map((item) =>
          item.product_id === productId ? { ...item, quantity } : item
        ),
      })),
      fetchCartItems: async () => {
        const response = await getUserCartList();
        const data = response.data.data;
        set({ items: data });
      },
    }),
    {
      name: 'cart-storage', // 存储到本地
      getStorage: () => localStorage, // 使用 localStorage
    }
  )
)
