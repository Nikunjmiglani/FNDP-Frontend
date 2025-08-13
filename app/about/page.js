// pages/about.js
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Fake News Detector 🚀</title>
        <meta name="description" content="The coolest AI-powered fake news detector on the block." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white px-6 py-16 flex flex-col items-center">
        <div className="max-w-3xl bg-black bg-opacity-40 rounded-3xl p-10 shadow-xl backdrop-blur-md">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wide font-[Poppins]">
            Whats This? <span className="text-yellow-400">🔥</span>
          </h1>

          <p className="text-xl mb-8 leading-relaxed font-semibold">
            This is your <span className="text-pink-400">AI-powered hype machine</span> to spot fake news before it ruins your vibe.  
            Drop a headline or article, and our <span className="italic font-bold">smart AF</span> model tells you if it is <span className="text-green-400">REAL</span> or <span className="text-red-400">FAKE</span>.  
            No cap.
          </p>

          <h2 className="text-3xl font-bold mb-4 underline decoration-yellow-400 decoration-4 decoration-wavy">
            Why Bother? 🤔
          </h2>
          <p className="mb-8 text-lg">
            Fake news be everywhere, messing with our feeds and feels.  
            We made this so you can keep your 👀 sharp and dodge the BS like a pro.
          </p>

          <h2 className="text-3xl font-bold mb-4 underline decoration-yellow-400 decoration-4 decoration-wavy">
            How Does It Work? 🚀
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-10 text-lg">
            <li>Paste your news headline or article.</li>
            <li>We clean it up — no messy drama allowed.</li>
            <li>Our AI spits out a confidence score: <span className="text-green-400">REAL</span> or <span className="text-red-400">FAKE</span>.</li>
            <li>If it is juicy sensitive stuff (like celeb drama or shady deaths), we will flag it — no guesswork here.</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 underline decoration-yellow-400 decoration-4 decoration-wavy">
            Tech Stack 💻
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Frontend:</strong> Next.js + Tailwind CSS (pure vibes)</li>
            <li><strong>Backend/Model:</strong> Streamlit serving AI magic</li>
            <li><strong>ML:</strong> Scikit-learn + TF-IDF — the real MVPs</li>
          </ul>

          <p className="text-sm italic text-yellow-200 mt-12">
            ⚠️ Heads up! This AI tool is lit but not perfect. Always double-check 🔍 with legit news sources before you spread the word.
          </p>

          <div className="mt-10 text-center">
            <Link href="/">
              <li className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
                Back to Home 🔙
              </li>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
