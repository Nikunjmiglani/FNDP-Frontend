export default function Home() {
  return (
    <main className="bg-[#0B0E17] text-white">
     
      <nav className="absolute flex justify-between items-center w-full top-0 px-10 py-5 z-70">
       
        <div className="flex items-center gap-3">
        
          <span className="font-semibold font-mono text-lg tracking-wide">
            FNDP - Powered by AI
          </span>
        </div>

       
        <ul className="flex gap-10 text-sm mr-35 ">
          <li className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:text-blue-200">Home</li>
          <li className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:text-blue-200">Access</li>
          <li className="hover:scale-110 transition-transform duration-200cursor-pointer hover:text-blue-200">Powers</li>
          <li className="hover:scale-110 transition-transform duration-200 hover:text-blue-200  cursor-pointer">Products</li>
        </ul>

        {/* Button */}
        <button className="bg-blue-100 text-black px-4 py-2 rounded-full cursor-pointer font-medium hover:bg-gray-200 hover:scale-110 transition-transform duration-200 ">
          Check Now!
        </button>
      </nav>

      {/* Hero Section */}
      <section>
        <div className="relative h-screen w-screen overflow-hidden">
          
          <video
            src="/Fake_bg_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white font-mono text-5xl font-bold leading-tight">
              AI-Powered Fake News Detector
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl">
              Detect misinformation instantly with our AI-powered detection
              engine — built to identify fake headlines, articles, and news
              reports with high accuracy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
