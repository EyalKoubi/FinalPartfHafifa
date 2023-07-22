import create from "zustand";

export interface ErrorState {
  error: boolean;
  setError: (value: boolean) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
}

export const useErrorStore = create<ErrorState>((set, get: any) => ({
  error: false,
  errorMessage: "",
  setError: (isError: boolean) => set({ error: isError }),
  setErrorMessage: (newErrorMessage: string) =>
    set({ errorMessage: newErrorMessage }),
}));
