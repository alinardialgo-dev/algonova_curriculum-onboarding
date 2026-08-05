import React from 'react';
import { StudentProject } from '../types';
import { X, ExternalLink, Play, Award, User, Sparkles } from 'lucide-react';

interface ProjectShowcaseModalProps {
  project: StudentProject | null;
  onClose: () => void;
}

export const ProjectShowcaseModal: React.FC<ProjectShowcaseModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Extract YouTube ID if applicable
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
  };

  const youtubeEmbed = getYouTubeEmbedUrl(project.link);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500 text-slate-950">
              Galeri Karya Murid
            </span>
            <h3 className="text-xl font-extrabold tracking-tight mt-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>Oleh: <strong>{project.author}</strong> {project.age ? `(${project.age} Tahun)` : ''}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          
          {/* Media Player or Embed Area */}
          {youtubeEmbed ? (
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-800">
              <iframe
                src={youtubeEmbed}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-slate-800 text-sm">{project.title}</p>
                <p className="text-xs text-slate-500">
                  Proyek ini tersedia di platform interaktif {project.type === 'roblox' ? 'Roblox' : 'Google Drive/AlgoNova'}.
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-extrabold text-xs hover:bg-amber-600 transition shadow-sm"
              >
                <span>Buka Karya di {project.type === 'roblox' ? 'Roblox Studio' : 'Google Drive / Platform'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Description */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs leading-relaxed text-slate-700">
            <strong className="block text-slate-900 font-bold mb-1">Deskripsi Proyek:</strong>
            <p>{project.description}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
          >
            <span>Tautan Langsung Karya</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 text-slate-800 hover:bg-slate-300 transition"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
