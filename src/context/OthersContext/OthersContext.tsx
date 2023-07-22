import create from "zustand";

export interface OthersState {
  messageToUser: string;
  setMessageToUser: (value: string) => void;
}

export const useOthersStore = create<OthersState>((set, get: any) => ({
  messageToUser: "wait for you bro..",
  setMessageToUser: (message: string) => set({ messageToUser: message }),
}));
