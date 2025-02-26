import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getCategoryList, getShapeLists} from '@/apis/category';
import { message } from 'antd';
import type { Category } from '@/types/category';
import { options } from 'marked';

type options = {
  label: string;
  value: string;
}

interface MenuState {
  categories: Category[];
  shapeOptions: options[];
  setCategories: (categories: Category[]) => void;
  setShapeOptions: (shape: options[]) => void;
  organizeCategories: (flatCategories: Category[]) => void;
  optionShap: (categories: Category[]) => void;
  fetchCategories: () => Promise<void>;
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      categories: [],
      shapeOptions: [],
      setCategories: (categories: Category[]) => {
        set({ categories });
      },
      setShapeOptions: (shapeOptions: options[]) => {
        set({ shapeOptions });
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
      optionShap: (categories: Category[]) => {
        const options = categories.map(item => ({
          label: item.title_en,
          value: item.title_en,
        }))
        set({ shapeOptions: options });
      },

      fetchCategories: async () => {
        try {
          const response = await getCategoryList();
          const resshape = await getShapeLists();
          const styleData = [...response.data];
          const shapeData = [...resshape.data];
          get().organizeCategories(styleData);
          get().optionShap(shapeData);
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
