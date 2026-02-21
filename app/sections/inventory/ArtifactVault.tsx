import type { Artifact } from "@/types";

interface ArtifactVaultProps {
  artifacts: Artifact[];
}

const artifacts: Artifact[] = [
  {
    title: "NotesBuddy",
    description: "A comprehensive study platform with notes, flashcards...",
    image: "/images/notesbuddy.png",
    technologies: ["Next.js", "TypeScript", "React"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    status: "All Systems Operational",
  },
  // add more projects...
];

const ArtifactVault = () => {
  return (
    <div className="w-full h-full p-4">
      {/* Header */}
      <h2 className="text-white text-lg mb-4">Artifacts Vault</h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3">
        {artifacts.map((artifact, index) => (
          <div
            key={index}
            className="bg-[#0d0020] rounded-xl overflow-hidden border border-[#392e4e]"
          >
            {/* Project Image */}
            <div className="w-full h-32 overflow-hidden">
              <img
                src={artifact.image}
                alt={artifact.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium text-sm">
                  {artifact.title}
                </h3>
                <div className="flex gap-2">
                  {artifact.liveUrl && (
                    <a
                      href={artifact.liveUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      🌐
                    </a>
                  )}
                  {artifact.githubUrl && (
                    <a
                      href={artifact.githubUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      🐙
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                {artifact.description}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-1 flex-wrap mb-2">
                {artifact.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-500 bg-[#1a0035] px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status */}
              {artifact.status && (
                <div className="flex justify-between items-center">
                  <span className="text-xs text-green-400">
                    ● {artifact.status}
                  </span>
                  <button className="text-xs text-gray-400 hover:text-white">
                    View Details →
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtifactVault;
