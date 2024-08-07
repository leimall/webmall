import { create } from 'zustand';

interface ProductStore {
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedImageIndex: 0,
  setSelectedImageIndex: (index: number) => set(() => ({ selectedImageIndex: index })),
}));
