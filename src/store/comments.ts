import { create } from "zustand";

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

type CommentsState = {
  items: Comment[];
  loading: boolean;
  error: string | null;
  fetchComments: (postId: number) => Promise<void>;
};

export const useComments = create<CommentsState>((set) => ({
  items: [],
  loading: false,
  error: null,
  fetchComments: async (postId: number) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (!res.ok) throw new Error("โหลดคอมเมนต์ไม่สำเร็จ");
      const data: Comment[] = await res.json();
      set({ items: data });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "Unexpected error" });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
