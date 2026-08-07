export type Coach = {
  slug: string;
  name: string;
  /** Photo and bio can be filled in later */
  photo?: string;
  description?: string;
};

export const coaches: Coach[] = [
  { slug: "senthamaraikannan", name: "Senthamaraikannan" },
  { slug: "yuvarani", name: "Yuvarani" },
  { slug: "prakash", name: "Prakash" },
  { slug: "vasudevan", name: "Vasudevan" },
  { slug: "thirukumaran", name: "Thirukumaran" },
];
