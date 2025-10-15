import React from 'react';
import Slider from 'react-slick';
import iconBox from '@/assets/svg/IconBox.svg';
import VectorArrowTop from '../Icons/VectorArrowTop';
import VectorArrowBottom from '../Icons/VectorArrowBottom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Progress = () => {
  const steps = [
    { number: '01', label: 'Brief' },
    { number: '02', label: 'Recce/Permits' },
    { number: '03', label: 'Shoot' },
    { number: '04', label: 'Edit' },
    { number: '05', label: 'Review (2 Rounds)' },
    { number: '06', label: 'Report-Ready Delivery' },
  ];

  const desktopSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="hidden sm:block min-h-auto relative z-10">
        <div className="w-full">
          <Slider {...desktopSettings} className="overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative mx-4 flex items-center justify-center"
              >
                <div className="card flex flex-col items-center justify-center min-w-[200px] min-h-auto sm:min-h-[230px] px-4 pt-2 sm:pt-0">
                  <span
                    className="secondary-font text-xl md:text-2xl font-bold text-white inline-flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${iconBox.src})`,
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '80px 80px',
                      width: '80px',
                      height: '80px',
                      lineHeight: '80px',
                      textAlign: 'center',
                    }}
                  >
                    {step.number}
                  </span>
                  <span className="mt-4 primary-font font-semibold text-base md:text-lg text-black text-center">
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <span
                    className={`hidden md:block absolute ${index % 2 === 0 ? 'top-0 left-[115px]' : '-bottom-2 right-[15px] pb-2'}`}
                    style={{ width: '80px' }}
                  >
                    {index % 2 === 0 ? <VectorArrowTop /> : <VectorArrowBottom />}
                  </span>
                )}
                {/* {index === steps.length - 1 && (
                <span className="hidden md:block absolute -bottom-2 left-[115px] pb-2" style={{ width: '80px' }}>
                  <VectorArrowBottom />
                </span>
              )} */}
              </div>
            ))}
          </Slider>
        </div>
      </section>


      <section className="block sm:hidden min-h-auto relative z-10">
        <div className="w-full">
          <Slider {...mobileSettings} className="overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative mx-4 flex items-center justify-center"
              >
                <div className="card flex flex-col items-center justify-center min-w-[200px] min-h-auto sm:min-h-[230px] px-4 pt-2 sm:pt-0">
                  <span
                    className="secondary-font text-xl md:text-2xl font-bold text-white inline-flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${iconBox.src})`,
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '80px 80px',
                      width: '80px',
                      height: '80px',
                      lineHeight: '80px',
                      textAlign: 'center',
                    }}
                  >
                    {step.number}
                  </span>
                  <span className="mt-4 primary-font font-semibold text-base md:text-lg text-black text-center">
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <span
                    className={`hidden md:block absolute ${index % 2 === 0 ? 'top-0 left-[115px]' : '-bottom-2 right-[15px] pb-2'}`}
                    style={{ width: '80px' }}
                  >
                    {index % 2 === 0 ? <VectorArrowTop /> : <VectorArrowBottom />}
                  </span>
                )}
                {/* {index === steps.length - 1 && (
                <span className="hidden md:block absolute -bottom-2 left-[115px] pb-2" style={{ width: '80px' }}>
                  <VectorArrowBottom />
                </span>
              )} */}
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Progress;