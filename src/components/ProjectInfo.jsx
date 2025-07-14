import titleBoard from "../assets/images/title_board_1.png";
import github from "../assets/icons/github.png";

export default function ProjectInfo({
  title,
  description,
  stack = [],
  features = [],
  demoLink,
  githubLink,
}) {
  return (
    <div className="text-[#2B4C6F] font-body px-2 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-20 flex items-center justify-center">
        <img
          key="title_board"
          src={titleBoard}
          alt="Title Board"
          className="w-full h-full absolute inset-0 object-contain drop-shadow-xl"
        />
        <h2 className="relative text-white text-xl sm:text-3xl font-bold">
          {title}
        </h2>
      </div>

      <div className="pt-10">
        <p className="text-lg tracking-tight font-medium backdrop-blur-md rounded-xl p-4">
          {description}
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
          <div className="bg-white/50 backdrop-blur-lg p-3 rounded-xl">
            <h4 className="font-bold text-lg text-[#38477e]">Tech Stack</h4>
            <ul className="mt-2 list-inside list-none tracking-tight space-y-1">
              {stack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-lg p-3 rounded-xl">
            <h4 className="font-bold text-lg text-[#38477e]">Key Features</h4>
            <ul className="mt-2 list-inside list-none tracking-tight space-y-1">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {(demoLink || githubLink) && (
          <div className="mt-5">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/50 backdrop-blur-lg px-4 py-2 rounded-lg font-semibold hover:bg-[#38477e] hover:text-white transition"
                >
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  <div className="bg-white/50 backdrop-blur-lg flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#38477e] hover:text-white transition">
                    <img src={github} className="w-4 h-4" />
                    <span>Github</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
