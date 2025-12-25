"use client";

import { sendEmail } from "@/server-actions/send-email";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export const Waitlist = () => {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Harika! E-posta adresin kaydedildi. 🎉");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Bekleme Listesine Katıl
          </h2>
          <p className="text-lg text-gray-600">
            NETLE'nin lansmanından haberdar olmak için e-posta adresini bırak
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            action={formAction}
          >
            <input
              type="email"
              name="email"
              placeholder="E-posta adresin"
              required
              disabled={isPending}
              className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isPending}
              className="h-12 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Kaydediliyor..." : "Katıl"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
