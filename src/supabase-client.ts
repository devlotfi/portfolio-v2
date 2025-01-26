import { createClient } from "@supabase/supabase-js";
import { Database } from "./__generated__/database.types";

export const supabaseClient = createClient<Database>(import.meta.env.VITE_SUPABASE_PROJECT_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);