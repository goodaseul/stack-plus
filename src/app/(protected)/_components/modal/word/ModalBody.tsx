import Input from "@/components/input/Input";
import { FiChevronDown, FiGlobe, FiLock } from "react-icons/fi";
import { ModalField } from "./ModalField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormType } from "@/types/word";

type ModalBodyProps = {
  register: UseFormRegister<FormType>;
  errors: FieldErrors<FormType>;
};

export default function ModalBody({ register, errors }: ModalBodyProps) {
  const InputStyles =
    "w-full border border-gray-300 px-3 py-2 rounded-md text-sm text-black placeholder place-gray-100 focus:outline-none focus:ring-1 transition";
  const SelectStyles =
    "w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm text-black bg-white focus:outline-none focus:ring-1 transition";

  return (
    <>
      <ModalField label="표현*">
        <Input
          className={InputStyles}
          autoFocus
          {...register("expression", {
            required: "표현을 입력해주세요.",
          })}
          placeholder="book"
          errors={errors.expression?.message}
        />
      </ModalField>
      <ModalField label="뜻*">
        <Input
          className={InputStyles}
          {...register("meaning", {
            required: "뜻을 입력해주세요.",
          })}
          placeholder="책"
          errors={errors.meaning?.message}
        />
      </ModalField>
      <ModalField label="예문">
        <Input
          className={InputStyles}
          {...register("sentence")}
          placeholder="I bought a book yesterday."
        />
      </ModalField>
      <ModalField label="사용 장소">
        <div className="flex items-center relative">
          <select {...register("usage")} className={SelectStyles}>
            <option value="일상생활">일상생활</option>
            <option value="회사">회사</option>
            <option value="학교">학교</option>
          </select>

          <FiChevronDown
            className="
                     pointer-events-none
                     absolute right-3
                     text-gray-400
                     "
            size={18}
          />
        </div>
      </ModalField>
      <ModalField label="메모">
        <textarea
          {...register("memo")}
          placeholder="헷갈렸던 포인트 정리"
          className={`${InputStyles} min-h-[90px] resize-none`}
        />
      </ModalField>

      <label
        htmlFor="show-agree"
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <input
          type="checkbox"
          id="show-agree"
          className="sr-only peer"
          {...register("is_public")}
          onChange={(e) => {
            register("is_public").onChange(e);
          }}
        />

        <div
          className="
    relative w-9 h-5 rounded-full shrink-0
    transition-colors duration-200
    bg-gray-300 dark:bg-gray-600 peer-checked:bg-point
    after:content-[''] after:absolute after:top-0.5 after:left-0.5
    after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-sm
    after:transition-all after:duration-200
    peer-checked:after:translate-x-4
  "
        />

        <span className="flex items-center gap-1 text-xs text-gray-400 peer-checked:hidden">
          <FiLock size={13} />
          <span>비공개</span>
        </span>

        <span className="hidden peer-checked:flex items-center gap-1 text-xs text-point">
          <FiGlobe size={13} />
          <span>공개중</span>
        </span>
      </label>
    </>
  );
}
