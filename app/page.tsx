export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a
          href="/sayac/10"
          className="text-4xl font-bold text-center text-blue-500 underline"
        >
          10 dakika sayacı
        </a>
        <a
          href="/sayac/40"
          className="text-4xl font-bold text-center text-blue-500 underline"
        >
          40 dakika sayacı
        </a>
      </main>
    </div>
  );
}
