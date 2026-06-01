import { supabase } from "@/lib/supabase";
import { PublicWordRequest } from "./types/words";

export async function getPublicWords(): Promise<PublicWordRequest[]> {
  const { data, error } = await supabase
    .from("words")
    .select(`*, profiles(nickname)`)
    .eq("is_public", true);

  console.log("=== getPublicWords ===");
  console.log("data:", data);
  console.log("error:", error);
  if (error) throw error;

  return data ?? [];
}
