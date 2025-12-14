"use client";
import { useState } from "react";

import { ListType } from "@/types/list";
import WordForm from "./_components/WordForm";
import WordList from "./_components/WordList";

export default function WordPopup() {
  const [lists, setLists] = useState<ListType[]>([]);

  const handleAdd = (item: ListType) => {
    setLists((prev) => [...prev, item]);
  };

  const handleDelete = (id: number) => {
    setLists((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <section className="w-full max-w-5xl px-10 py-20 m-auto sm:px-15">
      <WordForm onAdd={handleAdd} />
      <WordList lists={lists} onDelete={handleDelete} />
    </section>
  );
}
