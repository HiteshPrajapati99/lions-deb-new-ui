/** Official uploads feed for @thelionsdenshow — resolves to recent videos + Shorts. */
export const LIONS_DEN_CHANNEL_ID = "UCmcl6QCzL3VXAwtFFJ3l7ng";

export type YoutubeFeedVideo = {
  videoId: string;
  title: string;
  publishedAt: string;
  description: string;
  watchUrl: string;
  isShort: boolean;
};

function decodeBasicEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function truncate(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

/** Parse every `<entry>` in the channel RSS (typically up to ~15 items). */
function parseFeedEntries(xml: string): YoutubeFeedVideo[] {
  const blocks = xml.split("<entry>");
  const out: YoutubeFeedVideo[] = [];

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const videoId = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    if (!videoId) continue;

    const titleRaw =
      block.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? "Untitled";
    const published = block.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
    const alternate =
      block.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/)?.[1] ??
      block.match(/<link[^>]*href="([^"]+)"[^>]*rel="alternate"/)?.[1] ??
      "";
    const isShort = alternate.includes("/shorts/");
    const watchUrl = isShort
      ? alternate || `https://www.youtube.com/watch?v=${videoId}`
      : `https://www.youtube.com/watch?v=${videoId}`;
    const descRaw =
      block.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ??
      "";

    out.push({
      videoId,
      title: decodeBasicEntities(titleRaw),
      publishedAt: published,
      description: truncate(decodeBasicEntities(descRaw), 160),
      watchUrl,
      isShort,
    });
  }

  return out;
}

export type FetchLionsDenVideosOptions = {
  /** When true, skip RSS items whose URL is under `/shorts/` (long-form only). */
  excludeShorts?: boolean;
};

export function sortVideosShortsLast(
  list: YoutubeFeedVideo[],
): YoutubeFeedVideo[] {
  return [...list].sort((a, b) => {
    if (a.isShort && !b.isShort) return 1;
    if (!a.isShort && b.isShort) return -1;
    return 0;
  });
}

export function pickFeaturedVideos(
  list: YoutubeFeedVideo[],
  limit: number,
): YoutubeFeedVideo[] {
  const sorted = sortVideosShortsLast(list);
  // if (options?.excludeShorts) {
  //   sorted = sorted.filter((v) => !v.isShort);
  // }
  return sorted.slice(0, limit);
}

/** Used at build time (Node) to refresh `public/youtube-feed.json`. */
export async function fetchLionsDenRecentVideos(
  limit = 8,
): Promise<YoutubeFeedVideo[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${LIONS_DEN_CHANNEL_ID}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; LionsDenWebsite/1.0)",
    },
  });

  if (!res.ok) return [];

  const xml = await res.text();
  const list = parseFeedEntries(xml);

  const sortedList = sortVideosShortsLast(list);
  return sortedList.slice(0, limit);
}
