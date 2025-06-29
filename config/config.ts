const isDevMode = process.env.NODE_ENV === "development";

const config = {
  SUPABASE_CLIENT_URL: isDevMode ? process.env.NEXT_PUBLIC_SUPABASE_DEV_URL! : process.env.NEXT_PUBLIC_SUPABASE_URL!,
  SUPABASE_SERVER_URL: isDevMode ? process.env.SUPABASE_DEV_URL! : process.env.SUPABASE_URL!,
  SUPABASE_ANON_KEY: isDevMode ? process.env.NEXT_PUBLIC_SUPABASE_DEV_ANON_KEY! : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  SUPABASE_SERVICE_ROLE_KEY: isDevMode ? process.env.SUPABASE_DEV_SERVICE_ROLE_KEY! : process.env.SUPABASE_SERVICE_ROLE_KEY!,
  SUPABASE_CLIENT_PROJECT_ID: isDevMode ? process.env.NEXT_PUBLIC_SUPABASE_DEV_PROJECT_ID! : process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID!
}

export default config;