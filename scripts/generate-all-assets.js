const fs = require("fs");
const path = require("path");

const ROOT = "C:\\Users\\obito\\velvet-workspace\\Velvettt-67";
const CARDS_DIR = path.join(ROOT, "assets", "cards");
const LABELS_DIR = path.join(ROOT, "assets", "labels");
const ASSETS_DIR = path.join(ROOT, "assets");

if (!fs.existsSync(CARDS_DIR)) fs.mkdirSync(CARDS_DIR, { recursive: true });
if (!fs.existsSync(LABELS_DIR)) fs.mkdirSync(LABELS_DIR, { recursive: true });

// Common card generator function
function makeCardSvg(title, subtitle, iconSvg, accentColor = "#9B5CFF") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 62" width="206" height="62">
  <defs>
    <!-- Dark Glass Base -->
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#161422" stop-opacity="0.96"/>
      <stop offset="100%" stop-color="#0F0D1A" stop-opacity="0.98"/>
    </linearGradient>

    <!-- Frosted Glass Refraction -->
    <linearGradient id="cardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.10"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.01"/>
    </linearGradient>

    <!-- 1px Specular Apple Rim -->
    <linearGradient id="cardRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.42"/>
      <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.32"/>
    </linearGradient>

    <!-- Subtle Icon Ambient Glow -->
    <radialGradient id="iconGlow" cx="29" cy="31" r="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Card Surface -->
  <rect width="206" height="62" rx="14" fill="url(#cardBg)"/>
  <rect width="206" height="62" rx="14" fill="url(#cardGlass)"/>
  <circle cx="29" cy="31" r="24" fill="url(#iconGlow)"/>

  <!-- 1px Specular Border -->
  <rect x="0.8" y="0.8" width="204.4" height="60.4" rx="13.2" fill="none" stroke="url(#cardRim)" stroke-width="1"/>

  <!-- Top Glass Highlight Refraction Line -->
  <line x1="14" y1="1.4" x2="192" y2="1.4" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" stroke-linecap="round"/>

  <!-- 30px Vector Icon -->
  <g transform="translate(14, 16)">
    ${iconSvg}
  </g>

  <!-- Typography -->
  <text x="54" y="32" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="14" font-weight="700">${title}</text>
  <text x="54" y="47" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">${subtitle}</text>
</svg>`;
}

// 16 CARDS DEFINITION
const cards = {
  // Category 1: Languages
  "typescript.svg": {
    title: "TypeScript",
    subtitle: "Strict Static Typing",
    accent: "#3178C6",
    icon: `<rect width="30" height="30" rx="6" fill="#3178C6"/>
      <path d="M7 11 h9 M11.5 11 v12" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M18 21.5 c1.5 1.5 4 1.5 4 -0.8 c0 -2.5 -4.5 -1.5 -4.5 -4.5 c0 -2 2 -3.2 4.2 -2.5" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>`
  },
  "javascript.svg": {
    title: "JavaScript",
    subtitle: "ESNext &amp; Node Core",
    accent: "#F7DF1E",
    icon: `<rect width="30" height="30" rx="6" fill="#F7DF1E"/>
      <path d="M9 18.5 c0 2.5 1.8 3.5 3.8 3.5 c2 0 3.2 -1 3.2 -3 v-7" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M18 20.5 c1.5 1.5 3.5 1.5 3.5 -0.5 c0 -2.5 -4 -1.5 -4 -4.2 c0 -1.8 1.8 -2.8 3.8 -2" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/>`
  },
  "rust.svg": {
    title: "Rust",
    subtitle: "Systems &amp; Tokio",
    accent: "#DEA584",
    icon: `<circle cx="15" cy="15" r="14" fill="#1C1814" stroke="#DEA584" stroke-width="1.8"/>
      <circle cx="15" cy="15" r="11" fill="none" stroke="#DEA584" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="15" y="21" fill="#DEA584" font-family="'Courier New', monospace" font-size="17" font-weight="900" text-anchor="middle">R</text>`
  },
  "python.svg": {
    title: "Python",
    subtitle: "Automation &amp; Data",
    accent: "#3776AB",
    icon: `<path d="M14.5 2 C8.5 2 9 4.6 9 4.6 L9 7.3 L15.2 7.3 L15.2 8.2 L6.5 8.2 C6.5 8.2 2 7.7 2 13.7 C2 19.7 6 19.3 6 19.3 L8.4 19.3 L8.4 16 C8.4 12.3 11.5 12.3 11.5 12.3 L17.7 12.3 C17.7 12.3 20.8 12.3 20.8 8.6 C20.8 4.9 17.7 2 14.5 2 Z" fill="#3776AB"/>
      <circle cx="11.8" cy="4.8" r="1.1" fill="#FFFFFF"/>
      <path d="M15.5 28 C21.5 28 21 25.4 21 25.4 L21 22.7 L14.8 22.7 L14.8 21.8 L23.5 21.8 C23.5 21.8 28 22.3 28 16.3 C28 10.3 24 10.7 24 10.7 L21.6 10.7 L21.6 14 C21.6 17.7 18.5 17.7 18.5 17.7 L12.3 17.7 C12.3 12.3 9.2 17.7 9.2 21.4 C9.2 25.1 12.3 28 15.5 28 Z" fill="#FFD43B"/>
      <circle cx="18.2" cy="25.2" r="1.1" fill="#000000"/>`
  },

  // Category 2: Frontend
  "nextjs.svg": {
    title: "Next.js 14 / 16",
    subtitle: "App Router &amp; SSR",
    accent: "#FFFFFF",
    icon: `<circle cx="15" cy="15" r="14.5" fill="#000000" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
      <path d="M10 8 v14 M21 8 l-10 14" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="21" y1="8" x2="21" y2="16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" opacity="0.6"/>`
  },
  "react.svg": {
    title: "React 18 / 19",
    subtitle: "Modern Architecture",
    accent: "#61DAFB",
    icon: `<circle cx="15" cy="15" r="3" fill="#61DAFB"/>
      <ellipse cx="15" cy="15" rx="13" ry="5" fill="none" stroke="#61DAFB" stroke-width="1.6"/>
      <ellipse cx="15" cy="15" rx="13" ry="5" transform="rotate(60 15 15)" fill="none" stroke="#61DAFB" stroke-width="1.6"/>
      <ellipse cx="15" cy="15" rx="13" ry="5" transform="rotate(120 15 15)" fill="none" stroke="#61DAFB" stroke-width="1.6"/>`
  },
  "threejs.svg": {
    title: "Three.js / R3F",
    subtitle: "3D Canvases &amp; Drei",
    accent: "#9B5CFF",
    icon: `<polygon points="15,2 28,26 2,26" fill="none" stroke="#FFFFFF" stroke-width="2"/>
      <line x1="15" y1="2" x2="15" y2="26" stroke="#9B5CFF" stroke-width="1.6"/>
      <line x1="15" y1="2" x2="2" y2="26" stroke="#48A7FF" stroke-width="1.6"/>
      <line x1="15" y1="26" x2="28" y2="26" stroke="#C8A7FF" stroke-width="1.6"/>`
  },
  "vite.svg": {
    title: "Vite 8",
    subtitle: "Instant HMR Bundler",
    accent: "#646CFF",
    icon: `<polygon points="17,1 3,16 11,16 8,29 27,11 18,11" fill="#646CFF"/>
      <polygon points="16,4 7,14 13,14 10,24 23,12 17,12" fill="#FFD43B"/>`
  },

  // Category 3: Motion & Shaders
  "tailwind.svg": {
    title: "Tailwind CSS v4",
    subtitle: "Zero-Runtime CSS",
    accent: "#38B2AC",
    icon: `<path d="M7 11 c1.8 -4 5 -5 9 -3.5 c3 1 4.5 3 6.5 3.8 c3 1 5.5 -0.5 7 -3.5 c-1.8 4 -5 5 -9 3.5 c-3 -1 -4.5 -3 -6.5 -3.8 c-3 -1 -5.5 0.5 -7 3.5 z" fill="#38B2AC"/>
      <path d="M1 18 c1.8 -4 5 -5 9 -3.5 c3 1 4.5 3 6.5 3.8 c3 1 5.5 -0.5 7 -3.5 c-1.8 4 -5 5 -9 3.5 c-3 -1 -4.5 -3 -6.5 -3.8 c-3 -1 -5.5 0.5 -7 3.5 z" fill="#38B2AC" opacity="0.8"/>`
  },
  "gsap.svg": {
    title: "GSAP 3",
    subtitle: "Timeline Orchestration",
    accent: "#88CE02",
    icon: `<circle cx="15" cy="15" r="14" fill="#88CE02"/>
      <text x="15" y="21" fill="#000000" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" text-anchor="middle">G</text>`
  },
  "framer.svg": {
    title: "Framer Motion",
    subtitle: "Gesture Transitions",
    accent: "#0055FF",
    icon: `<polygon points="3,3 27,3 15,15" fill="#0055FF"/>
      <polygon points="3,15 27,15 3,27" fill="#9B5CFF"/>`
  },
  "glsl.svg": {
    title: "GLSL Shaders",
    subtitle: "GPU Particle Physics",
    accent: "#E53E3E",
    icon: `<rect width="30" height="30" rx="6" fill="#990000"/>
      <text x="15" y="21" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="900" text-anchor="middle">GL</text>`
  },

  // Category 4: Systems
  "tauri.svg": {
    title: "Tauri v2",
    subtitle: "Native Rust Desktop",
    accent: "#24C8DB",
    icon: `<circle cx="11" cy="15" r="9" fill="none" stroke="#24C8DB" stroke-width="2.6"/>
      <circle cx="19" cy="15" r="9" fill="none" stroke="#FFC131" stroke-width="2.6"/>`
  },
  "windows.svg": {
    title: "Windows APIs",
    subtitle: "MMCSS Latency Tuning",
    accent: "#00A4EF",
    icon: `<rect x="2" y="2" width="12" height="12" fill="#00A4EF"/>
      <rect x="16" y="2" width="12" height="12" fill="#00A4EF"/>
      <rect x="2" y="16" width="12" height="12" fill="#00A4EF"/>
      <rect x="16" y="16" width="12" height="12" fill="#00A4EF"/>`
  },
  "discord.svg": {
    title: "Discord API",
    subtitle: "Live Telemetry Gateway",
    accent: "#5865F2",
    icon: `<rect x="1" y="3" width="28" height="24" rx="7" fill="#5865F2"/>
      <circle cx="9.5" cy="14" r="2.8" fill="#FFFFFF"/>
      <circle cx="20.5" cy="14" r="2.8" fill="#FFFFFF"/>
      <path d="M8 20 c3.5 1.5 10.5 1.5 14 0" stroke="#5865F2" stroke-width="2" stroke-linecap="round"/>`
  },
  "vercel.svg": {
    title: "Vercel Edge",
    subtitle: "Global CDN Delivery",
    accent: "#FFFFFF",
    icon: `<polygon points="15,4 27,26 3,26" fill="#FFFFFF"/>`
  }
};

for (const [filename, c] of Object.entries(cards)) {
  const content = makeCardSvg(c.title, c.subtitle, c.icon, c.accent);
  fs.writeFileSync(path.join(CARDS_DIR, filename), content, "utf8");
  console.log(`Generated card: ${filename}`);
}

// 2. GENERATE LABELS & SECTION HEADERS
const arsenalHeader = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 76" width="100%" height="100%">
  <defs>
    <linearGradient id="hdrTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="45%" stop-color="#D4C4FF"/>
      <stop offset="100%" stop-color="#8BB9FE"/>
    </linearGradient>
    <linearGradient id="topLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#9B5CFF" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <!-- Top Specular Refraction Line -->
  <line x1="20" y1="2" x2="920" y2="2" stroke="url(#topLineGrad)" stroke-width="1.2" stroke-linecap="round"/>

  <!-- Sub-label -->
  <circle cx="26" cy="20" r="3.5" fill="#48A7FF"/>
  <text x="38" y="24" fill="#C8A7FF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.14em">VERIFIED ARSENAL</text>

  <!-- Title & Subtitle -->
  <text x="20" y="58" fill="url(#hdrTitleGrad)" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="22" font-weight="800" letter-spacing="-0.02em">Technologies &amp; Frameworks</text>
  <text x="380" y="58" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="400">Tactile 30px vector logos · Apple dark glass architecture · Verified production code</text>
</svg>`;
fs.writeFileSync(path.join(LABELS_DIR, "arsenal-header.svg"), arsenalHeader, "utf8");

function makeCatLabel(text, color, lineOffset = 220) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 26" width="100%" height="100%">
  <text x="20" y="17" fill="${color}" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.13em">${text}</text>
  <line x1="${lineOffset}" y1="13" x2="920" y2="13" stroke="${color}" stroke-opacity="0.22" stroke-width="1"/>
</svg>`;
}

fs.writeFileSync(path.join(LABELS_DIR, "cat-01-languages.svg"), makeCatLabel("01. CORE LANGUAGES", "#9B5CFF", 195), "utf8");
fs.writeFileSync(path.join(LABELS_DIR, "cat-02-frontend.svg"), makeCatLabel("02. FRONTEND &amp; 3D WEBGL", "#48A7FF", 240), "utf8");
fs.writeFileSync(path.join(LABELS_DIR, "cat-03-motion.svg"), makeCatLabel("03. MOTION &amp; SHADERS", "#8BB9FE", 215), "utf8");
fs.writeFileSync(path.join(LABELS_DIR, "cat-04-systems.svg"), makeCatLabel("04. SYSTEMS &amp; INFRASTRUCTURE", "#C8A7FF", 265), "utf8");

const arsenalFooter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 22" width="100%" height="100%">
  <line x1="20" y1="11" x2="920" y2="11" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <circle cx="470" cy="11" r="2.5" fill="#9B5CFF" opacity="0.8"/>
  <circle cx="470" cy="11" r="6" fill="none" stroke="#9B5CFF" stroke-width="0.8" opacity="0.3"/>
</svg>`;
fs.writeFileSync(path.join(LABELS_DIR, "arsenal-footer.svg"), arsenalFooter, "utf8");
console.log("Generated label SVGs");

// 3. GENERATE CONTINUOUS ANIMATED WAVE SEPARATOR
const animatedWave = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 32" width="100%" height="100%" preserveAspectRatio="none">
  <defs>
    <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9B5CFF" stop-opacity="0.2"/>
      <stop offset="30%" stop-color="#9B5CFF" stop-opacity="0.95"/>
      <stop offset="70%" stop-color="#48A7FF" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#9B5CFF" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.1"/>
    </linearGradient>
  </defs>

  <style>
    @keyframes moveWaveA {
      0% { transform: translateX(0); }
      100% { transform: translateX(-470px); }
    }
    @keyframes moveWaveB {
      0% { transform: translateX(0); }
      100% { transform: translateX(470px); }
    }
    .waveA {
      animation: moveWaveA 10s linear infinite;
    }
    .waveB {
      animation: moveWaveB 14s linear infinite;
    }
  </style>

  <!-- Primary Sine Wave (Purple/Blue) -->
  <g class="waveA">
    <path d="M 0 16 Q 117.5 4 235 16 T 470 16 T 705 16 T 940 16 T 1175 16 T 1410 16 T 1645 16 T 1880 16"
          fill="none" stroke="url(#waveGrad1)" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- Secondary Counter Sine Wave (Subtle White Specular) -->
  <g class="waveB" transform="translate(-470, 0)">
    <path d="M 0 16 Q 117.5 28 235 16 T 470 16 T 705 16 T 940 16 T 1175 16 T 1410 16 T 1645 16 T 1880 16"
          fill="none" stroke="url(#waveGrad2)" stroke-width="1.3" stroke-linecap="round" stroke-dasharray="6,4"/>
  </g>
</svg>`;
fs.writeFileSync(path.join(ASSETS_DIR, "animated-wave.svg"), animatedWave, "utf8");
console.log("Generated animated-wave.svg");

// 4. GENERATE ANIMATED VELVET HERO BANNER
const velvetHero = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 330" width="100%" height="100%">
  <defs>
    <!-- Deep Obsidian Canvas -->
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06060A"/>
      <stop offset="45%" stop-color="#090812"/>
      <stop offset="100%" stop-color="#0E0C1C"/>
    </linearGradient>

    <!-- Translucent Frosted Glass Card -->
    <linearGradient id="heroGlass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.025"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.01"/>
    </linearGradient>

    <!-- 1px Specular Apple Rim -->
    <linearGradient id="specularRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.5"/>
      <stop offset="25%" stop-color="#FFFFFF" stop-opacity="0.18"/>
      <stop offset="65%" stop-color="#9B5CFF" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0.35"/>
    </linearGradient>

    <!-- Velvet & Electric Light Orbs -->
    <radialGradient id="velvetOrb" cx="88%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#9B5CFF" stop-opacity="0.32"/>
      <stop offset="50%" stop-color="#9B5CFF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#9B5CFF" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="cyanOrb" cx="12%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#48A7FF" stop-opacity="0.22"/>
      <stop offset="50%" stop-color="#48A7FF" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Animated Light Sweep Gradient for VELVET Logotype -->
    <linearGradient id="animatedTitleSweep" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F2F3F7"/>
      <stop offset="35%" stop-color="#C8B5FF"/>
      <stop offset="50%" stop-color="#FFFFFF"/>
      <stop offset="65%" stop-color="#9B5CFF"/>
      <stop offset="100%" stop-color="#599BFF"/>
      <animate attributeName="x1" values="-100%;100%;-100%" dur="7s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="0%;200%;0%" dur="7s" repeatCount="indefinite"/>
    </linearGradient>

    <!-- Glass Chip Gradient -->
    <linearGradient id="glassChipBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02"/>
    </linearGradient>

    <linearGradient id="glassChipBorder" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#9B5CFF" stop-opacity="0.18"/>
    </linearGradient>

    <!-- Subtle Micro Dot Grid -->
    <pattern id="microDots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="0.75" fill="#32294A" opacity="0.35"/>
    </pattern>

    <!-- Drop Shadow -->
    <filter id="heroShadow" x="-2%" y="-5%" width="104%" height="115%">
      <feDropShadow dx="0" dy="14" stdDeviation="24" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <!-- Deep Obsidian Canvas Base -->
  <rect width="940" height="330" rx="22" fill="url(#heroBg)"/>
  
  <!-- Subtle Micro Grid Pattern -->
  <rect width="940" height="330" rx="22" fill="url(#microDots)"/>

  <!-- Ambient Light Orbs -->
  <rect width="940" height="330" rx="22" fill="url(#velvetOrb)"/>
  <rect width="940" height="330" rx="22" fill="url(#cyanOrb)"/>

  <!-- Japanese Editorial Katakana Watermark in Background -->
  <text x="640" y="165" fill="#C8B5FF" fill-opacity="0.04" font-family="-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Noto Sans JP', sans-serif" font-size="110" font-weight="900" letter-spacing="0.1em">ベルベット</text>

  <!-- Frosted Glass Liquid Card -->
  <rect x="12" y="12" width="916" height="306" rx="18" fill="url(#heroGlass)" filter="url(#heroShadow)"/>

  <!-- 1px Specular Apple Glass Rim Lighting -->
  <rect x="12" y="12" width="916" height="306" rx="18" fill="none" stroke="url(#specularRim)" stroke-width="1.2"/>

  <!-- Top Glass Highlight Refraction Line -->
  <line x1="44" y1="13" x2="896" y2="13" stroke="rgba(255,255,255,0.45)" stroke-width="1" stroke-linecap="round"/>

  <!-- Geometric Corner Crosshairs -->
  <path d="M 28 24 L 28 34 M 23 29 L 33 29" stroke="rgba(200,181,255,0.4)" stroke-width="1"/>
  <path d="M 912 24 L 912 34 M 907 29 L 917 29" stroke="rgba(200,181,255,0.4)" stroke-width="1"/>

  <!-- ================= TOP HEADER ELEMENTS ================= -->
  <!-- Identity Pill (Apple Glass) -->
  <g transform="translate(44, 38)">
    <rect x="0" y="0" width="270" height="28" rx="14" fill="url(#glassChipBg)" stroke="url(#glassChipBorder)" stroke-width="0.9"/>
    <line x1="14" y1="1" x2="256" y2="1" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>
    <text x="16" y="19" fill="#E2D4FF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="11.5" font-weight="700" letter-spacing="0.14em">ROHIT KANWAL · VELVET</text>
  </g>

  <!-- Engineering Status Pill with Breathing LED -->
  <g transform="translate(686, 38)">
    <rect x="0" y="0" width="210" height="28" rx="14" fill="url(#glassChipBg)" stroke="url(#glassChipBorder)" stroke-width="0.9"/>
    <line x1="14" y1="1" x2="196" y2="1" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>
    <!-- Pulsing Cyan LED -->
    <circle cx="16" cy="14" r="4" fill="#48A7FF">
      <animate attributeName="opacity" values="1;0.3;1" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="16" cy="14" r="7.5" fill="none" stroke="#48A7FF" stroke-width="0.8" opacity="0.4">
      <animate attributeName="r" values="5;9.5;5" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <text x="32" y="18.5" fill="#EDE8FF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="10.5" font-weight="600" letter-spacing="0.08em">OPEN FOR ENGINEERING</text>
  </g>

  <!-- ================= MAIN TYPOGRAPHY ================= -->
  <!-- Luxury Animated Headline "VELVET" -->
  <text x="44" y="148" fill="url(#animatedTitleSweep)" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Space Grotesk', Inter, sans-serif" font-size="70" font-weight="900" letter-spacing="0.08em">VELVET</text>

  <!-- Editorial Subhead -->
  <text x="46" y="184" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="16.5" font-weight="600" letter-spacing="0.02em">Creative Developer <tspan fill="#9B5CFF">·</tspan> Systems Builder <tspan fill="#48A7FF">·</tspan> Digital Creator</text>

  <!-- Tagline -->
  <text x="46" y="212" fill="#A4A0B8" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="14" font-weight="400" letter-spacing="0.01em">Building tactile 3D WebGL interfaces, low-latency Windows utilities in Rust &amp; real-time communities.</text>

  <!-- Coordinate Tag -->
  <text x="730" y="212" fill="#716D85" font-family="'Courier New', monospace" font-size="10" font-weight="600" letter-spacing="0.1em">// VELVET_SYS_067</text>

  <!-- ================= BOTTOM SPECIALIZATION PILLS ================= -->
  <g transform="translate(44, 252)">
    <!-- Pill 1: 3D WebGL -->
    <g transform="translate(0, 0)">
      <rect width="265" height="34" rx="11" fill="url(#glassChipBg)" stroke="url(#glassChipBorder)" stroke-width="0.9"/>
      <line x1="12" y1="1" x2="253" y2="1" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>
      <circle cx="16" cy="17" r="3.5" fill="#9B5CFF"/>
      <text x="30" y="21.5" fill="#F5F5FA" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="600">Three.js &amp; GPU Particle Shaders</text>
    </g>

    <!-- Pill 2: Rust & Tauri -->
    <g transform="translate(280, 0)">
      <rect width="280" height="34" rx="11" fill="url(#glassChipBg)" stroke="url(#glassChipBorder)" stroke-width="0.9"/>
      <line x1="12" y1="1" x2="268" y2="1" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>
      <circle cx="16" cy="17" r="3.5" fill="#48A7FF"/>
      <text x="30" y="21.5" fill="#F5F5FA" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="600">Low-Latency Windows &amp; Rust Suites</text>
    </g>

    <!-- Pill 3: Community Platforms -->
    <g transform="translate(575, 0)">
      <rect width="277" height="34" rx="11" fill="url(#glassChipBg)" stroke="url(#glassChipBorder)" stroke-width="0.9"/>
      <line x1="12" y1="1" x2="265" y2="1" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>
      <circle cx="16" cy="17" r="3.5" fill="#C8A7FF"/>
      <text x="30" y="21.5" fill="#F5F5FA" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="600">Real-Time Community Platforms</text>
    </g>
  </g>
</svg>`;
fs.writeFileSync(path.join(ASSETS_DIR, "velvet-banner.svg"), velvetHero, "utf8");
console.log("Generated velvet-banner.svg");

// 5. GENERATE STATS & LANGUAGES CARDS (RATE-LIMIT IMMUNE)
const statsCard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 180" width="455" height="180">
  <defs>
    <linearGradient id="stBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#141220"/>
      <stop offset="100%" stop-color="#0E0C18"/>
    </linearGradient>
    <linearGradient id="stRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.38"/>
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#9B5CFF" stop-opacity="0.3"/>
    </linearGradient>
    <radialGradient id="stGlow" cx="90%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#9B5CFF" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#9B5CFF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="455" height="180" rx="16" fill="url(#stBg)"/>
  <rect width="455" height="180" rx="16" fill="url(#stGlow)"/>
  <rect x="0.8" y="0.8" width="453.4" height="178.4" rx="15.2" fill="none" stroke="url(#stRim)" stroke-width="1"/>
  <line x1="16" y1="1.4" x2="439" y2="1.4" stroke="rgba(255,255,255,0.3)" stroke-width="0.8" stroke-linecap="round"/>

  <!-- Card Header -->
  <circle cx="24" cy="24" r="3.5" fill="#9B5CFF"/>
  <text x="36" y="28" fill="#C8B5FF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.12em">VELVET // GITHUB INSIGHTS</text>
  <line x1="20" y1="42" x2="435" y2="42" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Metric 1: Total Commits -->
  <g transform="translate(24, 66)">
    <text x="0" y="0" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">Total Commits</text>
    <text x="0" y="24" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="20" font-weight="800">22+</text>
  </g>

  <!-- Metric 2: Public Repositories -->
  <g transform="translate(160, 66)">
    <text x="0" y="0" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">Repositories</text>
    <text x="0" y="24" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="20" font-weight="800">7</text>
  </g>

  <!-- Metric 3: Contributions -->
  <g transform="translate(295, 66)">
    <text x="0" y="0" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">Contributions</text>
    <text x="0" y="24" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="20" font-weight="800">30+</text>
  </g>

  <!-- Metric 4: Platform Status -->
  <g transform="translate(24, 132)">
    <rect width="407" height="30" rx="8" fill="#1B182B" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
    <circle cx="16" cy="15" r="3.5" fill="#48A7FF"/>
    <text x="28" y="19" fill="#E2D4FF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="600">Active Engineer</text>
    <text x="145" y="19" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="400">· Verified Production Codebases on GitHub</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(ASSETS_DIR, "stats-card.svg"), statsCard, "utf8");

const languagesCard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 180" width="455" height="180">
  <defs>
    <linearGradient id="lgBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#141220"/>
      <stop offset="100%" stop-color="#0E0C18"/>
    </linearGradient>
    <linearGradient id="lgRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.38"/>
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0.3"/>
    </linearGradient>
    <radialGradient id="lgGlow" cx="10%" cy="85%" r="60%">
      <stop offset="0%" stop-color="#48A7FF" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="455" height="180" rx="16" fill="url(#lgBg)"/>
  <rect width="455" height="180" rx="16" fill="url(#lgGlow)"/>
  <rect x="0.8" y="0.8" width="453.4" height="178.4" rx="15.2" fill="none" stroke="url(#lgRim)" stroke-width="1"/>
  <line x1="16" y1="1.4" x2="439" y2="1.4" stroke="rgba(255,255,255,0.3)" stroke-width="0.8" stroke-linecap="round"/>

  <!-- Card Header -->
  <circle cx="24" cy="24" r="3.5" fill="#48A7FF"/>
  <text x="36" y="28" fill="#C8B5FF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.12em">VERIFIED // CODEBASE LANGUAGES</text>
  <line x1="20" y1="42" x2="435" y2="42" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Multi-segment Progress Bar -->
  <g transform="translate(24, 64)">
    <rect width="407" height="10" rx="5" fill="#201C30"/>
    <!-- TypeScript: 97.4% (396px) -->
    <rect width="396" height="10" rx="5" fill="#3178C6"/>
    <!-- CSS: 1.8% (7px) -->
    <rect x="397" width="6" height="10" rx="2" fill="#563D7C"/>
    <!-- JS: 0.8% (4px) -->
    <rect x="404" width="3" height="10" rx="1.5" fill="#F7DF1E"/>
  </g>

  <!-- Legend Items -->
  <g transform="translate(24, 102)">
    <!-- TypeScript -->
    <circle cx="6" cy="6" r="5" fill="#3178C6"/>
    <text x="18" y="10" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="600">TypeScript</text>
    <text x="96" y="10" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">97.4%</text>

    <!-- CSS -->
    <circle cx="166" cy="6" r="5" fill="#563D7C"/>
    <text x="178" y="10" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="600">CSS</text>
    <text x="212" y="10" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">1.8%</text>

    <!-- JavaScript -->
    <circle cx="280" cy="6" r="5" fill="#F7DF1E"/>
    <text x="292" y="10" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="12" font-weight="600">JavaScript</text>
    <text x="362" y="10" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="500">0.8%</text>
  </g>

  <g transform="translate(24, 138)">
    <text x="0" y="14" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11" font-weight="400">Extracted from 894+ KB of verified production source code</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(ASSETS_DIR, "languages-card.svg"), languagesCard, "utf8");
console.log("Generated stats and languages cards");

// 6. GENERATE ANIMATED CLOSING FOOTER
const velvetFooter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 100" width="100%" height="100%">
  <defs>
    <linearGradient id="ftBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#12101E" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#090810" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="ftRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#9B5CFF" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="ftBeam" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9B5CFF" stop-opacity="0"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#48A7FF" stop-opacity="0"/>
      <animate attributeName="x1" values="-100%;100%;-100%" dur="8s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="0%;200%;0%" dur="8s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>

  <rect width="940" height="100" rx="16" fill="url(#ftBg)"/>
  <rect x="0.8" y="0.8" width="938.4" height="98.4" rx="15.2" fill="none" stroke="url(#ftRim)" stroke-width="1"/>
  <line x1="20" y1="1.4" x2="920" y2="1.4" stroke="url(#ftBeam)" stroke-width="1" stroke-linecap="round"/>

  <!-- Center Signature Text -->
  <text x="470" y="44" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="14" font-weight="700" letter-spacing="0.04em" text-anchor="middle">Crafted with precision by <tspan fill="#C8B5FF">Rohit Kanwal</tspan> (Velvet)</text>
  
  <text x="470" y="68" fill="#8E8B9E" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Inter, sans-serif" font-size="11.5" font-weight="500" letter-spacing="0.06em" text-anchor="middle">Obsidian Glass Architecture · Kinetic WebGL · Low-Latency Systems</text>

  <!-- Side Aesthetic Pips -->
  <circle cx="40" cy="50" r="3" fill="#9B5CFF" opacity="0.6"/>
  <circle cx="900" cy="50" r="3" fill="#48A7FF" opacity="0.6"/>
</svg>`;
fs.writeFileSync(path.join(ASSETS_DIR, "velvet-footer.svg"), velvetFooter, "utf8");
console.log("Generated velvet-footer.svg");

console.log("All assets generated successfully!");
