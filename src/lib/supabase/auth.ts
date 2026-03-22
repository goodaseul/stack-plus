import { SignInResponse, SignUpResponse } from "@/api/auth";
import { supabase } from "./supabase";

export async function signUp(payload: SignUpResponse) {
  const { data, error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
  });

  if (error) throw error;

  const user = data.user;
  if (!user) throw new Error("유저 생성 실패");

  const { error: profileError } = await supabase.from("profiles").insert({
    id: user.id,
    nickname: payload.nickname,
  });

  if (profileError) throw profileError;

  return user;
}

export async function signIn(payload: SignInResponse) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
