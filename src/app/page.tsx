import { ModeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl text-primary text-center font-bold mt-12">
        Hello world !
      </h1>
      <ModeToggle />
    </main>
  );
}
