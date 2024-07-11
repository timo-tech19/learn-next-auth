import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

export default async function Page() {
  const user = await currentUser();

  return <UserInfo user={user} label="💻 Server Component" />;
}
