import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { fetchLionsDenRecentVideos } from "../src/lib/youtube-feed";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../public/youtube-feed.json");

async function main() {
  try {
    const videos = await fetchLionsDenRecentVideos(24);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, JSON.stringify(videos, null, 2));
    console.log(`Wrote ${videos.length} videos to public/youtube-feed.json`);
  } catch (e) {
    console.warn("youtube-feed generate failed:", e);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, "[]");
  }
}

void main();
