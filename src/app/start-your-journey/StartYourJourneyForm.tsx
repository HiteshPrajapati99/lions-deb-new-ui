"use client";

import * as React from "react";
import axios from "axios";
import {
  Controller,
  useForm,
  type Control,
  type FieldErrors,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import {
  CATEGORY_OPTIONS,
  COMPANY_TYPE_OPTIONS,
  CURRENT_PHASE_OPTIONS,
  CURRENT_STAGE_OPTIONS,
  FORM_SUBMIT_URL,
  STATE_OPTIONS,
  YES_NO_OPTIONS,
  formatCompanyBeginForApi,
} from "./constants";
import { startJourneySchema, type StartJourneyFormValues } from "./schema";

type FormSubmitEnvelope = {
  s?: unknown;
  m?: string;
  r?: { order_id: string | number; amount: string | number };
};

/** Minimal dark-surface styling for shadcn inputs on the navy gradient page */
const inp = cn(
  "h-10 w-full rounded-md border-white/15 bg-white/[0.06] px-3 text-sm text-white shadow-none",
  "placeholder:text-white/35",
  "focus-visible:border-[#f5a623]/55 focus-visible:ring-[#f5a623]/25",
  "aria-invalid:border-red-400/60 aria-invalid:ring-red-400/15",
);

const txt = cn(
  "w-full min-h-[7.5rem] resize-y rounded-md border-white/15 bg-white/[0.06] px-3 py-2.5 text-sm text-white shadow-none",
  "placeholder:text-white/35",
  "focus-visible:border-[#f5a623]/55 focus-visible:ring-[#f5a623]/25",
  "aria-invalid:border-red-400/60 aria-invalid:ring-red-400/15",
);

const sel = cn(
  "min-h-10 h-full w-full min-w-0 justify-between rounded-md border-white/15 bg-white/[0.06]",
  "text-sm text-white shadow-none",
  "focus-visible:border-[#f5a623]/55 focus-visible:ring-[#f5a623]/25",
  "aria-invalid:border-red-400/60 aria-invalid:ring-red-400/15",
  "[&_[data-slot=select-value]]:text-white [&_[data-slot=select-value][data-placeholder]]:text-white/35",
  "[&_svg]:text-white/55",
);

const dropList = cn(
  "max-h-[min(18rem,var(--available-height))] overflow-y-auto border-white/15 bg-[#162a42] text-white shadow-lg ring-1 ring-white/15",
);

const dropItem = "";

const labelCls = "text-[13px] font-medium tracking-wide text-white/75";

const fieldRoot =
  "gap-1.5 [&_[data-slot=field-error]]:text-[13px] [&_[data-slot=field-error]]:text-red-400/95";

const fileInp = cn(
  "cursor-pointer rounded-md border border-dashed border-white/20 bg-white/[0.04]",
  "px-3 pt-2 text-xs text-white/70 file:mr-3 file:cursor-pointer file:rounded file:border-0",
  "file:bg-white/15 file:px-2.5 file:py-1 file:text-xs file:text-white file:font-medium",
  "focus-visible:border-[#f5a623]/50 focus-visible:ring-[#f5a623]/20",
  "aria-invalid:border-red-400/55",
);

const defaultValuesLegacy: Omit<
  StartJourneyFormValues,
  "pitch_deck" | "product_image" | "refral_code"
> & {
  refral_code?: string;
  pitch_deck?: File;
  product_image?: File;
} = {
  email: "",
  full_name: "",
  brand_name: "",
  entity_name: "",
  company_address: "",
  gst_no: "",
  state: "",
  phone_no: "",
  website: "",
  desc: "",
  comany_begin: "",
  business_dese: "",
  category: "",
  currunt_phase: "",
  currunt_state: "",
  company_type: "",
  ip_rights: "",
  investment_seeking: "",
  eqt_exchnage: "",
  valuation_proposing: "",
  three_year_revenues: "",
  monthly_revenue: "",
  past_rasied_fund: "",
  currunt_eqt: "",
  incubated: "",
  incubation_centre_name: "",
  part_of_any: "",
  video_link_desc: "",
  refral_code: "",
};

export function StartYourJourneyForm({ className }: { className?: string }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<StartJourneyFormValues>({
    resolver: zodResolver(startJourneySchema),
    mode: "onChange",
    defaultValues: defaultValuesLegacy,
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  async function submitApplication(val: StartJourneyFormValues) {
    const f = new FormData();

    f.append("email", val.email);
    f.append("entrepreneur_name", val.full_name);
    f.append("brand_name", val.brand_name);
    f.append("entity_name", val.entity_name);
    f.append("company_address", val.company_address);
    f.append("gst_no", val.gst_no);
    f.append("State", val.state);
    f.append("Phone_Number", val.phone_no);
    f.append("Website", val.website);
    f.append("brief_about_founders", val.business_dese);
    f.append("company_begin_time", formatCompanyBeginForApi(val.comany_begin));
    f.append("Business_Description", val.desc);
    f.append("category", val.category);
    f.append("current_phase", val.currunt_phase);
    f.append("current_stage", val.currunt_state);
    f.append("company_type", val.company_type);
    f.append("ip_rights", val.ip_rights);
    f.append("investment_seeking", val.investment_seeking);
    f.append("equity_exchange_percentage", val.eqt_exchnage);
    f.append("valuation_proposal", val.valuation_proposing);
    f.append("revenues", val.three_year_revenues);
    f.append("monthly_revenue", val.monthly_revenue);
    f.append("past_fund_raised", val.past_rasied_fund);
    f.append("current_equity_structure", val.currunt_eqt);
    f.append("incubated", val.incubated);
    f.append("incubation_centre_name", val.incubation_centre_name);
    f.append("funding_tvshow", val.part_of_any);
    f.append("link_of_video", val.video_link_desc);
    f.append("pitch_deck", val.pitch_deck);
    const product = val.product_image;
    f.append("product_photo", product instanceof File ? product : "");
    // Legacy site used `null` here (non‑standard FormData); keep equivalent empty part.
    f.append("payment_receipt", "");
    f.append("refral_code", val.refral_code ?? "");

    try {
      const { data } = await axios.post<FormSubmitEnvelope>(FORM_SUBMIT_URL, f);

      if (data?.s) {
        const orderId = data.r?.order_id;
        const amount = data.r?.amount;
        if (orderId != null && amount != null) {
          window.open(
            `https://thelionsden.co.in/payment/dataForm.php?order_id=${orderId}&amount=${amount}`,
          );
        }
      } else {
        toast.error(
          typeof data?.m === "string" ? data.m : "Submission failed.",
        );
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  const err = errors;

  return (
    <div className={cn("space-y-10", className)}>
      <div className="mx-auto text-center text-white">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          APPLICATION FORM
        </h1>
        <p className="mt-5 text-lg font-semibold text-brand-gold">
          BENEFITS OF APPLYING AND ADVANCING IN THE PROCESS
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-left text-sm leading-relaxed text-white/90 md:text-base">
          <li>
            Mentorship ,Curation &amp; Guidance for Raising Funds by Startup
            Expert Team
          </li>
          <li>
            Rigorous Financial Due Dilligence and Pre-screening by Finance
            Expert Team.
          </li>
          <li>
            Very Good Chance for an Exposure by Appearing on The Lions&apos; Den
            Season 1
          </li>
        </ul>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-10 h-px w-full bg-white/12" aria-hidden />

        <form
          className="space-y-10 [color-scheme:dark]"
          onSubmit={(e) => {
            void handleSubmit(submitApplication)(e);
          }}
          noValidate
        >
          <header className="space-y-2">
            <h2 className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
              Apply
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/55">
              Required fields marked by validation after you interact.
              Successful submit opens payment in a new tab.
            </p>
          </header>

          <div className="space-y-8">
            <FormTwoCol>
              <TextFieldRow
                name="email"
                label="Email"
                placeholder="Enter Your Email"
                type="email"
                errors={err}
                registerReturn={register("email")}
              />
              <TextFieldRow
                name="full_name"
                label="Full Name"
                placeholder="Full Name Of The Enterepreneur"
                errors={err}
                registerReturn={register("full_name")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <TextFieldRow
                name="brand_name"
                label="Brand Name"
                placeholder="Enter Your Brand Name"
                errors={err}
                registerReturn={register("brand_name")}
              />
              <TextFieldRow
                name="entity_name"
                label="Entity Name"
                placeholder="Entity Name (Name Of The Registered Company)"
                errors={err}
                registerReturn={register("entity_name")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <TextFieldRow
                name="company_address"
                label="Company Address"
                placeholder="Enter Company Address"
                errors={err}
                registerReturn={register("company_address")}
              />
              <TextFieldRow
                name="gst_no"
                label="GST No"
                placeholder="Enter Your GST Number"
                errors={err}
                registerReturn={register("gst_no")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="state"
                label="State"
                placeholder="Select state"
                options={STATE_OPTIONS.map((s) => ({ name: s, value: s }))}
                control={control}
              />
              <TextFieldRow
                name="phone_no"
                label="Phone Number"
                placeholder="Phone Number"
                errors={err}
                registerReturn={register("phone_no")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <TextFieldRow
                name="website"
                label="Website"
                placeholder="Website"
                errors={err}
                registerReturn={register("website")}
              />
              <Controller
                name="comany_begin"
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={!!fieldState.error}
                    className={fieldRoot}
                  >
                    <FieldLabel htmlFor="comany_begin" className={labelCls}>
                      Company Begin
                    </FieldLabel>
                    <Input
                      {...field}
                      id="comany_begin"
                      type="date"
                      value={typeof field.value === "string" ? field.value : ""}
                      aria-invalid={!!fieldState.error}
                      className={cn(inp, "text-white [color-scheme:dark]")}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
            </FormTwoCol>

            <FormTwoCol className="items-start">
              <TextareaFieldRow
                name="business_dese"
                label="Business Discription"
                placeholder="Business Discription"
                rows={5}
                errors={err}
                registerReturn={register("business_dese")}
              />
              <TextareaFieldRow
                name="desc"
                label="Founder brief"
                placeholder="Please provide a brief profile(s) about the founder(s) including background, roles, qualifications, experiences, passion, interests, etc."
                rows={5}
                errors={err}
                registerReturn={register("desc")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="category"
                label="Category"
                placeholder="Select category"
                control={control}
                options={[...CATEGORY_OPTIONS]}
              />
              <RhfSelectRow
                name="currunt_phase"
                label="Select Currunt Phase"
                placeholder="Current phase"
                control={control}
                options={[...CURRENT_PHASE_OPTIONS]}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="currunt_state"
                label="Currunt Stage"
                placeholder="Current stage"
                control={control}
                options={[...CURRENT_STAGE_OPTIONS]}
              />
              <RhfSelectRow
                name="company_type"
                label="Company Type"
                placeholder="Company type"
                control={control}
                options={[...COMPANY_TYPE_OPTIONS]}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="ip_rights"
                label="Ip Rights (Trademark / Patent / Copyright)"
                placeholder="Select"
                control={control}
                options={[...YES_NO_OPTIONS]}
              />
              <TextFieldRow
                name="investment_seeking"
                label="Investment Seeking"
                placeholder="How Much Investment Are You Seeking ? (E.G 10L, 25L, 50L1Cr, 2.5Cr ,Etc...)"
                errors={err}
                registerReturn={register("investment_seeking")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <TextFieldRow
                name="eqt_exchnage"
                label="Equity Exchange"
                placeholder="Equity Exchange Percentage / Dilution oF Equity"
                errors={err}
                registerReturn={register("eqt_exchnage")}
              />
              <TextFieldRow
                name="valuation_proposing"
                label="Valuation Proposing"
                placeholder="What Valuation Are You Proposing For Your StartUp And Based On What parameters ?"
                errors={err}
                registerReturn={register("valuation_proposing")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <TextFieldRow
                name="three_year_revenues"
                label="Three Year's Revenues"
                placeholder="What Are your Last Three Year's Revenues"
                errors={err}
                registerReturn={register("three_year_revenues")}
              />
              <TextFieldRow
                name="monthly_revenue"
                label="Monthly Revenues"
                placeholder="What Is Your Monthly Revenues ? How Much You Have Groth Month On Month In The Past Year ?"
                errors={err}
                registerReturn={register("monthly_revenue")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="past_rasied_fund"
                label="Past Fund Rasied (External - Apart From Family And Friends)"
                placeholder="Select"
                control={control}
                options={[...YES_NO_OPTIONS]}
              />
              <TextFieldRow
                name="currunt_eqt"
                label="Current Equity"
                placeholder="Current Equity Structure"
                errors={err}
                registerReturn={register("currunt_eqt")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="incubated"
                label="Incubated"
                placeholder="Select"
                control={control}
                options={[...YES_NO_OPTIONS]}
              />
              <TextFieldRow
                name="incubation_centre_name"
                label="Incubation Center Name ?"
                placeholder="Incubation Center Name ? (Na If Not Incubated)"
                errors={err}
                registerReturn={register("incubation_centre_name")}
              />
            </FormTwoCol>

            <FormTwoCol>
              <RhfSelectRow
                name="part_of_any"
                label="Are You Part Of Any Other Funding Tv Show ?"
                placeholder="Select"
                control={control}
                options={[...YES_NO_OPTIONS]}
              />
              <TextFieldRow
                name="video_link_desc"
                label="Link Of Your Video"
                placeholder="Link Of Your Video Description Of Your Business (If Any)"
                errors={err}
                registerReturn={register("video_link_desc")}
              />
            </FormTwoCol>

            <FormTwoCol className="items-start">
              <Controller
                control={control}
                name="product_image"
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={!!fieldState.error}
                    className={fieldRoot}
                  >
                    <FieldLabel htmlFor="product_image" className={labelCls}>
                      Photo Of Product / Business ( Size less then 2 MB )
                    </FieldLabel>
                    <Input
                      ref={field.ref}
                      id="product_image"
                      type="file"
                      accept="image/*"
                      aria-invalid={!!fieldState.error}
                      onBlur={field.onBlur}
                      className={fileInp}
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] ?? undefined)
                      }
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
              <Controller
                control={control}
                name="pitch_deck"
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={!!fieldState.error}
                    className={fieldRoot}
                  >
                    <FieldLabel htmlFor="pitch_deck" className={labelCls}>
                      Pitch Deck (Olny Pdf) ( Size less then 10 MB )
                    </FieldLabel>
                    <Input
                      ref={field.ref}
                      id="pitch_deck"
                      type="file"
                      accept="application/*"
                      aria-invalid={!!fieldState.error}
                      onBlur={field.onBlur}
                      className={fileInp}
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] ?? undefined)
                      }
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
            </FormTwoCol>

            <TextFieldRow
              name="refral_code"
              label="Refral Code"
              placeholder="Enter Refral Code (If Any)"
              errors={err}
              registerReturn={register("refral_code")}
            />
          </div>

          <footer className="flex flex-col gap-8 border-t border-white/10 pt-10">
            <div className="flex w-full justify-center">
              <Button
                type="submit"
                size="lg"
                className="h-11 min-w-[220px] rounded-md bg-[#f5a623] px-8 font-semibold text-[#0a192f] shadow-none hover:bg-[#eab308]"
                disabled={!isValid || isSubmitting}
              >
                <span>{isSubmitting ? "Submitting…" : "Pay & Submit"}</span>
                {!isSubmitting && (
                  <span className="ml-3 inline-flex items-center gap-2 text-[#0a192f]/80">
                    <del className="text-[#0a192f]/50">₹5000</del>
                    <span>₹1000 + GST</span>
                  </span>
                )}
              </Button>
            </div>
            <FieldDescription className="text-[13px] leading-relaxed text-white/48">
              Disclaimer : Our focus is on catering to committed and serious
              founders, and We aim to avoid applicants who are merely submitting
              the form for leisure or without genuine intent. As part of our
              commitment to fostering innovation and selecting the most
              promising startups, we have kept a nominal application fee of INR
              1000 + GST. This fee will be used to cover the expenses associated
              with the thorough screening and selection processes. It enables us
              to allocate dedicated resources to carefully evaluate each
              application, ensuring that we identify and support the most
              deserving startups in their journey towards success. This fee
              payment doesn&apos;t ensure your selection to be part of the show.
            </FieldDescription>
          </footer>
        </form>
      </div>
    </div>
  );
}

function FormTwoCol({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "grid gap-x-10 gap-y-7 sm:grid-cols-2 sm:items-start",
        className,
      )}
    >
      {children}
    </div>
  );
}

function pickError(
  name: keyof StartJourneyFormValues,
  errors: FieldErrors<StartJourneyFormValues>,
) {
  const e = errors[name];
  if (!e || typeof e.message !== "string") return undefined;
  return { message: e.message };
}

function TextFieldRow({
  name,
  label,
  placeholder,
  type = "text",
  errors,
  registerReturn,
}: {
  name: keyof StartJourneyFormValues;
  label: React.ReactNode;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  errors: FieldErrors<StartJourneyFormValues>;
  registerReturn: UseFormRegisterReturn;
}) {
  return (
    <Field data-invalid={!!errors[name]} className={fieldRoot}>
      <FieldLabel htmlFor={String(name)} className={labelCls}>
        {label}
      </FieldLabel>
      <Input
        {...registerReturn}
        id={String(name)}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!errors[name]}
        className={inp}
      />
      <FieldError errors={[pickError(name, errors)]} />
    </Field>
  );
}

function TextareaFieldRow({
  name,
  label,
  placeholder,
  rows,
  errors,
  registerReturn,
}: {
  name: keyof StartJourneyFormValues;
  label: React.ReactNode;
  placeholder?: string;
  rows?: number;
  errors: FieldErrors<StartJourneyFormValues>;
  registerReturn: UseFormRegisterReturn;
}) {
  return (
    <Field data-invalid={!!errors[name]} className={fieldRoot}>
      <FieldLabel htmlFor={String(name)} className={labelCls}>
        {label}
      </FieldLabel>
      <Textarea
        {...registerReturn}
        id={String(name)}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={!!errors[name]}
        className={txt}
      />
      <FieldError errors={[pickError(name, errors)]} />
    </Field>
  );
}

function RhfSelectRow<K extends keyof StartJourneyFormValues>({
  name,
  label,
  placeholder,
  options,
  control,
}: {
  name: K;
  label: React.ReactNode;
  placeholder: string;
  options: readonly { name: string; value: string }[];
  control: Control<StartJourneyFormValues>;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={!!fieldState.error} className={fieldRoot}>
          <FieldLabel className={labelCls}>{label}</FieldLabel>
          <Select
            value={field.value ? String(field.value) : undefined}
            onValueChange={(v: string | null) => field.onChange(v ?? "")}
          >
            <SelectTrigger
              aria-invalid={!!fieldState.error}
              className={cn(sel, "px-3")}
              onBlur={field.onBlur}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className={dropList}>
              {options.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className={dropItem}
                >
                  {opt.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
