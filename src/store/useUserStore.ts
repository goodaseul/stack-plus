import { create } from "zustand";

interface UserState {
  id: string | null;
  nickname: string | null;
  isInitialized: boolean;
  setUser: (
    user: Partial<Omit<UserState, "setUser" | "clearUser" | "setInitialized">>,
  ) => void;
  clearUser: () => void;
  setInitialized: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  id: null,
  nickname: null,
  isInitialized: false,
  setUser: (user) => {
    set((state) => ({ ...state, ...user }));
  },
  clearUser: () => {
    set({ id: null, nickname: null, isInitialized: true });
  },
  setInitialized: () => {
    set({ isInitialized: true });
  },
}));
