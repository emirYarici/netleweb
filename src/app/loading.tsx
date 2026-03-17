import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent">
      <div className="relative h-24 w-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-b-4 border-neutral-200 dark:border-neutral-800"></div>
        
        {/* Inner Progress Ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-r-4 border-l-4 border-black dark:border-white [animation-duration:1.5s]"></div>
        
        {/* Center Logo/Icon Placeholder */}
        <div className="absolute inset-4 flex items-center justify-center">
          <div className="h-full w-full rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
             <div className="h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center space-y-2">
        <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 italic tracking-tight">
          Lütfen bekleyin...
        </h2>
        <p className="text-sm text-neutral-500 animate-pulse">
          İşleminiz gerçekleştiriliyor
        </p>
      </div>

      {/* Decorative Gradients for Premium Look */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
