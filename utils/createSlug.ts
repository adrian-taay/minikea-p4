import { DummyProductType } from "@/types";

export function createSlug(item: DummyProductType) {
  const slug =
    String(item.id) +
    "-" +
    item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return `/products/${slug}`;
}
