import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Download, X } from "lucide-react";

import "./styles.css";

const assets = {
  logo: "/assets/livora%201.png",
  createEmpty: "/assets/create-property-empty.png",
  createLong: "/assets/frame-10-partial.png",
  createUploading: "/assets/add-property-uploading.png",
  homeFeatured: "/assets/Home-2.png",
  saved: "/assets/Saved%20pAGE.png",
  appIconMockup: "/assets/app-icon-mockup.png",
  mobileShowcase: "/assets/Create_a_premium_product_showcase_202606052149%202.png",
};

const GITHUB_REPO_URL = "https://github.com/Krish03112005/rentmitra";
const APK_DOWNLOAD_URL = "/livora.apk";

function PhoneShot({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute max-w-none object-cover drop-shadow-[0_18px_34px_rgba(0,0,0,0.28)] ${className}`}
    />
  );
}

function GithubMark({ className = "size-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-white`}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.9 5.38.9 11.75c0 4.98 3.24 9.2 7.72 10.68.57.1.78-.25.78-.55v-2.1c-3.14.69-3.8-1.36-3.8-1.36-.51-1.33-1.26-1.68-1.26-1.68-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.18 1.74 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.75.4-1.25.72-1.54-2.51-.29-5.15-1.28-5.15-5.67 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.13 1.17.91-.26 1.88-.39 2.85-.39s1.94.13 2.85.39c2.17-1.48 3.13-1.17 3.13-1.17.62 1.58.23 2.74.11 3.03.73.8 1.17 1.82 1.17 3.07 0 4.4-2.65 5.38-5.18 5.66.41.36.77 1.07.77 2.16v3.2c0 .31.21.67.79.55 4.47-1.5 7.7-5.7 7.7-10.68C23.1 5.38 18.35.5 12 .5Z" />
    </svg>
  );
}

function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    if (!isDownloadModalOpen) return;

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsDownloadModalOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isDownloadModalOpen]);

  return (
    <main
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#020711] font-sans text-white"
      style={{
        backgroundImage:
          "linear-gradient(-58deg, rgb(0, 0, 0) 0%, rgb(11, 59, 132) 50%, rgb(20, 105, 234) 100%)",
      }}
    >
      <section className="relative z-20 min-h-[100svh] w-full overflow-hidden sm:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d77ec_0%,#155fc8_34%,#0a397f_67%,#00040b_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_13%,rgba(54,139,255,0.28),transparent_17rem),linear-gradient(180deg,transparent_0%,rgba(2,7,17,0.08)_46%,rgba(0,0,0,0.9)_100%)]" />

        <img
          src={assets.mobileShowcase}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-14vw] top-[27.2svh] z-10 w-[129.5vw] max-w-none select-none"
        />

        <div className="relative z-20 flex flex-col items-center px-[7.4vw] pt-[3.7svh] text-center">
          <img
            src={assets.logo}
            alt="Livora"
            className="h-auto w-[35.7vw] min-w-[7.2rem] max-w-[9.3rem]"
          />

          <h1 className="mt-[5.6svh] max-w-[91vw] text-[clamp(1.9rem,7.9vw,2.25rem)] font-bold leading-[1.15] tracking-normal text-white">
            Find, List &amp; Discover Properties Effortlessly
          </h1>

          <p className="mt-[2.25svh] max-w-[86vw] text-[clamp(0.88rem,3.35vw,1rem)] font-normal leading-[1.15] text-white/84">
            Livora is a modern real estate platform that helps buyers, renters,
            and property owners connect through a simple, intuitive mobile
            experience.
          </p>

          <div className="mt-[2.8svh] flex w-full items-center justify-center gap-[2.7vw]">
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="inline-flex h-[clamp(2rem,7.7vw,2.35rem)] items-center justify-center gap-[0.46rem] rounded-full border border-white/25 bg-[#020715]/95 px-[3.9vw] text-[clamp(0.7rem,3.1vw,0.93rem)] font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.28),inset_0_0_0_1px_rgba(37,99,235,0.3)] outline-offset-4 transition hover:-translate-y-0.5 hover:bg-[#07112b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
            >
              <Download className="size-[clamp(0.9rem,3.9vw,1.1rem)]" aria-hidden="true" />
              Download APK for Android
            </button>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[clamp(2rem,7.7vw,2.35rem)] items-center justify-center gap-[0.42rem] rounded-full border border-[#50ff8e] bg-[#0d54b8]/42 px-[3.4vw] text-[clamp(1rem,4.25vw,1.28rem)] font-normal text-white outline-offset-4 transition hover:-translate-y-0.5 hover:bg-[#0d54b8]/62 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#50ff8e]"
            >
              <GithubMark className="size-[clamp(1.18rem,5.2vw,1.48rem)]" />
              Github
            </a>
          </div>
        </div>
      </section>

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_54%_42%,rgba(37,99,235,0.34),transparent_34rem),linear-gradient(90deg,rgba(37,115,255,0.12),transparent_36%,rgba(0,0,0,0.12)_78%)] sm:block" />

      <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 animate-vertical-scroll">
          <PhoneShot
            src={assets.createEmpty}
            alt=""
            className="left-[3.2vw] top-[2.2vh] w-[14.1vw]"
          />
          <PhoneShot
            src={assets.createUploading}
            alt=""
            className="left-[3.2vw] top-[53.1vh] w-[14.1vw]"
          />
          <PhoneShot
            src={assets.createLong}
            alt=""
            className="left-[18.35vw] top-[6vh] w-[16.2vw]"
          />
          <PhoneShot
            src={assets.homeFeatured}
            alt=""
            className="left-[18.35vw] top-[44vh] w-[16.2vw]"
          />
          <PhoneShot
            src={assets.saved}
            alt=""
            className="left-[18.35vw] top-[82vh] w-[16.1vw]"
          />
        </div>
      </div>

      <img
        src={assets.logo}
        alt="Livora"
        className="absolute left-1/2 top-[4.5svh] z-20 hidden h-auto w-[8.8rem] -translate-x-1/2 sm:block md:top-[5.5svh] md:w-[9.2rem]"
      />

      <section className="relative z-20 mx-auto hidden min-h-[100svh] w-full flex-col items-center justify-start px-6 pb-48 pt-28 text-center sm:flex sm:pt-46 sm:pb-[18rem] md:px-10 lg:items-start lg:pb-16 lg:pl-[8vw] lg:pr-[37vw] lg:text-left xl:pl-[40vw] xl:pr-[9vw]">
        <h1 className="max-w-[46rem] text-[clamp(2.4rem,10vw,3.45rem)] font-bold leading-[1.08] tracking-normal text-white sm:text-[clamp(3.55rem,8vw,5.5rem)] lg:text-[clamp(3.6rem,5.1vw,4.7rem)] xl:text-[clamp(3.45rem,4.31vw,3.875rem)]">
          Find, List &amp; Discover Properties Effortlessly
        </h1>

        <p className="mt-8 max-w-[42.8rem] text-[clamp(1rem,2.25vw,1.35rem)] font-normal leading-[1.25] text-white/80 lg:text-[1.12rem] xl:text-[1.125rem]">
          Livora is a modern real estate platform that helps buyers, renters,
          and property owners connect through a simple, intuitive mobile
          experience.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
          <button
            type="button"
            onClick={() => setIsDownloadModalOpen(true)}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/20 bg-[#081338]/88 px-5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.28)] outline-offset-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-[#0b1740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
          >
            <Download className="size-4" aria-hidden="true" />
            Download APK for Android
          </button>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-[#00ff6a] bg-[#0b3f91]/35 px-4 pr-5 text-base font-normal text-white shadow-[0_10px_26px_rgba(0,0,0,0.18)] outline-offset-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-[#0b3f91]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff6a]"
          >
            <GithubMark />
            Github
          </a>
        </div>
      </section>

      <img
        src={assets.appIconMockup}
        alt="Livora app icon on an iPhone home screen"
        className="pointer-events-none absolute bottom-[-5.5rem] right-[-8.5rem] z-10 hidden w-[27rem] max-w-none select-none drop-shadow-[0_30px_58px_rgba(0,0,0,0.58)] sm:block md:bottom-[-6rem] md:right-[-5rem] md:w-[30rem] lg:bottom-0 lg:right-[-0.25rem] lg:w-[28.75vw] lg:min-w-[25rem] lg:max-w-[30rem]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-32 bg-gradient-to-t from-black/35 to-transparent sm:block" />

      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 px-4 py-5 text-left backdrop-blur-sm sm:items-center">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close download prompt"
            onClick={() => setIsDownloadModalOpen(false)}
          />

          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
            aria-describedby="download-modal-description"
            className="relative z-10 w-full max-w-[22rem] rounded-lg border border-white/15 bg-[#071329] p-5 text-white shadow-[0_28px_80px_rgba(0,0,0,0.52)]"
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full text-white/70 outline-offset-4 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/75"
              aria-label="Close download prompt"
              onClick={() => setIsDownloadModalOpen(false)}
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            <div className="flex items-start gap-3 pr-8">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#00ff6a]/15 text-[#00ff6a]">
                <Download className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="download-modal-title"
                  className="text-lg font-semibold leading-tight text-white"
                >
                  Download Livora APK?
                </h2>
                <p
                  id="download-modal-description"
                  className="mt-2 text-sm leading-5 text-white/72"
                >
                  This will download the Android APK to your phone.
                </p>
              </div>
            </div>

            <p className="mt-4 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-xs leading-5 text-white/68">
              Android may ask for permission before saving or installing the
              file.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm font-semibold text-white/78 outline-offset-4 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/75"
                onClick={() => setIsDownloadModalOpen(false)}
              >
                Cancel
              </button>
              <a
                href={APK_DOWNLOAD_URL}
                download="Livora.apk"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#00ff6a] px-4 text-sm font-bold text-[#03110a] shadow-[0_12px_26px_rgba(0,255,106,0.22)] outline-offset-4 transition hover:bg-[#45ff92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                onClick={() => setIsDownloadModalOpen(false)}
              >
                <Download className="size-4" aria-hidden="true" />
                Download
              </a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
