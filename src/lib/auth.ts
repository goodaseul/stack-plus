import { supabase } from "./supabase/supabase";

export async function signUp(
  email: string,
  password: string,
  nickname: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  const user = data.user;
  if (!user) throw new Error("유저 생성 실패");

  const { error: profileError } = await supabase.from("profiles").insert({
    id: user.id,
    nickname,
  });

  if (profileError) throw profileError;

  return user;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
