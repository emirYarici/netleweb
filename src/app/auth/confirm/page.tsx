import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ token_hash?: string; type?: string }>;
}) {
  const params = await searchParams;
  const token_hash = params.token_hash;
  const type = params.type;

  if (!token_hash || !type) {
    throw new Error(
      "Geçersiz doğrulama bağlantısı. Lütfen e-postanızı kontrol edin.",
    );
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );

  const { error } = await supabase.auth.verifyOtp({
    token_hash,
    type: type as any,
  });

  if (error) {
    throw new Error(error.message);
  }

  // On success, we can redirect to a success page or use a meta refresh/script for deep link
  // Since redirect() is for URLs and netleapp:// is a custom scheme, it might not work directly with Next.js redirect().
  // Redirect to the confirmation-success page which is already present in the directory structure.
  redirect("/confirmation-success");
}
