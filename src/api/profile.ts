import { supabase } from "../lib/supabase";

export type Profile = {
  id: string;
  nickname: string;
};

export async function getMyProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("유저 없음");

  const { data, error } = await supabase
    .from("profiles")
    .select("id, nickname")
    .eq("id", user.id)
    .maybeSingle();

  if (error) throw error;
  return data as Profile;
}
