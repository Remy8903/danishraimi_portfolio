"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectModal, { Project } from "./ProjectModal";

const projects: Project[] = [
  {
    title: "BizMudah",
    description:
      "Ecommerce platform for Microsellers. Features real-time stock management and automated invoicing workflows.",
    details:
      "BizMudah is a full-featured ecommerce platform tailored for microsellers in Malaysia. It streamlines product cataloging, order processing, and invoice generation in one cohesive dashboard.",
    features: [
      "Real-time inventory tracking with low-stock alerts",
      "Automated invoicing and sales reporting",
      "Dockerized Laravel 12 deployment for consistent environments",
      "Livewire-powered reactive admin dashboard",
    ],
    images: ["/bizmudahMain.jpg", "/bizmudah2.png", "/bizmudah3.png"],
    videoUrl: "https://www.youtube.com/watch?v=xylgQf6GxOA",
    tags: [
      "Laravel 12",
      "Livewire",
      "Docker",
      "ToyyibPay",
      "WAHA Whatsapp API",
    ],
    href: "#",
    githubUrl: "https://github.com/Remy8903/bizmudah",
    websiteUrl: "#",
  },
  {
    title: "Kamus Dewan Perdana",
    description:
      "Language Reference Platform integration. Developed secure payment gateways and complex database queries.",
    details:
      "A language reference platform that integrates authoritative dictionary data with a modern subscription model. I focused on payment integration and optimizing large Oracle DB queries.",
    features: [
      "eGHL payment gateway integration for subscriptions",
      "Complex Oracle DB query optimization",
      "Secure user authentication and access control",
      "Responsive frontend for dictionary lookups",
    ],
    images: ["/PortalKamus.jpg", "/Portalkamus1.png"],
    tags: ["PHP", "Oracle DB", "eGHL", "Laravel"],
    href: "#",
    githubUrl: "https://github.com/Remy8903/kamus-dewan-perdana",
    websiteUrl: "https://kamus.dbp.gov.my/",
  },
  {
    title: "SiswaJual",
    description:
      "A specialized marketplace for university students. Engineered with a strong focus on secure authentication and data validation.",
    details:
      "SiswaJual connects university students to buy and sell items within campus communities. The platform emphasizes trust through verified student accounts and robust validation.",
    features: [
      "Secure registration and login with validation rules",
      "Role-based access for buyers and sellers",
      "MySQL-backed product and order management",
      "Clean MVC architecture with Laravel",
    ],
    images: ["/SiswaJual1.png", "/siswajual2.png", "/Siswajual3.png"],
    icon: "shopping_bag",
    tags: ["Laravel", "PHP", "MySQL"],
    href: "#",
    githubUrl: "https://github.com/Remy8903/siswajual",
    websiteUrl: "#",
  },
  {
    title: "USM-EMS",
    description:
      "Comprehensive Event Management System mobile application. Implemented real-time database sync and user roles.",
    details:
      "USM-EMS is a cross-platform mobile application for managing university events. It provides real-time updates, role-based access, and seamless event registration.",
    features: [
      "Cross-platform Flutter mobile UI",
      "Real-time data sync with Firebase and Supabase",
      "Event creation, registration, and attendance tracking",
      "Role-based dashboards for organizers and attendees",
    ],
    images: ["/USM-EMS.png"],
    icon: "event",
    tags: ["Flutter", "Firebase", "Supabase"],
    href: "#",
    githubUrl: "https://github.com/Remy8903/usm-ems",
    websiteUrl: "#",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <>
      <section className="flex flex-col gap-8" id="projects">
        <h2 className="font-headline-md text-headline-md text-on-surface">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative text-left bg-surface-container border border-outline/10 hover:border-primary rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal(project);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {(project.images.length > 0 || project.videoUrl) && (
                <div className="h-48 bg-surface-variant overflow-hidden relative">
                  {project.images.length > 0 ? (
                    <Image
                      alt={`${project.title} preview`}
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={project.images[0]}
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-5xl">
                        movie
                      </span>
                    </div>
                  )}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="material-symbols-outlined text-white/90 text-5xl">
                        play_circle
                      </span>
                    </div>
                  )}
                  {project.images.length + (project.videoUrl ? 1 : 0) > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {Array.from({
                        length:
                          project.images.length + (project.videoUrl ? 1 : 0),
                      }).map((_, index) => (
                        <span
                          key={index}
                          className="w-1.5 h-1.5 rounded-full bg-white/70"
                        ></span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="p-6 flex flex-col gap-4 h-full">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-headline-md text-headline-md">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    {project.githubUrl ? (
                      <a
                        aria-label={`${project.title} GitHub repository`}
                        className="text-outline hover:text-primary transition-colors inline-flex p-1 rounded hover:bg-surface-container-high"
                        href={project.githubUrl}
                        onClick={(event) => event.stopPropagation()}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    ) : null}
                    {project.websiteUrl && project.websiteUrl !== "#" ? (
                      <a
                        aria-label={`${project.title} live website`}
                        className="text-outline hover:text-primary transition-colors inline-flex p-1 rounded hover:bg-surface-container-high"
                        href={project.websiteUrl}
                        onClick={(event) => event.stopPropagation()}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined">
                          language
                        </span>
                      </a>
                    ) : null}
                    {!project.githubUrl &&
                    !(project.websiteUrl && project.websiteUrl !== "#") ? (
                      <span className="material-symbols-outlined text-outline">
                        {project.icon}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-outline/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-code-sm text-code-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}
