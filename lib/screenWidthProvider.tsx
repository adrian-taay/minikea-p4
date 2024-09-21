import { create } from "zustand";

type BearStateType = {
  bears: number;
};

type BearActionType = {
  increasePopulation: (bears: BearStateType["bears"]) => void;
  removeAllBears: (bears: BearStateType["bears"]) => void;
  updateBears: (bears: BearStateType["bears"]) => void;
};

export const useStore = create<BearStateType & BearActionType>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
