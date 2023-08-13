import { create } from 'zustand';

const useAppStore = create(() => ({
  users: {},
}));

export { useAppStore };
