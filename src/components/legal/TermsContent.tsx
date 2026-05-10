import TermsBody from "./TermsBody";

export default function TermsContent() {
  return (
    <div className="overflow-hidden px-12 py-16 md:p-8">
      <div className="py-12">
        <h1 className="mb-2 text-center text-[32px] font-bold text-[#F5BD1E] md:mb-0 md:text-[42px]">
          TERMS AND CONDITIONS
          <span style={{ color: "#fff", marginLeft: "10px" }}>
            & CANCELLATION AND REFUND POLICY
          </span>
        </h1>
        <TermsBody />
      </div>
    </div>
  );
}
