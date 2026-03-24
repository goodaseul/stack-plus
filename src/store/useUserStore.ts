import { create } from "zustand";

interface UserState {
  id: string | null;
  nickname: string | null;
  isInitialized: boolean;
  setInitialized: () => void;
  setUser: (
    user: Partial<Omit<UserState, "setUser" | "clearUser" | "setInitialized">>,
  ) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  id: null,
  nickname: null,
  isInitialized: false,
  setInitialized: () => {
    set({ isInitialized: true });
  },
  setUser: (user) => {
    set((state) => ({ ...state, ...user }));
  },
  clearUser: () => {
    set({ id: null, nickname: null, isInitialized: true });
  },
}));
