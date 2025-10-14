import React from 'react'

const BoxProgress = () => {
    return (
        <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_433_729)">
                <path d="M4 29C4 15.1929 15.1929 4 29 4H53.7394C67.5465 4 78.7394 15.1929 78.7394 29V53.7394C78.7394 67.5465 67.5465 78.7394 53.7394 78.7394H4V29Z" fill="black" fillOpacity="0.5" />
            </g>
            <path d="M4 29C4 15.1929 15.1929 4 29 4H53.7394C67.5465 4 78.7394 15.1929 78.7394 29V53.7394C78.7394 67.5465 67.5465 78.7394 53.7394 78.7394H4V29Z" fill="url(#paint0_linear_433_729)" />
            <g style="mix-blend-mode:overlay" opacity="0.3">
                <mask id="mask0_433_729" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="75" height="75">
                    <rect x="4" y="4" width="74.7394" height="74.7394" rx="25" fill="url(#paint1_linear_433_729)" />
                </mask>
                <g mask="url(#mask0_433_729)">
                    <path d="M4 4H78.7394V78.7394L39.5012 42.1171L4 4Z" fill="url(#paint2_linear_433_729)" />
                </g>
            </g>
            <defs>
                <filter id="filter0_f_433_729" x="0" y="0" width="82.7393" height="82.7393" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_433_729" />
                </filter>
                <linearGradient id="paint0_linear_433_729" x1="41.3697" y1="4" x2="41.3697" y2="78.7394" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#454545" />
                    <stop offset="1" />
                </linearGradient>
                <linearGradient id="paint1_linear_433_729" x1="5.73813" y1="39.4029" x2="76.1322" y2="39.4029" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#07569E" />
                    <stop offset="1" stopColor="#0093DD" />
                </linearGradient>
                <linearGradient id="paint2_linear_433_729" x1="74.255" y1="72.3865" x2="-6.08982" y2="-13.1901" gradientUnits="userSpaceOnUse">
                    <stop offset="0.116225" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default BoxProgress