const fs = require("fs");
const path = require("path");

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkDir(full);
    } else if (f.endsWith(".svg")) {
      const content = fs.readFileSync(full, "utf8");
      if (!content.startsWith("<svg") || !content.trim().endsWith("</svg>")) {
        console.error("INVALID SVG:", full);
        process.exit(1);
      } else {
        console.log(`OK: ${f} (${content.length} bytes)`);
      }
    }
  }
}

checkDir("C:\\Users\\obito\\velvet-workspace\\Velvettt-67\\assets");
console.log("All SVGs validated successfully!");
