import React from "react";
import { contactLeads, quickLinks } from "./quickLinks";
import Link from "next/link";
import { Button, Input } from "@chakra-ui/react";

export default function Footer() {
  const QuickLinksWrapper = quickLinks.map((group) => (
    <div key={group.title} className="flex flex-col gap-2">
      <h1 className="font-bold">{group.title}</h1>
      {group.links.map((item) => (
        <Link key={item.title} href={item.href}>
          {item.title}
        </Link>
      ))}
    </div>
  ));

  const NewsletterWrapper = (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">Newsletter</h1>
      <p>Join our mailing list for updates</p>
      <div className="flex gap-2">
        <Input placeholder="Email address" />
        <Button>Join</Button>
      </div>
      <div className="flex flex-col gap-1">
        {Object.entries(contactLeads).map(([key, value]) => (
          <div key={key} className="flex gap-2">
            <span className="font-semibold">{key.toUpperCase()}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="w-full">
      <div className="w-full flex flex-col md:flex-row gap-4">
        {QuickLinksWrapper}
        {NewsletterWrapper}
      </div>
      <p className="w-full text-center">
        &copy; 2024 Minikea. All Rights Reserved.
      </p>
    </footer>
  );
}
