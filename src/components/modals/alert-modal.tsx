"use client";

import { useState, useEffect } from "react";

// components
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Delete"
      description="警告: 削除した場合、元には戻りません"
      isOpen={isOpen}
      onClose={onClose}
      image={null}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          キャンセル
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          削除
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
