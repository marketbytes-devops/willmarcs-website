import React from 'react';
import Marquee from 'react-fast-marquee';
import iconBox from '@/assets/svg/IconBox.svg';
import VectorArrowTop from '../Icons/VectorArrowTop';
import VectorArrowBottom from '../Icons/VectorArrowBottom';

const Progress = () => {
  const steps = [
    { number: '01', label: 'Brief' },
    { number: '02', label: 'Recce/Permits' },
    { number: '03', label: 'Shoot' },
    { number: '04', label: 'Edit' },
    { number: '05', label: 'Review (2 Rounds)' },
    { number: '06', label: 'Report-Ready Delivery' },
  ];

  return (
    <section className="min-h-auto relative z-10">
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mx-4 flex flex-col items-center justify-center min-w-[200px] min-h-[230px]"
            >
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
              {index < steps.length - 1 && (
                <span
                  className={`absolute ${index % 2 === 0 ? 'top-0 left-[115px]' : '-bottom-2 right-[15px] pb-2'}`}
                  style={{ width: '80px' }}
                >
                  {index % 2 === 0 ? <VectorArrowTop /> : <VectorArrowBottom />}
                </span>
              )}
              {index === steps.length - 1 && (
                <span className="absolute -bottom-2 left-[115px] pb-2" style={{ width: '80px' }}>
                  <VectorArrowBottom />
                </span>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Progress;
