"use client";
import { useState } from "react";
import WordForm from "./_components/word/WordForm";
import WordList from "./_components/word/WordList";
import { ListType } from "@/types/list";
import Link from "next/link";

export default function MainPage() {
  const [lists, setLists] = useState<ListType[]>([]);

  const handleAdd = (item: ListType) => {
    setLists((prev) => [...prev, item]);
  };

  const handleDelete = (id: number) => {
    setLists((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <>
      {/* 헤더 */}
      <header className="grid grid-cols-2 px-10 py-5  items-center font-permanent-marker bg-main ">
        <h1 className="text-4xl font-semibold transition-all hover:tracking-widest">
          <Link href="/" className="relative w-fit">
            Stack <span className="absolute text-2xl -right-4 -top-1">🐾</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-x-5 justify-end items-center ">
            <li className="hover:tracking-widest transition-all">
              <Link href="/">Home 🐾</Link>
            </li>
            <li className="hover:tracking-widest transition-all">
              <Link href="/">Game </Link>
            </li>
            <li className="hover:tracking-widest transition-all">
              <Link href="/">My page </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* 헤더 */}

      <main className="w-full max-w-5xl px-10 py-20 m-auto sm:px-15">
        <WordForm onAdd={handleAdd} />
        <WordList lists={lists} onDelete={handleDelete} />
      </main>
    </>
  );
}
