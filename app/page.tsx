import Dashboard from "@/components/Dashboard";
import SignIn from "@/app/auth/signin/page";

export default function Home() {
  return (
    <main className="h-full md:h-screen flex justify-center items-center">
      {/*<Dashboard />*/}
        <SignIn />
    </main>

  );
}
