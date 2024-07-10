import { auth, signOut } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <h1>Settings Page</h1>
      <pre>{JSON.stringify(session)}</pre>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
