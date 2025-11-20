import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user) redirect("/login");

  const role = user.publicMetadata.role;

  if (role !== "admin") {
    redirect("/login");
  }

  return redirect("/admin/dashboard");
}
