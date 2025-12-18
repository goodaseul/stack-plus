import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");

  let query = supabase
    .from("words")
    .select("*")
    .order("created_at", { ascending: false });

  if (filter === "hasMemo") {
    query = query.not("memo", "is", null);
  }

  if (filter === "noMemo") {
    query = query.is("memo", null);
  }

  if (filter === "bookmarked") {
    query = query.eq("bookmarked", true);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
