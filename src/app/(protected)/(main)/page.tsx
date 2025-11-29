"use client";
import Link from "next/link";
import { useState } from "react";
// form에 onSubmit 만들기 (새로고침 막고, 저장 이벤트 통합)
// 사용자가 입력한 값 저장 → 콘솔 출력 (맞게 들어가는지 확인)
// 입력된 단어들을 아래에 리스트로 보여주기 (Supabase 없이 로컬 상태로)

export default function MainPage() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [sentence, setSentence] = useState("");
  const [usage, setUsage] = useState("일상생활");
  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!word) return console.log("단어를 입력해주세요.");
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
  };
  return (
    <>
      {/* 헤더 */}

      <h1 className="  font-permanent-marker text-4xl font-semibold px-10 py-5 bg-main  hover:tracking-widest transition-all">
        <Link href="/" className="relative w-fit">
          Stack <span className="absolute -right-4 -top-1 text-2xl">+</span>
        </Link>
      </h1>
      {/* 헤더 */}

      <main className="py-20 px-10 sm:px-15 w-full max-w-5xl m-auto">
        <form action="" onSubmit={onSubmitWord} className="grid gap-5">
          {/* 단어 / 문장 */}
          <div>
            <label htmlFor="word" className="w-full block text-lg font-medium">
              🐾 단어 Or 문장을 적어주세요!
            </label>
            <input
              name="word"
              type="text"
              id="word"
              value={word}
              onChange={onChangeWord}
              className="transition-all focus:text-lg focus-visible:outline-none w-full border-b-3 border-main p-3 text-base font-permanent-marker"
              placeholder="book / I want to read a book."
            />
          </div>
          {/* 뜻 */}
          <div>
            <label
              htmlFor="meaning"
              className="w-full block text-lg font-medium"
            >
              🐾 뜻을 적어주세요!
            </label>
            <input
              name="meaning"
              id="meaning"
              type="text"
              value={meaning}
              onChange={onChangeMeaning}
              className="transition-all font-bold focus:text-lg focus-visible:outline-none w-full border-b-3 border-main p-3 text-base"
              placeholder="책 / 나는 책을 읽고싶어."
            />
          </div>
          {/* 작문 */}
          <div>
            <label
              htmlFor="sentence"
              className="w-full block text-lg font-medium"
            >
              🐾 작문을 해주실 수 있나요?
            </label>
            <input
              name="sentence"
              id="sentence"
              type="text"
              value={sentence}
              onChange={onChangeSentence}
              className="font-permanent-marker transition-all focus:text-lg focus-visible:outline-none w-full border-b-3 border-main p-3 text-base"
              placeholder="Actually, I bought books yesterday."
            />
          </div>
          <div>
            <label htmlFor="usage" className="w-full block text-lg font-medium">
              🐾 어디서 주로 사용하나요?
            </label>
            <select
              name="usage"
              id="usage"
              onChange={onChangeUsage}
              value={usage}
              className="transition-all focus:text-lg focus-visible:outline-none w-full border-b-3 border-main p-3 text-base"
            >
              <option value="일상생활">일상생활</option>
              <option value="회사">회사</option>
              <option value="학교">학교</option>
            </select>
          </div>
          <button
            type="submit"
            className="flex mx-auto mt-5 cursor-pointer transition-all border-2 border-main hover:bg-main rounded-2xl px-8 py-3"
          >
            저장 꾹 🐾
          </button>
        </form>
      </main>
    </>
  );
}
