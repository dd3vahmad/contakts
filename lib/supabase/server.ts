import config from "@/config/config";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const c = await cookies();

const createSupabaseClient = () => {
  const supabase = createServerClient(config.SERVER_SUPABASE_URL, config.SUPABASE_SERVICE_ROLE_KEY, { cookies:c })

  return supabase;
}

export default createSupabaseClient;