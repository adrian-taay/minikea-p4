import React from "react";
import { contactLeads, quickLinks } from "./quickLinks";
import Link from "next/link";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export default function Footer() {
  const QuickLinksWrapper = quickLinks.map(group => (
    <div
      key={group.title}
      className="flex-1 flex flex-col gap-2">
      <h1 className="font-bold text-neutral-200">{group.title}</h1>
      {group.links.map(item => (
        <Link
          key={item.title}
          href={item.href}>
          {item.title}
        </Link>
      ))}
    </div>
  ));

  const NewsletterWrapper = (
    <div className="flex flex-col gap-2 md:w-1/2">
      <h1 className="font-bold text-neutral-200">Newsletter</h1>
      <p>Join our mailing list for updates</p>
      <InputGroup className="my-4 max-w-[420px]">
        <Input
          placeholder="Email address"
          rounded="none"
          autoFocus={false}
        />
        <InputRightAddon rounded="none">
          <button className="px-2">Join</button>
        </InputRightAddon>
      </InputGroup>
      <div className="flex flex-col gap-6 sm:gap-4">
        {Object.entries(contactLeads).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col xs:flex-row gap-1">
            <span className="font-semibold xs:w-3/12 lg:w-2/12 text-neutral-200 capitalize">
              {key}:
            </span>
            <span className="flex-1">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="w-full bg-[#222222] text-neutral-500">
      <div className="w-full flex flex-col md:flex-row gap-8 p-8 pb-4 sm:p-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-1">{QuickLinksWrapper}</div>
        {NewsletterWrapper}
      </div>
      <p className="w-full text-center p-4">
        &copy; 2024 Minikea. All Rights Reserved.
      </p>
    </footer>
  );
}
