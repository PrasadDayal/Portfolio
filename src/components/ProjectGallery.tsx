import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  project: {
    title: string;
    images: string[];
  } | null;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  onClose: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ 
  project, 
  currentImageIndex, 
  setCurrentImageIndex, 
  onClose 
}) => {
  if (!project) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0"
        onClick={onClose}
      />

      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] p-2 text-white/70 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative z-[110] max-w-5xl w-full h-full flex flex-col items-center justify-center"
        >
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          
          <div className="mt-6 text-center">
            <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
            <p className="text-white/60 text-sm mt-2">
              Image {currentImageIndex + 1} of {project.images.length}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {project.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectGallery;
