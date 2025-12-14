"use client";
import Link from "next/link";
import { WordType } from "./type";
import { TfiWrite } from "react-icons/tfi";
import Button from "@/components/button/Button";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

export function List({
  words,
  className,
}: {
  words: WordType[];
  className?: string;
}) {
  const contentStyles = `flex items-center w-[90%] md:w-[80%]`;

  return (
    <>
      <ul className={`border rounded-lg p-4 overflow-y-auto ${className}`}>
        {words.map((word) => {
          const Content = (
            <>
              <p className="w-1/2 truncate mr-[5%]">{word.word}</p>
              <p className="w-1/2 text-gray-600 truncate">{word.meaning}</p>
            </>
          );

          return (
            <li
              key={word.id}
              className="flex px-2 py-1 mt-3 first:mt-0 items-center justify-between text-gray transition-all hover:text-black hover:bg-gray/10 rounded-sm"
            >
              {word.memo ? (
                <Link href={`/words/${word.id}`} className={contentStyles}>
                  {Content}
                </Link>
              ) : (
                <div className={contentStyles}>{Content}</div>
              )}

              <div className="flex w-[10%] items-center gap-3 justify-end">
                {word.memo && (
                  <p className="hidden md:block">
                    <TfiWrite />
                  </p>
                )}
                <Button type="button" variant="text">
                  <FaRegBookmark className="text-green" />
                  {/* <FaBookmark className="text-green" /> */}
                </Button>
                <Button type="button" variant="text">
                  <BsThreeDots />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
