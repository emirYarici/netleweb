"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    
    // Show toast
    toast.error("Bir hata oluştu", {
      description: error.message || "Lütfen daha sonra tekrar deneyiniz.",
      duration: 5000,
    });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/30">
        <AlertCircle className="h-10 w-10 text-red-500" />
      </div>
      
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Bir şeyler yanlış gitti
      </h1>
      
      <p className="mt-2 max-w-md text-neutral-500">
        İstediğiniz işlemi şu anda gerçekleştiremiyoruz. Lütfen sayfayı yenilemeyi deneyin.
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 active:scale-95 transition-transform"
      >
        <RefreshCcw className="h-4 w-4" />
        Tekrar Dene
      </button>

      {/* Decorative Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
