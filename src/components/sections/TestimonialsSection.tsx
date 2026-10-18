import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialPostProps {
  name: string;
  handle: string;
  avatar: string;
  text: string;
  time: string;
  image?: string;
}

function SocialPost({
  name,
  handle,
  avatar,
  text,
  time,
  image,
}: SocialPostProps) {
  return (
    <article className="mb-4 break-inside-avoid rounded-[10px] border border-gray-200/80 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-start gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
          <img
            src={avatar}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="truncate text-xs text-gray-500">{handle}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
      {image && (
        <div className="relative mt-3 aspect-video overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}
      <div className="mt-3 flex items-center gap-5 border-t border-gray-100 pt-3 text-gray-400">
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs hover:text-[#F26522]"
        >
          <MessageCircle className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs hover:text-[#F26522]"
        >
          <Repeat2 className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs hover:text-[#F26522]"
        >
          <Heart className="h-3.5 w-3.5" />
        </button>
        <span className="ml-auto text-[10px] text-gray-400">{time}</span>
      </div>
    </article>
  );
}

const posts: SocialPostProps[] = [
  {
    name: "Adaeze Okonkwo",
    handle: "@adaezebuilds",
    avatar: "/testimonial-1.png",
    text: "Last night’s episode had me on the edge of my seat. The storytelling, the tension, the lessons — this is what business television should feel like.",
    time: "2h",
  },
  {
    name: "Jonah Mensah",
    handle: "@jonahmensah",
    avatar: "/testimonial-1.png",
    text: "As a founder, watching the process normalized the nerves. If they can stand in that room, we can stand in ours.",
    time: "5h",
    image: "/show-3.png",
  },
  {
    name: "Elena Marquez",
    handle: "@elenaonbrands",
    avatar: "/testimonial-1.png",
    text: "The Lions don’t just invest — they challenge assumptions. That’s the part that hits home every single week.",
    time: "1d",
  },
  {
    name: "Thomas Reed",
    handle: "@treedmedia",
    avatar: "/testimonial-1.png",
    text: "From production quality to the respect for founders, Lions Den continues to raise the bar. Grateful this show exists.",
    time: "1d",
    image: "/episode-1.png",
  },
  {
    name: "Aisha Bello",
    handle: "@aishabello_",
    avatar: "/testimonial-1.png",
    text: "The community around this show is unmatched. Every episode sparks a real conversation in our office the next day.",
    time: "2d",
  },
  {
    name: "David Chen",
    handle: "@davidcbuilds",
    avatar: "/testimonial-1.png",
    text: "If you care about entrepreneurship, watch this with a notebook. You’ll fill it faster than you expect.",
    time: "3d",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2
            className={cn(
              "font-playfair mb-3 text-3xl font-semibold tracking-tight text-[#0B1B32] sm:text-4xl",
            )}
          >
            What People Are Saying
          </h2>
          <p className="mx-auto max-w-lg text-sm text-gray-500">
            Hear from our audience and participants about their experience.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {posts.map((p) => (
            <SocialPost key={`${p.handle}-${p.time}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
