import { supabase } from "./supabase/supabase";

export type Profile = {
  id: string;
  nickname: string;
};

export async function getMyProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, nickname")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data as Profile;
}
