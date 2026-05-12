import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-brand-400">404</p>
        <h1 className="mt-3 font-display text-5xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-3 text-slate-400">
          Sorry, we couldn&apos;t find that page.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </main>
  );
}
