const SUPABASE_URL = "https://gqkrchcgvggskgiojtvf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_iA8BBvcwRsxfUWDYIsPlhw_ULkH8ipS";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);