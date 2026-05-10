import { Archivo } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export default function LegalPageChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={`flex-1 bg-[#121212] ${archivo.className}`}>
        <div className="mx-auto max-w-7xl px-8 py-16 md:px-12 md:py-20 lg:px-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
