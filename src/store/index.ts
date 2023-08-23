/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';
import { CartProps } from 'src/utils/types';
import { create } from 'zustand';

type UserProps = User | null;
interface AppStoreProps {
  users: UserProps;
  setUser: (user: UserProps) => void;
  theme: 'Light' | 'Dark';
  toggleTheme: (value: boolean) => void;
  carts: CartProps | null;
  setCarts: (data: CartProps) => void;
}

const useAppStore = create<AppStoreProps>((set) => ({
  users: null,
  setUser: (user: UserProps) => set(() => ({ users: user })),
  theme: 'Light',
  toggleTheme: (value: boolean) =>
    set(() => ({ theme: value ? 'Dark' : 'Light' })),
  carts: null,
  setCarts: (data: CartProps) => set(() => ({ carts: data })),
}));

export { useAppStore };
