"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type User = { id: number; name: string; email: string };

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      setErr(null);
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setErr(e.message);
        } else {
          setErr("เกิดข้อผิดพลาดไม่ทราบสาเหตุ");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center py-4">กำลังโหลด...</p>;
  if (err) return <p className="text-red-500 text-center py-4">ผิดพลาด: {err}</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="border p-3 rounded-lg shadow">
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
