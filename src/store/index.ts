/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';
import { create } from 'zustand';

type UserProps = User | null;
interface AppStoreProps {
  users: UserProps;
  setUser: (user: UserProps) => void;
}

const useAppStore = create<AppStoreProps>((set) => ({
  users: null,
  setUser: (user: UserProps) => set(() => ({ users: user })),
}));

export { useAppStore };
