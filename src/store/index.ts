import { User } from 'firebase/auth';
import { create } from 'zustand';

type UserProps = User | null;

interface AppStoreProps {
  users: UserProps;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: UserProps) => void;
}

const useAppStore = create<AppStoreProps>((set) => ({
  users: null,
  setUser: (user: UserProps) => set(() => ({ users: user })),
}));

export { useAppStore };
