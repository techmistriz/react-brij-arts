import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// import BrijNav from "@/components/landing/BrijNav";
import Footer from "./Footer";
import brijAboutHero from "@/assets/brij-about-hero.jpg";
import safFestivalPoster from "@/assets/saf-festival-poster.jpg";
import brijLogo from "@/assets/brij-logo.png";
import BrijNav from "./BrijNav";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const SectionHeader = ({
  title,
  color = "primary",
}: {
  title: string;
  color?: "primary" | "foreground";
}) => (
  <motion.div {...fadeUp} className="mb-10 md:mb-14">
    <h2
      className={`font-heading font-bold uppercase text-[36px] md:text-[47px] leading-tight ${color === "foreground" ? "text-foreground" : "text-primary"}`}
    >
      {title}
    </h2>
  </motion.div>
);

type FilmSlide = {
  id: string;
  videoId: string;
  start?: number;
  poster: string;
  headline: string;
  showLogo: boolean;
};

const slides: FilmSlide[] = [
  {
    id: "brij",
    videoId: "DR3Jvn4AljM",
    start: 7,
    poster: brijAboutHero,
    headline: "The Permanent Home For What's Next",
    showLogo: true,
  },
  {
    id: "saf",
    videoId: "AT2y5gz1TRg",
    poster: safFestivalPoster,
    headline: "Serendipity Arts Festival 2026",
    showLogo: false,
  },
];

/* ───── single film slide ───── */
const FilmSlideView = ({ slide }: { slide: FilmSlide }) => {
  const playerRef = useRef<HTMLIFrameElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const [mode, setMode] = useState<"static" | "playing">("static");
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const p = ytPlayerRef.current;
    if (!p) return;
    if (isMuted) {
      p.unMute();
      p.setVolume(80);
      setIsMuted(false);
    } else {
      p.mute();
      setIsMuted(true);
    }
  };

  const startFilm = () => setMode("playing");
  const resetToStatic = () => {
    try {
      ytPlayerRef.current?.destroy?.();
    } catch {
      /* noop */
    }
    ytPlayerRef.current = null;
    setMode("static");
    setIsMuted(true);
  };

  useEffect(() => {
    if (mode !== "playing") return;
    let cancelled = false;
    const init = () => {
      if (cancelled || !playerRef.current) return;
      ytPlayerRef.current = new (window as any).YT.Player(playerRef.current, {
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
          },
          onStateChange: (e: any) => {
            if (e.data === 0) resetToStatic();
          },
        },
      });
    };
    if ((window as any).YT?.Player) {
      init();
    } else {
      const prev = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        prev?.();
        init();
      };
    }
    return () => {
      cancelled = true;
    };
  }, [mode]);

  const isPlaying = mode === "playing";
  const startParam = slide.start ? `&start=${slide.start}` : "";
  const isMobileLandscape =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  return (
    <div className="relative w-full h-full snap-start shrink-0 basis-full flex items-end overflow-hidden bg-foreground">
      {/* Poster image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={slide.poster}
          alt={slide.headline}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Film iframe */}
      {isPlaying && (
        <div className="absolute inset-0 z-[5] overflow-hidden bg-foreground">
          <iframe
            ref={playerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] md:w-[max(100vw,177.78vh)] md:h-[max(100vh,56.25vw)]"
            src={`https://www.youtube.com/embed/${slide.videoId}?enablejsapi=1&autoplay=1&mute=1${startParam}&controls=1&modestbranding=1&rel=0&showinfo=0&playsinline=1&playlist=${slide.videoId}`}
            title="THE BRIJ film"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Logo */}
      {slide.showLogo && (
        <motion.img
          src={brijLogo}
          alt="THE BRIJ"
          className="absolute top-20 md:top-24 left-4 md:left-12 lg:left-16 z-10 h-10 md:h-16 lg:h-20 w-auto pointer-events-none"
          style={{ filter: "brightness(0) invert(1)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isPlaying ? (isMobileLandscape ? 0 : 1) : 1,
            y: 0,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Play button — centered, smaller */}
      {!isPlaying && (
        <motion.button
          type="button"
          onClick={startFilm}
          aria-label="Play film"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/60 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 hover:scale-105 transition-all"
        >
          <Play className="w-5 h-5 md:w-7 md:h-7 ml-0.5" fill="currentColor" />
        </motion.button>
      )}

      {/* Sound toggle */}
      {isPlaying && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute film" : "Mute film"}
          className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-20 flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-5 md:py-3 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-3 h-3 md:w-5 md:h-5" />
          ) : (
            <Volume2 className="w-3 h-3 md:w-5 md:h-5" />
          )}
          <span className="font-body text-[10px] md:text-sm uppercase tracking-wider">
            {isMuted ? "Sound off" : "Sound on"}
          </span>
        </button>
      )}

      {/* Headline */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-16 pb-8 md:pb-12 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isPlaying ? (isMobileLandscape ? 0 : 1) : 1,
            y: 0,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-white uppercase leading-[0.95] text-[40px] md:text-[80px] max-w-4xl"
          style={{ letterSpacing: "0.02em" }}
        >
          {slide.headline}
        </motion.h1>
      </div>
    </div>
  );
};

const BrijAbout = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Preload YouTube IFrame API once
  useEffect(() => {
    if ((window as any).YT?.Player) return;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(tag, firstScript);
  }, []);

  const goTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  return (
    <div className="min-h-screen bg-background">
      <BrijNav />

      {/* ── Hero film holder (horizontal snap) ── */}
      <section className="relative min-h-[calc(56.25vw+260px)] md:min-h-screen overflow-hidden bg-foreground pt-16 md:pt-20">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory h-[calc(56.25vw+260px)] md:h-[calc(100vh-5rem)] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {slides.map((s) => (
            <FilmSlideView key={s.id} slide={s} />
          ))}
        </div>

        {/* Slide arrows */}
        {activeIdx > 0 && (
          <button
            type="button"
            onClick={() => goTo(activeIdx - 1)}
            aria-label="Previous film"
            className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {activeIdx < slides.length - 1 && (
          <button
            type="button"
            onClick={() => goTo(activeIdx + 1)}
            aria-label="Next film"
            className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to film ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === activeIdx ? "w-8 bg-white" : "w-1.5 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* ── About Us ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="About Us" />
          <motion.div
            {...fadeUp}
            className="space-y-6 font-body text-foreground text-[18px] md:text-[22px] leading-[1.5]"
          >
            <p>
              THE BRIJ is an upcoming creative ecosystem dedicated to the arts —
              a place where education, research, experience and innovation will
              meet to generate transformative cultural encounters.
            </p>
            <p>
              Ten years ago, the Serendipity Arts Festival began as a wager —
              that Panjim could hold the full breadth of human creative
              expression, that audiences were hungry for something genuinely
              multidisciplinary, that the arts deserved a stage as ambitious as
              the work being made on it. A decade later, that wager has paid off
              in ways that continue to surprise even those who placed it.
            </p>
            <p>
              The Serendipity Arts Festival is now one of South Asia's most
              significant cultural gatherings — an annual event of international
              scale that draws practitioners, institutions, curators, and
              audiences from across the world to the shores of Goa every
              December. Ten years of conversations started, collaborations
              built, artists supported, and new publics found.
            </p>
            <p>But ten years also asks a harder question. What comes next?</p>
            <p>THE BRIJ is where that question finds its answer.</p>
          </motion.div>
        </div>
      </section>

      {/* ── Rethinking Cultural Institution ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Rethinking What A Cultural Institution Can Look Like" />
          <motion.div
            {...fadeUp}
            className="space-y-6 font-body text-foreground text-[18px] md:text-[22px] leading-[1.5]"
          >
            <p>
              THE BRIJ is being conceived around the framework of the Live
              Museum — a deliberate and considered departure from what cultural
              institutions have traditionally been allowed to be.
            </p>
            <p>
              Unlike a conventional museum, THE BRIJ will not simply house
              finished objects behind glass. It will hold the making — the
              research, the risk, the restless conversation between an artist
              and an idea long before it solidifies into a work. It will sit at
              the intersection of deep history and active experimentation,
              drawing connections between the artistic inheritances of this
              region and the practices that will define what comes next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Three Pillars. One Future Ecosystem." />
          <motion.p
            {...fadeUp}
            className="font-body text-foreground text-[18px] md:text-[22px] leading-[1.5] mb-12"
          >
            THE BRIJ is built around three interconnected areas — each distinct
            in purpose, each dependent on the others.
          </motion.p>

          <div className="space-y-12">
            <motion.div {...fadeUp}>
              <h3 className="font-heading font-bold text-primary uppercase text-[22px] md:text-[28px] mb-5">
                Education & Research
              </h3>
              <p className="font-body text-foreground text-[18px] md:text-[22px] leading-[1.5]">
                A quasi-informal university for the arts — through formal
                education, SAF Publishing, workshops, residencies, and a
                dedicated writing and research programme. Artists and thinkers
                who move through THE BRIJ leave genuinely trained, challenged,
                and connected to something larger than themselves.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-heading font-bold text-primary uppercase text-[22px] md:text-[28px] mb-5">
                Multidisciplinary Experiences
              </h3>
              <p className="font-body text-foreground text-[18px] md:text-[22px] leading-[1.5]">
                Museum spaces, theatres, a black box, library and archives,
                culinary experiences, and large-scale experiential projects —
                designed not for passive consumption but for active encounter.
                Built to slow people down and reshape how they move through the
                world afterward.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-heading font-bold text-primary uppercase text-[22px] md:text-[28px] mb-5">
                Innovation & Incubation
              </h3>
              <p className="font-body text-foreground text-[18px] md:text-[22px] leading-[1.5]">
                Workshop areas, an incubation centre, residential spaces,
                experimental labs, and open studios — built to protect and
                provoke the in-between work. Where new artistic languages get
                tested and disciplines that have never spoken to each other are
                put in the same room.
              </p>
            </motion.div>

            <motion.p
              {...fadeUp}
              className="font-body text-foreground text-[18px] md:text-[22px] leading-[1.5] pt-6 border-t border-border"
            >
              THE BRIJ is also an experiment in what genuinely sustainable arts
              infrastructure looks like — financially, ecologically, and
              culturally. A resource for artists, communities, and curious minds
              for generations that cannot yet imagine what they will need it
              for.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer
        links={[
          { label: "About Us", href: "/brij/about" },
          {
            label: "Incubator",
            href: "https://thebrij.world/incubator/",
            external: true,
          },
          { label: "Fellowship", href: "/academy/fellowship" },
          { label: "Our Team", href: "/brij/credits" },
        ]}
        ecosystem={[
          {
            label: "THE BRIJ Incubator",
            href: "https://thebrij.world/incubator/",
            external: true,
          },
          { label: "THE BRIJ Fellowship", href: "/academy/fellowship" },
          {
            label: "Serendipity Arts",
            href: "https://serendipityarts.org",
            external: true,
          },
          {
            label: "Serendipity Arts Festival",
            href: "https://serendipityartsfestival.com",
            external: true,
          },
        ]}
        copyright="THE BRIJ"
      />
    </div>
  );
};

export default BrijAbout;
