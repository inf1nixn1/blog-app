import axios from "axios";
import { useEffect, useState, type FormEvent } from "react";
import type { TUser } from "./userTypes";
import Card from "./Card";

function Home() {
  const URL: string = "http://localhost:3000/users";
  const [users, setUsers] = useState<TUser[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      await axios.post(URL, data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  async function fetchData() {
    try {
      const res = await axios.get(URL);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
        <input required type="text" name="name" placeholder="Name" className="p-2 border-1 rounded-md" />
        <input required type="number" name="age" placeholder="Age" className="p-2 border-1 rounded-md" />
        <input required type="tel" name="tel" placeholder="Tel" className="p-2 border-1 rounded-md" />
        <select required name="course" className="border-1 p-2 rounded-md">
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Mobile">Mobile</option>
          <option value="AI">AI</option>
        </select>
        <button>Enter</button>
      </form>

      <div>
        {users.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Home;