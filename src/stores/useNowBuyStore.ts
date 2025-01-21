import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware'

// Zustand 状态管理接口
interface NowBuyState {
  orderId: string
  update: (orderId: string) => void
}

// 创建购物车状态管理
export const useNowBuyStore = create<NowBuyState>()(
  persist(
    (set) => ({
      orderId: '',
      update: (orderId) => (
        set(() => ({ orderId }))
      )
    }),
    {
      name: 'nowbuy-storage', // 存储到本地
      storage: createJSONStorage(() => localStorage), // 使用 localStorage
    }
  )
)
