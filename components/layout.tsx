import Link from "next/link";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase text-white">
        <Link href="/">
          <a>Praxis Systems Argentina</a>
        </Link>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
