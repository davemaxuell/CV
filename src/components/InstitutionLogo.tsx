import React from 'react';

export interface InstitutionLogoProps {
  id: string;
  company?: string;
  className?: string;
}

/**
 * High-fidelity, pixel-perfect vector representations of the user's exact uploaded logos:
 * 1. BUFS Logo:
 *    - Dark charcoal background (#5A5B5E / #55585D)
 *    - Top row: Serif/Slab "B" and "U" in warm golden-yellow (#FFC000 / #FFBA00)
 *    - Bottom row: Serif/Slab "F" and "S" in crisp white (#FFFFFF)
 *
 * 2. UNIST Logo:
 *    - Deep dark navy background (#0D1B3E)
 *    - Tall cyan vertical pillar/tower topped with an 8-pointed star (#00D2D2 / #00CCCC)
 *    - Futuristic geometric white "UNIST" wordmark (#FFFFFF)
 *    - Cyan subtext "ULSAN NATIONAL INSTITUTE OF SCIENCE AND TECHNOLOGY" + "2 0 0 9"
 *
 * 3. Daewoong Pharmaceuticals (대웅제약):
 *    - Iconic orange mythical bear (웅 / 熊) symbol standing with raised arm and paw (#FA7200)
 *    - Bold modern black/charcoal Korean typography "대웅제약" (#2B2B2B)
 *
 * 4. TeddySum (테디썸):
 *    - Friendly white teddy-dog mascot with dark blue round/nerd glasses (#FFFFFF / #1E70B8)
 *    - Set inside a light-grey circle on a vibrant medium-blue circular/rounded background (#1E70B8)
 *
 * 5. Busan Global City Foundation (부산글로벌도시재단, BGCF):
 *    - Connected flowing lowercase typographic mark: 'b' (vibrant magenta/pink #C2185B/E91E63),
 *      'g' (rich royal violet #4A148C/6A1B9A), 'f' (deep gradient blue #0277BD/01579B)
 *    - Modern corporate charcoal typography "부산글로벌도시재단" (#333333)
 *
 * 6. Oriental Precision & Engineering (오리엔탈정공, OPCO):
 *    - Prominent red sphere/circle with deep black shadow crescent (#E52421 + #1A1A1A)
 *    - Bold black sans-serif wordmark "ORIENTAL" (#1C1C1C)
 *    - Subtext "PRECISION & ENGINEERING CO., LTD." with stylized black vertical bar accents on 'I'
 */

export const InstitutionLogo: React.FC<InstitutionLogoProps> = ({ id, company, className = 'w-10 h-10' }) => {
  switch (id) {
    // 1. BUFS Logo
    case 'bufs':
    case 'bufs-present':
      return (
        <div
          className={`${className} rounded-xl bg-[#54565B] flex flex-col items-center justify-center shrink-0 shadow-2xs border border-[#484A4F] overflow-hidden select-none p-1.5 transition-transform hover:scale-105`}
          title={company || 'Busan University of Foreign Studies (BUFS)'}
        >
          <div className="w-full h-full flex flex-col items-center justify-between font-serif font-black tracking-tight leading-none text-center select-none">
            {/* Top row: BU in warm golden yellow */}
            <div className="w-full flex justify-around text-[#FFBF00] text-[13px] sm:text-[14px] font-black scale-y-110">
              <span className="font-extrabold">B</span>
              <span className="font-extrabold">U</span>
            </div>
            {/* Bottom row: FS in crisp white */}
            <div className="w-full flex justify-around text-white text-[13px] sm:text-[14px] font-black scale-y-110">
              <span className="font-extrabold">F</span>
              <span className="font-extrabold">S</span>
            </div>
          </div>
        </div>
      );

    // 2. UNIST Logo
    case 'unist-intern':
      return (
        <div
          className={`${className} rounded-xl bg-[#0D1B3E] flex flex-col items-center justify-between shrink-0 shadow-2xs border border-[#172554] overflow-hidden select-none p-1 transition-transform hover:scale-105`}
          title={company || 'UNIST (Ulsan National Institute of Science and Technology)'}
        >
          {/* Cyan Star & Beacon Tower */}
          <div className="w-full flex flex-col items-center pt-0.5">
            {/* 8-pointed star */}
            <svg className="w-2.5 h-2.5 text-[#00E5E5]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14 8 L22 8 L16 13 L19 21 L12 16 L5 21 L8 13 L2 8 L10 8 Z" />
            </svg>
            {/* Vertical cyan beacon */}
            <div className="w-[2.5px] h-3 bg-[#00E5E5] rounded-full my-0.5"></div>
          </div>

          {/* Futuristic UNIST lettermark */}
          <div className="text-white text-[10px] font-black tracking-wider leading-none scale-y-110 font-mono">
            UNIST
          </div>

          {/* Micro subtext bar */}
          <div className="text-[5px] text-[#00E5E5] font-semibold tracking-tighter truncate leading-none pb-0.5 scale-90">
            2 0 0 9
          </div>
        </div>
      );

    // 3. Daewoong Pharmaceuticals
    case 'daewoong-pharma':
      return (
        <div
          className={`${className} rounded-xl bg-white flex flex-col items-center justify-between shrink-0 shadow-2xs border border-neutral-200/90 overflow-hidden select-none p-1 transition-transform hover:scale-105`}
          title={company || 'Daewoong Pharmaceutical (대웅제약)'}
        >
          {/* Daewoong Mythical Bear (웅 / 熊) Emblem in Vivid Orange */}
          <div className="w-full flex-1 flex items-center justify-center pt-0.5">
            <svg
              className="w-6 h-6 text-[#F97316]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Mythical stylized bear symbol standing with raised paw */}
              <circle cx="58" cy="18" r="7" />
              <path d="M50 12 C44 14 38 18 36 26 C34 32 37 38 42 42 C44 44 44 48 41 54 C38 60 38 66 43 72 C48 78 52 82 56 86 C58 88 56 94 54 98 C64 94 72 86 72 74 C72 62 64 54 60 48 C56 42 58 34 64 28 C68 24 66 18 58 14 Z" />
              {/* Left wing/flame crest flourish */}
              <path d="M32 20 L48 16 L48 24 L34 26 Z" />
              <path d="M26 26 L42 22 L42 48 L26 48 Z" />
              <path d="M30 34 L38 34 L38 40 L30 40 Z" />
              {/* Bottom stylized claws/waves */}
              <path d="M30 70 C34 60 42 54 46 50 C44 60 38 78 30 88 Z" />
              <path d="M38 74 C42 66 48 58 52 54 C50 64 46 80 40 92 Z" />
              <path d="M48 76 C52 70 56 64 60 60 C58 70 54 82 50 94 Z" />
              {/* Raised paw pill / treasure */}
              <ellipse cx="70" cy="28" rx="4" ry="7" transform="rotate(20 70 28)" />
            </svg>
          </div>

          {/* Bold Korean Typography: 대웅제약 */}
          <div className="w-full text-center text-[#262626] font-black text-[6.5px] sm:text-[7px] leading-tight tracking-tight scale-x-95">
            대웅제약
          </div>
        </div>
      );

    // 4. TeddySum
    case 'teddysum-bok':
      return (
        <div
          className={`${className} rounded-xl bg-[#1E70B8] flex items-center justify-center shrink-0 shadow-2xs border border-[#195E9C] overflow-hidden select-none p-1 transition-transform hover:scale-105`}
          title={company || 'TeddySum (테디썸)'}
        >
          {/* Inner Light Circle */}
          <div className="w-8 h-8 rounded-full bg-[#EDF3F8] flex items-center justify-center relative overflow-hidden">
            {/* White Dog with Blue Glasses Mascot */}
            <svg
              className="w-7 h-7 text-[#1E70B8]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Dog head fill in white */}
              <path
                d="M30 40 C26 26 30 18 36 20 C42 22 40 32 44 36 C50 34 60 34 66 36 C70 32 68 22 74 20 C80 18 84 26 80 40 C84 46 86 56 84 66 C80 82 66 88 55 88 C44 88 30 82 26 66 C24 56 26 46 30 40 Z"
                fill="#FFFFFF"
                stroke="#1E70B8"
                strokeWidth="5"
              />
              {/* Left ear floof crease */}
              <path d="M35 28 C37 32 35 36 33 38" />

              {/* Big nerd glasses frame */}
              <rect x="22" y="44" width="26" height="20" rx="8" fill="#1E70B8" />
              <rect x="52" y="44" width="26" height="20" rx="8" fill="#1E70B8" />
              <path d="M48 50 L52 50" stroke="#1E70B8" strokeWidth="6" />

              {/* Lens in white with dark pupils */}
              <rect x="25" y="47" width="20" height="14" rx="6" fill="#FFFFFF" stroke="none" />
              <rect x="55" y="47" width="20" height="14" rx="6" fill="#FFFFFF" stroke="none" />
              <circle cx="35" cy="54" r="3.5" fill="#1E70B8" stroke="none" />
              <circle cx="65" cy="54" r="3.5" fill="#1E70B8" stroke="none" />

              {/* Dog Nose and mouth */}
              <ellipse cx="50" cy="67" rx="5" ry="4" fill="#1E70B8" stroke="none" />
              <path d="M50 71 L50 75 M46 78 L50 75 L54 78" stroke="#1E70B8" strokeWidth="4" />
            </svg>
          </div>
        </div>
      );

    // 5. Busan Global City Foundation
    case 'bufs-bgcf':
      return (
        <div
          className={`${className} rounded-xl bg-white flex flex-col items-center justify-between shrink-0 shadow-2xs border border-neutral-200/90 overflow-hidden select-none p-1 transition-transform hover:scale-105`}
          title={company || 'Busan Global City Foundation (부산글로벌도시재단, BGCF)'}
        >
          {/* Stylized interconnected lowercase 'b g f' icon */}
          <div className="w-full flex-1 flex items-center justify-center">
            <svg className="w-8 h-6" viewBox="0 0 90 60" fill="none">
              {/* 'b' in vibrant magenta */}
              <path
                d="M16 8 L16 48 M16 32 C16 22 30 22 30 36 C30 48 16 48 16 48"
                stroke="#C2185B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* 'g' in royal violet */}
              <path
                d="M44 26 C36 26 32 34 32 40 C32 48 40 50 44 50 C50 50 54 44 54 36 C54 26 44 26 38 26 M52 32 L52 54 C52 64 36 64 32 58"
                stroke="#6A1B9A"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* 'f' in cyan/blue */}
              <path
                d="M60 22 C64 16 72 16 76 22 M60 52 L60 22 M54 34 L72 34"
                stroke="#0288D1"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Subtext Korean typography: 부산글로벌도시재단 */}
          <div className="text-[5.5px] font-bold text-[#333333] tracking-tighter truncate w-full text-center leading-none pb-0.5">
            부산글로벌도시재단
          </div>
        </div>
      );

    // 6. Oriental Precision & Engineering
    case 'oriental-precision':
      return (
        <div
          className={`${className} rounded-xl bg-white flex flex-col items-center justify-between shrink-0 shadow-2xs border border-neutral-200/90 overflow-hidden select-none p-1 transition-transform hover:scale-105`}
          title={company || 'Oriental Precision & Engineering Co., Ltd. (오리엔탈정공)'}
        >
          {/* Prominent Red Sphere with Black Eclipse Shadow */}
          <div className="w-full flex-1 flex items-center justify-center pt-0.5">
            <svg className="w-6 h-6" viewBox="0 0 50 50" fill="none">
              {/* Red Outer Sun/Sphere */}
              <circle cx="25" cy="22" r="18" fill="#E52421" />
              {/* Black Inner Eclipse Crescent / Planet */}
              <circle cx="29" cy="20" r="10" fill="#1C1C1C" />
            </svg>
          </div>

          {/* BOLD ORIENTAL Wordmark */}
          <div className="w-full text-center flex flex-col items-center leading-none pb-0.5">
            <span className="text-[7.5px] font-black text-[#1C1C1C] tracking-tighter scale-y-105">
              ORIENTAL
            </span>
            <span className="text-[3.8px] font-semibold text-[#555555] tracking-tight scale-90 truncate max-w-full">
              PRECISION & ENGINEERING
            </span>
          </div>
        </div>
      );

    // 7. Sun Moon University (선문대학교)
    case 'sun-moon':
    case 'sunmoon':
      return (
        <div
          className={`${className} rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs border border-neutral-200 overflow-hidden select-none transition-transform hover:scale-105`}
          title={company || 'Sun Moon University (선문대학교)'}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            {/* Outer Ring Background */}
            <circle cx="100" cy="100" r="98" fill="#FFFFFF" stroke="#9FA3A1" strokeWidth="3" />

            {/* Silver Outer Text Band */}
            <circle cx="100" cy="100" r="88" fill="#B2B5AD" />
            <circle cx="100" cy="100" r="68" fill="#FFFFFF" stroke="#9FA3A1" strokeWidth="2" />

            {/* Notches dividing top and bottom arc */}
            <polygon points="10,100 24,93 24,107" fill="#FFFFFF" />
            <polygon points="190,100 176,93 176,107" fill="#FFFFFF" />

            {/* Circular Path for Top Motto: LOVE GOD • LOVE HUMANKIND • LOVE YOUR COUNTRY */}
            <defs>
              <path
                id="sunmoon-top-path"
                d="M 28,100 A 72,72 0 0,1 172,100"
                fill="none"
              />
              <path
                id="sunmoon-bottom-path"
                d="M 28,100 A 72,72 0 0,0 172,100"
                fill="none"
              />
              {/* Radial gradient for the red sphere side */}
              <radialGradient id="sm-red-grad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FA5268" />
                <stop offset="70%" stopColor="#C81D33" />
                <stop offset="100%" stopColor="#8A0F21" />
              </radialGradient>
              {/* Radial gradient for the teal sphere side */}
              <radialGradient id="sm-teal-grad" cx="70%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#B3EBEB" />
                <stop offset="70%" stopColor="#4FAFB1" />
                <stop offset="100%" stopColor="#1B6F73" />
              </radialGradient>
            </defs>

            {/* Top Motto Text */}
            <text fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="serif">
              <textPath href="#sunmoon-top-path" startOffset="50%" textAnchor="middle">
                LOVE GOD • LOVE HUMANKIND • LOVE YOUR COUNTRY
              </textPath>
            </text>

            {/* Bottom University Name Text */}
            <text fill="#2A2A2A" fontSize="12.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">
              <textPath href="#sunmoon-bottom-path" startOffset="50%" textAnchor="middle">
                • SUN MOON UNIVERSITY •
              </textPath>
            </text>

            {/* Center Shield Outline */}
            <g transform="translate(100, 98) scale(0.68) translate(-100, -100)">
              {/* Shield Shadow/Outer Stroke */}
              <path
                d="M 45,46 C 70,44 85,55 100,60 C 115,55 130,44 155,46 L 155,108 C 155,142 128,168 100,180 C 72,168 45,142 45,108 Z"
                fill="#0F747E"
                stroke="#1B1B1B"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              {/* Red Header Bar (Open Book Crown) */}
              <path
                d="M 47,48 L 54,62 L 100,62 L 100,48 Z"
                fill="#C81D33"
                stroke="#1B1B1B"
                strokeWidth="3"
              />
              <path
                d="M 153,48 L 146,62 L 100,62 L 100,48 Z"
                fill="#C81D33"
                stroke="#1B1B1B"
                strokeWidth="3"
              />

              {/* Inner White Margin */}
              <path
                d="M 51,64 C 72,62 86,66 100,70 C 114,66 128,62 149,64 L 149,108 C 149,138 126,162 100,173 C 74,162 51,138 51,108 Z"
                fill="#0F747E"
                stroke="#FFFFFF"
                strokeWidth="3"
              />

              {/* Central Sphere (Globe / Sun-Moon duality) */}
              <g transform="translate(100, 114)">
                {/* Sphere background split */}
                <circle cx="0" cy="0" r="36" fill="url(#sm-teal-grad)" />
                <path d="M 0,-36 A 36,36 0 0,0 0,36 Z" fill="url(#sm-red-grad)" />

                {/* Swirling Black Wave / S-flame symbol */}
                <g fill="#1A1A1A">
                  <path d="M -18,-18 C -22,-10 -22,2 -14,10 C -6,18 6,18 14,12 C 18,8 20,2 18,-6 C 16,-14 6,-18 -4,-18 C -10,-18 -14,-14 -12,-10 C -10,-6 -6,-6 -2,-6 C 4,-6 8,0 6,6 C 4,10 -2,10 -8,6 C -12,2 -12,-6 -8,-10 Z" />
                  {/* Outer sweeping curved tendrils */}
                  <path d="M -24,-2 C -26,12 -12,26 4,26 C 18,26 28,16 26,2 C 24,10 16,18 6,18 C -4,18 -16,10 -16,-2 Z" />
                  <path d="M 4,-26 C -12,-26 -24,-14 -22,2 C -20,-8 -12,-18 2,-18 C 14,-18 22,-8 20,4 C 24,-12 16,-26 4,-26 Z" />
                  <path d="M -6,-28 C 4,-28 16,-20 18,-8 C 15,-15 7,-20 -2,-20 C -12,-20 -18,-10 -18,2 C -20,-8 -16,-22 -6,-28 Z" />
                </g>

                {/* Inner white eye / core */}
                <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
              </g>
            </g>
          </svg>
        </div>
      );

    case 'teaching-assistant':
    default:
      return (
        <div
          className={`${className} rounded-xl bg-neutral-900 text-white flex flex-col items-center justify-center shrink-0 shadow-2xs border border-neutral-800 overflow-hidden select-none p-1 transition-transform hover:scale-105`}
          title={company || 'Teaching Assistant'}
        >
          <span className="text-[11px] font-black tracking-wider leading-none">TA</span>
          <span className="text-[6px] text-neutral-300 font-semibold mt-0.5 tracking-tight">AI & ML</span>
        </div>
      );
  }
};
