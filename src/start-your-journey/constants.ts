export const STATE_OPTIONS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Island",
  "Chandigarh",
  "Delhi",
  "Ladakh",
  "Jammu and Kashmir",
  "Puducherry",
] as const;

export const CATEGORY_OPTIONS = [
  { name: "Food & Beverages", value: "food & beverages" },
  { name: "Technology", value: "technology" },
  { name: "App Website", value: "app_website" },
  { name: "HouseWare / Home Design", value: "house_ware" },
  { name: "Health / Wealth / Nutrition", value: "helth" },
  { name: "Fitness", value: "fitness" },
  { name: "Sports", value: "sports" },
  { name: "Beauty", value: "beauty" },
  { name: "Clothing / Fashion", value: "clothing_and_fashion" },
  { name: "Toys / Games", value: "toys_and_games" },
  { name: "Entertainment", value: "entertainment" },
  { name: "Children", value: "children" },
  { name: "Pets", value: "pets" },
  { name: "Music", value: "music" },
  { name: "Other", value: "other" },
] as const;

export const CURRENT_PHASE_OPTIONS = [
  { name: "Idea", value: "idea" },
  { name: "Research And Development", value: "research_and_development" },
  { name: "Prototype", value: "prototype" },
  { name: "Crowdfunding", value: "crowdfunding" },
  { name: "First Funding Round Is Done", value: "first_round_is_done" },
  {
    name: "Operating / Revenue Generating",
    value: "operating revenue generating",
  },
] as const;

export const CURRENT_STAGE_OPTIONS = [
  { name: "Pre-Seed Stage", value: "Pre-Seed Stage" },
  { name: "Seed Stage", value: "Seed Stage" },
  { name: "Early Stage", value: "Early Stage" },
  { name: "Growth Stage", value: "Growth Stage" },
  { name: "Expansion Phase", value: "Expansion Phase" },
] as const;

export const COMPANY_TYPE_OPTIONS = [
  { name: "Proprietorship", value: "Proprietorship" },
  { name: "Partnership", value: "Partnership" },
  { name: "LLP", value: "LLP" },
  { name: "Private Limited", value: "Private Limited" },
  { name: "Other", value: "other" },
] as const;

export const YES_NO_OPTIONS = [
  { name: "Yes", value: "yes" },
  { name: "No", value: "no" },
] as const;

export const FORM_SUBMIT_URL =
  "https://api.thelionsden.co.in/form/submit" as const;

export function formatCompanyBeginForApi(isoDate: string) {
  const [y, m, d] = isoDate.split("-");
  if (!y || !m || !d) return isoDate;
  return `${d}/${m}/${y}`;
}
