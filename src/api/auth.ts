import { supabase } from "@/lib/supabase";
export async function signUp(
  email: string,
  password: string,
  nickname: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: nickname,
      },
    },
  });

  if (error) {
    if (error.code === "user_already_exists" || error.status === 422) {
      throw new Error("DUPLICATE_EMAIL");
    }
    throw new Error("AUTH_FAILED");
  }

  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  if (!data.session) {
    throw new Error("로그인 세션 생성 실패");
  }

  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
}
