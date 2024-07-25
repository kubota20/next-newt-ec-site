import { RefreshCcw } from "lucide-react";

export const UserLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <RefreshCcw size={25} className="animate-spin" />
    </div>
  );
};
