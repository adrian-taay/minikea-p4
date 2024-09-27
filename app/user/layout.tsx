import UserAvatarCard from "@/components/cards/user-avatar-card";
import Link from "next/link";

export default function UserPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Sidebar = (
    <div className="max-sm:hidden flex flex-col gap-8 px-16 py-8 justify-start font-bold border-r">
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
    <section className="w-full h-full flex">
      {Sidebar}
      <div className="p-8 flex-1">{children}</div>
    </section>
  );
}
