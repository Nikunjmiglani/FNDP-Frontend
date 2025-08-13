
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <main className="bg-purple-500 text-white min-h-screen flex flex-col items-center py-12 px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-mono font-semibold mb-4">
        MEET THE DEVELOPERS
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg max-w-2xl mb-12">
        {"AI empowers humans to do more, dream bigger, and create faster."}
      </p>

      {/* Cards Section */}
      <section className="w-full bg-purple-100 text-black py-12 px-4">
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs w-full">
            <h2 className="text-lg font-bold mb-1">Nikunj Miglani</h2>
            <p className="text-purple-600 text-sm font-semibold mb-3">Developer</p>
            <p className="text-sm text-gray-600 mb-4">
              {"2nd Year Student at SRM University. I enjoy programming and exploring technology. I'm proficient in Full Stack Development."}
            </p>
            <div className="flex justify-center gap-4 text-purple-600 text-lg">
              <a href="https://www.nikunj.space/" target="_blank" rel="noopener noreferrer">
                <CgProfile className="text-xl hover:scale-110 transition-transform duration-200 mt-1" />
              </a>
              <a href="https://x.com/NikunjMiglani28" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a href="https://github.com/Nikunjmiglani" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a href="https://www.linkedin.com/in/nikunjmiglani/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in hover:scale-110 transition-transform duration-200"></i>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs w-full">
            <h2 className="text-lg font-bold mb-1">Roopesh Singhal</h2>
            <p className="text-pink-600 text-sm font-semibold mb-3">Idea & Creative</p>
            <p className="text-sm text-gray-600 mb-4">
              {"Glavi amet rinsit libero molestie ante ut fringilla purus eros quis gravida from dolor amet ipsum lorem bibendum."}
            </p>
            <div className="flex justify-center gap-4 text-pink-600 text-lg">
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter hover:scale-110 transition-transform duration-200"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram hover:scale-110 transition-transform duration-200"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in hover:scale-110 transition-transform duration-200"></i></a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs w-full">
            <h2 className="text-lg font-bold mb-1">Bibekpreet Singh Chugh</h2>
            <p className="text-blue-600 text-sm font-semibold mb-3">DevOps</p>
            <p className="text-sm text-gray-600 mb-4">
              {"Glavi amet rinsit libero molestie ante ut fringilla purus eros quis gravida from dolor amet ipsum lorem bibendum."}
            </p>
            <div className="flex justify-center gap-4 text-blue-600 text-lg">
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter hover:scale-110 transition-transform duration-200"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram hover:scale-110 transition-transform duration-200"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in hover:scale-110 transition-transform duration-200"></i></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
