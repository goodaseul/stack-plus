import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";

export default function MyMenu() {
  const { id, nickname } = useUserStore();

  return (
    <Link href="/mypage">
      <span className="block truncate">{id && nickname}</span>
    </Link>
  );
}
