import { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export function subscribeAuthChange(
  callback: (session: Session | null) => void
) {
  return supabase.auth.onAuthStateChange((_, session) => {
    callback(session);
  });
}
