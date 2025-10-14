"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Marquee from "react-fast-marquee";
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

import differenceImage1 from "@/assets/images/diff-1.jpg";
import differenceImage2 from "@/assets/images/diff-2.jpg";
import differenceImage3 from "@/assets/images/diff-3.png";
import differenceImage4 from "@/assets/images/diff-4.jpg";
import differenceImage5 from "@/assets/images/diff-5.png";
import differenceImage6 from "@/assets/images/diff-6.png";
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
    image: differenceImage1,
    title: "Cinema Quality. Corporate Speed.",
    description: "Cinema Quality. Corporate Speed.",
    caption: "Films that look like cinema, delivered at the pace of business",
  },
  {
    id: 2,
    icon: differenceIcon2,
    image: differenceImage2,
    title: "From Brief to Boardroom—Seamless Delivery",
    description: "From Brief to Boardroom—Seamless Delivery",
    caption:
      "Kickoff within hours; scripts, shoots, edits, approvals managed end-to-end.",
  },
  {
    id: 3,
    icon: differenceIcon3,
    image: differenceImage3,
    title: "Trusted by Global Brands, Tailored for Local CSR Stories",
    description: "Trusted by Global Brands, Tailored for Local CSR Stories",
    caption:
      "Tailored for Local CSR Stories Global standards, culturally authentic execution.",
  },
  {
    id: 4,
    icon: differenceIcon4,
    image: differenceImage4,
    title: "Pan-India Execution, Global Standards",
    description: "Pan-India Execution, Global Standards",
    caption: "Crews across 20+ states, remote/forest/coastal shoots.",
  },
  {
    id: 5,
    icon: differenceIcon5,
    image: differenceImage5,
    title: "Faster Cuts, Smarter Workflows",
    description: "Faster Cuts, Smarter Workflows",
    caption:
      "Always Cinematic AI accelerates, humans refine → cinematic quality.",
  },
  {
    id: 6,
    icon: differenceIcon6,
    image: differenceImage6,
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

const steps = [
  { number: "01", label: "56 × 65", subLabel: null },
  { number: "02", label: "Recce/Permits", subLabel: null },
  { number: "03", label: "Shoot", subLabel: null },
  { number: "04", label: "Edit", subLabel: null },
  { number: "05", label: "Review (2 Rounds)", subLabel: null },
  { number: "06", label: "Report-Ready", subLabel: "Delivery" },
];

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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

import vilmarcsMotionPictures from "@/assets/images/vilmarcs-motion-pictures.png";

import hourseFooterLogo from "@/assets/images/hourse-footer.png";
import AngleDown from "@/components/Icons/AngleDown";
import AngleRight from "@/components/Icons/AngleRight";

  const faqs = [
    {
      question: 'How fast can you start a project?',
      answer: 'Bengaluru: 3-4 hrs. Other cities: same-day plan, 48-72 hrs start.',
    },
    {
      question: 'Do you manage permissions and compliance?',
      answer: 'Yes, we handle all necessary permissions and ensure full compliance with local regulations and building codes.',
    },
    {
      question: 'Are you vendor-onboarding ready?',
      answer: 'Absolutely! We have a streamlined vendor onboarding process with verified professionals ready to start.',
    },
    {
      question: 'What deliverables are standard?',
      answer: 'Standard deliverables include detailed project plans, material specifications, timeline schedules, and quality reports.',
    },
  ];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const router = useRouter();
  const workRef = useRef(null);
  const differenceRef = useRef(null);
  const solutionsRef = useRef(null);
  const aboutCountRef = useRef(null);
  const imageRef = useRef(null);

  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setOpenAccordion(null);
          },
        });
      } else {
        setOpenAccordion(null);
      }
    } else {
      if (openAccordion !== null && imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setOpenAccordion(id);
          },
        });
      } else {
        setOpenAccordion(id);
      }
    }
  };

  const [openIndex, setOpenIndex] = useState(0);

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
  };

  useEffect(() => {
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

    if (imageRef.current && openAccordion !== null) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [openAccordion]);

  return (
    <>
      <header
        className="fixed top-0 w-full h-screen -z-0"
        style={{
          backgroundImage: `url(${playbackGif.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <nav className="py-4 border border-b border-x-0 border-t-0 border-white/50">
          <div className="container flex items-center justify-between">
            <div className="flex-shrink-0">
              <Image src={logo} alt="Wilmarcs Logo" width={140} height={40} />
            </div>
            <ul className="flex justify-center gap-8 flex-grow">
              <li>
                <Link
                  href="/#works"
                  onClick={() => scrollToSection(workRef, "works")}
                  className="primary-font text-white text-md font-semibold hover:text-[#4CAF5080]"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#difference"
                  onClick={() => scrollToSection(differenceRef, "difference")}
                  className="primary-font text-white text-md font-semibold hover:text-[#4CAF5080]"
                >
                  Difference
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  onClick={() => scrollToSection(solutionsRef, "solutions")}
                  className="primary-font text-white text-md font-semibold hover:text-[#4CAF5080]"
                >
                  Solutions
                </Link>
              </li>
            </ul>
            <div className="flex-shrink-0">
              <Button
                text="Talk to a Producer"
                onClick={() => alert("Contact Producer")}
                bgColor="rgba(255, 255, 255, 0.3)"
                fontSize="md"
                textColor="#FFFFFF"
                border="1px solid #FFFFFF"
                hoverBgColor="#000"
                hoverTextColor="#FFFFFF"
              />
            </div>
          </div>
        </nav>
        <div className="container flex flex-col justify-center items-start h-[calc(100vh-80px)] text-white md:w-1/2">
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
            onClick={() => alert("Start Your Project")}
            bgColor="rgba(255, 255, 255)"
            fontSize="md"
            textColor="#000"
            border="1px solid #FFFFFF"
            hoverBgColor="#000"
            hoverTextColor="#FFFFFF"
          />
        </div>
      </header>

      <main className="relative mt-[124vh] bg-white z-50">
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

        {/* Trusted by international names start */}
        <section
          className="container min-h-auto pt-[2vh] ms:pt-[4vh] relative z-10"
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
        {/* Trusted by international names end */}

        {/* About Us Section start */}
        <section
          className="container min-h-auto pt-4 sm:pt-16 relative z-10"
          style={{ backgroundColor: "#ffffff" }}
          ref={aboutCountRef}
        >
          <div className="flex flex-col sm:flex-row w-full gap-8">
            <div className="w-full sm:w-[45%]">
              <TitleDescription
                title="See the work in 60 seconds"
                titleClass="mb-6 text-black text-center sm:text-left"
                description={false}
              />
              <Image
                src={aboutImage}
                className="rounded-xl"
                alt="Transforming Ideas Into Visual Excellence"
                width="auto"
                height={400}
                style={{ objectFit: "contain" }}
              />
              <TitleDescription
                description="From CSR documentaries to corporate events and brand films—watch how leading organisations trust us with their stories."
                descriptionClass="mt-3 text-[#555555]"
                title={false}
              />
            </div>
            <div className="w-full sm:w-[55%] -mt-4 sm:mt-8">
              <p className="primary-font text-md text-center sm:text-left mb-2">
                <span className="bg-[#4CAF50] text-[#FFFFFF] px-1 uppercase">
                  About Us
                </span>
              </p>
              <TitleDescription
                title="Transforming Ideas Into Visual Excellence"
                description="We bring your vision to life through dynamic videos, animations, and photography. Focusing on creative storytelling and technical excellence, our tailored solutions capture your brand’s essence and deliver messages that resonate with your audience across every digital platform and business opportunity."
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
                  onClick={() => alert("Start Your Project")}
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
        {/* About Us Section end */}

        {/* Case study start */}
        <section
          className="min-h-auto mt-4 sm:mt-16 relative z-10"
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

            {/* Himalaya Wellness */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 rounded-xl p-4 sm:p-8 bg-[#1B1B1BB2]">
              <div className="w-full sm:w-[45%]">
                <div className="relative w-fit bg-white rounded-xl group">
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
                      className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
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
                </div>
              </div>

              <div className="w-full sm:w-[55%] -mt-4 sm:mt-8 ml-0 sm:ml-16">
                <TitleDescription
                  title="Himalaya Wellness –Mangrove Restoration Film"
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
                      <input
                        type="checkbox"
                        readOnly
                        className="
                          appearance-none w-5 h-5 mt-1 mr-3 border-2 border-white 
                          rounded-md bg-transparent checked:bg-transparent checked:border-gray-400 
                          flex-shrink-0 transition-all duration-200 cursor-default
                          relative
                          before:content-['✓'] before:absolute before:text-white 
                          before:font-bold before:text-sm before:top-[-2px] before:left-[4px]
                          checked:before:opacity-100 before:opacity-0
                        "
                      />
                      <p className="primary-font text-base md:text-[18px]">
                        <span className="font-bold">{item.label}</span>{" "}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Akshaya Patra */}
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
                      <input
                        type="checkbox"
                        readOnly
                        className="
                          appearance-none w-5 h-5 mt-1 mr-3 border-2 border-white 
                          rounded-md bg-transparent checked:bg-transparent checked:border-gray-400 
                          flex-shrink-0 transition-all duration-200 cursor-default
                          relative
                          before:content-['✓'] before:absolute before:text-white 
                          before:font-bold before:text-sm before:top-[-2px] before:left-[4px]
                          checked:before:opacity-100 before:opacity-0
                        "
                      />
                      <p className="primary-font text-base md:text-[18px]">
                        <span className="font-bold">{item.label}</span>{" "}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-[45%] -mt-4 sm:mt-8">
                <div className="relative w-fit bg-white rounded-xl group">
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
                      className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
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
                </div>
              </div>
            </div>

            <div className="text-center flex items-center justify-center">
              <Button
                text="Start Your Project"
                icon={true}
                isIconLeft={true}
                onClick={() => alert("Start Your Project")}
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
        {/* Case study end */}

        {/* Our work start */}
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
                description="From CSR impact films to major corporate launches—here’s a quick look."
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
                },
                {
                  image: ourWorkImage2,
                  title: "Mangrove Day",
                  description: "CSR Documentary",
                },
                {
                  image: ourWorkImage3,
                  title: "Kissan Mitra Signature Film On Farmer",
                  description: "CSR Documentary",
                },
                {
                  image: ourWorkImage4,
                  title: "Himalaya Mural Video",
                  description: "CSR Documentary",
                },
                {
                  image: ourWorkImage5,
                  title: "TESCO",
                  description: "CSR Documentary",
                },
                {
                  image: ourWorkImage6,
                  title: "Manal Student Stories",
                  description: "CSR Documentary",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative w-fit p-3 bg-white rounded-xl group hover:shadow-xl transition-all duration-300 border border-gray-300"
                >
                  <div className="relative w-auto h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width="auto"
                      height={400}
                      className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70 rounded-xl"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
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
              ))}
            </div>
            <div className="text-center flex items-center justify-center">
              <Button
                text="Start Your Project"
                icon={true}
                onClick={() => alert("Start Your Project")}
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
        {/* Our work end */}

        {/* Difference section start */}
        <section
          className="container py-4 sm:py-16 min-h-auto relative z-10"
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
            <div className="w-full sm:w-1/2 pl-0 sm:pl-16 flex items-center pt-4 sm:pt-0">
              {openAccordion !== null && (
                <div className="relative overflow-hidden w-full h-auto">
                  <Image
                    src={
                      accordianDifference.find(
                        (item) => item.id === openAccordion
                      ).image
                    }
                    alt={
                      accordianDifference.find(
                        (item) => item.id === openAccordion
                      ).title
                    }
                    width="auto"
                    height={400}
                    className="rounded-xl w-full object-cover h-auto sm:h-[500px]"
                    ref={imageRef}
                  />
                  <h4 className="w-full rounded-b-xl absolute bottom-0 p-8 bg-black/70 text-white text-[24px] font-semibold">
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
        {/* Difference section end */}

        {/* Visual Experiences start */}
        <section
          className="relative z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${whatWeDoBg.src})` }}
        >
          <div className="bg-black/50">
            <div className="container mx-auto py-12 sm:py-20 px-4">
              <div className="w-full flex flex-col gap-6 mb-12">
                <p className="primary-font text-md text-center sm:text-left">
                  <span className="bg-[#4CAF50] text-[#FFFFFF] px-1 uppercase">
                    About Us
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
        {/* Visual Experiences end */}

        {/* Our work progress start */}
        {/* <section
          className="min-h-auto relative z-10"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container py-4 sm:py-16 space-y-4 sm:space-y-16">
            <div className="w-full">
              <TitleDescription
                title="Our Work Process"
                titleClass="mb-6 text-black text-center"
                description={false}
              />
            </div>
            <div className="w-full py-4 sm:py-16 bg-white">
              <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
              ></Marquee>
            </div>
          </div>
        </section> */}
        {/* Our work process end */}

        {/* Testimonials section start */}
        <section
          className="min-h-auto relative z-10 mt-4 sm:mt-16"
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
            <div className="w-full pb-4 sm:pb-16 pt-8">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-0 sm:px-3 pt-12 sm:pt-16 pb-3">
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
              </Slider>
            </div>
          </div>
        </section>
        {/* Testimonials section end */}

        {/* FAQs start */}
        <section
          className="min-h-auto relative z-10"
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
                          <span className="text-gray-900 font-medium pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {openIndex === index ? (
                              <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300">
                                <AngleDown/>
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300">
                                <AngleRight/>
                              </div>
                            )}
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-5 pt-0">
                            <p className="text-gray-600 text-sm leading-relaxed">
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
        {/* FAQs end */}

        {/* Form start */}
        <section className="min-h-auto relative z-10">
          <div className="container py-4 sm:py-16 space-y-4 sm:space-y-16">
            <div className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl border border-gray-300 p-0 sm:p-6 w-full h-auto">
                <Form />
                <div className="w-full md:w-1/2 p-4 -mt-2 sm:-mt-0">
                  <Image
                    src={vilmarcsMotionPictures}
                    alt="Vilmarcs Motion Pictures"
                    width="auto"
                    height="auto"
                    className="object-cover w-full h-auto sm:h-[455px] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Form end */}
      </main>

      <footer className="bg-white text-gray-800 py-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 justify-between items-center">
          <div className="flex items-center justify-start space-x-6">
            <a href="#" className="hover:text-gray-600">
              About us
            </a>
            <a href="#" className="hover:text-gray-600">
              Difference
            </a>
            <a href="#" className="hover:text-gray-600">
              Work
            </a>
            <a href="#" className="hover:text-gray-600">
              Solutions
            </a>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={hourseFooterLogo}
              alt="Wilmarcs Logo"
              className="h-auto"
            />
          </div>
          <div className="flex items-center justify-end space-x-4">
            <a href="#" className="hover:text-gray-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 2.6 4.75 4.75 0 00-8.28 4.3A13.41 13.41 0 011.5 3.89 4.82 4.82 0 006.7 9.62a4.71 4.71 0 01-2.14-.59 4.75 4.75 0 003.98 4.67A4.74 4.74 0 015 13.39a4.77 4.77 0 01-1.05.13c-.4 0-.79-.04-1.17-.11a4.75 4.75 0 004.43 3.3 9.52 9.52 0 01-5.88 2.03c-.38 0-.76-.02-1.13-.07A13.36 13.36 0 007.25 21c8.45 0 13.08-7 13.08-13.08 0-.2 0-.4-.01-.6A9.36 9.36 0 0024 3.75a9.46 9.46 0 01-2.7.75z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.618 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="container mx-auto mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap">
          <span>© 2025 MarketBytes. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
