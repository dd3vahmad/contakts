import config from "@/config/config";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(config.SUPABASE_CLIENT_URL, config.SUPABASE_ANON_KEY);

export default supabase;