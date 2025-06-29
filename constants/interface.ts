import { AuthError, AuthUser, Session, SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export interface IAuth {
  currentUser: AuthUser | null;
  session: Session | null;
  login: (credentials: SignInWithPasswordCredentials) => Promise<AuthError | null>;
  logout: () => Promise<AuthError | null>;
  signup: (credentials: SignUpWithPasswordCredentials) => Promise<AuthError | null>;
}