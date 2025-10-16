"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Button from "@/components/Button";

import logo from "@/assets/images/logo.png";
import banner from "@/assets/images/thank-you-bg.png";
import hourseFooterLogo from "@/assets/images/hourse-footer.png";
import secondFooterImage from "@/assets/images/wilmarcs-footer-logo.png";
import Facebook from "@/components/Icons/Facebook";
import Youtube from "@/components/Icons/Youtube";
import Instagram from "@/components/Icons/Instagram";
import LinkedIn from "@/components/Icons/Likedin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ThankYou() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="w-full z-10"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      >
        <nav
          className={`py-4 fixed top-0 w-full border border-b border-x-0 border-t-0 transition-all duration-300 ${
            isScrolled
              ? "bg-white border-gray-200"
              : "bg-transparent border-white/50"
          } z-20`}
        >
          <div className="container flex items-center justify-between">
            <div className="flex-shrink-0">
              <Image
                src={isScrolled ? secondFooterImage : logo}
                alt="Wilmarcs Logo"
                width={140}
                height={40}
              />
            </div>
            <ul className="hidden sm:flex justify-center gap-8 flex-grow">
              <li>
                <Link
                  href="/#works"
                  onClick={() => scrollToSection(null, "works")}
                  className={`primary-font text-md font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "text-black hover:text-[#4CAF5080]"
                      : "text-white hover:text-[#4CAF5080]"
                  }`}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#difference"
                  onClick={() => scrollToSection(null, "difference")}
                  className={`primary-font text-md font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "text-black hover:text-[#4CAF5080]"
                      : "text-white hover:text-[#4CAF5080]"
                  }`}
                >
                  Difference
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  onClick={() => scrollToSection(null, "solutions")}
                  className={`primary-font text-md font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "text-black hover:text-[#4CAF5080]"
                      : "text-white hover:text-[#4CAF5080]"
                  }`}
                >
                  Solutions
                </Link>
              </li>
            </ul>
            <div className="hidden sm:flex flex-shrink-0">
              <Button
                text="Talk to a Producer"
                onClick={() => scrollToSection(null, "ready-to-roll")}
                bgColor={isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)"}
                fontSize="md"
                textColor={isScrolled ? "#000000" : "#FFFFFF"}
                border={isScrolled ? "1px solid #000000" : "1px solid #FFFFFF"}
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
                  className={`transition-all duration-300 ${
                    isScrolled ? "fill-black" : "fill-white"
                  }`}
                />
              </svg>
            </button>
          </div>
          <div
            className={`z-30 fixed top-0 right-0 h-screen w-full bg-black/90 transform transition-transform duration-300 ease-in-out ${
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
                    className={`transition-all duration-300 ${
                      isScrolled ? "stroke-black" : "stroke-white"
                    }`}
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
                  onClick={() => scrollToSection(null, "works")}
                  className={`primary-font text-lg font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "text-black hover:text-[#4CAF5080]"
                      : "text-white hover:text-[#4CAF5080]"
                  }`}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#difference"
                  onClick={() => scrollToSection(null, "difference")}
                  className={`primary-font text-lg font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "text-black hover:text-[#4CAF5080]"
                      : "text-white hover:text-[#4CAF5080]"
                  }`}
                >
                  Difference
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  onClick={() => scrollToSection(null, "solutions")}
                  className={`primary-font text-lg font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "text-black hover:text-[#4CAF5080]"
                      : "text-white hover:text-[#4CAF5080]"
                  }`}
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Button
                  text="Talk to a Producer"
                  onClick={() => scrollToSection(null, "ready-to-roll")}
                  bgColor={isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)"}
                  fontSize="lg"
                  textColor={isScrolled ? "#000000" : "#FFFFFF"}
                  border={
                    isScrolled ? "1px solid #000000" : "1px solid #FFFFFF"
                  }
                  hoverBgColor="#000"
                  hoverTextColor="#FFFFFF"
                />
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="h-screen flex flex-col items-center justify-center"
        >
          <div className="text-center p-6 sm:p-10 rounded-xl shadow-lg max-w-md w-full">
            <h1 className="secondary-font text-xl md:text-4xl text-white font-bold mb-4">
              Thanks for submitting!
            </h1>
            <p className="primary-font text-base md:text-[18px] text-white mb-6">
              Your message has been sent!
            </p>
            <div className="flex items-center justify-center">
              <a href="https://www.wilmarcs.com/" className="group">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="fill-none group-hover:fill-white transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="59"
                    className="stroke-white group-hover:stroke-black transition-all duration-300"
                    strokeWidth="2"
                  />
                  <path
                    d="M51.1164 58.7254L68.9561 42.8161"
                    className="stroke-white group-hover:stroke-black transition-all duration-300"
                    strokeWidth="2.57732"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M51.0215 44.7778C54.0088 48.1276 51.0442 58.7899 51.0442 58.7899C51.0442 58.7899 61.9749 57.0603 64.9623 60.4101"
                    className="stroke-white group-hover:stroke-black transition-all duration-300"
                    strokeWidth="2.57732"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.7471 71.3257H19.6353C20.8709 71.3257 21.8062 71.4992 22.4409 71.8463C23.0757 72.1933 23.3931 72.8026 23.3931 73.6744C23.3931 74.0256 23.3359 74.343 23.2217 74.6265C23.1117 74.9101 22.9508 75.1428 22.7393 75.3248C22.5277 75.5067 22.2695 75.6252 21.9648 75.6802V75.7437C22.2738 75.8072 22.5531 75.9172 22.8027 76.0738C23.0524 76.2261 23.2513 76.4504 23.3994 76.7466C23.5518 77.0386 23.6279 77.428 23.6279 77.9146C23.6279 78.4774 23.4904 78.9599 23.2153 79.3619C22.9403 79.7639 22.5467 80.0728 22.0347 80.2886C21.5269 80.5002 20.9217 80.606 20.2192 80.606H16.7471V71.3257ZM18.7148 75.001H19.8574C20.4287 75.001 20.8244 74.9122 21.0444 74.7344C21.2645 74.5525 21.3745 74.2859 21.3745 73.9346C21.3745 73.5792 21.2433 73.3253 20.981 73.1729C20.7228 73.0163 20.3123 72.938 19.7495 72.938H18.7148V75.001ZM18.7148 76.5626V78.981H19.9971C20.5895 78.981 21.0021 78.8668 21.2349 78.6382C21.4676 78.4097 21.584 78.1029 21.584 77.7178C21.584 77.4893 21.5332 77.2883 21.4316 77.1148C21.3301 76.9413 21.1587 76.8059 20.9175 76.7086C20.6805 76.6112 20.3525 76.5626 19.9336 76.5626H18.7148ZM28.2363 73.3633C29.1885 73.3633 29.9185 73.5707 30.4263 73.9854C30.9341 74.4001 31.188 75.0307 31.188 75.877V80.606H29.8359L29.4614 79.6412H29.4106C29.2075 79.8951 29.0002 80.1024 28.7886 80.2632C28.577 80.4241 28.3337 80.5425 28.0586 80.6187C27.7835 80.6949 27.4492 80.733 27.0557 80.733C26.6367 80.733 26.2601 80.6526 25.9258 80.4918C25.5957 80.331 25.3354 80.0855 25.145 79.7554C24.9546 79.4211 24.8594 78.9979 24.8594 78.4859C24.8594 77.7326 25.1239 77.1783 25.6528 76.8228C26.1818 76.4631 26.9753 76.2642 28.0332 76.2261L29.2646 76.188V75.877C29.2646 75.5046 29.1673 75.2317 28.9727 75.0582C28.778 74.8847 28.5072 74.7979 28.1602 74.7979C27.8174 74.7979 27.481 74.8466 27.1509 74.9439C26.8208 75.0412 26.4907 75.164 26.1606 75.3121L25.5195 74.0045C25.8962 73.8056 26.3172 73.649 26.7827 73.5347C27.2524 73.4205 27.737 73.3633 28.2363 73.3633ZM29.2646 77.3179L28.5156 77.3433C27.8893 77.3602 27.4535 77.4724 27.208 77.6797C26.9668 77.8871 26.8462 78.1601 26.8462 78.4986C26.8462 78.7948 26.9329 79.0064 27.1064 79.1334C27.2799 79.2561 27.5063 79.3174 27.7856 79.3174C28.2004 79.3174 28.5495 79.1947 28.833 78.9493C29.1208 78.7038 29.2646 78.3547 29.2646 77.9019V77.3179ZM36.0693 80.733C35.3669 80.733 34.7681 80.606 34.2729 80.3521C33.7778 80.094 33.4012 79.6962 33.1431 79.1588C32.8849 78.6213 32.7559 77.9337 32.7559 77.0958C32.7559 76.2283 32.9019 75.5215 33.1938 74.9756C33.4901 74.4255 33.8984 74.0214 34.4189 73.7632C34.9437 73.5051 35.5509 73.376 36.2407 73.376C36.7316 73.376 37.1548 73.4247 37.5103 73.522C37.87 73.6151 38.1831 73.7273 38.4497 73.8585L37.8784 75.3565C37.5737 75.2338 37.2902 75.1343 37.0278 75.0582C36.7655 74.9778 36.5031 74.9376 36.2407 74.9376C35.9022 74.9376 35.6208 75.018 35.3965 75.1788C35.1722 75.3353 35.005 75.5723 34.895 75.8897C34.785 76.2071 34.73 76.6049 34.73 77.0831C34.73 77.5528 34.7892 77.9421 34.9077 78.251C35.0262 78.56 35.1976 78.7906 35.4219 78.9429C35.6462 79.091 35.9191 79.1651 36.2407 79.1651C36.6427 79.1651 37.0003 79.1122 37.3135 79.0064C37.6266 78.8964 37.9313 78.744 38.2275 78.5494V80.2061C37.9313 80.3923 37.6203 80.5256 37.2944 80.606C36.9728 80.6907 36.5645 80.733 36.0693 80.733ZM41.814 70.7291V75.147C41.814 75.4136 41.8034 75.6802 41.7822 75.9468C41.7611 76.2134 41.7378 76.48 41.7124 76.7466H41.7378C41.869 76.5604 42.0023 76.3764 42.1377 76.1944C42.2773 76.0124 42.4255 75.8368 42.582 75.6675L44.5688 73.5093H46.7524L43.9341 76.588L46.9238 80.606H44.6895L42.6455 77.7305L41.814 78.397V80.606H39.8779V70.7291H41.814ZM54.3062 79.1905C54.5177 79.1905 54.723 79.1693 54.9219 79.127C55.125 79.0847 55.326 79.0318 55.5249 78.9683V80.4092C55.3175 80.5023 55.0594 80.5785 54.7505 80.6378C54.4458 80.7012 54.1115 80.733 53.7476 80.733C53.3244 80.733 52.9435 80.6653 52.605 80.5298C52.2707 80.3902 52.0062 80.1511 51.8115 79.8126C51.6211 79.4698 51.5259 78.9937 51.5259 78.3843V74.963H50.5991V74.1441L51.6655 73.4966L52.2241 71.9986H53.4619V73.5093H55.4487V74.963H53.4619V78.3843C53.4619 78.6552 53.5381 78.8583 53.6904 78.9937C53.847 79.1249 54.0522 79.1905 54.3062 79.1905ZM63.415 77.045C63.415 77.6374 63.3346 78.1622 63.1738 78.6192C63.0173 79.0762 62.7866 79.4634 62.4819 79.7808C62.1815 80.094 61.8175 80.331 61.3901 80.4918C60.967 80.6526 60.4888 80.733 59.9556 80.733C59.4562 80.733 58.9971 80.6526 58.5781 80.4918C58.1634 80.331 57.8016 80.094 57.4927 79.7808C57.188 79.4634 56.951 79.0762 56.7817 78.6192C56.6167 78.1622 56.5342 77.6374 56.5342 77.045C56.5342 76.2579 56.6738 75.5914 56.9531 75.0455C57.2324 74.4996 57.6302 74.0849 58.1465 73.8013C58.6628 73.5178 59.2785 73.376 59.9937 73.376C60.658 73.376 61.2463 73.5178 61.7583 73.8013C62.2746 74.0849 62.6787 74.4996 62.9707 75.0455C63.2669 75.5914 63.415 76.2579 63.415 77.045ZM58.5083 77.045C58.5083 77.5105 58.5591 77.9019 58.6606 78.2193C58.7622 78.5367 58.9209 78.7758 59.1367 78.9366C59.3525 79.0974 59.634 79.1778 59.981 79.1778C60.3237 79.1778 60.6009 79.0974 60.8125 78.9366C61.0283 78.7758 61.1849 78.5367 61.2822 78.2193C61.3838 77.9019 61.4346 77.5105 61.4346 77.045C61.4346 76.5753 61.3838 76.1859 61.2822 75.877C61.1849 75.5639 61.0283 75.329 60.8125 75.1724C60.5967 75.0158 60.3153 74.9376 59.9683 74.9376C59.4562 74.9376 59.0838 75.1132 58.8511 75.4644C58.6226 75.8157 58.5083 76.3425 58.5083 77.045ZM70.3276 70.7291V72.7413C70.3276 73.0925 70.3149 73.4268 70.2896 73.7442C70.2684 74.0616 70.2515 74.2859 70.2388 74.4171H70.3403C70.4927 74.1716 70.6725 73.9727 70.8799 73.8204C71.0915 73.668 71.3242 73.5559 71.5781 73.4839C71.832 73.412 72.105 73.376 72.397 73.376C72.909 73.376 73.3555 73.467 73.7363 73.649C74.1172 73.8267 74.4134 74.1081 74.625 74.4932C74.8366 74.8741 74.9424 75.3692 74.9424 75.9786V80.606H73.0063V76.461C73.0063 75.9532 72.9132 75.5702 72.7271 75.3121C72.5409 75.0539 72.2531 74.9249 71.8638 74.9249C71.4744 74.9249 71.1676 75.0158 70.9434 75.1978C70.7191 75.3755 70.5604 75.64 70.4673 75.9913C70.3742 76.3383 70.3276 76.7636 70.3276 77.2672V80.606H68.3916V70.7291H70.3276ZM83.3848 77.045C83.3848 77.6374 83.3044 78.1622 83.1436 78.6192C82.987 79.0762 82.7563 79.4634 82.4517 79.7808C82.1512 80.094 81.7873 80.331 81.3599 80.4918C80.9367 80.6526 80.4585 80.733 79.9253 80.733C79.4259 80.733 78.9668 80.6526 78.5479 80.4918C78.1331 80.331 77.7713 80.094 77.4624 79.7808C77.1577 79.4634 76.9207 79.0762 76.7515 78.6192C76.5864 78.1622 76.5039 77.6374 76.5039 77.045C76.5039 76.2579 76.6436 75.5914 76.9229 75.0455C77.2021 74.4996 77.5999 74.0849 78.1162 73.8013C78.6325 73.5178 79.2482 73.376 79.9634 73.376C80.6278 73.376 81.216 73.5178 81.728 73.8013C82.2443 74.0849 82.6484 74.4996 82.9404 75.0455C83.2367 75.5914 83.3848 76.2579 83.3848 77.045ZM78.478 77.045C78.478 77.5105 78.5288 77.9019 78.6304 78.2193C78.7319 78.5367 78.8906 78.7758 79.1064 78.9366C79.3223 79.0974 79.6037 79.1778 79.9507 79.1778C80.2935 79.1778 80.5706 79.0974 80.7822 78.9366C80.998 78.7758 81.1546 78.5367 81.252 78.2193C81.3535 77.9019 81.4043 77.5105 81.4043 77.045C81.4043 76.5753 81.3535 76.1859 81.252 75.877C81.1546 75.5639 80.998 75.329 80.7822 75.1724C80.5664 75.0158 80.285 74.9376 79.938 74.9376C79.4259 74.9376 79.0535 75.1132 78.8208 75.4644C78.5923 75.8157 78.478 76.3425 78.478 77.045ZM93.3188 73.376C94.1229 73.376 94.7301 73.5834 95.1406 73.9981C95.5553 74.4086 95.7627 75.0687 95.7627 75.9786V80.606H93.8203V76.461C93.8203 75.9532 93.7336 75.5702 93.5601 75.3121C93.3866 75.0539 93.1178 74.9249 92.7539 74.9249C92.2419 74.9249 91.8779 75.1089 91.6621 75.4771C91.4463 75.841 91.3384 76.3637 91.3384 77.045V80.606H89.4023V76.461C89.4023 76.1225 89.3643 75.8389 89.2881 75.6104C89.2119 75.3819 89.0955 75.2105 88.939 75.0963C88.7824 74.982 88.5814 74.9249 88.3359 74.9249C87.9762 74.9249 87.6927 75.0158 87.4854 75.1978C87.2822 75.3755 87.1362 75.64 87.0474 75.9913C86.9627 76.3383 86.9204 76.7636 86.9204 77.2672V80.606H84.9844V73.5093H86.4634L86.7236 74.4171H86.8315C86.9754 74.1716 87.1553 73.9727 87.3711 73.8204C87.5911 73.668 87.8324 73.5559 88.0947 73.4839C88.3571 73.412 88.6237 73.376 88.8945 73.376C89.415 73.376 89.8551 73.4607 90.2148 73.6299C90.5788 73.7992 90.8581 74.0616 91.0527 74.4171H91.2241C91.4357 74.0531 91.734 73.7886 92.1191 73.6236C92.5085 73.4586 92.9084 73.376 93.3188 73.376ZM100.682 73.376C101.338 73.376 101.903 73.503 102.377 73.7569C102.851 74.0066 103.217 74.3705 103.475 74.8487C103.733 75.3269 103.862 75.9109 103.862 76.6006V77.5401H99.2856C99.3068 78.086 99.4697 78.5155 99.7744 78.8287C100.083 79.1376 100.511 79.2921 101.057 79.2921C101.509 79.2921 101.924 79.2455 102.301 79.1524C102.677 79.0593 103.065 78.9197 103.462 78.7335V80.2315C103.111 80.405 102.743 80.532 102.358 80.6124C101.977 80.6928 101.514 80.733 100.968 80.733C100.257 80.733 99.6263 80.6018 99.0762 80.3394C98.5303 80.077 98.1007 79.6771 97.7876 79.1397C97.4787 78.6023 97.3242 77.9252 97.3242 77.1085C97.3242 76.279 97.4639 75.5893 97.7432 75.0391C98.0267 74.4848 98.4202 74.07 98.9238 73.795C99.4274 73.5157 100.014 73.376 100.682 73.376ZM100.695 74.7535C100.318 74.7535 100.005 74.8741 99.7554 75.1153C99.5099 75.3565 99.3682 75.7352 99.3301 76.2515H102.047C102.043 75.9638 101.99 75.7077 101.888 75.4835C101.791 75.2592 101.643 75.0814 101.444 74.9503C101.249 74.8191 101 74.7535 100.695 74.7535Z"
                    className="fill-white group-hover:fill-black transition-all duration-300"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

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
              onClick={() => scrollToSection(null, "about")}
              className="hover:text-gray-800"
            >
              About us
            </Link>
            <Link
              href="/#difference"
              onClick={() => scrollToSection(null, "difference")}
              className="hover:text-gray-800"
            >
              Difference
            </Link>
            <Link
              href="/#works"
              onClick={() => scrollToSection(null, "works")}
              className="hover:text-gray-800"
            >
              Work
            </Link>
            <Link
              href="/#solutions"
              onClick={() => scrollToSection(null, "solutions")}
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
