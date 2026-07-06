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

export async function updateMyProfile(newNickname: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("로그인된 유저를 찾을 수 없습니다.");

  const { error: authError } = await supabase.auth.updateUser({
    data: { nickname: newNickname },
  });
  if (authError) throw authError;

  const { error: dbError } = await supabase
    .from("profiles")
    .update({ nickname: newNickname })
    .eq("id", user.id);

  if (dbError) throw dbError;

  return { success: true };
}
