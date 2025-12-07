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
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

// // 로그인 후 닉네임 가져오기
// const { data: { user } } = await supabase.auth.getUser();
// const nickname = user?.user_metadata?.display_name;

// // 또는
// const { data: { session } } = await supabase.auth.getSession();
// const nickname = session?.user?.user_metadata?.display_name;
