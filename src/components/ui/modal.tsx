import Image from "next/image";

// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// lib
import { cn } from "@/lib/utils";

// type
import { ImageProps } from "@/types/types";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  image: ImageProps | null;
  children?: React.ReactNode;
}

export const Modal = ({
  title,
  description,
  isOpen,
  onClose,
  children,
  image = null,
}: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="bg-white">
        <DialogHeader>
          {image && (
            <div className="h-[300px] sm:h-[450px] border shadow-xl bg-gray-300">
              <Image
                src={image}
                alt={title}
                className="h-[300px] sm:h-[450px] object-cover"
              />
            </div>
          )}
          <div className={cn("text-cente p-2")}>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
