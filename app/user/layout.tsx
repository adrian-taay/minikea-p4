import UserAvatarCard from "@/app/user/(profile)/user-avatar-card";
import Link from "next/link";

export default function UserPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Sidebar = (
    <div className="hidden md:flex flex-col gap-8 px-16 py-8 justify-start font-bold border-r">
      <UserAvatarCard />
      <Link href={"/user"} className="hover:underline">
        My Profile
      </Link>
      <Link href={"/user/transactions"} className="hover:underline">
        My Transactions
      </Link>
      <Link href={"/user/wishlist"} className="hover:underline">
        My Wishlist
      </Link>
    </div>
  );

  return (
    <section className="w-full flex max-w-screen-2xl mx-auto">
      {Sidebar}
      <div className="w-full p-8 flex-1">{children}</div>
    </section>
  );
}
