import { create } from 'zustand';

interface ProductStore {
  adImageIndex: number;
  setAdImageIndex: (index: number) => void;
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  adImageIndex: 0,
  selectedImageIndex: 0,
  setAdImageIndex: (index: number) => set({ adImageIndex: index }),
  setSelectedImageIndex: (index: number) => set(() => ({ selectedImageIndex: index })),
}));