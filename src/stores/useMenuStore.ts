import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getCategoryList } from '@/apis/category';
import { message } from 'antd';
import type { Category } from '@/types/category';
import { ChildProcess } from 'child_process';
import { get } from 'http';
import { url } from 'inspector';

interface MenuState {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  organizeCategories: (flatCategories: Category[]) => void;
  fetchCategories: () => Promise<void>;
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      categories: [],
      setCategories: (categories: Category[]) => {
        set({ categories });
      },
      organizeCategories: (flatCategories: Category[]) => {
        const organizedCategories = flatCategories.filter(cat => cat.parent_id === 0).map(mainCat => ({
          ...mainCat,
          url: mainCat.title_en.toLowerCase().replace(/\s+/g, '_'), // 生成 url 字段
          children: flatCategories.filter(subCat => subCat.parent_id === mainCat.ID).map(child => ({
            ...child,
            url: child.title_en.toLowerCase().replace(/\s+/g, '_'), // 生成 url 字段
          }))
        }));
        set({ categories: organizedCategories });
      },

      fetchCategories: async () => {
        try {
          const response = await getCategoryList();
          get().organizeCategories(response.data);
        } catch (error) {
          message.error("Failed to fetch categories");
        }
      },
    }),
    {
      name: 'menu-storage',
      storage: createJSONStorage(() => {
        // 检查 localStorage 是否可用
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => { },
          removeItem: () => { },
        };
      }),
    }
  )
);

export default useMenuStore;
