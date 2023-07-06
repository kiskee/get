import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const GET_USERS = 'https://get-kiskee.vercel.app/api/users'

const getTopics = async () => {
  try {
    const res = await fetch(GET_USERS, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { users } = await getTopics();

  return (
    <>
      {users.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.email}</h2>
            <div>{t.username}</div>
          </div>

        </div>
      ))}
    </>
  );
}