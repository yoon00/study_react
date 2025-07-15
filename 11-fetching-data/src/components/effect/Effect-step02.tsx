import { useEffect, useState } from "react";

function Effect() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setUsers(result);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    loadData();
  }, [])

  if(loading) return <p>loading...</p>

  return (
    <ul>
      {
        users && users.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))
      }
      </ul>
  )
}
export default Effect