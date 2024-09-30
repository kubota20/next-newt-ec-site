import { create } from "zustand";
import { ProductProps } from "@/types/types";

interface useOrderModalProps {
  isOpen: boolean;
  data?: ProductProps;
  onOpen: (data: ProductProps) => void;
  onClose: () => void;
}

export const useOrderModal = create<useOrderModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductProps) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
