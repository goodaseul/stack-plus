"use client";
import Button from "@/components/button/Button";
import ListItemList from "@/components/list-item/ListItemList";
import { ListType } from "@/types/list";
import Link from "next/link";
import { useState } from "react";

export default function MainPage() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [sentence, setSentence] = useState("");
  const [usage, setUsage] = useState("일상생활");
  const [lists, setLists] = useState<ListType[]>([]);
  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  const onChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeaning(e.target.value);
  };
  const onChangeSentence = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(e.target.value);
  };
  const onChangeUsage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUsage(e.target.value);
  };
  const onSubmitWord = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("저장할 데이터:", word, meaning, sentence, usage);
    //upabase.insert() 등 실행
    setLists((prev) => [
      ...prev,
      {
        id: Date.now(),
        word: word,
        meaning: meaning,
        sentence: sentence,
        usage: usage,
      },
    ]);
    setWord("");
    setMeaning("");
    setSentence("");
    setUsage("일상생활");
  };
  const onDeleteWord = (id: number) => {
    setLists((prev) => prev.filter((deleteItem) => id !== deleteItem.id));
  };
  return (
    <>
      {/* 헤더 */}
      <h1 className="px-10 py-5 text-4xl font-semibold transition-all font-permanent-marker bg-main hover:tracking-widest">
        <Link href="/" className="relative w-fit">
          Stack <span className="absolute text-2xl -right-4 -top-1">+</span>
        </Link>
      </h1>
      {/* 헤더 */}

      <main className="w-full max-w-5xl px-10 py-20 m-auto sm:px-15">
        <form action="" onSubmit={onSubmitWord} className="grid gap-5">
          {/* 단어 / 문장 */}
          <div>
            <label htmlFor="word" className="block w-full text-lg font-medium">
              🐾 단어 Or 문장을 적어주세요!
            </label>
            <input
              name="word"
              type="text"
              id="word"
              value={word}
              onChange={onChangeWord}
              className="w-full p-3 text-base transition-all focus:text-lg focus-visible:outline-none border-b-3 border-main font-permanent-marker"
              placeholder="book / I want to read a book."
            />
          </div>
          {/* 뜻 */}
          <div>
            <label
              htmlFor="meaning"
              className="block w-full text-lg font-medium"
            >
              🐾 뜻을 적어주세요!
            </label>
            <input
              name="meaning"
              id="meaning"
              type="text"
              value={meaning}
              onChange={onChangeMeaning}
              className="w-full p-3 text-base font-bold transition-all focus:text-lg focus-visible:outline-none border-b-3 border-main"
              placeholder="책 / 나는 책을 읽고싶어."
            />
          </div>
          {/* 작문 */}
          <div>
            <label
              htmlFor="sentence"
              className="block w-full text-lg font-medium"
            >
              🐾 작문을 해주실 수 있나요?
            </label>
            <input
              name="sentence"
              id="sentence"
              type="text"
              value={sentence}
              onChange={onChangeSentence}
              className="w-full p-3 text-base transition-all font-permanent-marker focus:text-lg focus-visible:outline-none border-b-3 border-main"
              placeholder="Actually, I bought books yesterday."
            />
          </div>
          <div>
            <label htmlFor="usage" className="block w-full text-lg font-medium">
              🐾 어디서 주로 사용하나요?
            </label>
            <select
              name="usage"
              id="usage"
              onChange={onChangeUsage}
              value={usage}
              className="w-full p-3 text-base transition-all focus:text-lg focus-visible:outline-none border-b-3 border-main"
            >
              <option value="일상생활">일상생활</option>
              <option value="회사">회사</option>
              <option value="학교">학교</option>
            </select>
          </div>
          <Button type="submit">저장 꾹 🐾</Button>
        </form>
        <ul className="grid grid-cols-2 gap-5 mt-5">
          <ListItemList onDeleteWord={onDeleteWord} lists={lists} />
        </ul>
      </main>
    </>
  );
}
