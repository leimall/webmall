import { create } from 'zustand';

interface PathStore {
  redirectPath: string;
  setRedirectPath: (path: string) => void;
}

export const usePathStore = create<PathStore>((set) => ({
  redirectPath: '/',
  setRedirectPath: (path: string) => set({ redirectPath: path }),
}));

