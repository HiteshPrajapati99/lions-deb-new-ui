import articleImg from "@/assets/press/article.jpeg";
import deepakImg from "@/assets/press/Deepak.jpeg";
import gauravImg from "@/assets/press/Gaurav.jpeg";
import jayImg from "@/assets/press/Jay.jpeg";
import poonamImg from "@/assets/press/Poonam.jpeg";
import vinitaImg from "@/assets/press/Vinita.jpeg";

export type PressArticle = {
  id: string;
  image: string;
  title: string;
  /** Body copy shown under the title (sans trailing “Read More” ellipsis hints). */
  description: string;
  href: string;
};

export const pressArticles: PressArticle[] = [
  {
    id: "spot-funding-reality-show",
    image: articleImg,
    title:
      "Tired of Failing to Secure Funds, Entrepreneurs Launch Their Own Spot Funding Reality Show Named The Lions' Den",
    description:
      "“After repeatedly getting ghosted by the investor following deal commitment, this brother duo from Gujarat Launch \"The Lions' Den\" spot Funding Reality Show set to release on JioCinema OTT.” In an exclusive interview with Mid-day, Savan Sanandiya, the Founder of The Lions' Den.",
    href: "https://news.abplive.com/brand-wire/the-lions-den-roars-to-life-promising-a-fair-play-in-the-jungle-of-startup-funding-1689755",
  },
  {
    id: "jay-ukani-ban-labs",
    image: jayImg,
    title:
      "The Visionary Transforming Ban Labs and Shaping the Future of Business joins The Lions' Den",
    description:
      "Rajkot (Gujarat) [India], May 9: At the youthful age of 29, Jay Ukani has already made an indelible mark as the Director of Ban Labs. His leadership is characterised by a bold vision that has seen the company expand from its Ayurvedic heritage to a diverse array of sectors, including Nutraceuticals, Health & Hygiene care, Personal care and fragrances, Stationery, and Apparel.",
    href: "https://m.dailyhunt.in/news/india/english/loktej+english-epaper-loktejen/the+visionary+transforming+ban+labs+and+shaping+the+future+of+business+joins+the+lions+den-newsid-n607152346?sm=Y",
  },
  {
    id: "poonam-gupta-investor",
    image: poonamImg,
    title: "Sustainability Meets Success: Poonam Gupta Joins The Lion's Den as an Investor",
    description:
      "Her focus on recycling and waste reduction in the paper industry demonstrates her dedication to environmental stewardship. In an exciting development for aspiring entrepreneurs and eco-conscious innovators, renowned businesswoman Dr. Poonam Gupta is set to join The Lion's Den Show as its newest investor. With her remarkable journey from a £1000 startup to a £100 million international empire, Dr. Gupta brings a wealth of experience, a passion for sustainable business practices, and a deep commitment to philanthropy to the popular reality show.",
    href: "https://news.abplive.com/brand-wire/sustainability-meets-success-poonam-gupta-joins-the-lion-s-den-as-an-investor-1706602",
  },
  {
    id: "gaurav-singhvi-democratise",
    image: gauravImg,
    title:
      "Serial Investor Gaurav Singhvi Joins The Lion's Den Show, Aims to Democratise Entrepreneurship",
    description:
      "With his extensive experience in investing and nurturing startups, Mr. Singhvi brings a fresh perspective. New Delhi (India) July 30: India's startup ecosystem is rapidly growing and has long needed a catalyst to democratise entrepreneurship across the nation's diverse landscape. The concentration of opportunities in major metropolitan areas has left a wealth of talent and innovation untapped in smaller cities and towns.",
    href: "https://news.abplive.com/brand-wire/serial-investor-gaurav-singhvi-joins-the-lions-den-show-aims-to-democratise-entrepreneurship-1706906",
  },
  {
    id: "vinita-surana",
    image: vinitaImg,
    title: "Vinita Surana Roars Into The Lion’s Den: A New Chapter In Startup Investing",
    description:
      "Vinita’s investment strategy blends an analytical approach with gut instinct, focusing on three key factors: the founder’s vibe, product scalability, and total addressable market. India’s most thrilling business reality show, “The Lion’s Den,” gains a powerhouse with the arrival of Ms. Vinita Surana on its panel of esteemed investors, popularly known as the Lions. A formidable force in India’s entrepreneurial landscape, Vinita brings her wealth of experience as a seasoned investor and serial entrepreneur to the den.",
    href: "https://news.abplive.com/brand-wire/vinita-surana-roars-into-the-lion-s-den-a-new-chapter-in-startup-investing-1714111",
  },
  {
    id: "dipak-sanghavi",
    image: deepakImg,
    title:
      "The Lions' Den Show Welcomes Dipak Sanghavi as the Investor to Shape the Future of Start-Ups",
    description:
      "Only 2 percent of start-ups survive, and less than 0.2 percent scale up Mumbai (Maharashtra) [India], May 17: When the Lions' Den, an upcoming reality show, was conceptualising, the key question they had to answer was, \"What problem are we trying to solve?\" The answer to this question would define the design of the show, the method of evaluating start-ups, and most importantly, the Lions they would partner with, who will define the success of the entire effort in the mid-to-long-term.",
    href: "https://uniindia.net/the-lions-39-den-show-welcomes-dipak-sanghavi-as-the-investor-to-shape-the-future-of-start-45-ups/pnn/news/3201449.html",
  },
];
