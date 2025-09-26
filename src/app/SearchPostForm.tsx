"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchPostForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = (formData.get("id") as string)?.trim();
    if (id && !isNaN(Number(id))) {
      router.push(`/posts/${id}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md shadow-xl rounded-xl overflow-hidden bg-white"
    >
      <input
        type="number"
        name="id"
        placeholder="กรอก Post ID"
        className="flex-1 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-300"
      />
      <button
        type="submit"
        className="bg-green-400 text-white px-6 py-3 font-semibold hover:bg-green-500 hover:scale-105 transition-transform duration-200"
      >
        ดูคอมเมนต์
      </button>
    </form>
  );
}
