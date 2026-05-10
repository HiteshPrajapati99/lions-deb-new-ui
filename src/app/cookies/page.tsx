import type { Metadata } from "next";
import LegalPageChrome from "@/components/legal/LegalPageChrome";
import CookiesPolicyContent from "@/components/legal/CookiesPolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Lions Den",
};

export default function CookiesPolicyPage() {
  return (
    <LegalPageChrome>
      <CookiesPolicyContent />
    </LegalPageChrome>
  );
}
