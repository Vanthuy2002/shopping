/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';
import { create } from 'zustand';

type UserProps = User | null;
interface AppStoreProps {
  users: UserProps;
  setUser: (user: UserProps) => void;
  theme: 'light' | 'dark';
  toggleTheme: (value: boolean) => void;
}

const useAppStore = create<AppStoreProps>((set) => ({
  users: null,
  setUser: (user: UserProps) => set(() => ({ users: user })),
  theme: 'light',
  toggleTheme: (value: boolean) =>
    set(() => ({ theme: value ? 'dark' : 'light' })),
}));

export { useAppStore };
