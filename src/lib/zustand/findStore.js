import { create } from 'zustand';

export const useFindStore = create((set) => ({
  submit: false,
  Click: () => set({ submit: true }),
}));

export const useActiveTabStore = create((set) => ({
  activeTab: 'id',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
