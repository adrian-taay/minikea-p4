import { redirect } from "next/navigation";

export default function RedirectToProduct() {
  return redirect("/products");
}
