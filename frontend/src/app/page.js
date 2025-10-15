"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/Button";
import TitleDescription from "@/components/TitleDescription";
import Form from "@/components/Form";

import logo from "@/assets/images/logo.png";
import playbackGif from "@/assets/gifs/header-gif.gif";
import ellipseSvg from "@/assets/svg/Ellipse.svg";

import client1 from "@/assets/images/accel.png";
import client2 from "@/assets/images/akshya.png";
import client3 from "@/assets/images/audi.png";
import client4 from "@/assets/images/brigade.png";
import client5 from "@/assets/images/cafe.png";
import client6 from "@/assets/images/comicon.png";
import client7 from "@/assets/images/nimhans.png";
import client8 from "@/assets/images/parc.png";
import client9 from "@/assets/images/paytm.png";
import client10 from "@/assets/images/prestige.png";
import client11 from "@/assets/images/rohini.png";
import client12 from "@/assets/images/swiggy.png";
import client13 from "@/assets/images/cred.png";
import client14 from "@/assets/images/echo.png";
import client15 from "@/assets/images/embassy.png";
import client16 from "@/assets/images/google.png";
import client17 from "@/assets/images/hilton.png";
import client18 from "@/assets/images/himalaya.png";

import aboutImage from "@/assets/images/about-video.png";

const international = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client6 },
  { image: client7 },
  { image: client8 },
  { image: client9 },
  { image: client10 },
  { image: client11 },
  { image: client12 },
  { image: client13 },
  { image: client14 },
  { image: client15 },
  { image: client16 },
  { image: client17 },
  { image: client18 },
];

const aboutCount = [
  {
    id: 1,
    number: "1K+",
    value: 1000,
    description: "Hours of Visual Story telling",
  },
  {
    id: 2,
    number: "100+",
    value: 100,
    description: "Our Partners",
  },
  {
    id: 3,
    number: "50+",
    value: 50,
    description: "Stories that Inspire",
  },
];

import himalayaImage from "@/assets/images/himalaya-wellness.jpg";
import akshayaPathraImage from "@/assets/images/akshaya-pathra.png";

import ourWorkImage1 from "@/assets/images/our-work-img-1.png";
import ourWorkImage2 from "@/assets/images/our-work-img-2.png";
import ourWorkImage3 from "@/assets/images/our-work-img-3.png";
import ourWorkImage4 from "@/assets/images/our-work-img-4.png";
import ourWorkImage5 from "@/assets/images/our-work-img-5.png";
import ourWorkImage6 from "@/assets/images/our-work-img-6.png";

import differenceIcon1 from "@/assets/svg/Simplification.svg";
import differenceIcon2 from "@/assets/svg/Boardroom.svg";
import differenceIcon3 from "@/assets/svg/Glyph.svg";
import differenceIcon4 from "@/assets/svg/Pan-India.svg";
import differenceIcon5 from "@/assets/svg/Faster-Cut.svg";
import differenceIcon6 from "@/assets/svg/Compliance.svg";

const accordianDifference = [
  {
    id: 1,
    icon: differenceIcon1,
    differenceVideo: "/videos/Cinema-Quality-Corporate-Speed.mp4",
    title: "Cinema Quality. Corporate Speed.",
    description: "Cinema Quality. Corporate Speed.",
    caption: "Films that look like cinema, delivered at the pace of business",
  },
  {
    id: 2,
    icon: differenceIcon2,
    differenceVideo: "/videos/from-brief-to-boardrooom.mp4",
    title: "From Brief to Boardroom—Seamless Delivery",
    description: "From Brief to Boardroom—Seamless Delivery",
    caption:
      "Kickoff within hours; scripts, shoots, edits, approvals managed end-to-end.",
  },
  {
    id: 3,
    icon: differenceIcon3,
    differenceVideo: "/videos/trusted-by-global-brands.mp4",
    title: "Trusted by Global Brands, Tailored for Local CSR Stories",
    description: "Trusted by Global Brands, Tailored for Local CSR Stories",
    caption:
      "Tailored for Local CSR Stories Global standards, culturally authentic execution.",
  },
  {
    id: 4,
    icon: differenceIcon4,
    differenceVideo: "/videos/Pan.mp4",
    title: "Pan-India Execution, Global Standards",
    description: "Pan-India Execution, Global Standards",
    caption: "Crews across 20+ states, remote/forest/coastal shoots.",
  },
  {
    id: 5,
    icon: differenceIcon5,
    differenceVideo: "/videos/Faster-Cuts.mp4",
    title: "Faster Cuts, Smarter Workflows",
    description: "Faster Cuts, Smarter Workflows",
    caption:
      "Always Cinematic AI accelerates, humans refine → cinematic quality.",
  },
  {
    id: 6,
    icon: differenceIcon6,
    differenceVideo: "/videos/Compliance.mp4",
    title: "Compliance & Consent Assured",
    description: "Compliance & Consent Assured",
    caption:
      "Every project delivered with permissions, safeguarding, and stakeholder-ready packs.",
  },
];

import whatWeDoBg from "@/assets/images/what-we-do-bg.jpg";
import whatWeDoIcon1 from "@/assets/svg/Kickoff.svg";
import whatWeDoIcon2 from "@/assets/svg/Cut-downs.svg";
import whatWeDoIcon3 from "@/assets/svg/Languages-accessibility.svg";
import whatWeDoIcon4 from "@/assets/svg/Report-ready.svg";
import whatWeDoIcon5 from "@/assets/svg/thumbnail-kit.svg";

import himalayaWellnessLogo from "@/assets/images/since-1930.jpg";
import tescoLogo from "@/assets/images/tesco.png";
import akshayPathraLogo from "@/assets/images/akshya.png";

const testimonials = [
  {
    logo: himalayaWellnessLogo,
    backgroundColor: "black",
    rating: 5,
    text: "Despite heavy rains during our Mangrove project, the Wilmarcs crew stayed calm and prepared. Permissions, safety and backups were all in place. The final film looked beautiful and landed on schedule. True professionalism.",
    name: "Jacob",
    company: "Himalaya Wellness Company",
  },
  {
    logo: tescoLogo,
    backgroundColor: "black",
    rating: 5,
    text: "We've worked with many vendors; Wilmarcs stands apart. The attention to detail and speed of delivery were exceptional. The CSR films we received had cinematic quality with corporate precision—some of the best we've produced.",
    name: "Ranjith",
    company: "Tesco",
  },
  {
    logo: akshayPathraLogo,
    backgroundColor: "white",
    rating: 5,
    text: "Our nationwide documentary with Wilmarcs spanned deserts, rivers and mountains. Every location was meticulously planned, every story captured with care. The final film was broadcast widely, presented at global forums, and produced for the UN's 4 Billion Meals milestone. An extraordinary experience.",
    name: "Abhijth",
    company: "Akshaya Patra Foundation",
  },
];

import vilmarcsMotionPictures from "@/assets/images/vilmarcs-motion-pictures.png";

import hourseFooterLogo from "@/assets/images/hourse-footer.png";
import secondFooterImage from "@/assets/images/wilmarcs-footer-logo.png";
import AngleDown from "@/components/Icons/AngleDown";
import AngleRight from "@/components/Icons/AngleRight";
import Facebook from "@/components/Icons/Facebook";
import Youtube from "@/components/Icons/Youtube";
import Progress from "@/components/Progess";
import Instagram from "@/components/Icons/Instagram";
import LinkedIn from "@/components/Icons/Likedin";

const faqs = [
  {
    question: "How fast can you start a project?",
    answer: "Bengaluru: 3-4 hrs. Other cities: same-day plan, 48-72 hrs start.",
  },
  {
    question: "Do you manage permissions and compliance?",
    answer:
      "Yes, we handle all necessary permissions and ensure full compliance with local regulations and building codes.",
  },
  {
    question: "Are you vendor-onboarding ready?",
    answer:
      "Absolutely! We have a streamlined vendor onboarding process with verified professionals ready to start.",
  },
  {
    question: "What deliverables are standard?",
    answer:
      "Standard deliverables include detailed project plans, material specifications, timeline schedules, and quality reports.",
  },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const router = useRouter();
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const differenceRef = useRef(null);
  const solutionsRef = useRef(null);
  const aboutCountRef = useRef(null);
  const ReadyToRollRef = useRef(null);

  // VIDEO REFS FOR AUTO-PLAY
  const aboutVideoRef = useRef(null);
  const himalayaVideoRef = useRef(null);
  const akshayaVideoRef = useRef(null);
  const workVideosRef = useRef([]);
  const differenceVideosRef = useRef([]);

  // SEQUENTIAL AUTO-PLAY STATE FOR WORK SECTION
  const [autoPlayWorkIndex, setAutoPlayWorkIndex] = useState(-1);
  const [isSequentialPlaying, setIsSequentialPlaying] = useState(false);

  // MENU STATE
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(1);

  // VIDEO PLAYBACK STATES
  const [playingVideo, setPlayingVideo] = useState(null);
  const [playingHimalayaVideo, setPlayingHimalayaVideo] = useState(false);
  const [playingAkshayaVideo, setPlayingAkshayaVideo] = useState(false);

  // SCROLL-BASED AUTOPLAY STATES (NEW)
  const [shouldAutoPlayAbout, setShouldAutoPlayAbout] = useState(false);
  const [shouldAutoPlayHimalaya, setShouldAutoPlayHimalaya] = useState(false);
  const [shouldAutoPlayAkshaya, setShouldAutoPlayAkshaya] = useState(false);

  // FAQ STATE
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
      differenceVideosRef.current.forEach((video) => {
        if (video) video.pause();
      });
    } else {
      setOpenAccordion(id);
      setTimeout(() => {
        differenceVideosRef.current.forEach((video, index) => {
          if (video) {
            if (index + 1 === id) {
              video.play();
            } else {
              video.pause();
            }
          }
        });
      }, 100);
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (ref, sectionId) => {
    if (ref.current) {
      gsap.to(window, {
        scrollTo: {
          y: ref.current,
          offsetY: 80,
        },
        duration: 1,
        ease: "power2.out",
      });
      router.push(`/#${sectionId}`, { scroll: false });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const playVideo = (index, videoUrl) => {
    setPlayingVideo(index);
    setIsSequentialPlaying(false);
    setAutoPlayWorkIndex(-1);
  };

  const stopVideo = () => {
    setPlayingVideo(null);
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  };

  const startSequentialAutoPlay = () => {
    if (
      isSequentialPlaying ||
      workRef.current.getBoundingClientRect().top > window.innerHeight
    )
      return;

    setIsSequentialPlaying(true);
    setAutoPlayWorkIndex(0);
  };

  const nextSequentialVideo = () => {
    const nextIndex = autoPlayWorkIndex + 1;
    if (nextIndex < 6) {
      setAutoPlayWorkIndex(nextIndex);
    } else {
      setIsSequentialPlaying(false);
      setAutoPlayWorkIndex(-1);
    }
  };

  // FIXED: SCROLL-BASED AUTOPLAY FUNCTION
  const autoPlayVideosOnScroll = useCallback(() => {
    // About Section - "See the work in 60 seconds"
    if (aboutVideoRef.current && !playingVideo) {
      const rect = aboutVideoRef.current.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

      if (isInView) {
        setShouldAutoPlayAbout(true);
      } else {
        setShouldAutoPlayAbout(false);
      }
    }

    // Case Studies - Himalaya Video
    if (himalayaVideoRef.current && !playingHimalayaVideo) {
      const rect = himalayaVideoRef.current.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

      if (isInView) {
        setShouldAutoPlayHimalaya(true);
      } else {
        setShouldAutoPlayHimalaya(false);
      }
    }

    // Case Studies - Akshaya Video
    if (akshayaVideoRef.current && !playingAkshayaVideo) {
      const rect = akshayaVideoRef.current.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

      if (isInView) {
        setShouldAutoPlayAkshaya(true);
      } else {
        setShouldAutoPlayAkshaya(false);
      }
    }

    // Work Section
    if (workRef.current) {
      const rect = workRef.current.getBoundingClientRect();
      const isWorkInView =
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2;
      if (isWorkInView && autoPlayWorkIndex === -1 && !isSequentialPlaying) {
        setTimeout(startSequentialAutoPlay, 500);
      }
    }

    // Difference Videos
    differenceVideosRef.current.forEach((videoRef, index) => {
      if (videoRef) {
        const rect = videoRef.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.7 &&
          rect.bottom > window.innerHeight * 0.3;
        if (isInView && openAccordion === index + 1) {
          videoRef.play();
        } else if (!isInView && openAccordion === index + 1) {
          videoRef.pause();
        }
      }
    });
  }, [
    playingVideo,
    playingHimalayaVideo,
    playingAkshayaVideo,
    autoPlayWorkIndex,
    isSequentialPlaying,
    openAccordion,
  ]);

  // MAIN USEEFFECT - FIXED: Empty dependency array
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      workRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      differenceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: differenceRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      solutionsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ReadyToRollRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ReadyToRollRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    if (aboutCountRef.current) {
      const counters = aboutCountRef.current.querySelectorAll(".counter");
      counters.forEach((counter, index) => {
        const targetValue = aboutCount[index].value;
        const isK = aboutCount[index].number.includes("K");
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: aboutCountRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              const value = Math.ceil(this.targets()[0].innerText);
              if (isK) {
                counter.innerText = `${Math.ceil(value / 1000)}K+`;
              } else {
                counter.innerText = `${value}${
                  aboutCount[index].number.includes("+") ? "+" : ""
                }`;
              }
            },
          }
        );
      });
    }

    // FIXED: SCROLL LISTENER - Only runs once
    const handleScroll = () => {
      autoPlayVideosOnScroll();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Handle video end for sequential play in Work section
    const handleMessage = (event) => {
      if (event.origin !== "https://www.youtube.com") return;
      const data = JSON.parse(event.data);
      if (
        data.event === "onStateChange" &&
        data.info === 0 && // Video ended
        autoPlayWorkIndex >= 0 &&
        workVideosRef.current[autoPlayWorkIndex]
      ) {
        const currentIndex = parseInt(
          workVideosRef.current[autoPlayWorkIndex].dataset.index
        );
        if (autoPlayWorkIndex === currentIndex) {
          nextSequentialVideo();
        }
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("message", handleMessage);
    };
  }, []); // FIXED: Empty dependency array

  // ✅ FIXED: 2-SECOND AUTO-PAUSE FOR ABOUT VIDEO
  useEffect(() => {
    if (aboutVideoRef.current && shouldAutoPlayAbout && !playingVideo) {
      const iframe = aboutVideoRef.current;
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      setPlayingVideo("about");

      const timer = setTimeout(() => {
        if (playingVideo === "about") {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
          setPlayingVideo(null);
          setShouldAutoPlayAbout(false);
        }
      }, 2000); // ✅ CHANGED TO 2 SECONDS

      return () => clearTimeout(timer);
    }
  }, [shouldAutoPlayAbout, playingVideo]);

  // ✅ FIXED: 2-SECOND AUTO-PAUSE FOR HIMALAYA VIDEO
  useEffect(() => {
    if (
      himalayaVideoRef.current &&
      shouldAutoPlayHimalaya &&
      !playingHimalayaVideo
    ) {
      const iframe = himalayaVideoRef.current;
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      setPlayingHimalayaVideo(true);

      const timer = setTimeout(() => {
        if (playingHimalayaVideo) {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
          setPlayingHimalayaVideo(false);
          setShouldAutoPlayHimalaya(false);
        }
      }, 2000); // ✅ CHANGED TO 2 SECONDS

      return () => clearTimeout(timer);
    }
  }, [shouldAutoPlayHimalaya, playingHimalayaVideo]);

  // ✅ FIXED: 2-SECOND AUTO-PAUSE FOR AKSHAYA VIDEO
  useEffect(() => {
    if (
      akshayaVideoRef.current &&
      shouldAutoPlayAkshaya &&
      !playingAkshayaVideo
    ) {
      const iframe = akshayaVideoRef.current;
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      setPlayingAkshayaVideo(true);

      const timer = setTimeout(() => {
        if (playingAkshayaVideo) {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
          setPlayingAkshayaVideo(false);
          setShouldAutoPlayAkshaya(false);
        }
      }, 2000); // ✅ CHANGED TO 2 SECONDS

      return () => clearTimeout(timer);
    }
  }, [shouldAutoPlayAkshaya, playingAkshayaVideo]);

  // PAUSE VIDEOS WHEN USER CLICKS
  useEffect(() => {
    if (playingVideo !== null && playingVideo !== "about") {
      setShouldAutoPlayAbout(false);
    }
    if (playingHimalayaVideo === false) {
      setShouldAutoPlayHimalaya(false);
    }
    if (playingAkshayaVideo === false) {
      setShouldAutoPlayAkshaya(false);
    }
  }, [playingVideo, playingHimalayaVideo, playingAkshayaVideo]);

  return (
    <>
      <header
        className="fixed top-0 w-full h-[450px] sm:h-screen -z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${playbackGif.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <nav className="py-4 border border-b border-x-0 border-t-0 border-white/50 z-10 relative">
          <div className="container flex items-center justify-between">
            <div className="flex-shrink-0">
              <Image src={logo} alt="Wilmarcs Logo" width={140} height={40} />
            </div>
            <ul className="hidden sm:flex justify-center gap-14 flex-grow">
              <li className="group transition-all duration-300 relative flex items-center justify-center">
                <div className="absolute -left-[18px] -top-[5px] w-8 h-8 rounded-full bg-transparent group-hover:bg-[#4CAF5080] -z-10"></div>
                <Link
                  href="/#works"
                  onClick={() => scrollToSection(workRef, "works")}
                  className="relative z-10 primary-font text-white text-md font-semibold"
                >
                  Works
                </Link>
              </li>
              <li className="group relative flex items-center justify-center">
                <div className="absolute -left-[18px] -top-[5px] w-8 h-8 rounded-full bg-transparent group-hover:bg-[#4CAF5080] -z-10"></div>
                <Link
                  href="/#difference"
                  onClick={() => scrollToSection(differenceRef, "difference")}
                  className="elative z-10 primary-font text-white text-md font-semibold"
                >
                  Difference
                </Link>
              </li>
              <li className="group relative flex items-center justify-center">
                <div className="absolute -left-[18px] -top-[5px] w-8 h-8 rounded-full bg-transparent group-hover:bg-[#4CAF5080] -z-10"></div>
                <Link
                  href="/#solutions"
                  onClick={() => scrollToSection(solutionsRef, "solutions")}
                  className="elative z-10 primary-font text-white text-md font-semibold"
                >
                  Solutions
                </Link>
              </li>
            </ul>
            <div className="hidden sm:flex flex-shrink-0">
              <Button
                text="Talk to a Producer"
                onClick={() => scrollToSection(ReadyToRollRef, "ready-to-roll")}
                bgColor="rgba(255, 255, 255, 0.3)"
                fontSize="md"
                textColor="#FFFFFF"
                border="1px solid #FFFFFF"
                hoverBgColor="#000"
                hoverTextColor="#FFFFFF"
              />
            </div>
            <button
              className="sm:hidden flex items-center justify-center w-10 h-10"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div
            className={`z-20 fixed top-0 right-0 h-screen w-full bg-black/90 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close navigation menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-auto space-y-8">
              <li>
                <Link
                  href="/#works"
                  onClick={() => scrollToSection(workRef, "works")}
                  className="primary-font text-white text-lg font-semibold hover:text-[#4CAF5080]"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#difference"
                  onClick={() => scrollToSection(differenceRef, "difference")}
                  className="primary-font text-white text-lg font-semibold hover:text-[#4CAF5080]"
                >
                  Difference
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  onClick={() => scrollToSection(solutionsRef, "solutions")}
                  className="primary-font text-white text-lg font-semibold hover:text-[#4CAF5080]"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Button
                  text="Talk to a Producer"
                  onClick={() =>
                    scrollToSection(ReadyToRollRef, "ready-to-roll")
                  }
                  bgColor="rgba(255, 255, 255, 0.3)"
                  fontSize="lg"
                  textColor="#FFFFFF"
                  border="1px solid #FFFFFF"
                  hoverBgColor="#000"
                  hoverTextColor="#FFFFFF"
                />
              </li>
            </ul>
          </div>
        </nav>
        <div className="container flex flex-col justify-center items-start h-[calc(52vh-80px)] sm:h-[calc(100vh-80px)] text-white md:w-1/2">
          <p className="secondary-font text-xl md:text-4xl font-bold mb-2">
            <span className="bg-[#4CAF50] px-1">Stories that inspire.</span>
          </p>
          <h1 className="secondary-font text-4xl md:text-8xl font-bold mb-4">
            Films that deliver.
          </h1>
          <p className="primary-font text-base md:text-[18px] max-w-xl mb-4">
            We craft impact films, ESG & sustainability videos, and corporate
            documentaries that showcase real change with cinematic precision,
            fast turnaround, and report-ready packages for annual reports,
            boardrooms, and social.
          </p>
          <Button
            text="Start Your Project"
            onClick={() => scrollToSection(ReadyToRollRef, "ready-to-roll")}
            bgColor="rgba(255, 255, 255)"
            fontSize="md"
            textColor="#000"
            border="1px solid #FFFFFF"
            hoverBgColor="#000"
            hoverTextColor="#FFFFFF"
          />
        </div>
      </header>

      <main className="relative mt-[48vh] sm:mt-[124vh] bg-white z-50">
        <div
          className="hidden sm:block absolute w-full -top-28 left-0"
          style={{
            backgroundImage: `url(${ellipseSvg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center top",
            width: "100%",
            height: "400px",
            zIndex: -1,
          }}
        />

        <section
          className="container min-h-auto pt-[2vh] sm:pt-[4vh] relative z-10"
          style={{ backgroundColor: "#ffffff" }}
        >
          <TitleDescription
            title="Trusted by international names"
            titleClass="mb-6 text-black text-center sm:text-left"
            description={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-6">
            {international.map((client, index) => (
              <div
                className="group client-card border border-[#D6D6D6] p-8 flex justify-center items-center"
                key={index}
              >
                <Image
                  src={client.image}
                  alt={`Client ${index + 1}`}
                  width={140}
                  height={40}
                  style={{ objectFit: "contain" }}
                  className="scale-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className="container min-h-auto pt-6 sm:pt-16 relative z-10"
          style={{ backgroundColor: "#ffffff" }}
          ref={(el) => {
            aboutRef.current = el;
            aboutCountRef.current = el;
          }}
        >
          <div className="flex flex-col sm:flex-row w-full gap-8">
            <div className="w-full sm:w-[45%]">
              <TitleDescription
                title="See the work in 60 seconds"
                titleClass="mb-6 text-black text-center sm:text-left"
                description={false}
              />
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                {playingVideo === "about" ? (
                  <div className="relative w-full h-full">
                    <iframe
                      ref={aboutVideoRef}
                      src="https://www.youtube.com/embed/gwkQYgElMtQ?autoplay=0&mute=1"
                      title="See the work in 60 seconds"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setPlayingVideo(null)}
                      className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-all duration-300"
                      aria-label="Close video"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <Image
                      src={aboutImage}
                      className="cursor-pointer rounded-xl w-full h-full object-cover transition-transform duration-300"
                      alt="Transforming Ideas Into Visual Excellence"
                      width="auto"
                      height={400}
                      onClick={() => setPlayingVideo("about")}
                      aria-label="Play video"
                    />
                    <div
                      className="cursor-pointer absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70 rounded-xl"
                      onClick={() => setPlayingVideo("about")}
                      aria-label="Play video"
                    ></div>
                  </>
                )}
              </div>
              <TitleDescription
                description="From CSR documentaries to corporate events and brand films—watch how leading organisations trust us with their stories."
                descriptionClass="mt-3 text-[#555555]"
                title={false}
              />
            </div>
            <div className="w-full sm:w-[55%] -mt-2 sm:mt-8">
              <p className="primary-font text-md text-center sm:text-left mb-2">
                <span className="bg-[#4CAF50] text-[#FFFFFF] px-1 uppercase">
                  About Us
                </span>
              </p>
              <TitleDescription
                title="Transforming Ideas Into Visual Excellence"
                description="We bring your vision to life through dynamic videos, animations, and photography. Focusing on creative storytelling and technical excellence, our tailored solutions capture your brand's essence and deliver messages that resonate with your audience across every digital platform and business opportunity."
                titleClass="mb-3 text-black text-center sm:text-left"
                descriptionClass="text-[#555555] text-center sm:text-left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {aboutCount.map((count) => (
                  <div
                    className="hover:bg-[#4CAF50] transition-all duration-300 hover:text-white border border-[#D6D6D6] p-8 flex flex-col justify-center items-center rounded-3xl space-y-4"
                    key={count.id}
                  >
                    <span className="secondary-font text-xl md:text-4xl font-bold counter">
                      {count.number}
                    </span>
                    <span className="primary-font text-base md:text-[18px] text-center">
                      {count.description}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button
                  text="Start Your Project"
                  icon={true}
                  onClick={() =>
                    scrollToSection(ReadyToRollRef, "ready-to-roll")
                  }
                  bgColor="#000"
                  fontSize="md"
                  textColor="#FFFFFF"
                  border="1px solid #000"
                  hoverBgColor="#FFFFFF"
                  hoverTextColor="#000"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="min-h-auto mt-8 sm:mt-16 relative z-10"
          style={{ backgroundColor: "#000" }}
        >
          <div className="container py-4 sm:py-16 space-y-4 sm:space-y-16">
            <div className="w-full">
              <TitleDescription
                title="Case Studies"
                description="A showcase of powerful stories where creativity, strategy, and execution come together to deliver impactful visual experiences."
                titleClass="mb-3 text-white text-center"
                descriptionClass="text-white text-center max-w-full sm:max-w-xl mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 rounded-xl p-4 sm:p-8 bg-[#1B1B1BB2]">
              <div className="w-full sm:w-[45%]">
                <div className="relative w-full h-full bg-white rounded-xl group">
                  {playingHimalayaVideo ? (
                    <div className="relative w-full h-full">
                      <iframe
                        ref={himalayaVideoRef}
                        src="https://www.youtube.com/embed/tzIq68pUFRU?autoplay=0&mute=1"
                        title="Himalaya Wellness – Mangrove Restoration Film"
                        className="w-full h-auto sm:h-[350px] rounded-xl"
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setPlayingHimalayaVideo(false)}
                        className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-all duration-300"
                        aria-label="Close video"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={himalayaImage}
                        alt="Himalaya Wellness – Mangrove Restoration Film"
                        width="auto"
                        height={400}
                        className="rounded-xl transform rotate-3 transition-all duration-300 group-hover:rotate-0"
                        style={{ objectFit: "contain" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 91 92"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 cursor-pointer"
                          onClick={() => setPlayingHimalayaVideo(true)}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M45.4999 0.126709C20.371 0.126709 0 20.4977 0 45.6266C0 70.7555 20.371 91.1265 45.4999 91.1265C70.6288 91.1265 90.9998 70.7555 90.9998 45.6266C90.9732 20.509 70.6178 0.15356 45.4999 0.126709ZM63.2026 48.5354C63.8346 48.2205 64.3467 47.7082 64.6617 47.0764C65.4624 45.4699 64.8091 43.5186 63.2026 42.718L37.2027 29.7179C36.7512 29.4923 36.2532 29.375 35.7484 29.3752C33.9534 29.3761 32.4991 30.8318 32.4999 32.6268V58.6267C32.497 59.1368 32.6145 59.6407 32.8426 60.0972C33.6451 61.7029 35.597 62.3539 37.2027 61.5517L63.2026 48.5516V48.5354Z"
                            fill="black"
                            fillOpacity="0.43"
                          />
                          <path
                            d="M64.6617 47.0764C64.3467 47.7082 63.8346 48.2205 63.2026 48.5354V48.5516L37.2027 61.5517C35.597 62.3539 33.6451 61.7029 32.8426 60.0972C32.6145 59.6407 32.497 59.1368 32.4999 58.6267V32.6268C32.4991 30.8318 33.9534 29.3761 35.7484 29.3752C36.2532 29.375 36.7512 29.4923 37.2027 29.7179L63.2026 42.718C64.8091 43.5186 65.4624 45.4699 64.6617 47.0764Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="w-full sm:w-[55%] -mt-4 sm:mt-8 ml-0 sm:ml-16">
                <TitleDescription
                  title="Himalaya Wellness – Mangrove Restoration Film"
                  titleClass="mb-6 text-white text-center sm:text-left"
                  description={false}
                />
                <ul className="list-none space-y-4 text-white">
                  {[
                    {
                      label: "Location:",
                      text: "Kumta (riverine mangrove ecosystem)",
                    },
                    {
                      label: "Challenge:",
                      text: "Monsoon rains caused flooding and disrupted access.",
                    },
                    {
                      label: "Execution:",
                      text: "Boats, safety protocols, alternative kits, flexible scheduling, drone footage between showers.",
                    },
                    {
                      label: "Outcome:",
                      text: "Multi-stage mangrove growth and community stories captured with cinematic clarity.",
                    },
                    {
                      label: "Impact:",
                      text: "Used in Himalaya's annual report and World Mangrove Day campaign.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="relative top-2 min-w-3 min-h-3 mr-3 flex items-center justify-center border-2 border-white rounded text-white text-sm font-bold" />
                      <p className="primary-font text-base md:text-[18px]">
                        <span className="font-bold">{item.label}</span>{" "}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 rounded-xl p-4 sm:p-8 bg-[#1B1B1BB2]">
              <div className="w-full sm:w-[55%]">
                <TitleDescription
                  title="Akshaya Patra – Nationwide Documentary (UN Showcase)"
                  titleClass="mb-6 text-white text-center sm:text-left"
                  description={false}
                />
                <ul className="list-none space-y-4 text-white">
                  {[
                    {
                      label: "Scope:",
                      text: "Multi‑month shoot across schools and kitchens in North, South, East, West India.",
                    },
                    {
                      label: "Objective:",
                      text: "Represent Akshaya Patra's programme to global stakeholders.",
                    },
                    {
                      label: "Execution:",
                      text: "Detailed logistics, uniform interview frameworks, permissions at scale.",
                    },
                    {
                      label: "Significance:",
                      text: "The film aligned with Akshaya Patra's '4 Billion Meals' milestone, commemorated at the UN HQ in New York (2 April 2024), with dignitaries including Narayana Murthy, Kailash Satyarthi, and a message from India's PM.",
                    },
                    {
                      label: "Outcome:",
                      text: "Broadcast widely, screened internationally, strengthened global positioning.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="relative top-2 min-w-3 min-h-3 mr-3 flex items-center justify-center border-2 border-white rounded text-white text-sm font-bold" />
                      <p className="primary-font text-base md:text-[18px]">
                        <span className="font-bold">{item.label}</span>{" "}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-[45%] -mt-4 sm:mt-8">
                <div className="relative w-full h-full bg-white rounded-xl group">
                  {playingAkshayaVideo ? (
                    <div className="relative w-full h-full">
                      <iframe
                        ref={akshayaVideoRef}
                        src="https://www.youtube.com/embed/aVyfbWWIK6w?autoplay=0&mute=1"
                        title="Akshaya Patra – Nationwide Documentary (UN Showcase)"
                        className="w-full h-auto sm:h-[350px] rounded-xl"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setPlayingAkshayaVideo(false)}
                        className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-all duration-300"
                        aria-label="Close video"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={akshayaPathraImage}
                        className="rounded-xl transform rotate-3 transition-all duration-300 group-hover:rotate-0"
                        alt="Akshaya Patra – Nationwide Documentary"
                        width="auto"
                        height={400}
                        style={{ objectFit: "contain" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 91 92"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 cursor-pointer"
                          onClick={() => setPlayingAkshayaVideo(true)}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M45.4999 0.126709C20.371 0.126709 0 20.4977 0 45.6266C0 70.7555 20.371 91.1265 45.4999 91.1265C70.6288 91.1265 90.9998 70.7555 90.9998 45.6266C90.9732 20.509 70.6178 0.15356 45.4999 0.126709ZM63.2026 48.5354C63.8346 48.2205 64.3467 47.7082 64.6617 47.0764C65.4624 45.4699 64.8091 43.5186 63.2026 42.718L37.2027 29.7179C36.7512 29.4923 36.2532 29.375 35.7484 29.3752C33.9534 29.3761 32.4991 30.8318 32.4999 32.6268V58.6267C32.497 59.1368 32.6145 59.6407 32.8426 60.0972C33.6451 61.7029 35.597 62.3539 37.2027 61.5517L63.2026 48.5516V48.5354Z"
                            fill="black"
                            fillOpacity="0.43"
                          />
                          <path
                            d="M64.6617 47.0764C64.3467 47.7082 63.8346 48.2205 63.2026 48.5354V48.5516L37.2027 61.5517C35.597 62.3539 33.6451 61.7029 32.8426 60.0972C32.6145 59.6407 32.497 59.1368 32.4999 58.6267V32.6268C32.4991 30.8318 33.9534 29.3761 35.7484 29.3752C36.2532 29.375 36.7512 29.4923 37.2027 29.7179L63.2026 42.718C64.8091 43.5186 65.4624 45.4699 64.6617 47.0764Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center flex items-center justify-center">
              <Button
                text="Start Your Project"
                icon={true}
                isIconLeft={true}
                onClick={() => scrollToSection(ReadyToRollRef, "ready-to-roll")}
                bgColor="#4CAF50"
                fontSize="md"
                textColor="#FFFFFF"
                border="1px solid #000"
                hoverBgColor="#FFFFFF"
                hoverTextColor="#000"
              />
            </div>
          </div>
        </section>

        <section
          className="min-h-auto relative z-10"
          style={{ backgroundColor: "#F6EDD9" }}
          id="works"
          ref={workRef}
        >
          <div className="container py-4 sm:py-16 space-y-4 sm:space-y-16">
            <div className="w-full">
              <TitleDescription
                title="Our Work"
                description="From CSR impact films to major corporate launches—here's a quick look."
                titleClass="mb-3 text-black text-center"
                descriptionClass="text-black text-center max-w-full sm:max-w-xl mx-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  image: ourWorkImage1,
                  title: "Himalaya – One Million Trees",
                  description: "CSR Documentary",
                  videoUrl: "https://youtu.be/yPAIfXl5xN8",
                },
                {
                  image: ourWorkImage2,
                  title: "Mangrove Day",
                  description: "CSR Documentary",
                  videoUrl: "https://youtu.be/tzIq68pUFRU",
                },
                {
                  image: ourWorkImage3,
                  title: "Kissan Mitra Signature Film On Farmer",
                  description: "CSR Documentary",
                  videoUrl: "https://youtu.be/hjDlwEG7fQU",
                },
                {
                  image: ourWorkImage4,
                  title: "Himalaya Mural Video",
                  description: "CSR Documentary",
                  videoUrl: "https://www.youtube.com/watch?v=er_q-iqBugE",
                },
                {
                  image: ourWorkImage5,
                  title: "TESCO",
                  description: "CSR Documentary",
                  videoUrl: "https://youtu.be/abDdPdJ16Mc",
                },
                {
                  image: ourWorkImage6,
                  title: "Manal Student Stories",
                  description: "CSR Documentary",
                  videoUrl: "https://youtu.be/7cXdx2Tc75s",
                },
              ].map((item, index) => {
                const isAutoPlaying = autoPlayWorkIndex === index;
                const isClickedPlaying = playingVideo === index;
                const isPlaying = isAutoPlaying || isClickedPlaying;

                return (
                  <div
                    key={index}
                    className="relative w-full p-3 bg-white rounded-xl group hover:shadow-xl transition-all duration-300 border border-gray-300"
                  >
                    <div className="relative w-auto h-[300px] rounded-xl overflow-hidden">
                      {isPlaying ? (
                        <div className="relative w-full h-full">
                          <iframe
                            ref={(el) => {
                              workVideosRef.current[index] = el;
                              if (el) el.dataset.index = index;
                            }}
                            src={`${getYouTubeEmbedUrl(
                              item.videoUrl
                            )}&autoplay=1&mute=1&loop=1&playlist=${
                              item.videoUrl.match(
                                /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/
                              )?.[1]
                            }`}
                            title={item.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                          <button
                            onClick={stopVideo}
                            className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-all duration-300"
                            aria-label="Close video"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width="auto"
                            height={400}
                            className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-[1.05]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70 rounded-xl"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={() => playVideo(index, item.videoUrl)}
                              className="relative top-10 cursor-pointer"
                              aria-label={`Play ${item.title} video`}
                            >
                              <svg
                                width="60"
                                height="60"
                                viewBox="0 0 91 92"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 relative -top-10"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M45.4999 0.126709C20.371 0.126709 0 20.4977 0 45.6266C0 70.7555 20.371 91.1265 45.4999 91.1265C70.6288 91.1265 90.9998 70.7555 90.9998 45.6266C90.9732 20.509 70.6178 0.15356 45.4999 0.126709ZM63.2026 48.5354C63.8346 48.2205 64.3467 47.7082 64.6617 47.0764C65.4624 45.4699 64.8091 43.5186 63.2026 42.718L37.2027 29.7179C36.7512 29.4923 36.2532 29.375 35.7484 29.3752C33.9534 29.3761 32.4991 30.8318 32.4999 32.6268V58.6267C32.497 59.1368 32.6145 59.6407 32.8426 60.0972C33.6451 61.7029 35.597 62.3539 37.2027 61.5517L63.2026 48.5516V48.5354Z"
                                  fill="black"
                                  fillOpacity="0.43"
                                />
                                <path
                                  d="M64.6617 47.0764C64.3467 47.7082 63.8346 48.2205 63.2026 48.5354V48.5516L37.2027 61.5517C35.597 62.3539 33.6451 61.7029 32.8426 60.0972C32.6145 59.6407 32.497 59.1368 32.4999 58.6267V32.6268C32.4991 30.8318 33.9534 29.3761 35.7484 29.3752C36.2532 29.375 36.7512 29.4923 37.2027 29.7179L63.2026 42.718C64.8091 43.5186 65.4624 45.4699 64.6617 47.0764Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="py-4">
                      <h3 className="primary-font text-base md:text-[18px] font-bold">
                        {item.title}
                      </h3>
                      <p className="primary-font text-base md:text-[18px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center flex items-center justify-center">
              <Button
                text="Start Your Project"
                icon={true}
                onClick={() => scrollToSection(ReadyToRollRef, "ready-to-roll")}
                bgColor="#000"
                fontSize="md"
                textColor="#FFFFFF"
                border="1px solid #000"
                hoverBgColor="#FFFFFF"
                hoverTextColor="#000"
              />
            </div>
          </div>
        </section>

        <section
          className="container py-6 sm:py-16 min-h-auto relative z-10"
          id="difference"
          ref={differenceRef}
        >
          <div className="w-full">
            <TitleDescription
              title="The Wilmarcs Difference"
              titleClass="mb-6 text-black text-center sm:text-left"
              description={false}
            />
          </div>

          <div className="flex flex-col sm:flex-row w-full">
            <div className="w-full sm:w-1/2">
              <ul className="space-y-4">
                {accordianDifference.map((item) => (
                  <li
                    key={item.id}
                    className={`border border-gray-300 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                      openAccordion === item.id
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {openAccordion === item.id ? (
                      <div className="grid items-center space-y-2">
                        <span className="text-2xl mr-2">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width="auto"
                            height={400}
                            className="w-auto h-full object-cover"
                          />
                        </span>
                        <p className="flex items-center justify-between primary-font text-base md:text-[18px]">
                          <span>{item.description}</span>
                          <span>
                            <svg
                              width="93"
                              height="16"
                              viewBox="0 0 93 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M91.7566 8.70711C92.1471 8.31658 92.1471 7.68342 91.7566 7.29289L85.3926 0.928932C85.0021 0.538408 84.3689 0.538408 83.9784 0.928932C83.5879 1.31946 83.5879 1.95262 83.9784 2.34315L89.6352 8L83.9784 13.6569C83.5879 14.0474 83.5879 14.6805 83.9784 15.0711C84.3689 15.4616 85.0021 15.4616 85.3926 15.0711L91.7566 8.70711ZM0 8L0 9H91.0494V8V7L0 7L0 8Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    ) : (
                      <h3 className="primary-font text-base md:text-[18px]">
                        {item.title}
                      </h3>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full sm:w-1/2 pl-0 sm:pl-16 flex items-center pt-4 sm:pt-0 pb-2 sm:pb-0">
              {openAccordion !== null && (
                <div className="relative overflow-hidden w-full h-auto sm:h-[510px] rounded-xl">
                  <video
                    ref={(el) =>
                      (differenceVideosRef.current[openAccordion - 1] = el)
                    }
                    src={
                      accordianDifference.find(
                        (item) => item.id === openAccordion
                      ).differenceVideo
                    }
                    className="w-full h-full object-cover rounded-xl"
                    muted
                    loop
                    playsInline
                  />

                  <h4 className="w-full rounded-b-xl absolute bottom-0 p-8 bg-black/70 text-white text-[24px] font-semibold z-10">
                    {
                      accordianDifference.find(
                        (item) => item.id === openAccordion
                      ).caption
                    }
                  </h4>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          className="relative z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${whatWeDoBg.src})` }}
          ref={solutionsRef}
        >
          <div className="bg-black/50">
            <div className="container mx-auto py-12 sm:py-20 px-4">
              <div className="w-full flex flex-col gap-6 mb-12">
                <p className="primary-font text-md text-center sm:text-left">
                  <span className="bg-[#4CAF50] text-[#FFFFFF] px-1 uppercase">
                    WHAT WE DO
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="hidden sm:flex flex-col space-y-4">
                    <h2 className="secondary-font text-xl md:text-4xl text-white font-bold mb-3 text-left">
                      <span className="block">Visual</span>
                      <span className="block">Experiences</span>
                      <span>That Connect</span>
                    </h2>
                    <p className="primary-font text-base md:text-[18px] text-white max-w-xl text-left">
                      We specialize in storytelling that drives results. By
                      blending creativity and technology, we deliver corporate
                      films, product videos, digital ads, animations, and
                      photography crafted to inspire, engage, and communicate
                      brand value with a focus on lasting impressions and
                      business growth.
                    </p>
                  </div>
                  <div className="flex sm:hidden flex-col space-y-4">
                    <h2 className="secondary-font text-xl md:text-4xl text-white font-bold mb-3 text-center">
                      Visual Experiences That Connect
                    </h2>
                    <p className="primary-font text-base md:text-[18px] text-white max-w-full text-center">
                      We specialize in storytelling that drives results. By
                      blending creativity and technology, we deliver corporate
                      films, product videos, digital ads, animations, and
                      photography crafted to inspire, engage, and communicate
                      brand value with a focus on lasting impressions and
                      business growth.
                    </p>
                  </div>
                  <div className="w-full sm:w-[30%] bg-black/80 p-6 border border-gray-300 rounded-lg flex flex-col items-start justify-center space-y-4">
                    <Image
                      src={whatWeDoIcon1}
                      alt="Kickoff in 3–4 hours (Bengaluru) | 12 hrs start pan-India"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <h3 className="text-white primary-font text-base md:text-[18px] font-semibold text-left">
                      Kickoff in 3–4 hours (Bengaluru) | 12 hrs start pan-India
                    </h3>
                    <p className="text-white primary-font text-base md:text-[18px] text-left">
                      Rapid mobilization, crew + permits handled in parallel.
                    </p>
                  </div>

                  <div className="w-full sm:w-[25%] bg-black/80 p-6 border border-gray-300 rounded-lg flex flex-col items-start justify-center space-y-4">
                    <Image
                      src={whatWeDoIcon2}
                      alt="Cut-downs for every channel"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <h3 className="text-white primary-font text-base md:text-[18px] font-semibold text-left">
                      Cut-downs for every channel
                    </h3>
                    <p className="text-white primary-font text-base md:text-[18px] text-left">
                      3–5 min film, 90-sec cut, 30/15s snippets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[whatWeDoIcon3, whatWeDoIcon4, whatWeDoIcon5].map(
                  (icon, index) => {
                    const titles = [
                      "Languages & accessibility",
                      "Report-ready pack",
                      "Press & thumbnail kit",
                    ];
                    const descriptions = [
                      "VO, subtitles, audio description.",
                      "Consents, transcript, stills, rights letter.",
                      "Optimized for LinkedIn, YouTube, PR.",
                    ];
                    return (
                      <div
                        key={index}
                        className="bg-black/80 p-6 border border-gray-300 rounded-lg flex flex-col items-start justify-center space-y-4"
                      >
                        <Image
                          src={icon}
                          alt={titles[index]}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                        <h3 className="text-white primary-font text-base md:text-[18px] font-semibold text-left">
                          {titles[index]}
                        </h3>
                        <p className="text-white primary-font text-base md:text-[18px] text-left">
                          {descriptions[index]}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          className="min-h-auto relative z-10"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container py-6 sm:py-16 space-y-4 sm:space-y-16">
            <div className="w-full">
              <TitleDescription
                title="Our Work Process"
                titleClass="text-black text-center"
                description={false}
              />
            </div>
            <div className="mx-4">
              <Progress />
            </div>
          </div>
        </section>

        <section
          className="min-h-auto relative z-10"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container">
            <div className="w-full">
              <TitleDescription
                title="Testimonials"
                titleClass="text-black text-center"
                description={false}
              />
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-6 pb-4 sm:pb-16 pt-12 sm:pt-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-0">
                  <div className="relative bg-white rounded-xl shadow-sm shadow-gray-300 p-4 h-[370px] flex flex-col transition-transform duration-300 hover:shadow-md hover:shadow-gray-300 hover:-translate-y-1">
                    <div className="flex justify-between mb-3">
                      <div
                        className="relative -top-14 w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center text-4xl"
                        style={{
                          backgroundColor: testimonial.backgroundColor,
                        }}
                      >
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.company}
                          width={50}
                          height={50}
                          className="object-contain rounded-full"
                        />
                      </div>
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-[#EBBC00] fill-current"
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                          >
                            <path d="M8.32121 1.27605C8.53098 0.589673 9.50267 0.589674 9.71244 1.27605L11.0473 5.64375C11.1422 5.95414 11.4312 6.16412 11.7557 6.15842L16.3221 6.07827C17.0397 6.06568 17.34 6.98981 16.7521 7.40142L13.0106 10.0207C12.7447 10.2068 12.6343 10.5465 12.74 10.8534L14.2274 15.1716C14.4611 15.8502 13.675 16.4213 13.1018 15.9893L9.45463 13.2404C9.19545 13.0451 8.8382 13.0451 8.57902 13.2404L4.93181 15.9893C4.35866 16.4213 3.57255 15.8502 3.80628 15.1716L5.29361 10.8534C5.3993 10.5465 5.28891 10.2068 5.02303 10.0207L1.2816 7.40142C0.693639 6.98981 0.993907 6.06568 1.71151 6.07827L6.27795 6.15842C6.60245 6.16412 6.89147 5.95414 6.98633 5.64375L8.32121 1.27605Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="relative -top-10">
                      <p className="primary-font text-base md:text-[18px] leading-relaxed flex-grow">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="absolute bottom-4">
                      <p className="primary-font text-base md:text-[18px] font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="primary-font text-[#505050] text-xs mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:hidden pb-4 sm:pb-16 pt-8">
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  pauseOnHover: true,
                  arrows: false,
                  centerMode: true,
                  centerPadding: "0px",
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "0px",
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "0px",
                      },
                    },
                  ],
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-2 pb-4">
                    <div className="relative bg-white rounded-xl shadow-sm shadow-gray-300 p-4 h-auto flex flex-col transition-transform duration-300">
                      <div className="flex justify-between mb-3">
                        <div
                          className="relative -top-0 w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center text-4xl"
                          style={{
                            backgroundColor: testimonial.backgroundColor,
                          }}
                        >
                          <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            width={50}
                            height={50}
                            className="object-contain rounded-full"
                          />
                        </div>
                        <div className="flex justify-center relative top-10">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-[#EBBC00] fill-current"
                              width="18"
                              height="17"
                              viewBox="0 0 18 17"
                            >
                              <path d="M8.32121 1.27605C8.53098 0.589673 9.50267 0.589674 9.71244 1.27605L11.0473 5.64375C11.1422 5.95414 11.4312 6.16412 11.7557 6.15842L16.3221 6.07827C17.0397 6.06568 17.34 6.98981 16.7521 7.40142L13.0106 10.0207C12.7447 10.2068 12.6343 10.5465 12.74 10.8534L14.2274 15.1716C14.4611 15.8502 13.675 16.4213 13.1018 15.9893L9.45463 13.2404C9.19545 13.0451 8.8382 13.0451 8.57902 13.2404L4.93181 15.9893C4.35866 16.4213 3.57255 15.8502 3.80628 15.1716L5.29361 10.8534C5.3993 10.5465 5.28891 10.2068 5.02303 10.0207L1.2816 7.40142C0.693639 6.98981 0.993907 6.06568 1.71151 6.07827L6.27795 6.15842C6.60245 6.16412 6.89147 5.95414 6.98633 5.64375L8.32121 1.27605Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="relative -top-0">
                        <p className="primary-font text-base md:text-[18px] leading-relaxed flex-grow">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="mt-8">
                        <p className="primary-font text-base md:text-[18px] font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="primary-font text-[#505050] text-xs mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section
          className="min-h-auto relative z-10 mt-6 sm:mt-0"
          style={{ backgroundColor: "#F6EDD9" }}
        >
          <div className="container py-4 sm:py-16 space-y-4 sm:space-y-16">
            <div className="w-full">
              <TitleDescription
                title="FAQs"
                titleClass="mb-6 text-black text-center"
                description={false}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="min-h-auto flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ease-in-out"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="primary-font text-black text-base md:text-[18px] font-semibold pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {openIndex === index ? (
                              <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300">
                                <AngleDown />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300">
                                <AngleRight />
                              </div>
                            )}
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-5 pt-0">
                            <p className="text-[#6F6C8F] primary-font text-base md:text-[18px] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="min-h-auto relative z-10"
          id="ready-to-roll"
          ref={ReadyToRollRef}
        >
          <div className="container py-6 sm:py-16 space-y-4 sm:space-y-16">
            <div className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl border border-gray-300 p-0 sm:p-6 w-full h-auto">
                <Form />
                <div className="w-full md:w-1/2 p-4 -mt-2 sm:-mt-0 flex-1 image-container">
                  <Image
                    src={vilmarcsMotionPictures}
                    alt="Vilmarcs Motion Pictures"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="relative py-12"
        style={{
          backgroundImage: `url(${hourseFooterLogo.src}), url(${secondFooterImage.src})`,
          backgroundPosition: "center center, center 65%",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "contain, 150px 50px",
          width: "100%",
          minHeight: "300px",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 justify-between items-center">
          <div className="py-6 flex items-center justify-center sm:justify-start primary-font text-[16px] text-[#0A142F] space-x-8">
            <Link
              href="/#about"
              onClick={() => scrollToSection(aboutRef, "about")}
              className="hover:text-gray-800"
            >
              About us
            </Link>
            <Link
              href="/#difference"
              onClick={() => scrollToSection(differenceRef, "difference")}
              className="hover:text-gray-800"
            >
              Difference
            </Link>
            <Link
              href="/#works"
              onClick={() => scrollToSection(workRef, "works")}
              className="hover:text-gray-800"
            >
              Work
            </Link>
            <Link
              href="/#solutions"
              onClick={() => scrollToSection(solutionsRef, "solutions")}
              className="hover:text-gray-800"
            >
              Solutions
            </Link>
          </div>
          <div className="flex items-center justify-center sm:justify-end space-x-8">
            <a
              href="https://www.instagram.com/wilmarcsmotionpictures/"
              className="hover:scale-[1.1] transition-all duration-300"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/wilmarcs"
              className="hover:scale-[1.1] transition-all duration-300"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/company/wilmarcs-motion-pictures/"
              className="hover:scale-[1.1] transition-all duration-300"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.youtube.com/@wilmarcsmotionpictures_ind"
              className="hover:scale-[1.1] transition-all duration-300"
            >
              <Youtube />
            </a>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="border-t border-gray-400 my-4"></div>
          <div className="py-6 flex items-center justify-center sm:justify-between primary-font text-[14px] text-[#0A142F] flex-wrap">
            <span className="mb-4 sm:mb-0 relative top-10 sm:top-0">
              © 2025 MarketBytes. All rights reserved.
            </span>
            <div className="flex space-x-8 relative top-10 sm:top-0">
              <a
                href="https://wilmarcs.com/privacy-policy-for-wilmarcs-motion-pictures/"
                className="hover:text-gray-800"
              >
                Terms of Service
              </a>
              <a
                href="https://wilmarcs.com/terms-conditions/"
                className="hover:text-gray-800"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
