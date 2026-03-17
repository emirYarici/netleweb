// Example logic for your /auth/confirm page

import { createClient } from "@supabase/supabase-js";

export default async function ConfirmPage({ searchParams }) {
  const token_hash = searchParams.token;
  const type = searchParams.type; // e.g., 'signup' or 'recovery'
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type,
    });

    if (!error) {
      // Logic success! Redirect to your app using a Deep Link
      // This will trigger your React Native app to open
      window.location.href = "netleapp://login-success";
    }
  }

  return <div>İşleminiz onaylanıyor...</div>;
}
