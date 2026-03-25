import Button from "@/components/button/Button";
import { useWordStats } from "@/hooks/queries/words";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useUserStore } from "@/store/useUserStore";
import { useRef, useState } from "react";
import MyTooltip from "./MyTooltip";

export default function MyMenu() {
  const { id, nickname } = useUserStore();
  const { total, memo, bookmark } = useWordStats();
  const [isMyOpen, setIsMyOpen] = useState(false);

  const myWrapperRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(myWrapperRef, () => setIsMyOpen(false), isMyOpen);

  return (
    <div ref={myWrapperRef} className="relative">
      <Button
        className="w-10 sm:w-auto"
        onClick={() => setIsMyOpen((prev) => !prev)}
        variant="text_underline"
      >
        <span className="block truncate">{id && nickname}</span>
      </Button>

      {isMyOpen && (
        <MyTooltip
          nickname={nickname}
          total={total}
          memo={memo}
          bookmark={bookmark}
        />
      )}
    </div>
  );
}
