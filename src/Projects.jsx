import Project from "./Project";
import Link from "./Link";

function Projects({ ref }) {
  return (
    <section ref={ref} className="section sub-section" id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <Project
          title="TorrentRS"
          tags={["Rust", "BitTorrent", "Networking", "P2P"]}
          description="A  basic BitTorrent client built in Rust, implementing peer discovery, communication, and piece downloading. Created to explore low-level networking and protocol design."
          code_link={"https://github.com/kamalnayan10/torrentrs"}
        />
        <Project
          title="WashAway"
          tags={["Python", "PyTorch", "GAN", "Generative AI"]}
          description="An AI-powered watermark remover built with PyTorch and UNET using the Pix2Pix framework. Trained on a custom dataset for high-fidelity image restoration via generative image-to-image translation."
          code_link={"https://github.com/kamalnayan10/WashAway"}
        />
        <Project
          title="RustEdit"
          tags={["Rust", "Crossterm", "Systems Programming"]}
          description="A lightweight, cross-platform command-line text editor built with Rust and the Crossterm library. Inspired by neo-vim, this editor offers an efficient and responsive editing experience across Windows, macOS, and Linux."
          code_link={"https://github.com/kamalnayan10/rust-edit-textEditor"}
        />
        <Project
          title="Edit से Majboor"
          tags={["Python", "StableDiffusion", "SAM2", "React", "TailwindCSS"]}
          description="An end-to-end deep learning image editing app that uses Stable Diffusion inpainting and SAM2 segmentation to remove unwanted objects or add new content. It features a Vite + React + Tailwind CSS frontend with prompt-driven editing and click-to-auto-select masks, backed by a FastAPI API powering high-performance inference."
          code_link={"https://github.com/kamalnayan10/EditSeMajboor"}
        />
        <Project
          title="kmlnyn.com"
          tags={["React", "Vite", "CSS", "UI/UX"]}
          description="A developer portfolio built using modern web technologies to showcase my projects, skills, and experience. Designed with minimalism, responsiveness, and clarity in mind."
          code_link={"https://github.com/kamalnayan10/kmlnyn"}
        />
        <Link
          link="https://github.com/kamalnayan10?page=1&tab=repositories"
          clas="btn underline-hover"
        >
          More
        </Link>
      </div>
    </section>
  );
}

export default Projects;
