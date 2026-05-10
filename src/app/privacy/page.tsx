import type { Metadata } from "next";
import LegalPageChrome from "@/components/legal/LegalPageChrome";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Lions Den",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageChrome>
      <PrivacyPolicyContent />
    </LegalPageChrome>
  );
}
