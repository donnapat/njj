// src/store/posts.ts 

"use client"; 

import { create } from "zustand"; 

import axios from "axios"; 

 

type Post = { id: number; title: string; body: string }; 

 

type State = { 

  items: Post[]; 

  loading: boolean; 

  error: string | null; 

  fetchData: () => Promise<void>; 

}; 

 

export const usePosts = create<State>((set) => ({
  items: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null }); // เริ่มโหลด

    try {
      const { data } = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ items: data });
    } catch (error: any) {
      set({ error: error.message || "เกิดข้อผิดพลาดในการโหลดข้อมูล" });
    } finally {
      set({ loading: false }); // โหลดเสร็จ
    }
  },
}));
