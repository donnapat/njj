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
        const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (e: any) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>กำลังโหลด...</p>;
  if (err) return <p>ผิดพลาด: {err}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
