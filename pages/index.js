import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-01 flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-500" href="https://nextjs.org">
            Next.js with Tailwind
            <span className="text-red-200"> C</span>
            <span className="text-green-500">S</span>
            <span className="text-red-500">S</span>
          </a>
        </h1>

        <p className="mt-8 text-2xl">
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            console.log("hello Next!")
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./next-icon.png" alt="Vercel Logo" className="h-16 w-16" />
        </a>
      </footer>
    </div>
  );
}
