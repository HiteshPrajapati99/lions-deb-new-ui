import type { Metadata } from "next";
import LegalPageChrome from "@/components/legal/LegalPageChrome";
import DisclaimerContent from "@/components/legal/DisclaimerContent";

export const metadata: Metadata = {
  title: "Disclaimer | Lions Den",
};

export default function DisclaimerPage() {
  return (
    <LegalPageChrome>
      <DisclaimerContent />
    </LegalPageChrome>
  );
}
