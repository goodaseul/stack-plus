import { supabase } from "@/lib/supabase";
import { PublicWordRequest } from "./types/words";

export async function getPublicWords(): Promise<PublicWordRequest[]> {
  const { data, error } = await supabase
    .from("words")
    .select(`*, profiles(nickname)`)
    .eq("is_public", true);

  console.log(JSON.stringify(data, null, 2)); // 👈 추가

  if (error) throw error;

  return data ?? [];
}
