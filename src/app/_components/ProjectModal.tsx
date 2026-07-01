"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export interface Project {
  title: string;
  description: string;
  details: string;
  features: string[];
  images: string[]; // up to 3 images
  videoUrl?: string; // 1 video
  icon?: string;
  tags: string[];
  href: string;
  githubUrl?: string;
  websiteUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function ProjectMediaGallery({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const media = useMemo(() => {
    const items: { type: "image" | "video"; url: string }[] = [];
    if (project.videoUrl) items.push({ type: "video", url: project.videoUrl });
    project.images.forEach((url) => items.push({ type: "image", url }));
    return items;
  }, [project]);

  if (media.length === 0) {
    return project.icon ? (
      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-surface-variant text-primary mb-6">
        <span className="material-symbols-outlined text-4xl">
          {project.icon}
        </span>
      </div>
    ) : null;
  }

  return (
    <div className="mb-6">
      <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden bg-surface-variant">
        {media[activeIndex].type === "video" ? (
          (() => {
            const embedUrl = getYouTubeEmbedUrl(media[activeIndex].url);
            return embedUrl ? (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                src={embedUrl}
                title={`${project.title} video`}
              />
            ) : (
              <video
                className="w-full h-full object-cover"
                controls
                poster={project.images[0]}
                preload="metadata"
                src={media[activeIndex].url}
              />
            );
          })()
        ) : (
          <Image
            alt={`${project.title} preview ${activeIndex + 1}`}
            className="object-cover"
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            src={media[activeIndex].url}
          />
        )}
      </div>
      {media.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {media.map((item, index) => (
            <button
              key={index}
              aria-label={`View ${item.type} ${index + 1}`}
              className={`relative w-16 h-16 rounded-md overflow-hidden shrink-0 border-2 transition-colors ${
                index === activeIndex
                  ? "border-primary"
                  : "border-transparent hover:border-outline/20"
              }`}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              {item.type === "video" ? (
                <div className="w-full h-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined">play_arrow</span>
                </div>
              ) : (
                <Image
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="64px"
                  src={item.url}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
    >
      {/* Backdrop */}
      <button
        aria-label="Close project details"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface-container border border-outline/10 rounded-xl p-6 md:p-8 shadow-2xl">
        <button
          aria-label="Close"
          autoFocus
          className="absolute top-4 right-4 text-outline hover:text-primary transition-colors"
          onClick={onClose}
          type="button"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <ProjectMediaGallery key={project.title} project={project} />

        <h3 className="font-headline-md text-headline-md text-on-surface mb-2 pr-8">
          {project.title}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-primary/30 text-primary px-3 py-1 rounded font-code-sm text-code-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-outline/5 pt-6">
          <h4 className="font-code-sm text-code-sm uppercase tracking-wider text-primary mb-3">
            Project Details
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            {project.details}
          </p>
          <ul className="list-disc list-inside text-on-surface-variant space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-outline/5">
          {project.websiteUrl && project.websiteUrl !== "#" ? (
            <a
              className="bg-primary text-on-primary font-code-sm text-code-sm py-3 px-6 rounded font-medium hover:bg-primary-fixed-dim transition-colors flex items-center gap-2"
              href={project.websiteUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Website{" "}
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          ) : (
            <a
              className="bg-primary text-on-primary font-code-sm text-code-sm py-3 px-6 rounded font-medium hover:bg-primary-fixed-dim transition-colors flex items-center gap-2"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Project{" "}
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}
          {project.githubUrl ? (
            <a
              className="border border-primary text-primary font-code-sm text-code-sm py-3 px-6 rounded font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          ) : null}
          <button
            className="border border-outline text-outline font-code-sm text-code-sm py-3 px-6 rounded font-medium hover:bg-surface-container-high transition-colors"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
