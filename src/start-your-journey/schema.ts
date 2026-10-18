import { z } from "zod";

const pitchDeckMime = [
  "application/pdf",
  "application/doc",
  "application/docx",
] as const;

const productImageMime = ["image/jpg", "image/jpeg", "image/png"] as const;

const optionalProductImage = z.optional(
  z
    .instanceof(File)
    .refine(
      (file) =>
        productImageMime.includes(file.type as (typeof productImageMime)[number]),
      {
        message:
          "Invalid file format. Please upload a JPG, JPEG, or PNG file.",
      },
    )
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Product Image size must be less than 2MB",
    }),
);

/** Mirrors `Register.js` Yup schema (same messages and rules where applicable). */
export const startJourneySchema = z.object({
  email: z.string().trim().min(1, "Email is required").email({
    message: "Email is required",
  }),
  full_name: z.string().trim().min(1, "Full Name Is required"),
  brand_name: z.string().trim().min(1, "Brand Name is required"),
  entity_name: z.string().trim().min(1, "Entity Name is required"),
  company_address: z.string().trim().min(1, "Company Address is required"),
  gst_no: z
    .string()
    .trim()
    .superRefine((val, ctx) => {
      if (val === "Not Applicable") return;
      if (val.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: "GST number is required",
        });
        return;
      }
      if (!/^[0-9A-Za-z]{15}$/.test(val)) {
        ctx.addIssue({
          code: "custom",
          message: "Invalid GST number format.",
        });
      }
    }),
  state: z.string().trim().min(1, "State is required"),
  phone_no: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .regex(/^\d+$/, "Phone Number is required"),
  website: z.string().trim(),
  desc: z.string().trim().min(1, "Brief Profile info is required"),
  comany_begin: z
    .string()
    .trim()
    .min(1, "select Comany Begin date is required"),
  business_dese: z
    .string()
    .trim()
    .min(1, "Business Description is required"),
  category: z.string().trim().min(1, "Category is required"),
  currunt_phase: z
    .string()
    .trim()
    .min(1, "Select Currunt Phase is required"),
  currunt_state: z
    .string()
    .trim()
    .min(1, "Select Currunt State is required"),
  company_type: z.string().trim().min(1, "Select Company Type is required"),
  ip_rights: z.string().trim().min(1, "Ip Rights is required"),
  investment_seeking: z
    .string()
    .trim()
    .min(1, "Investment Seeking is required"),
  eqt_exchnage: z.string().trim().min(1, "Equity Exchnage is required"),
  valuation_proposing: z
    .string()
    .trim()
    .min(1, "Valuation Proposing is required"),
  three_year_revenues: z
    .string()
    .trim()
    .min(1, "Three Year Revenues is required"),
  monthly_revenue: z.string().trim().min(1, "Monthly Revenue is required"),
  past_rasied_fund: z
    .string()
    .trim()
    .min(1, "Past Rasied Fund is required"),
  currunt_eqt: z.string().trim().min(1, "Currunt Equity is required"),
  incubated: z.string().trim().min(1, "Incubated is required"),
  incubation_centre_name: z.string().trim(),
  part_of_any: z.string().trim().min(1, "Part of any Tv Show is required"),
  pitch_deck: z
    .instanceof(File, { message: "Pitch Deck is required" })
    .refine(
      (file) =>
        pitchDeckMime.includes(file.type as (typeof pitchDeckMime)[number]),
      {
        message:
          "Invalid file format. Please upload a PDF, DOC, or DOCX file.",
      },
    )
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "File size must be less than or equal to 10MB",
    }),
  product_image: optionalProductImage,
  video_link_desc: z.string().trim(),
  refral_code: z
    .string()
    .max(12, "max character is 12 message or less...")
    .optional(),
});

export type StartJourneyFormValues = z.infer<typeof startJourneySchema>;
