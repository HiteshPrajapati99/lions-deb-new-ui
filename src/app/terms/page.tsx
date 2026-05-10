import type { Metadata } from "next";
import LegalPageChrome from "@/components/legal/LegalPageChrome";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions | Lions Den",
};

export default function TermsPage() {
  return (
    <LegalPageChrome>
      <TermsContent />
    </LegalPageChrome>
  );
}
