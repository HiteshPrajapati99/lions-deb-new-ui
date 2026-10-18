import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LegalPageChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#121212] font-archivo">
        <div className="mx-auto max-w-7xl px-8 py-16 md:px-12 md:py-20 lg:px-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
