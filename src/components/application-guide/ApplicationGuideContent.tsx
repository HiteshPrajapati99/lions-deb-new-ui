function SectionDivider() {
  return <hr className="my-10 border-[#2a2a2a]" aria-hidden />;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/90 marker:text-[#C5A059]">
      {items.map((item, i) => (
        <li key={`${i}-${item}`} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ApplicationGuideContent() {
  return (
    <article className="pb-12 pt-8 md:py-12">
      <header className="text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#C5A059]">
          Application Guide
        </p>
        <h1 className="mb-6 text-balance text-[32px] font-bold leading-tight text-[#F5BD1E] sm:text-[40px] md:text-[52px]">
          The Lions&apos; Den
        </h1>
      </header>

      <div className="mx-auto max-w-3xl text-justify text-base leading-relaxed text-white/90 md:text-lg">
        <p className="mb-4">Welcome to The Lions&apos; Den.</p>
        <p className="mb-4">
          This guide is designed to help founders complete their application
          smoothly and increase their chances of moving forward in the selection
          process.
        </p>
        <p>
          Before filling out the application form, please read all the
          instructions carefully.
        </p>

        <SectionDivider />

        <h2 className="mb-4 text-left text-xl font-semibold text-white md:text-2xl">
          About The Application Process
        </h2>
        <p className="mb-4">
          The application form is the first step towards getting shortlisted for
          The Lions&apos; Den.
        </p>
        <p className="mb-3">
          Our evaluation team carefully reviews every application based on
          multiple factors such as:
        </p>
        <BulletList
          items={[
            "Business idea and uniqueness",
            "Market potential",
            "Revenue and traction",
            "Founder vision and clarity",
            "Scalability of the business",
            "Financial understanding",
            "Execution capability",
          ]}
        />
        <p className="mt-4">
          Please ensure that all information submitted by you is accurate,
          updated, and verifiable.
        </p>

        <SectionDivider />

        <h2 className="mb-4 text-left text-xl font-semibold text-white md:text-2xl">
          Selection Process
        </h2>
        <p className="mb-6">There are 4 stages in the selection process.</p>

        <section className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-[#F5BD1E]">
            Stage 1 – Application Review
          </h3>
          <p>
            Your application form and submitted details will be evaluated by our
            internal screening team.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-[#F5BD1E]">
            Stage 2 – Evaluation Round
          </h3>
          <p>
            Shortlisted startups may be contacted for additional discussions,
            clarifications, or business evaluations.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-[#F5BD1E]">
            Stage 3 – Pitch & Verification Round
          </h3>
          <p className="mb-3">
            Selected founders may be asked to present their startup through:
          </p>
          <BulletList
            items={[
              "Online pitch meetings",
              "Recorded video pitches",
              "Additional documentation",
              "Business proof and verification",
            ]}
          />
        </section>

        <section className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-[#F5BD1E]">
            Stage 4 – Final Selection
          </h3>
          <p>
            Final shortlisted startups will move ahead for the final round and
            further onboarding process.
          </p>
        </section>
        <p>
          Please note that progression to the next stage is based entirely on
          internal evaluation and selection criteria.
        </p>

        <SectionDivider />

        <h2 className="mb-6 text-left text-xl font-semibold text-white md:text-2xl">
          Important Guidelines Before Applying
        </h2>

        <section className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            1. Fill Only Genuine Information
          </h3>
          <p className="mb-4">
            Please make sure that all numbers, business metrics, revenue
            figures, customer data, achievements, traction, and claims mentioned
            in the application are genuine and accurate.
          </p>
          <p>
            Providing misleading, manipulated, or fake information may lead to
            immediate disqualification at any stage of the process.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            2. Verification May Be Required
          </h3>
          <p className="mb-3">
            At any stage of the selection process, our team may ask you to
            verify the details submitted in your application. This may include:
          </p>
          <BulletList
            items={[
              "Revenue proof",
              "GST or company documents",
              "Social media or website verification",
              "Customer or order data",
              "Product proof",
              "Financial statements",
              "Founder identity verification",
              "Business registration documents",
            ]}
          />
          <p className="mt-4">
            Applicants are expected to cooperate during the verification
            process.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            3. Pitch Video May Be Required
          </h3>
          <p className="mb-3">
            Some applicants may be required to create and submit a video pitch
            as part of the evaluation process. The pitch video may include:
          </p>
          <BulletList
            items={[
              "Founder introduction",
              "Problem statement",
              "Business solution",
              "Product demonstration",
              "Revenue model",
              "Market opportunity",
              "Vision and growth plans",
            ]}
          />
          <p className="mt-4">
            Detailed instructions regarding the pitch video will be shared with
            shortlisted applicants whenever required.
          </p>
        </section>

        <SectionDivider />

        <h2 className="mb-4 text-left text-xl font-semibold text-white md:text-2xl">
          Tips For Filling The Application Form
        </h2>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-[#F5BD1E]">
              Be Clear & Specific
            </dt>
            <dd className="mt-2 pl-0">
              Avoid vague answers. Clearly explain your startup, product,
              customers, and business model.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#F5BD1E]">Use Real Numbers</dt>
            <dd className="mt-2 pl-0">
              Mention actual revenue, users, orders, growth numbers, and
              traction wherever applicable.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#F5BD1E]">
              Explain Your Vision
            </dt>
            <dd className="mt-2 pl-0">
              Help the evaluation team understand why your startup matters and
              what problem it solves.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#F5BD1E]">
              Keep Your Pitch Crisp
            </dt>
            <dd className="mt-2 pl-0">
              Short, simple, and direct answers create better impact than overly
              complicated explanations.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#F5BD1E]">
              Double Check Before Submitting
            </dt>
            <dd className="mt-2 pl-0">
              Review all details carefully before final submission.
            </dd>
          </div>
        </dl>

        <SectionDivider />

        <h2 className="mb-4 text-left text-xl font-semibold text-white md:text-2xl">
          Documents & Information You May Need
        </h2>
        <p className="mb-3">
          Depending on your startup stage, you may be asked to provide:
        </p>
        <BulletList
          items={[
            "Founder details",
            "Startup registration details",
            "Website or social media links",
            "Revenue or traction data",
            "Product images or demo links",
            "Pitch deck",
            "Financial information",
            "Business model details",
            "Customer information",
            "Investment details (if any)",
          ]}
        />

        <SectionDivider />

        <h2 className="mb-4 text-left text-xl font-semibold text-white md:text-2xl">
          Disclaimer
        </h2>
        <p className="mb-4">
          Submission of an application does not guarantee selection for the next
          round or participation in the show.
        </p>
        <p className="mb-3">The Lions&apos; Den reserves the right to:</p>
        <BulletList
          items={[
            "Approve or reject any application",
            "Request additional information",
            "Conduct verification checks",
            "Modify the evaluation process whenever required",
          ]}
        />
        <p className="mt-4">
          All decisions taken by the evaluation team shall be final.
        </p>

        <SectionDivider />

        <h2 className="mb-4 text-left text-xl font-semibold text-white md:text-2xl">
          Final Note
        </h2>
        <p className="mb-4">
          We encourage founders to apply with honesty, clarity, and confidence.
          The Lions&apos; Den is looking for passionate entrepreneurs with
          strong ideas, real execution, and long-term vision.
        </p>
        <p>We wish you the very best for your application journey.</p>
      </div>

      <figure className="mx-auto mt-14 max-w-4xl px-4">
        <img
          src="/app-guide.png"
          alt="Application guide"
          className="w-full rounded-lg border border-[#2a2a2a] object-cover shadow-lg"
        />
      </figure>
    </article>
  );
}
