import config from "@/config/config";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(config.CLIENT_SUPABASE_URL, config.SUPABASE_ANON_KEY);

export default supabase;