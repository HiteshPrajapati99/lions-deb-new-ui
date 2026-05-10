import {
  privacyPolicyBeforeBreak,
  privacyPolicyUrlLine,
} from "./privacy-policy-parts";

export default function PrivacyPolicyContent() {
  return (
    <div className="pb-12 pt-8 md:py-12">
      <h1 className="mb-2 text-center text-[42px] font-bold text-[#F5BD1E] md:mb-0 md:text-[64px]">
        PRIVACY <span style={{ color: "#fff" }}>POLICY</span>
      </h1>
      <div className="mt-8 text-justify text-lg leading-6 text-white md:mt-0 md:pt-8">
        <p>
          {privacyPolicyBeforeBreak}
          <br />
          {privacyPolicyUrlLine}
        </p>
      </div>
    </div>
  );
}
