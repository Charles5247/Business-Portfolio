// Supabase project configuration.
// Replace these two values with your own Supabase project's URL and anon public key.
// Find them in: Supabase Dashboard -> Project Settings -> API
//
// Until you replace the placeholders below, the quote form will detect them and show
// a clear setup message instead of silently failing.

export const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
export const SUPABASE_ANON_KEY = "YOUR-SUPABASE-ANON-PUBLIC-KEY";

export const SUPABASE_CONFIGURED =
  !SUPABASE_URL.includes("YOUR-PROJECT-REF") &&
  !SUPABASE_ANON_KEY.includes("YOUR-SUPABASE-ANON-PUBLIC-KEY");
